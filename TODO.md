# TODO: TAC: Thesis Advisory Companion

Development roadmap for tac module.

---

## Agents to Build

Use the agent-builder workflow (`/bmad:bmb:workflows:agent`) to build each agent from its spec file.

- [ ] **Dr. Carla** (Academic Advisor)
  - Use: `/bmad:bmb:workflows:agent`
  - Spec: `agents/dr-carla.spec.md`
  - Commands: Topic Discovery, Research Question Designer, Thesis Timeline Planner

- [ ] **Patricia** (Research Librarian)
  - Use: `/bmad:bmb:workflows:agent`
  - Spec: `agents/patricia.spec.md`
  - Commands: Literature Review Builder, Source Explainer, Citation Helper, Library Integration Setup

- [ ] **João** (Writing Coach)
  - Use: `/bmad:bmb:workflows:agent`
  - Spec: `agents/joao.spec.md`
  - Commands: Thesis Structure & Outline, Writing Session Guide

- [ ] **Lara** (Defense Prep Coach)
  - Use: `/bmad:bmb:workflows:agent`
  - Spec: `agents/lara.spec.md`
  - Commands: Defense Preparation

---

## Workflows to Build

Use the workflow-builder workflow (`/bmad:bmb:workflows:workflow`) to build each workflow from its spec file.

### Core Workflows (Priority 1)

- [x] **topic-discovery-validation** ✅ COMPLETE (2026-01-24)
  - Use: `/bmad:bmb:workflows:workflow`
  - Spec: `workflows/topic-discovery-validation/topic-discovery-validation.spec.md`
  - Agent: Dr. Carla (+ Patricia for source validation)
  - Status: All 10 steps built (20 files total), committed to GitHub, documented
  - **THE core workflow — breaks paralysis**

- [x] **literature-review-builder** ✅ COMPLETE (2026-01-26)
  - Use: `/bmad:bmb:workflows:workflow`
  - Spec: `workflows/literature-review-builder/literature-review-builder.spec.md`
  - Agent: Patricia
  - Status: All 11 steps built, deployed, pushed to GitHub, documented

- [x] **thesis-structure-outline** ✅ COMPLETE (2026-01-26)
  - Use: `/bmad:bmb:workflows:workflow`
  - Spec: `workflows/thesis-structure-outline/thesis-structure-outline.spec.md`
  - Agent: João
  - Status: All 10 steps built (16 files total), deployed, pushed to GitHub, documented

### Feature Workflows (Priority 2)

- [x] **research-question-designer** ✅ COMPLETE (2026-01-26)
  - Use: `/bmad:bmb:workflows:workflow`
  - Spec: `workflows/research-question-designer/research-question-designer.spec.md`
  - Agent: Dr. Carla
  - Status: All 9 steps built (10 step files + 2 data files = 12 files), deployed, pushed to GitHub, documented
  - **Fills gap between Topic Discovery draft and final research question**

- [x] **source-explainer** ✅ COMPLETE (2026-01-27)
  - Use: `/bmad:bmb:workflows:workflow`
  - Spec: `workflows/source-explainer/source-explainer.spec.md`
  - Agent: Patricia
  - Status: All 5 steps built, Create mode complete
  - **Critical for bilingual users**

- [x] **writing-session-guide** ✅ COMPLETE (2026-01-27)
  - Use: `/bmad:bmb:workflows:workflow`
  - Spec: `workflows/writing-session-guide/writing-session-guide.spec.md`
  - Agent: João
  - Status: All 7 steps built (Create mode complete), FLOW.md added

- [x] **citation-helper** ✅ COMPLETE (2026-01-28)
  - Use: `/bmad:bmb:workflows:workflow`
  - Spec: `workflows/citation-helper/citation-helper.spec.md`
  - Agent: Patricia
  - Status: All 11 steps built (6 Create + 3 Edit + 2 Validate), tri-modal complete, pushed to GitHub
  - **ABNT/APA citation formatting with dual input methods (paste/link)**

- [ ] **defense-preparation**
  - Use: `/bmad:bmb:workflows:workflow`
  - Spec: `workflows/defense-preparation/defense-preparation.spec.md`
  - Agent: Lara

### Utility Workflows (Priority 3)

- [ ] **workflow-status**
  - Use: `/bmad:bmb:workflows:workflow`
  - Spec: `workflows/workflow-status/workflow-status.spec.md`
  - Agent: All (shared)

- [ ] **export**
  - Use: `/bmad:bmb:workflows:workflow`
  - Spec: `workflows/export/export.spec.md`
  - Agent: All (shared)

- [ ] **library-integration-setup**
  - Use: `/bmad:bmb:workflows:workflow`
  - Spec: `workflows/library-integration-setup/library-integration-setup.spec.md`
  - Agent: Patricia
  - **Required before using library features**

- [ ] **thesis-timeline-planner**
  - Use: `/bmad:bmb:workflows:workflow`
  - Spec: `workflows/thesis-timeline-planner/thesis-timeline-planner.spec.md`
  - Agent: Dr. Carla

- [ ] **quick-idea-capture**
  - Use: `/bmad:bmb:workflows:workflow`
  - Spec: `workflows/quick-idea-capture/quick-idea-capture.spec.md`
  - Agent: All (shared)

- [ ] **progress-dashboard**
  - Use: `/bmad:bmb:workflows:workflow`
  - Spec: `workflows/progress-dashboard/progress-dashboard.spec.md`
  - Agent: All (shared)

---

## MCP Tools & Integrations

- [ ] **Academic Database Connector (Custom MCP Tool)**
  - Connect to USP library systems (JSTOR, SciELO, CAPES, Web of Science)
  - Used by: Topic Discovery, Literature Review Builder, Source Explainer, Citation Helper
  - **Critical for topic validation and gated content access**
  - **Citation Helper Enhancement:** Add library integration to fetch full-text from gated content
    - First user has credentials for testing
    - Implement after core workflows complete
    - Will enhance link-based citation input for journal articles behind paywalls

- [ ] **Notion Integration**
  - Export workflow integration
  - Test with real Notion workspace

- [ ] **Web Search Tool**
  - Supplementary research capability
  - Google Scholar integration

---

## Installation Testing

- [ ] Test installation with `bmad install tac`
- [ ] Verify module.yaml prompts work correctly
- [ ] Test installer.js creates thesis_artifacts directory
- [ ] Verify config.yaml variables are accessible to agents
- [ ] Test bilingual support (portuguese and english modes)

---

## Documentation

- [ ] Complete README.md with usage examples
- [ ] Enhance docs/ folder with more guides
- [ ] Add troubleshooting section for common issues
- [ ] Document configuration options in detail
- [ ] Add screenshots/examples of workflows in action

---

## Testing with Real User

- [ ] Install TAC in your wife's environment
- [ ] Test Topic Discovery & Validation workflow (THE critical one)
- [ ] Validate library integration works
- [ ] Test Source Explainer with real English papers
- [ ] Gather feedback and iterate

---

## Next Steps

**Immediate (Build Core Functionality):**
1. Build Topic Discovery & Validation workflow — THE breakthrough workflow
2. Build Dr. Carla agent to trigger topic discovery
3. Build Patricia agent for library integration
4. Test topic validation with real USP library access

**Short Term (Complete Agent Team):**
5. Build remaining agents (João, Lara)
6. Build remaining core workflows
7. Test end-to-end thesis journey

**Medium Term (Polish & Launch):**
8. Build all feature and utility workflows
9. Test with your wife on her real thesis
10. Iterate based on real-world usage
11. Consider sharing with her cohort if successful

---

_Last updated: 2026-01-26_
