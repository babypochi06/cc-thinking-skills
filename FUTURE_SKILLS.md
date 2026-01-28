# Future Thinking Skills Roadmap

This document outlines additional mental models and thinking frameworks that could be added to this collection. These are organized by category with rationale for each.

## High Priority Additions

### 1. thinking-leverage-points
**Source:** Donella Meadows' "Places to Intervene in a System"
**Description:** Identify where small changes can have large effects in complex systems.
**Use Cases:**
- Optimizing system architecture
- Choosing where to focus engineering effort
- Organizational change initiatives

**Why valuable:** Goes deeper than general systems thinking by providing a concrete hierarchy of intervention effectiveness.

### 2. thinking-five-whys-plus
**Source:** Toyota Production System, extended with safeguards
**Description:** Root cause analysis with explicit bias checks and stopping criteria.
**Use Cases:**
- Incident post-mortems
- Bug investigations
- Process failures

**Why valuable:** The standard 5 Whys is often misapplied. A skill version would include guards against premature stopping, single-cause bias, and blame-oriented thinking.

### 3. thinking-fermi-estimation
**Source:** Enrico Fermi's estimation technique
**Description:** Make order-of-magnitude estimates for unknown quantities by breaking into known factors.
**Use Cases:**
- Capacity planning
- Cost estimation
- Market sizing
- Technical feasibility assessment

**Why valuable:** Essential for making decisions with incomplete information; teaches decomposition.

### 4. thinking-opportunity-cost
**Source:** Economic theory
**Description:** Evaluate decisions by what you give up, not just what you gain.
**Use Cases:**
- Resource allocation
- Prioritization decisions
- Build vs. buy choices
- Technical debt evaluation

**Why valuable:** Engineers often underweight opportunity cost; explicit framework improves tradeoff analysis.

### 5. thinking-probabilistic-thinking
**Source:** Superforecasting (Tetlock)
**Description:** Express confidence in ranges, update predictions, track calibration.
**Use Cases:**
- Project estimation
- Risk assessment
- Decision making under uncertainty

**Why valuable:** Complements Bayesian reasoning with practical forecasting techniques.

## Medium Priority Additions

### 6. thinking-reversibility
**Source:** Jeff Bezos' "Type 1/Type 2 decisions"
**Description:** Classify decisions by reversibility; match decision process to type.
**Use Cases:**
- Technology choices
- Architecture decisions
- Process changes
- Hiring

**Why valuable:** Prevents both over-analysis and under-analysis by matching effort to decision type.

### 7. thinking-regret-minimization
**Source:** Jeff Bezos
**Description:** Project to future self and ask what you'd regret not doing.
**Use Cases:**
- Career decisions
- Strategic pivots
- Risk-taking choices

**Why valuable:** Provides long-term perspective counter to short-term thinking biases.

### 8. thinking-via-negativa
**Source:** Nassim Taleb (Antifragile)
**Description:** Improve by removal rather than addition; focus on what to stop doing.
**Use Cases:**
- System simplification
- Process improvement
- Feature prioritization (what NOT to build)

**Why valuable:** Counterbalances the bias toward adding complexity; powerful for technical debt.

### 9. thinking-lindy-effect
**Source:** Nassim Taleb
**Description:** For non-perishable things, future life expectancy is proportional to past life.
**Use Cases:**
- Technology selection
- Evaluating frameworks/libraries
- Predicting tool longevity

**Why valuable:** Provides principled way to evaluate maturity vs. novelty in tech choices.

### 10. thinking-margin-of-safety
**Source:** Benjamin Graham / Engineering practice
**Description:** Build in buffers for unknown unknowns; don't optimize to the edge.
**Use Cases:**
- Capacity planning
- Deadline estimation
- Architecture design
- Risk management

**Why valuable:** Explicit framework for avoiding brittleness in systems and plans.

### 11. thinking-thought-experiment
**Source:** Scientific method / Philosophy
**Description:** Test ideas through hypothetical scenarios when empirical testing is impractical.
**Use Cases:**
- Architecture evaluation
- Edge case analysis
- Ethics considerations
- Strategy development

**Why valuable:** Structured imagination as a tool; complements empirical methods.

