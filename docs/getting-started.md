# Getting Started with TAC: Thesis Advisory Companion

Welcome to TAC! This guide will help you get up and running with your thesis companion.

---

## What This Module Does

TAC is your academic companion throughout the entire thesis journey. It:

- **Breaks paralysis** by providing structure when you're frozen and don't know where to start
- **Validates topics** against real library sources before you commit months of work
- **Organizes research** through integrated library search and literature review building
- **Guides writing** with structure, prompts, and encouragement
- **Prepares you for defense** with practice sessions and honest feedback

Think of TAC as a friendly study group that's always available — you have an Academic Advisor, Research Librarian, Writing Coach, and Defense Prep Coach all working together to help you succeed.

---

## Installation

If you haven't installed the module yet:

```bash
bmad install tac
```

You'll be prompted to configure:

1. **Thesis artifacts location** — Where TAC stores your notes, outlines, sources, and drafts (defaults to `_bmad-output/thesis-artifacts`)
2. **Institution name** — Your university name for library integration (defaults to "USP")
3. **Core config** — User name, communication language (portuguese or english), document output language, output folder

---

## First Steps

### 1. Set Your Language Preference

TAC is bilingual! During installation, you set your `communication_language`:
- **portuguese** — Agents speak to you in Portuguese
- **english** — Agents speak to you in English

No matter which you choose, you can still use the Source Explainer to understand English academic papers in Portuguese.

### 2. Configure Library Access

Before you can validate topics or search for sources, run:

```
/patricia
```

Then select **[LS] Library Integration Setup** to configure your USP library credentials.

### 3. Start Topic Discovery

The breakthrough moment! Run:

```
/dr-carla
```

Then select **[TD] Topic Discovery & Validation**

Dr. Carla will:
- Ask about your interests in project management
- Help you explore potential topic angles
- Validate each angle against real library sources
- Show you actual source counts so you can pick with confidence

This is THE core workflow that breaks the "I don't know where to start" paralysis.

---

## Common Use Cases

### "I Have No Idea What to Write About"

→ Use **Topic Discovery & Validation** with Dr. Carla

She'll help you explore your interests and validate topics before you commit.

### "I Found a Topic But Need Sources"

→ Use **Literature Review Builder** with Patricia

She'll search multiple databases (JSTOR, SciELO, CAPES, Web of Science) and organize sources thematically.

### "I Have an English Paper I Don't Fully Understand"

→ Use **Source Explainer** with Patricia

Paste the English abstract or text, and she'll explain it clearly in Brazilian Portuguese.

### "I'm Staring at a Blank Page and Can't Start Writing"

→ Use **Writing Session Guide** with João

He'll break the task into small steps, provide writing prompts, and guide you through a focused session.

### "I Need to Format My Citations"

→ Use **Citation Helper** with Patricia

She'll format citations in ABNT standard (Brazilian academic format) and manage your bibliography.

### "My Defense is Coming Up and I'm Nervous"

→ Use **Defense Preparation** with Lara

She'll help you anticipate committee questions, practice your defense, and give you honest feedback on your readiness.

---

## Understanding the Agent Team

Think of TAC as a study group with four members, each with expertise:

1. **Dr. Carla 🎓** — Your academic advisor who helps you find and refine your topic
2. **Patricia 📚** — Your research librarian who finds sources and manages citations
3. **João ✍️** — Your writing coach who helps you structure and draft your thesis
4. **Lara 🎯** — Your defense coach who prepares you for the big day

They all remember your progress (hasSidecar: true), so you can pick up where you left off.

---

## What's Next?

- Check out the [Agents Reference](agents.md) to meet your team in detail
- Browse the [Workflows Reference](workflows.md) to see everything TAC can do
- See [Examples](examples.md) for real-world usage scenarios

---

## Need Help?

If you run into issues:
1. Check the troubleshooting section in [examples.md](examples.md)
2. Review your module configuration in `_bmad/tac/config.yaml`
3. Make sure library integration is set up (run Library Integration Setup with Patricia)
4. Consult the broader BMAD documentation

---

**Remember:** TAC is designed to keep you moving when you're frozen. Every time you feel stuck, there's a workflow or agent that can help you take the next step.
