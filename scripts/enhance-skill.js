#!/usr/bin/env node

/**
 * Thinking Skills Enhancement Generator
 *
 * Analyzes a skill and generates specific enhancement suggestions.
 * Run with: node scripts/enhance-skill.js <skill-name>
 *
 * Example: node scripts/enhance-skill.js thinking-first-principles
 */

const fs = require('fs');
const path = require('path');

const SKILLS_DIR = path.join(__dirname, '..', '.claude', 'skills');

// Enhancement patterns with templates
const ENHANCEMENTS = {
  missingOverview: {
    detect: (content) => !/^## Overview/m.test(content),
    suggestion: `Add an Overview section:

## Overview

[1-2 sentence explanation of the mental model]
[1 sentence on its origin or key thinker]
[1 sentence on its core value proposition]

**Core Principle:** [Single powerful statement]
`
  },

  missingWhenToUse: {
    detect: (content) => !/^## When to Use/m.test(content),
    suggestion: `Add a "When to Use" section:

## When to Use

- [Scenario 1]
- [Scenario 2]
- [Scenario 3]
- [Scenario 4]

Decision flow:

\`\`\`
Facing [problem type]?
  → [Condition 1]? → yes → [Action]
  → [Condition 2]? → no → [Alternative]
  → [Condition 3]? → yes → USE THIS MODEL
\`\`\`
`
  },

  missingVerificationChecklist: {
    detect: (content) => !/^## Verification Checklist/m.test(content),
    suggestion: `Add a Verification Checklist:

## Verification Checklist

- [ ] [Step 1 completed correctly]
- [ ] [Step 2 completed correctly]
- [ ] [Common mistake avoided]
- [ ] [Quality criterion met]
- [ ] [Integration point checked]
- [ ] [Output validates correctly]
`
  },

  missingKeyQuestions: {
    detect: (content) => !/^## Key Questions/m.test(content),
    suggestion: `Add Key Questions:

## Key Questions

- "[Question that triggers this model]?"
- "[Question for Step 1]?"
- "[Question for validation]?"
- "[Question to check completion]?"
- "[Question that reveals insight]?"
- "[Meta-question about the process]?"
`
  },

  missingTemplate: {
    detect: (content) => !/^## .*Template/m.test(content),
    suggestion: `Add a Template section:

## [Model Name] Template

\`\`\`markdown
# [Model] Analysis: [Topic]

## Context
[What's being analyzed]

## Step 1: [First Step Name]
[Guidance for step 1]

## Step 2: [Second Step Name]
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| | | |

## Step 3: [Third Step Name]
[Guidance for step 3]

## Conclusion
[Summary guidance]

## Next Steps
[What to do after]
\`\`\`
`
  },

  missingAntiPatterns: {
    detect: (content) => !/anti-pattern|failure mode|common mistake|when not to|don't use/i.test(content),
    suggestion: `Add Anti-patterns or Failure Modes:

## Common Mistakes

### Mistake 1: [Name]
**What happens:** [Description]
**Why it's wrong:** [Explanation]
**Better approach:** [Correction]

### Mistake 2: [Name]
**What happens:** [Description]
**Why it's wrong:** [Explanation]
**Better approach:** [Correction]

### When NOT to Use This Model
- [Situation where model doesn't apply]
- [Context where different model is better]
- [Edge case to avoid]
`
  },

  fewExamples: {
    detect: (content) => {
      const examples = (content.match(/Example[s]?:/gi) || []).length +
                       (content.match(/```markdown[\s\S]*?##/g) || []).length;
      return examples < 2;
    },
    suggestion: `Add more practical examples:

### Example 1: [Domain/Context]

\`\`\`markdown
## [Model] Applied to [Specific Situation]

Context: [Brief situation description]

Step 1 Result:
[Concrete output]

Step 2 Result:
[Concrete output]

Conclusion:
[What the model revealed]
\`\`\`

### Example 2: [Different Domain/Context]

\`\`\`markdown
## [Model] Applied to [Different Situation]

Context: [Brief situation description]

[Application of model]

Insight: [What this example uniquely shows]
\`\`\`
`
  },

  fewTables: {
    detect: (content) => (content.match(/\|.*\|.*\|/g) || []).length < 3,
    suggestion: `Add comparison tables:

### [Comparison Purpose]

| Aspect | Option A | Option B | Option C |
|--------|----------|----------|----------|
| [Criterion 1] | | | |
| [Criterion 2] | | | |
| [Criterion 3] | | | |

### [Another Comparison]

| Situation | Approach | Why |
|-----------|----------|-----|
| [Case 1] | [What to do] | [Rationale] |
| [Case 2] | [What to do] | [Rationale] |
| [Case 3] | [What to do] | [Rationale] |
`
  },

  longDescription: {
    detect: (content) => {
      const match = content.match(/description:\s*(.+)/);
      return match && match[1].length > 200;
    },
    suggestion: `Shorten the YAML description (current > 200 chars):

Best practices for descriptions:
- Keep under 200 characters
- Start with an action verb
- Focus on the core value
- Include key use cases

Example formats:
- "[Action] using [method]. Use for [use case 1], [use case 2]."
- "[One-line definition]. Best for [context]."
`
  },

  missingWisdom: {
    detect: (content) => !/Wisdom|'s (Wisdom|Quote)|"[^"]{20,}"/m.test(content),
    suggestion: `Add attribution and wisdom quote:

## [Thinker]'s Wisdom

"[Memorable quote from the originator of this model]"

"[Second quote if applicable]"

[1-2 sentence reflection connecting quote to practical application]
`
  },

  missingDecisionFlow: {
    detect: (content) => !(/```[\s\S]*?→[\s\S]*?```/m.test(content)),
    suggestion: `Add a decision flow diagram:

Decision flow:

\`\`\`
[Starting question]?
  → [Branch 1 condition]? → yes → [Action/Model to use]
  → [Branch 2 condition]? → no → [Alternative action]
  → [Branch 3 condition]? → yes → USE THIS MODEL
  → Otherwise → [Default/fallback]
\`\`\`

Or for process flows:

\`\`\`
[Step 1] → [Step 2] → [Decision Point]
                          ↓
                    [If condition]
                          ↓
              [Step 3a] or [Step 3b]
                          ↓
                      [Result]
\`\`\`
`
  }
};

function analyzeSkill(skillPath) {
  const content = fs.readFileSync(skillPath, 'utf8');
  const skillName = path.basename(path.dirname(skillPath));

  const results = {
    name: skillName,
    enhancements: []
  };

  for (const [key, enhancement] of Object.entries(ENHANCEMENTS)) {
    if (enhancement.detect(content)) {
      results.enhancements.push({
        issue: key,
        suggestion: enhancement.suggestion
      });
    }
  }

  return results;
}

function generateReport(analysis) {
  const BOLD = '\x1b[1m';
  const GREEN = '\x1b[32m';
  const YELLOW = '\x1b[33m';
  const CYAN = '\x1b[36m';
  const RESET = '\x1b[0m';

  console.log(`\n${BOLD}=== Enhancement Report: ${analysis.name} ===${RESET}\n`);

  if (analysis.enhancements.length === 0) {
    console.log(`${GREEN}✓ This skill meets all quality criteria!${RESET}\n`);
    return;
  }

  console.log(`Found ${YELLOW}${analysis.enhancements.length}${RESET} enhancement opportunities:\n`);

  for (let i = 0; i < analysis.enhancements.length; i++) {
    const enh = analysis.enhancements[i];
    console.log(`${BOLD}${i + 1}. ${formatIssueName(enh.issue)}${RESET}`);
    console.log(`${CYAN}${enh.suggestion}${RESET}`);
    console.log('---\n');
  }
}

function formatIssueName(issue) {
  return issue
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .trim();
}

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    // Analyze all skills
    const skillDirs = fs.readdirSync(SKILLS_DIR)
      .filter(d => d.startsWith('thinking-'))
      .map(d => path.join(SKILLS_DIR, d, 'SKILL.md'))
      .filter(p => fs.existsSync(p));

    console.log(`Analyzing ${skillDirs.length} skills for enhancement opportunities...\n`);

    const allResults = skillDirs.map(analyzeSkill);

    // Summary
    const needsWork = allResults.filter(r => r.enhancements.length > 0);

    console.log(`${needsWork.length}/${allResults.length} skills have enhancement opportunities:\n`);

    for (const result of needsWork.sort((a, b) => b.enhancements.length - a.enhancements.length)) {
      console.log(`  ${result.name}: ${result.enhancements.length} suggestions`);
      for (const enh of result.enhancements) {
        console.log(`    - ${formatIssueName(enh.issue)}`);
      }
    }

    console.log(`\nRun with skill name for detailed suggestions:`);
    console.log(`  node scripts/enhance-skill.js thinking-first-principles\n`);

  } else {
    // Analyze specific skill
    let skillName = args[0];
    if (!skillName.startsWith('thinking-')) {
      skillName = 'thinking-' + skillName;
    }

    const skillPath = path.join(SKILLS_DIR, skillName, 'SKILL.md');

    if (!fs.existsSync(skillPath)) {
      console.error(`Skill not found: ${skillPath}`);
      process.exit(1);
    }

    const analysis = analyzeSkill(skillPath);
    generateReport(analysis);
  }
}

main();
