# TAC (Thesis Advisory Companion)

**AI-powered research support for Brazilian MBA students**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Module Version](https://img.shields.io/badge/version-1.0.0--alpha-blue.svg)](https://github.com/natygrad/tac-module/releases)

---

## Overview

TAC (Thesis Advisory Companion) is a comprehensive AI advisory system designed specifically for Brazilian MBA students navigating the thesis research and writing process. The module provides specialized AI agents that guide students through every phase of thesis development.

### The TAC Advisory Team

**🎓 Dr. Carla** - Academic Advisor
- Topic discovery and validation
- Research scope definition
- Academic guidance and methodology support

**📚 Patricia** - Research Librarian
- Academic database search (JSTOR, SciELO, CAPES, Web of Science, Google Scholar)
- Source validation and quality assessment
- Literature review organization
- English ↔ Brazilian Portuguese translation

**✍️ João** - Writing Coach *(Planned)*
- Writing structure and flow
- ABNT formatting compliance
- Draft review and feedback

**🎤 Lara** - Defense Preparation *(Planned)*
- Presentation coaching
- Q&A preparation
- Defense simulation

---

## Quick Start

### Installation

1. **Prerequisites:**
   - BMAD Method framework installed
   - Claude Code CLI or compatible AI environment

2. **Install TAC Module:**
   ```bash
   # Clone TAC module
   git clone https://github.com/natygrad/tac-module.git

   # Copy to BMAD modules directory
   cp -r tac-module/_bmad/tac ~/.bmad/
   ```

3. **Verify Installation:**
   ```bash
   # TAC agents should appear in agent menu
   bmad agents list
   ```

### Usage

**Starting Your Thesis Journey:**

1. **Topic Discovery with Dr. Carla**
   ```
   Launch: Dr. Carla's Topic Discovery workflow
   Output: Validated, scoped thesis topic
   ```

2. **Source Validation with Patricia**
   ```
   Launch: Patricia's Source Validation workflow
   Input: Validated topic from Dr. Carla
   Output: 10-15 ranked academic sources with quality scores
   ```

3. **Literature Review with Patricia**
   ```
   Launch: Patricia's Literature Review workflow
   Input: Selected sources from Source Validation
   Output: Organized literature review (20-30 sources)
   ```

4. **Writing with João** *(Planned)*
   ```
   Launch: João's Writing Coach workflows
   Output: ABNT-compliant thesis draft
   ```

5. **Defense Prep with Lara** *(Planned)*
   ```
   Launch: Lara's Defense Preparation workflow
   Output: Confident, prepared defense presentation
   ```

---

## Module Structure

```
tac/
├── module.yaml                 # TAC module configuration
├── agents/
│   ├── dr-carla/              # Academic Advisor agent
│   │   └── dr-carla.agent.yaml
│   ├── patricia/              # Research Librarian agent
│   │   ├── patricia.agent.yaml
│   │   └── _memory/
│   │       └── patricia-sidecar/
│   ├── joao/                  # Writing Coach (planned)
│   └── lara/                  # Defense Prep (planned)
└── workflows/
    ├── topic-discovery-validation/    # Dr. Carla's primary workflow
    ├── source-validation/             # Patricia's validation workflow
    ├── literature-review/             # Patricia's review workflow (planned)
    └── [additional workflows]/
```

---

## Documentation

### Workflows

- **[Source Validation Workflow](docs/workflows/source-validation.md)** - Parallel database search with dual scoring
- **[Topic Discovery Workflow](docs/workflows/topic-discovery.md)** - Dr. Carla's topic validation process

### Agents

- **[Patricia Agent Guide](docs/agents/patricia.md)** - Research Librarian capabilities and commands
- **[Dr. Carla Agent Guide](docs/agents/dr-carla.md)** - Academic Advisor capabilities

### Architecture

- **[TAC Module Architecture](docs/architecture/overview.md)** - Module design and integration patterns
- **[Workflow Integration](docs/architecture/workflow-chaining.md)** - How TAC workflows connect

---

## Target Audience

**Primary Users:**
- Brazilian MBA students (primarily USP, applicable to other Brazilian programs)
- Working professionals pursuing graduate degrees
- Students with rusty research skills needing structured guidance

**Student Profile:**
- Have undergraduate thesis experience (Brazilian undergrad requires comprehensive thesis)
- Research skills rusty from years since undergrad
- Moderate English reading comfort but appreciate translation support
- Limited time due to full-time work commitments
- Need efficient, structured guidance through research process

---

## Key Features

### Patricia (Research Librarian)

**Triple-Threat Superpower:**
1. **Parallel Source Validation** - Searches 5 academic databases simultaneously
2. **Smart Literature Review Builder** - Organizes sources into thematic clusters
3. **English → BR-PT Academic Translator** - On-demand translation with Brazilian academic context

**Capabilities:**
- Dual scoring system: Relevancy % (topic match) + Quality % (peer review, journal tier, citations)
- Iterative refinement: Request "more sources" or "narrower focus" anytime
- Threshold warning: Alerts if <8 sources found (prevents unsupportable topics)
- Custom source integration: Add your own sources with automatic scoring
- Multi-session memory: Pause and resume over weeks/months
- ABNT citation formatting

### Dr. Carla (Academic Advisor)

**Capabilities:**
- Interactive topic discovery and refinement
- Research scope validation
- Methodology guidance
- Integration with Patricia for source availability checks

---

## Development Status

| Component | Status | Notes |
|-----------|--------|-------|
| Dr. Carla Agent | ✅ Complete | Production-ready |
| Patricia Agent | ✅ Complete | Production-ready |
| João Agent | 🔄 Planned | Writing Coach |
| Lara Agent | 🔄 Planned | Defense Prep |
| Topic Discovery Workflow | ✅ Complete | Dr. Carla's primary workflow |
| Source Validation Workflow | 🔄 In Progress | Design complete, building steps |
| Literature Review Workflow | 📋 Planned | Follows Source Validation |
| Academic Database Connector | 📋 Future | MCP server for institutional access |

---

## Contributing

Contributions welcome! This is an open-source project to support Brazilian graduate students.

**Areas for Contribution:**
- Additional Brazilian university adaptations (beyond USP)
- Translation improvements (academic EN↔PT)
- Database connector implementations
- Workflow enhancements

---

## License

MIT License - see [LICENSE](LICENSE) for details

---

## Related Projects

- **[BMAD Method](https://github.com/bmad-code-org/BMAD-METHOD)** - Base framework for TAC module
- **[Claude Code](https://claude.ai/code)** - Primary execution environment

---

## Contact & Support

- **Issues:** GitHub Issues
- **Discussions:** GitHub Discussions

---

*"Quality over quantity - fifteen solid sources beat fifty mediocre ones every time."* - Patricia 📚
