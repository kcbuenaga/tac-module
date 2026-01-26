# TAC Workflow Diagrams

Visual step-by-step breakdowns of all TAC workflows.

---

## Topic Discovery & Validation (Dr. Carla)

```mermaid
flowchart TD
    Start([Student starts Topic Discovery]) --> Init[Step 01: Init]
    Init --> CheckExisting{Existing session?}
    CheckExisting -->|Yes| Continue[Step 01b: Continue]
    CheckExisting -->|No| Interests[Step 02: Interests Exploration]
    Continue --> ResumeStep[Resume from last step]

    Interests -->|Detect language from user input| SaveInterests[Step 03: Save Interests]
    SaveInterests --> TopicAngles[Step 04: Topic Angles<br/>Generate 5-8 angles]
    TopicAngles --> SaveAngles[Step 05: Save Angles]
    SaveAngles --> PassiveCheck[Step 05b: Passive Source Check<br/>Patricia subprocess]

    PassiveCheck --> CheckCounts{All angles<br/><10 sources?}
    CheckCounts -->|Yes| Redirect[Redirect to topic refinement]
    CheckCounts -->|No| NarrowAngles[Step 06: Narrow Angles<br/>Filter to 2-3 finalists]

    NarrowAngles --> LibraryValidation[Step 06: Library Validation<br/>Deep validation for finalists]
    LibraryValidation --> TopicSelection[Step 07: Topic Selection]
    TopicSelection --> SaveValidation[Step 08: Save Validation]
    SaveValidation --> Completion[Step 09: Completion]

    Completion --> HandoffPatricia[Handoff to Source Validation]
    Redirect --> Interests
```

**Key Features:**
- **Language Detection:** Auto-detects from first user message (step 02)
- **Multiple Topics:** 3-5 interest areas → 5-8 angles
- **Passive Check:** Patricia subprocess for quick source counts (step 05b)
- **Collaborative Filtering:** Narrow to 2-3 finalists based on source availability + student preference
- **Deep Validation:** Full library validation for finalists only

---

## Source Validation (Patricia)

```mermaid
flowchart TD
    Start([Receive topic from Carla]) --> Init[Step 01: Init]
    Init --> CheckExisting{Existing session?}
    CheckExisting -->|Yes| Continue[Step 01b: Continue]
    CheckExisting -->|No| Handoff[Step 02: Handoff Confirmation<br/>Inherit language, confirm parameters]
    Continue --> ResumeStep[Resume from last step]

    Handoff --> ParallelSearch[Step 03: Parallel Search<br/>5 databases simultaneously]
    ParallelSearch --> ScoreRank[Step 04: Score and Rank<br/>Dual scoring: Relevancy % + Quality %]

    ScoreRank --> Threshold[Step 05: Threshold Analysis<br/>Check if ≥8 sources]

    Threshold --> CheckThreshold{Sources ≥ 8?}
    CheckThreshold -->|Yes| ShowTop10[Display top 10 sources]
    CheckThreshold -->|No| Brainstorm[Brainstorming:<br/>Scope adjustment strategies]

    Brainstorm --> OfferCarla{Standalone mode?}
    OfferCarla -->|Yes| OfferCarlaOption[Offer return to Carla]
    OfferCarla -->|No| Refinement
    ShowTop10 --> Refinement
    OfferCarlaOption --> Refinement

    Refinement[Step 06: Refinement Loop]
    Refinement --> RefineChoice{Student choice}
    RefineChoice -->|Refine search| BackToSearch[Loop to Step 03]
    RefineChoice -->|Add custom source| AddCustom[Score custom source]
    RefineChoice -->|Satisfied| Selection[Step 07: Source Selection]
    RefineChoice -->|Consult Carla| LaunchCarla[Launch Dr. Carla workflow]

    BackToSearch --> ParallelSearch
    AddCustom --> Refinement
    LaunchCarla -.->|Return with new scope| ParallelSearch

    Selection --> Finalize[Step 08: Finalize and Handoff]
    Finalize --> ExportChoice{Export choice}
    ExportChoice -->|Literature Review| HandoffLitReview[Handoff to Literature Review]
    ExportChoice -->|Done| End([Workflow Complete])
```

