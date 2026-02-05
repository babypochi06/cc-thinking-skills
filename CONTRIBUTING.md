# Contributing to Claude Code Thinking Skills

Thank you for your interest in contributing to this collection of thinking skills for Claude Code!

## How to Contribute

### Adding New Thinking Skills

We welcome new mental models and thinking frameworks that would benefit Claude Code users. Here's how to add one:

#### 1. Choose a Valid Mental Model

Good candidates for new skills:
- Established frameworks from cognitive science, systems thinking, or decision theory
- Battle-tested methodologies used in engineering, business, or science
- Frameworks with clear, actionable steps

Avoid:
- Unproven or pseudoscientific frameworks
- Highly specialized domain knowledge that's too narrow
- Frameworks that duplicate existing skills

#### 2. Create the Skill Structure

```bash
mkdir skills/thinking-{your-skill-name}
touch skills/thinking-{your-skill-name}/SKILL.md
```

#### 3. Write the SKILL.md File

Follow this template:

```markdown
---
name: thinking-your-skill-name
description: Brief description (1-2 sentences) that helps Claude Code understand when to invoke this skill.
---

# Skill Name

## Overview
Explain the framework, its origins, and core principle.

**Core Principle:** One-sentence summary of the key insight.

## When to Use
- Bullet points of scenarios
- When this is applicable
- Signs this skill would help

Decision flow:
```
Visual decision tree showing when to apply
```

## The Process

### Step 1: First Step
Clear instructions with examples.

### Step 2: Second Step
Continue with actionable guidance.

## Application Examples

### Example 1: [Context]
Show how to apply in a real scenario.

## Common Pitfalls
What to avoid when using this framework.

## Verification Checklist
- [ ] Checklist items
- [ ] For users to verify
- [ ] They've applied it correctly

## Key Questions
- Questions to ask yourself
- When using this framework

## Attribution/Quote
Quote from the framework's creator or key thinker.
```

### Improving Existing Skills

1. Fork the repository
2. Make your improvements
3. Submit a pull request with clear description of changes

#### What to Improve

- **Clarity**: Make explanations more understandable
- **Examples**: Add software engineering examples
- **Completeness**: Fill gaps in the process
- **Accuracy**: Correct misrepresentations of the framework

### Reporting Issues

If you find problems with existing skills:

1. Open an issue describing the problem
2. Reference the specific skill and section
3. Suggest a fix if you have one

## Style Guidelines

### Writing Style

- **Active voice**: "Apply this when..." not "This should be applied when..."
- **Second person**: "You should..." not "One should..."
- **Concrete examples**: Always include software engineering examples
- **No fluff**: Every sentence should add value

### Formatting

- Use consistent heading hierarchy (##, ###, ####)
- Tables for comparisons
- Code blocks for examples and templates
- Bullet points for lists
- Decision flow diagrams using ASCII art

### YAML Frontmatter

The `description` field is critical - it helps Claude Code understand when to invoke the skill:
- Keep under 200 characters
- Focus on the use case, not the theory
- Include keywords that users might mention

## Pull Request Process

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b add-thinking-skillname`
3. **Commit** with clear messages: `git commit -m "Add thinking-skillname: [brief description]"`
4. **Push** to your fork: `git push origin add-thinking-skillname`
5. **Open** a Pull Request with:
   - Clear description of the skill/change
   - Why it's valuable for Claude Code users
   - Any references to source material

## Code of Conduct

- Be respectful and constructive
- Attribute sources properly
- Focus on making the skills better for everyone

## Questions?

Open an issue with the "question" label if you're unsure about anything.

---

Thank you for helping make Claude Code smarter!
