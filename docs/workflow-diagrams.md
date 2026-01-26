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

_Last updated: 2026-01-25_