**Key Features:**
- **Language Inheritance:** Inherits from Topic Discovery handoff
- **Parallel Search:** 5 databases simultaneously (JSTOR, SciELO, CAPES, Web of Science, Google Scholar)
- **Dual Scoring:** Relevancy % (0-100) + Quality % (0-100), ranked by relevancy
- **Top 10 Display:** Shows top 10 when ≥10 sources found
- **Threshold Analysis:** ≥8 sources required, Brainstorming if <8
- **Refinement Loop:** Can loop back to search, add custom sources, or consult Carla
- **Carla Integration:** Standalone mode can invoke Carla for topic scope changes

---

## Workflow Integration Flow

```mermaid
flowchart LR
    Student([Brazilian MBA Student]) --> Carla[Dr. Carla:<br/>Topic Discovery]
    Carla -->|Validated topic<br/>+ research question| Patricia1[Patricia:<br/>Source Validation]
    Patricia1 -->|10-15 selected sources| Patricia2[Patricia:<br/>Literature Review<br/>Builder]
    Patricia2 -->|Lit review framework| Joao[João:<br/>Writing Guide]

    Patricia1 -.->|Topic scope change| Carla
    Patricia2 -.->|Need different sources| Patricia1

    style Carla fill:#e1f5ff
    style Patricia1 fill:#fff4e1
    style Patricia2 fill:#fff4e1
    style Joao fill:#f0ffe1
```

**Integration Points:**
- **Carla → Patricia (Source Validation):** Handoff includes topic, research question, student context
- **Patricia (Source Validation) → Patricia (Lit Review):** Handoff includes selected sources (10-15)
- **Loop-back capability:** Both Patricia workflows can return to Carla if topic scope changes

---

## Data Flow Diagram

```mermaid
flowchart TB
    subgraph "Topic Discovery (Dr. Carla)"
        TD1[Interests Input] --> TD2[3-5 Interest Areas]
        TD2 --> TD3[5-8 Topic Angles]
        TD3 --> TD4[Passive Source Check]
        TD4 --> TD5[2-3 Finalists]
        TD5 --> TD6[Deep Validation]
        TD6 --> TD7[Selected Topic +<br/>Research Question]
    end

    subgraph "Source Validation (Patricia)"
        SV1[Topic + RQ] --> SV2[5 Parallel Searches]
        SV2 --> SV3[10-15 Raw Sources]
        SV3 --> SV4[Dual Scoring]
        SV4 --> SV5[Ranked Sources]
        SV5 --> SV6[Student Selection]
        SV6 --> SV7[10-15 Selected Sources]
    end

    subgraph "Literature Review (Patricia)"
        LR1[Selected Sources] --> LR2[Thematic Organization]
        LR2 --> LR3[Lightweight Lit Review]
        LR3 --> LR4[Source List +<br/>Lit Review Framework]
    end

    TD7 -->|Handoff File| SV1
    SV7 -->|Handoff File| LR1

    subgraph "Patricia Sidecar Memory"
        Memory[(Long-term Memory)]
    end

    SV2 -.->|Store all sources found| Memory
    LR1 -.->|Load all sources| Memory

    style TD1 fill:#e1f5ff
    style SV1 fill:#fff4e1
    style LR1 fill:#fff4e1
    style Memory fill:#ffe1e1
```

**Key Data Flows:**
- **Topic Discovery output:** Validated topic + research question → handoff file
- **Source Validation output:** 10-15 selected sources → handoff file
- **Patricia Memory:** Stores ALL sources found (not just selected) for later use
- **Literature Review input:** Receives selected sources + can access all found sources from memory

---

## Passive Source Check Detail (Step 05b)

