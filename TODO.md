# TODO: TAC: Thesis Advisory Companion

Development roadmap for tac module.

---

## Agents to Build

Use the agent-builder workflow (`/bmad:bmb:workflows:agent`) to build each agent from its spec file.

- [x] **Dr. Carla** ✅ COMPLETE (2026-01-29)
  - Agent: `agents/dr-carla/dr-carla.agent.yaml`
  - Commands: Topic Discovery, Research Question Designer, Thesis Timeline Planner
  - Sidecar: dr-carla-sidecar (topic evolution tracking)

- [x] **Patricia** ✅ COMPLETE (2026-01-29)
  - Agent: `agents/patricia/patricia.agent.yaml`
  - Commands: Literature Review Builder, Source Explainer, Citation Helper, Library Integration Setup
  - Sidecar: patricia-sidecar (source search history)

- [x] **João** ✅ COMPLETE (2026-01-29)
  - Agent: `agents/joao/joao.agent.yaml`
  - Commands: Thesis Structure & Outline, Writing Session Guide
  - Sidecar: joao-sidecar (writing patterns and progress)

- [x] **Lara** ✅ COMPLETE (2026-01-29)
  - Agent: `agents/lara/lara.agent.yaml`
  - Commands: Defense Preparation
  - Sidecar: lara-sidecar (defense performance tracking)

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

- [x] **defense-preparation** ✅ COMPLETE (2026-01-28)
  - Use: `/bmad:bmb:workflows:workflow`
  - Spec: `workflows/defense-preparation/defense-preparation.spec.md`
  - Agent: Lara
  - Status: All 20 steps built (11 Create + 4 Edit + 2 Validate + 3 data files), tri-modal complete, pushed to GitHub
  - **Harsh-but-fair defense coaching with 5 committee sub-agents, web-browsing, and subprocess optimization**

### Utility Workflows (Priority 3)

- [x] **workflow-status** ✅ COMPLETE (2026-01-28)
  - Use: `/bmad:bmb:workflows:workflow`
  - Spec: `workflows/workflow-status/workflow-status.spec.md`
  - Agent: All (shared)
  - Status: All 3 steps built, complete implementation, committed to GitHub
  - **Shared utility - scans thesis progress and recommends next step**

- [x] **export** ✅ COMPLETE (2026-01-29)
  - Use: `/bmad:bmb:workflows:workflow`
  - Spec: `workflows/export/export.spec.md`
  - Agent: All (shared)
  - Status: All 4 steps built (init, select-file, format-selection, export-execution), committed to GitHub
  - **Pandoc-based Word/PDF export with optional Notion MCP integration**

- [x] **library-integration-setup** ✅ COMPLETE (2026-01-29)
  - Use: `/bmad:bmb:workflows:workflow`
  - Spec: `workflows/library-integration-setup/library-integration-setup.spec.md`
  - Agent: Patricia (and all agents needing CAPES access)
  - Status: All 5 steps built (4 main + 1 error handler), complete implementation
  - **One-time setup utility - enables CAPES library access for TAC workflows**

- [x] **thesis-timeline-planner** ✅ COMPLETE (2026-01-29)
  - Use: `/bmad:bmb:workflows:workflow`
  - Spec: `workflows/thesis-timeline-planner/thesis-timeline-planner.spec.md`
  - Agent: Dr. Carla
  - Status: All 12 steps built (5 Create + 5 Edit + 2 Validate), tri-modal complete, committed to GitHub
  - **Backward-planning from defense deadline to weekly goals - combat procrastination**

- [x] **quick-idea-capture** ✅ COMPLETE (2026-01-29)
  - Use: `/bmad:bmb:workflows:workflow`
  - Spec: `workflows/quick-idea-capture/quick-idea-capture.spec.md`
  - Agent: All (shared)
  - Status: All 4 steps built, complete implementation, committed to GitHub
  - **Ultra-fast utility - capture thoughts instantly before forgetting (< 2 min)**

- [ ] **progress-dashboard**
  - Use: `/bmad:bmb:workflows:workflow`
  - Spec: `workflows/progress-dashboard/progress-dashboard.spec.md`
  - Agent: All (shared)

---

## MCP Tools & Integrations

- [x] **CAPES Connector MCP** ✅ COMPLETE (2026-01-29)
  - MCP Server: `mcp-servers/capes-connector/`
  - Status: Built, tested, configured in Claude Code
  - Features:
    - `capes_search`: Search CAPES Portal de Periódicos for academic papers
    - `capes_get_fulltext`: Extract full-text from SciELO articles (260K+ chars)
    - `capes_test_connection`: Verify and save credentials securely
    - `capes_list_publishers`: Check supported publishers
  - Publisher Support: SciELO (full-text extraction), more coming
  - Authentication: Tested and working with institutional credentials
  - Integration: Available to Patricia, Dr. Carla, and all TAC workflows
  - **Critical for topic validation and gated content access**

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
