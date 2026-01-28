#!/usr/bin/env node

/**
 * AI-Assisted Skill Enhancement Prompt Generator
 *
 * Generates prompts for Claude to improve specific skills based on quality analysis.
 * Run with: node scripts/generate-improvement-prompt.js <skill-name>
 *
 * The output can be used directly with Claude Code to enhance skills.
 */

const fs = require('fs');
const path = require('path');

const SKILLS_DIR = path.join(__dirname, '..', '.claude', 'skills');

// Quality criteria for the prompt
const QUALITY_CRITERIA = `
## Quality Criteria for Thinking Skills

### Required Structure
1. YAML frontmatter with name (matching directory) and description (<200 chars)
2. H1 title matching the skill name
3. Overview section with Core Principle callout
4. "When to Use" section with decision flow diagram
5. Step-by-step process with numbered steps
6. At least 2 practical examples in markdown code blocks
7. Reusable template section
8. Verification checklist with [ ] items
9. Key Questions section with 5-6 questions
10. Attribution/Wisdom quote from original thinker

### Content Quality
- Core concept explained in 2-3 sentences
- Examples are realistic engineering/product scenarios
- Steps start with action verbs
- Includes anti-patterns or "when not to use"
- Tables for comparisons and matrices
- Decision flows using ASCII art

### Pedagogical Quality
- Starts with WHY (motivation)
- Builds simple to complex
- Provides fill-in-the-blank templates
- Enables self-verification via checklist
`;

function analyzeAndGeneratePrompt(skillPath) {
  const content = fs.readFileSync(skillPath, 'utf8');
  const skillName = path.basename(path.dirname(skillPath));

  // Identify issues
  const issues = [];

  if (!/^## Overview/m.test(content)) issues.push('Missing Overview section');
  if (!/\*\*Core Principle:\*\*/m.test(content)) issues.push('Missing Core Principle callout');
  if (!/^## When to Use/m.test(content)) issues.push('Missing "When to Use" section');
  if (!(/```[\s\S]*?→[\s\S]*?```/m.test(content))) issues.push('Missing decision flow diagram');
  if (!/^## .*Template/m.test(content)) issues.push('Missing Template section');
  if (!/^## Verification Checklist/m.test(content)) issues.push('Missing Verification Checklist');
  if (!/^## Key Questions/m.test(content)) issues.push('Missing Key Questions section');

  const examples = (content.match(/Example[s]?:/gi) || []).length +
                   (content.match(/```markdown[\s\S]*?##/g) || []).length;
  if (examples < 2) issues.push(`Only ${examples} example(s) - need at least 2`);

  const tables = (content.match(/\|.*\|.*\|/g) || []).length;
  if (tables < 3) issues.push(`Only ${tables} table rows - add comparison tables`);

  const checks = (content.match(/- \[ \]/g) || []).length;
  if (checks < 3) issues.push(`Only ${checks} checklist items - add more verification steps`);

  if (!/anti-pattern|failure mode|common mistake|when not to|don't use/i.test(content)) {
    issues.push('Missing anti-patterns or failure modes section');
  }

  const descMatch = content.match(/description:\s*(.+)/);
  if (descMatch && descMatch[1].length > 200) {
    issues.push(`Description too long (${descMatch[1].length} chars) - shorten to <200`);
  }

  // Generate prompt
  const prompt = `# Task: Enhance the ${skillName} Thinking Skill

## Current Skill Content
\`\`\`markdown
${content}
\`\`\`

## Issues Identified
${issues.length > 0 ? issues.map(i => `- ${i}`).join('\n') : '- No major issues found, but review for quality improvements'}

${QUALITY_CRITERIA}

## Instructions

Please enhance this skill by:

1. **Fixing all identified issues** listed above
2. **Maintaining the existing good content** - don't remove what works
3. **Adding practical software engineering examples** - debugging, architecture, product decisions
4. **Ensuring the template is immediately usable** - user can copy and fill in
5. **Making the verification checklist comprehensive** - should catch common mistakes
6. **Adding memorable quotes** from the original thinker if not present

Output the complete enhanced SKILL.md file, ready to save.

Keep the same overall structure and voice. Focus on making it MORE practical and actionable for software engineers using Claude Code.
`;

  return {
    skillName,
    issues,
    prompt
  };
}

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('Usage: node scripts/generate-improvement-prompt.js <skill-name>');
    console.log('       node scripts/generate-improvement-prompt.js --all');
    console.log('\nExamples:');
    console.log('  node scripts/generate-improvement-prompt.js thinking-first-principles');
    console.log('  node scripts/generate-improvement-prompt.js first-principles');
    console.log('  node scripts/generate-improvement-prompt.js --all > prompts.md');
    process.exit(0);
  }

  if (args[0] === '--all') {
    // Generate prompts for all skills that need work
    const skillDirs = fs.readdirSync(SKILLS_DIR)
      .filter(d => d.startsWith('thinking-'))
      .map(d => path.join(SKILLS_DIR, d, 'SKILL.md'))
      .filter(p => fs.existsSync(p));

    for (const skillPath of skillDirs) {
      const result = analyzeAndGeneratePrompt(skillPath);
      if (result.issues.length > 0) {
        console.log(`\n${'='.repeat(80)}\n`);
        console.log(result.prompt);
      }
    }
  } else {
    let skillName = args[0];
    if (!skillName.startsWith('thinking-')) {
      skillName = 'thinking-' + skillName;
    }

    const skillPath = path.join(SKILLS_DIR, skillName, 'SKILL.md');

    if (!fs.existsSync(skillPath)) {
      console.error(`Skill not found: ${skillPath}`);
      console.error('\nAvailable skills:');
      fs.readdirSync(SKILLS_DIR)
        .filter(d => d.startsWith('thinking-'))
        .forEach(d => console.error(`  - ${d}`));
      process.exit(1);
    }

    const result = analyzeAndGeneratePrompt(skillPath);

    console.log('# Improvement Prompt for', result.skillName);
    console.log('\n## Issues Found:', result.issues.length);
    result.issues.forEach(i => console.log(`- ${i}`));
    console.log('\n## Prompt for Claude:\n');
    console.log(result.prompt);
  }
}

main();