```mermaid
flowchart TD
    Start[Dr. Carla has 5-8 angles] --> LaunchPatricia[Launch Patricia<br/>as Subprocess]
    LaunchPatricia --> GoogleScholar[Quick Google Scholar<br/>searches for each angle]
    GoogleScholar --> CountSources[Count sources<br/>per angle]

    CountSources --> Classify{Classify each angle}
    Classify -->|15-200 sources| Good[Status: Good]
    Classify -->|5-14 sources| Low[Status: Low]
    Classify -->|<5 sources| VeryLow[Status: Very Low]
    Classify -->|>200 sources| High[Status: High<br/>May be too broad]

    Good --> ReturnCounts[Return counts<br/>to Dr. Carla]
    Low --> ReturnCounts
    VeryLow --> ReturnCounts
    High --> ReturnCounts

    ReturnCounts --> CarlaDecision{Carla evaluates}
    CarlaDecision -->|All <10| RedirectUser[Redirect to<br/>topic refinement]
    CarlaDecision -->|Some viable| NarrowAngles[Proceed to<br/>narrow angles step]

    style LaunchPatricia fill:#fff4e1
    style ReturnCounts fill:#e1ffe1
```

**Critical Design:**
- **Patricia runs as subprocess** (not Carla doing searches herself)
- **Quick counts only** (no deep validation - that's step 06)
- **Carla interprets results** and can redirect if all angles fail
- **Proper separation:** Patricia = search expert, Carla = topic advisor

---

## Language Detection Flow

```mermaid
flowchart LR
    Start[User starts TAC workflow] --> CheckConfig{Check TAC config<br/>preferred_tac_language}

    CheckConfig -->|Set to specific language| UseConfig[Use configured language]
    CheckConfig -->|Set to 'auto'| DetectLang[Detect from first<br/>user message]

    DetectLang --> UpdateConfig[Update TAC config<br/>with detected language]
    UpdateConfig --> Persist[Persist across workflows]

    UseConfig --> Persist
    Persist --> Handoff{Workflow handoff?}
    Handoff -->|Yes| InheritLang[Next workflow inherits<br/>language from handoff]
    Handoff -->|No| Continue[Continue in same language]

    InheritLang --> UserSwitch{User switches<br/>language?}
    UserSwitch -->|Yes| UpdateAndPersist[Update config<br/>with new language]
    UserSwitch -->|No| Continue

    UpdateAndPersist --> Continue

    style DetectLang fill:#e1f5ff
    style InheritLang fill:#fff4e1
```

**Language Persistence:**
- **Auto-detection:** Happens in Topic Discovery step 02 from user's first input
- **Config storage:** Saved in `tac/config.yaml` as `preferred_tac_language`
- **Handoff inheritance:** Source Validation reads language from Topic Discovery handoff
- **User override:** Students can switch language mid-conversation, updates persist

---

## Threshold Analysis & Brainstorming (Step 05)

```mermaid
flowchart TD
    Start[Sources scored and ranked] --> CountSources[Count total sources found]

    CountSources --> CheckThreshold{Total ≥ 8?}

    CheckThreshold -->|Yes| MetThreshold[✅ Threshold Met]
    CheckThreshold -->|No| WarningThreshold[⚠️ Threshold Warning]

    MetThreshold --> ShowTop{Total ≥ 10?}
    ShowTop -->|Yes| DisplayTop10[Display top 10 sources]
    ShowTop -->|No| DisplayTop5[Display top 5 sources]

    DisplayTop10 --> Breakdown[Show Database Breakdown<br/>+ Quality Distribution]
    DisplayTop5 --> Breakdown

    WarningThreshold --> LaunchBrainstorm[Launch Brainstorming:<br/>Scope adjustment strategies]
    LaunchBrainstorm --> Generate[Generate 3-5 strategies:<br/>- Broader scope<br/>- Narrower focus<br/>- Alternative keywords<br/>- Temporal adjustment<br/>- Language expansion]

    Generate --> PresentStrategies[Present strategies<br/>to student]
    PresentStrategies --> CheckMode{Workflow mode?}

    CheckMode -->|Standalone| OfferCarla[Offer [C]arla option]
    CheckMode -->|Handoff| ProceedRefinement[Proceed to refinement loop]

    OfferCarla --> ProceedRefinement
    Breakdown --> ProceedRefinement

    ProceedRefinement --> RefinementLoop[Step 06: Refinement Loop]

    style LaunchBrainstorm fill:#ffe1f5
    style Generate fill:#ffe1f5
```

**Brainstorming Integration:**
- **Triggered when:** <8 sources found
- **Purpose:** Generate scope adjustment strategies BEFORE warning student
- **Output:** 3-5 actionable strategies with rationale
- **Carla option:** Only offered in standalone mode when <8 sources

---

## Literature Review Builder (Patricia)

```mermaid
flowchart TD
    Start([Receive sources from Source Validation]) --> Init[Step 01: Init]
    Init --> CheckExisting{Existing session?}
    CheckExisting -->|Yes| Continue[Step 01b: Continue]
    CheckExisting -->|No| HandoffLoad[Step 02: Handoff Load<br/>Load 10-15 selected sources]
    Continue --> ResumeStep[Resume from last step]

    HandoffLoad --> ExportChoice[Step 03: Export Choice]
    ExportChoice --> ExportDecision{Export format}
    ExportDecision -->|S - Selected Only| ExportSelected[Generate source-list.md/docx<br/>10-15 selected sources]
    ExportDecision -->|A - All Sources| ExportAll[Generate source-list.md/docx<br/>All found + selected at top]

    ExportSelected --> LitReviewDecision[Step 04: Lit Review Decision]
    ExportAll --> LitReviewDecision

    LitReviewDecision --> ContinueLitReview{Continue to<br/>lit review?}
    ContinueLitReview -->|N - No| SkipToCompletion[Skip to Step 10:<br/>Completion]
    ContinueLitReview -->|Y - Yes| ThematicOrg[Step 05: Thematic Organization<br/>Collaborative theme discovery]

    ThematicOrg -->|Brainstorming integration| Synthesis[Step 06: Lit Review Synthesis<br/>Generate lightweight draft]
    Synthesis -->|Sub-agents: Parallel theme synthesis<br/>Advanced Elicitation: Quality gates| ReviewSat[Step 07: Review Satisfaction]

    ReviewSat --> SatisfactionCheck{Student decision}
    SatisfactionCheck -->|S - Satisfied| SidecarUpdate[Step 08: Sidecar Update]
    SatisfactionCheck -->|V - Return to Source Validation| BackToSourceVal[Exit to Source Validation<br/>Need different sources]
    SatisfactionCheck -->|C - Invoke Carla| InvokeCarla[Exit to Carla<br/>Topic scope changed]
    SatisfactionCheck -->|R - Regenerate| RegenerateThemes[Loop back to Step 05<br/>Try different themes]

    RegenerateThemes --> ThematicOrg

    SidecarUpdate --> Polish[Step 09: Polish<br/>Optimize lit review flow]
    Polish --> Completion[Step 10: Completion]
    SkipToCompletion --> Completion

    Completion --> Outputs[Outputs Generated:<br/>✅ source-list.md/docx<br/>✅ literature-review.md/docx]
```

**Key Features:**
- **Dual Format Output:** Both MD (for state tracking) + DOCX (for students) via Pandoc
- **ABNT Citations:** Default citation format for Brazilian students
- **Two Paths:**
  - MANDATORY: Source list export (selected only OR all sources)
  - OPTIONAL: Full literature review synthesis
- **Collaborative Facilitation:** Patricia works WITH student to discover themes
- **Loop-back Capability:** Can return to Source Validation or invoke Carla
- **Sub-agents:** Parallel synthesis of thematic sections in Step 06
- **Tools Integration:**
  - Brainstorming (Step 05 - theme generation)
  - Advanced Elicitation (Step 06 - quality gates)

---

## Complete TAC Flow (All Three Workflows)

```mermaid
flowchart LR
    subgraph "Phase 1: Topic Discovery"
        Carla[Dr. Carla<br/>Topic Discovery]
    end

    subgraph "Phase 2: Source Validation"
        Patricia1[Patricia<br/>Source Validation<br/>5 parallel searches]
    end

    subgraph "Phase 3: Literature Review"
        Patricia2[Patricia<br/>Literature Review Builder<br/>Thematic organization]
    end

    subgraph "Phase 4: Writing"
        Joao[João<br/>Writing Guide<br/>Coming soon]
    end

    Student([Brazilian MBA Student]) --> Carla
    Carla -->|Validated topic +<br/>research question| Patricia1
    Patricia1 -->|10-15 selected<br/>sources| Patricia2
    Patricia2 -->|Source list +<br/>Lit review framework| Joao

    Patricia1 -.->|Topic scope change| Carla
    Patricia2 -.->|Need different sources| Patricia1
    Patricia2 -.->|Topic scope change| Carla

    style Carla fill:#e1f5ff
    style Patricia1 fill:#fff4e1
    style Patricia2 fill:#fff4e1
    style Joao fill:#f0ffe1
```

**Complete Integration:**
- **Carla (Topic Discovery)** → Validated topic + research question
- **Patricia (Source Validation)** → 10-15 selected sources with dual scoring
- **Patricia (Literature Review Builder)** → Source list + Thematic lit review framework
- **João (Writing Guide)** → _(Coming soon)_ Writing support and thesis structure

**Loop-back Points:**
1. Source Validation → Topic Discovery (if topic scope needs change)
2. Literature Review → Source Validation (if need different sources)
3. Literature Review → Topic Discovery (if topic scope changed during review)

---

## Literature Review Builder - Detailed Step Flow

```mermaid
flowchart TD
    subgraph "Phase 1: Initialization"
        S01[Step 01: Init<br/>Check continuation]
        S01b[Step 01b: Continue<br/>Resume session]
        S02[Step 02: Handoff Load<br/>Load selected sources<br/>+ Patricia sidecar access]
    end

    subgraph "Phase 2: Source List Export - MANDATORY"
        S03[Step 03: Export Choice<br/>S=Selected Only<br/>A=All Sources]
        Output1[📄 source-list.md/docx<br/>ABNT format]
    end

    subgraph "Phase 3: Lit Review Decision"
        S04[Step 04: Lit Review Decision<br/>Y=Continue<br/>N=Complete]
    end

    subgraph "Phase 4: Optional Lit Review"
        S05[Step 05: Thematic Org<br/>🎨 Brainstorming<br/>Collaborative theme discovery]
        S06[Step 06: Synthesis<br/>🤖 Sub-agents<br/>🔍 Advanced Elicitation<br/>Parallel theme synthesis]
        Output2[📄 literature-review.md/docx<br/>Lightweight draft]
    end

    subgraph "Phase 5: Review & Loop-back"
        S07[Step 07: Satisfaction<br/>S=Satisfied<br/>V=Source Validation<br/>C=Carla<br/>R=Regenerate]
    end

    subgraph "Phase 6: Completion"
        S08[Step 08: Sidecar Update<br/>Write to Patricia memory]
        S09[Step 09: Polish<br/>Optimize flow]
        S10[Step 10: Completion<br/>Workflow complete]
    end

    S01 -->|Existing?| S01b
    S01 -->|New?| S02
    S01b --> S02
    S02 --> S03
    S03 --> Output1
    Output1 --> S04
    S04 -->|Y| S05
    S04 -->|N| S10
    S05 --> S06
    S06 --> Output2
    Output2 --> S07
    S07 -->|S| S08
    S07 -->|R| S05
    S07 -->|V| ExitSV[Exit to<br/>Source Validation]
    S07 -->|C| ExitCarla[Exit to Carla]
    S08 --> S09
    S09 --> S10

    style S05 fill:#ffe1f5
    style S06 fill:#ffe1f5
    style Output1 fill:#e1ffe1
    style Output2 fill:#e1ffe1
```

**Step Count:** 11 steps (Create mode)
**Estimated Duration:** Multi-session (continuable)
**Tools Required:** Pandoc (for MD → DOCX conversion)

**Output Files:**
1. **source-list-{date}.md + .docx** (MANDATORY)
   - Selected sources only OR all sources with selected at top
   - ABNT citation format
   - Title, Author, Year, Journal, Abstract, Access Link

2. **literature-review-{date}.md + .docx** (OPTIONAL)
   - Overview, Thematic Groups, Theme Synthesis
   - Patterns & Gaps, Framework Outline
   - Lightweight reference document for student

---

_Last updated: 2026-01-26_
