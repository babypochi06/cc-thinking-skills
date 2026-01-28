# Thinking Skills Quality Framework

## Overview

This document defines the quality standards and improvement processes for thinking skills in this collection. Each skill should meet these criteria to maximize its effectiveness when used in Claude Code.

## Quality Dimensions

### 1. Structure Quality

**Required Elements:**
- [ ] YAML frontmatter with `name` and `description`
- [ ] H1 title matching the skill name
- [ ] Overview section explaining the model
- [ ] Core Principle callout
- [ ] "When to Use" section with scenarios
- [ ] Decision flow diagram
- [ ] Step-by-step process
- [ ] Practical examples with code blocks
- [ ] Template section
- [ ] Verification checklist
- [ ] Key questions section
- [ ] Attribution/wisdom quote

**Format Standards:**
- Markdown code blocks for examples and templates
- Tables for comparisons and matrices
- Consistent header hierarchy (H2 for main sections, H3 for subsections)
- Decision flows using ASCII art or markdown

### 2. Content Quality

**Clarity Criteria:**
- [ ] Core concept explained in 2-3 sentences
- [ ] Jargon defined or avoided
- [ ] Examples are realistic and relatable
- [ ] Steps are actionable (start with verbs)

**Completeness Criteria:**
- [ ] Covers when to use AND when not to use
- [ ] Addresses common mistakes/anti-patterns
- [ ] Provides multiple examples (minimum 2)
- [ ] Includes both simple and complex applications

**Accuracy Criteria:**
- [ ] Model correctly represents source material
- [ ] Attribution to original thinkers
- [ ] No misrepresentation of concepts

### 3. Pedagogical Quality

**Learning Progression:**
- [ ] Starts with why (motivation)
- [ ] Builds from simple to complex
- [ ] Provides scaffolding (templates, checklists)
- [ ] Enables self-verification

**Application Support:**
- [ ] Clear decision criteria for when to apply
- [ ] Step-by-step process that can be followed
- [ ] Fill-in-the-blank templates
- [ ] Verification checklist to confirm proper use

### 4. Integration Quality

**Claude Code Optimization:**
- [ ] Description is concise (<200 chars) for tool hints
- [ ] First paragraph is self-contained summary
- [ ] Works well when partially quoted
- [ ] Key information front-loaded

## Quality Scoring Rubric

### Score: 5 (Excellent)
- All required elements present
- Multiple high-quality examples
- Templates are immediately usable
- Clear decision guidance
- Proper attribution
- No ambiguity in process

### Score: 4 (Good)
- All required elements present
- At least 2 examples
- Usable template
- Clear when-to-use guidance
- Minor clarity improvements possible

### Score: 3 (Adequate)
- Most required elements present
- At least 1 example
- Template present but needs work
- When-to-use needs more specificity
- Some sections thin

### Score: 2 (Needs Work)
- Missing required elements
- Examples weak or absent
- No usable template
- Unclear when to apply
- Process hard to follow

### Score: 1 (Poor)
- Missing multiple required elements
- No practical examples
- No template
- Confusing or incomplete process
- Would not help a user

## Improvement Process

### Phase 1: Structural Validation
1. Run validation script to check required elements
2. Add missing sections
3. Fix formatting issues

### Phase 2: Content Enhancement
1. Review against source material
2. Add missing examples
3. Improve templates
4. Add anti-patterns

### Phase 3: Pedagogical Review
1. Test with fresh eyes (does it make sense?)
2. Follow the process yourself
3. Fill in the template
4. Identify confusion points

### Phase 4: Integration Testing
1. Test in Claude Code
2. Verify description works in tool selection
3. Test partial quotation scenarios
4. Optimize for AI consumption

## Best Practices from Research

### From Cognitive Science
- **Worked Examples**: Show complete worked examples, not just abstract steps
- **Self-Explanation**: Include prompts for the user to explain back
- **Dual Coding**: Use both text and diagrams/tables
- **Spacing**: Break content into digestible chunks
- **Testing Effect**: Checklists that require active engagement

### From Technical Writing
- **Inverted Pyramid**: Most important information first
- **Chunking**: 3-7 items per list/section
- **Parallelism**: Consistent structure across similar sections
- **Active Voice**: "Identify the constraint" not "The constraint should be identified"
- **Specificity**: "3 examples" not "several examples"

### From UX Design
- **Progressive Disclosure**: Basic usage first, advanced later
- **Error Prevention**: Warn about common mistakes upfront
- **Recognition over Recall**: Templates > blank pages
- **Flexibility**: Support different skill levels

### From AI/LLM Optimization
- **Front-Loading**: Key info in first 200 chars for description
- **Self-Contained Sections**: Each section should work if quoted alone
- **Explicit Structure**: Clear markers for AI to parse
- **Concrete over Abstract**: Examples > theory for AI application