### 12. thinking-steel-manning
**Source:** Debate/philosophy
**Description:** Argue against the strongest version of opposing position, not the weakest.
**Use Cases:**
- Design reviews
- Evaluating alternatives
- Conflict resolution
- Decision validation

**Why valuable:** Counteracts strawmanning; leads to better decisions by stress-testing ideas.

## Lower Priority / More Specialized

### 13. thinking-jobs-to-be-done
**Source:** Clayton Christensen
**Description:** Understand what "job" users hire your product to do.
**Use Cases:**
- Product development
- Feature prioritization
- User research
- Market positioning

**Why valuable:** Reframes product thinking around user needs vs. features.

### 14. thinking-effectuation
**Source:** Saras Sarasvathy
**Description:** Start with means, not goals; co-create with partners; leverage contingencies.
**Use Cases:**
- Startup strategy
- Innovation projects
- Uncertain/novel domains

**Why valuable:** Alternative to causal/planning-based thinking for high-uncertainty contexts.

### 15. thinking-cynefin
**Source:** Dave Snowden
**Description:** Classify problems as simple, complicated, complex, or chaotic; match approach.
**Use Cases:**
- Choosing methodologies
- Problem framing
- Process design

**Why valuable:** Meta-framework for choosing which approach to use for different problem types.

### 16. thinking-theory-of-constraints
**Source:** Eliyahu Goldratt
**Description:** Identify and manage the bottleneck; non-constraints don't matter.
**Use Cases:**
- Performance optimization
- Process improvement
- Resource allocation

**Why valuable:** Complements systems thinking with specific optimization framework.

### 17. thinking-scientific-method
**Source:** Scientific practice
**Description:** Hypothesis → Prediction → Test → Revise; explicit falsification.
**Use Cases:**
- Debugging
- Feature experimentation
- Performance investigation
- A/B testing design

**Why valuable:** Foundational; ensures rigorous empirical approach.

### 18. thinking-red-team
**Source:** Military/security practice
**Description:** Deliberately attack your own plans/systems to find weaknesses.
**Use Cases:**
- Security review
- Architecture validation
- Plan stress-testing
- Pre-launch preparation

**Why valuable:** Systematic adversarial thinking; complements pre-mortem.

## Meta-Skills (How to Use Thinking Skills)

### 19. thinking-model-selection
**Description:** How to choose which mental model to apply in a given situation.
**Use Cases:**
- Problem framing
- Decision about which skill to invoke
- Learning which models to learn

**Why valuable:** Meta-skill for navigating the collection.

### 20. thinking-model-combination
**Description:** How to combine multiple models for complex problems.
**Use Cases:**
- Complex multi-faceted decisions
- Thorough analysis
- Cross-checking conclusions

**Why valuable:** Teaches synergy between models; avoids single-model blindness.

## Implementation Considerations

### Selection Criteria for New Skills

A skill should be added if it:

1. **Proven** - Based on established research, practice, or theory
2. **Actionable** - Provides clear steps, not just concepts
3. **General** - Applies across multiple domains (not just one niche)
4. **Distinct** - Doesn't substantially overlap with existing skills
5. **Teachable** - Can be learned and applied from documentation
6. **Valuable for AI-assisted work** - Particularly useful in Claude Code context

### Quality Bar

Each skill should include:
- Clear "when to use" criteria
- Step-by-step process
- Multiple examples (especially software engineering)
- Integration notes with other skills
- Verification checklist
- Attribution to source

## Suggested Roadmap

**Phase 1 (Next Release):**
- thinking-leverage-points
- thinking-five-whys-plus
- thinking-fermi-estimation
- thinking-opportunity-cost

**Phase 2:**
- thinking-reversibility
- thinking-via-negativa
- thinking-margin-of-safety
- thinking-probabilistic-thinking

**Phase 3:**
- thinking-steel-manning
- thinking-cynefin
- thinking-theory-of-constraints
- thinking-red-team

**Phase 4:**
- Meta-skills and remaining specialized models

## Contributing New Skills

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to propose and implement new skills.

---

*This roadmap is a living document. Suggestions and contributions welcome via GitHub issues and pull requests.*
