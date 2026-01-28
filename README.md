# Claude Code Thinking Skills

> **18 Mental Models and Frameworks for Critical Thinking in Claude Code**

A comprehensive collection of thinking skills for [Claude Code](https://claude.ai/claude-code) that enhance AI-assisted problem solving, decision making, and strategic analysis. These skills provide structured frameworks based on proven mental models from leaders in systems thinking, cognitive science, and strategic analysis.

[![Claude Code Skills](https://img.shields.io/badge/Claude_Code-Skills-7C3AED?style=flat&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMiA3TDEyIDEyTDIyIDdMMTIgMloiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNMiAxN0wxMiAyMkwyMiAxNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik0yIDEyTDEyIDE3TDIyIDEyIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+)](https://github.com/tjboudreaux/cc-thinking-skills)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Skills Count](https://img.shields.io/badge/Skills-18-blue)](https://github.com/tjboudreaux/cc-thinking-skills)

## Features

- **18 Thinking Frameworks** - Comprehensive mental models for better decision-making
- **Battle-Tested** - Based on proven frameworks from cognitive science and systems thinking
- **Claude Code Native** - Designed specifically for Claude Code's skill system
- **Zero Configuration** - Just install and invoke with skill names

## Quick Start

### Installation

Clone this repository and copy the skills to your Claude Code configuration:

```bash
# Clone the repository
git clone https://github.com/tjboudreaux/cc-thinking-skills.git

# Copy skills to your global Claude Code config
cp -r cc-thinking-skills/.claude/skills/* ~/.claude/skills/

# Or copy to a specific project
cp -r cc-thinking-skills/.claude/skills/* /path/to/your/project/.claude/skills/
```

### Usage

Once installed, invoke any skill by name in Claude Code:

```
> Use first-principles thinking to analyze this architecture decision
> Apply the pre-mortem framework to this project plan
> Help me use Bayesian reasoning to evaluate this hypothesis
```

## Available Skills

### Decision Making & Analysis

| Skill | Description | Best For |
|-------|-------------|----------|
| `thinking-first-principles` | Break problems into fundamental truths | Innovation, challenging assumptions |
| `thinking-second-order` | Think beyond immediate consequences | Strategic decisions, policy changes |
| `thinking-inversion` | Approach problems by identifying paths to failure | Risk identification, planning |
| `thinking-pre-mortem` | Imagine failure and work backward | Project kickoffs, risk assessment |
| `thinking-kepner-tregoe` | Systematic rational process for complex analysis | High-stakes decisions, root cause analysis |

### Cognitive & Behavioral

| Skill | Description | Best For |
|-------|-------------|----------|
| `thinking-bayesian` | Update beliefs based on evidence | Probability estimation, uncertainty |
| `thinking-debiasing` | Identify and counteract cognitive biases | Major decisions, high stakes |
| `thinking-dual-process` | Recognize when to trust intuition vs. analysis | Speed vs. accuracy tradeoffs |
| `thinking-bounded-rationality` | Make good-enough decisions under constraints | Time pressure, satisficing |
| `thinking-socratic` | Systematic questioning framework | Requirements, debugging, coaching |

### Systems & Strategy

| Skill | Description | Best For |
|-------|-------------|----------|
| `thinking-systems` | Analyze interconnected systems | Complex debugging, architecture |
| `thinking-feedback-loops` | Identify reinforcing and balancing loops | Growth design, organizational dynamics |
| `thinking-archetypes` | Recognize recurring system patterns | Organizational problems, recurring issues |
| `thinking-ooda` | Rapid decision-making for dynamic situations | Incident response, competitive scenarios |

### Problem Solving & Innovation

| Skill | Description | Best For |
|-------|-------------|----------|
| `thinking-occams-razor` | Prefer simpler explanations | Debugging, architecture decisions |
| `thinking-map-territory` | Recognize limits of mental models | Expectation mismatches, abstractions |
| `thinking-circle-of-competence` | Know the boundaries of expertise | Delegation, learning decisions |
| `thinking-triz` | Resolve technical contradictions | Engineering design, innovation |

## Detailed Skill Descriptions

### First Principles Thinking
Strip away assumptions to reveal fundamental truths, then rebuild solutions from basics. Championed by Elon Musk and rooted in Aristotle's philosophy.

**When to use:**
- Conventional approaches have failed
- You're told something is "impossible"
- Need innovation, not incremental improvement

### Bayesian Reasoning
Update beliefs systematically based on new evidence. Provides a framework for thinking about probability and uncertainty.

**When to use:**
- Estimating probabilities or likelihoods
- Interpreting test results or metrics
- Making decisions with incomplete information

### Systems Thinking
View problems as part of interconnected wholes with feedback loops and emergent properties. Essential for debugging complex distributed systems.

**When to use:**
- Debugging spans multiple components
- Fix in one place breaks another
- Behavior seems emergent or unexpected

### OODA Loop
Rapid decision-making framework (Observe, Orient, Decide, Act) for dynamic situations. Speed through the loop creates competitive advantage.

**When to use:**
- Incident response and outages
- Time-sensitive decisions
- Rapidly changing requirements

### Pre-Mortem Analysis
Imagine a project has failed and work backward to identify why. Improves risk identification by approximately 30%.

**When to use:**
- Project kickoffs
- Before major technical decisions
- When team seems overconfident

### Cognitive Debiasing
Systematic checklist to identify cognitive biases. Based on Kahneman, Lovallo, and Sibony's research.

**When to use:**
- Before making major decisions
- When stakes are high
- When you feel very confident

### TRIZ Innovation
Systematic innovation methodology from analyzing 200,000+ patents. Resolve contradictions rather than accepting trade-offs.

**When to use:**
- Facing "impossible" trade-offs
- Need breakthrough innovation
- Stuck between conflicting requirements

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Adding New Skills

1. Create a new directory under `.claude/skills/` with the format `thinking-{name}`
2. Add a `SKILL.md` file with YAML frontmatter:
```yaml
---
name: thinking-your-skill-name
description: Brief description (used by Claude Code for skill matching)
---
```
3. Write comprehensive documentation with:
   - Overview and core principle
   - When to use decision flow
   - Step-by-step process
   - Examples and templates
   - Verification checklist
   - Key questions

## Keywords

`claude-code` `claude` `anthropic` `ai` `skills` `mental-models` `critical-thinking` `decision-making` `problem-solving` `systems-thinking` `first-principles` `bayesian-reasoning` `cognitive-bias` `strategic-thinking` `frameworks` `triz` `ooda` `pre-mortem` `socratic-method`

## Related Resources

- [Claude Code Documentation](https://docs.anthropic.com/claude-code)
- [Charlie Munger's Mental Models](https://fs.blog/mental-models/)
- [Thinking in Systems - Donella Meadows](https://www.chelseagreen.com/product/thinking-in-systems/)
- [Thinking, Fast and Slow - Daniel Kahneman](https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555)

## License

MIT License - see [LICENSE](LICENSE) for details.

## Author

Created by [TJ Boudreaux](https://github.com/tjboudreaux)

---

**Found this useful?** Give it a star and share with others who could benefit from better thinking frameworks in Claude Code.
