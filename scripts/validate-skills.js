#!/usr/bin/env node

/**
 * Thinking Skills Quality Validator
 *
 * Validates each skill against the quality framework criteria.
 * Run with: node scripts/validate-skills.js
 */

const fs = require('fs');
const path = require('path');

const SKILLS_DIR = path.join(__dirname, '..', 'skills');

// Required sections and their markers
const REQUIRED_SECTIONS = [
  { name: 'YAML Frontmatter', pattern: /^---\n[\s\S]*?name:[\s\S]*?description:[\s\S]*?---/m },
  { name: 'Overview', pattern: /^## Overview/m },
  { name: 'Core Principle', pattern: /\*\*Core Principle:\*\*/m },
  { name: 'When to Use', pattern: /^## When to Use/m },
  { name: 'Decision Flow', pattern: /```[\s\S]*?→[\s\S]*?```/m },
  { name: 'Process/Steps', pattern: /^### Step \d|^## The .* Process|^## .*Process$/m },
  { name: 'Examples', pattern: /^## .*Example|Example:|```markdown[\s\S]*?##/m },
  { name: 'Template', pattern: /^## .*Template|Template:/m },
  { name: 'Verification Checklist', pattern: /^## Verification Checklist/m },
  { name: 'Key Questions', pattern: /^## Key Questions/m },
  { name: 'Wisdom/Attribution', pattern: /Wisdom|".*"/m }
];

// Quality metrics
const QUALITY_CHECKS = [
  {
    name: 'Description Length',
    check: (content) => {
      const match = content.match(/description:\s*(.+)/);
      if (!match) return { pass: false, detail: 'No description found' };
      const len = match[1].length;
      return {
        pass: len <= 200,
        detail: `${len} chars (max 200)`
      };
    }
  },
  {
    name: 'Has Multiple Examples',
    check: (content) => {
      const examples = (content.match(/Example[s]?:/gi) || []).length +
                       (content.match(/```markdown[\s\S]*?##/g) || []).length;
      return {
        pass: examples >= 2,
        detail: `Found ${examples} example(s)`
      };
    }
  },
  {
    name: 'Has Tables',
    check: (content) => {
      const tables = (content.match(/\|.*\|.*\|/g) || []).length;
      return {
        pass: tables >= 3,
        detail: `Found ${tables} table row(s)`
      };
    }
  },
  {
    name: 'Has Checklists',
    check: (content) => {
      const checks = (content.match(/- \[ \]/g) || []).length;
      return {
        pass: checks >= 3,
        detail: `Found ${checks} checklist item(s)`
      };
    }
  },
  {
    name: 'Has Code Blocks',
    check: (content) => {
      const blocks = (content.match(/```/g) || []).length / 2;
      return {
        pass: blocks >= 3,
        detail: `Found ${Math.floor(blocks)} code block(s)`
      };
    }
  },
  {
    name: 'Word Count (500-3000)',
    check: (content) => {
      const words = content.split(/\s+/).length;
      return {
        pass: words >= 500 && words <= 3000,
        detail: `${words} words`
      };
    }
  },
  {
    name: 'Has Anti-patterns/Failure Modes',
    check: (content) => {
      const hasAntiPatterns = /anti-pattern|failure mode|common mistake|when not to|don't use/i.test(content);
      return {
        pass: hasAntiPatterns,
        detail: hasAntiPatterns ? 'Found warnings' : 'No anti-patterns documented'
      };
    }
  }
];

function validateSkill(skillPath) {
  const content = fs.readFileSync(skillPath, 'utf8');
  const skillName = path.basename(path.dirname(skillPath));

  const results = {
    name: skillName,
    path: skillPath,
    sections: [],
    quality: [],
    score: 0,
    maxScore: 0
  };

  // Check required sections
  for (const section of REQUIRED_SECTIONS) {
    const found = section.pattern.test(content);
    results.sections.push({
      name: section.name,
      found
    });
    results.maxScore += 1;
    if (found) results.score += 1;
  }

  // Check quality metrics
  for (const check of QUALITY_CHECKS) {
    const result = check.check(content);
    results.quality.push({
      name: check.name,
      ...result
    });
    results.maxScore += 1;
    if (result.pass) results.score += 1;
  }

  return results;
}

function printResults(results) {
  const GREEN = '\x1b[32m';
  const RED = '\x1b[31m';
  const YELLOW = '\x1b[33m';
  const RESET = '\x1b[0m';
  const BOLD = '\x1b[1m';

  console.log(`\n${BOLD}=== Thinking Skills Quality Report ===${RESET}\n`);

  let totalScore = 0;
  let totalMax = 0;

  for (const skill of results) {
    const percentage = Math.round((skill.score / skill.maxScore) * 100);
    const color = percentage >= 80 ? GREEN : percentage >= 60 ? YELLOW : RED;

    console.log(`${BOLD}${skill.name}${RESET}: ${color}${skill.score}/${skill.maxScore} (${percentage}%)${RESET}`);

    // Show missing sections
    const missingSections = skill.sections.filter(s => !s.found);
    if (missingSections.length > 0) {
      console.log(`  ${RED}Missing sections:${RESET}`);
      for (const section of missingSections) {
        console.log(`    - ${section.name}`);
      }
    }

    // Show failed quality checks
    const failedChecks = skill.quality.filter(q => !q.pass);
    if (failedChecks.length > 0) {
      console.log(`  ${YELLOW}Quality improvements needed:${RESET}`);
      for (const check of failedChecks) {
        console.log(`    - ${check.name}: ${check.detail}`);
      }
    }

    totalScore += skill.score;
    totalMax += skill.maxScore;
    console.log('');
  }

  // Summary
  const overallPercentage = Math.round((totalScore / totalMax) * 100);
  console.log(`${BOLD}=== Summary ===${RESET}`);
  console.log(`Total Skills: ${results.length}`);
  console.log(`Overall Score: ${totalScore}/${totalMax} (${overallPercentage}%)`);

  // Skills needing attention
  const needsWork = results.filter(r => (r.score / r.maxScore) < 0.7);
  if (needsWork.length > 0) {
    console.log(`\n${YELLOW}Skills needing attention (< 70%):${RESET}`);
    for (const skill of needsWork) {
      const pct = Math.round((skill.score / skill.maxScore) * 100);
      console.log(`  - ${skill.name} (${pct}%)`);
    }
  }

  // Output JSON for further processing
  const jsonPath = path.join(__dirname, 'quality-report.json');
  fs.writeFileSync(jsonPath, JSON.stringify(results, null, 2));
  console.log(`\nDetailed report saved to: ${jsonPath}`);
}

function main() {
  // Find all skills
  const skillDirs = fs.readdirSync(SKILLS_DIR)
    .filter(d => d.startsWith('thinking-'))
    .map(d => path.join(SKILLS_DIR, d, 'SKILL.md'))
    .filter(p => fs.existsSync(p));

  console.log(`Found ${skillDirs.length} thinking skills to validate...`);

  const results = skillDirs.map(validateSkill);

  // Sort by score (lowest first to highlight what needs work)
  results.sort((a, b) => (a.score / a.maxScore) - (b.score / b.maxScore));

  printResults(results);
}

main();
