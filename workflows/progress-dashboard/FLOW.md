# Progress Dashboard Workflow - Flow Diagram

## CREATE MODE (Single-Session Utility)

```
┌─────────────────────────────────────────────────────────────┐
│         THESIS PROGRESS DASHBOARD                           │
│    Motivation Through Visual Progress Tracking             │
└─────────────────────────────────────────────────────────────┘

Step 01: Gather Progress Data
  ├─ Scan thesis_artifacts folder for files
  ├─ Count markdown files (chapters, notes, outlines)
  ├─ Calculate word counts for each file
  ├─ Read sidecar files (Dr. Carla, Patricia, João, Lara)
  ├─ Extract:
  │  - Chapter count and completion status
  │  - Total words written
  │  - Sources collected (from Patricia sidecar)
  │  - Writing sessions (from João sidecar)
  │  - Defense prep status (from Lara sidecar)
  └─ Auto-proceed
      ↓
Step 02: Display Dashboard
  ├─ Format progress metrics with visual elements:
  │  - Chapter Progress [=========>    ] 60%
  │  - Words Written: 15,432 / ~25,000 (target)
  │  - Sources Collected: 23 articles
  │  - Writing Sessions: 12 completed
  │  - Defense Prep: In progress
  ├─ Show recent activity highlights
  ├─ Display milestone achievements
  └─ Auto-proceed
      ↓
Step 03: Motivation Boost
  ├─ Analyze progress data
  ├─ Generate personalized motivational message:
  │  - Celebrate recent achievements
  │  - Acknowledge momentum
  │  - Provide perspective on overall journey
  ├─ Suggest next actionable steps:
  │  - "Continue drafting Chapter 3"
  │  - "Review feedback from advisor on Chapter 2"
  │  - "Add 5 more sources to literature review"
  ├─ Display encouraging closing message
  └─ END
```

## Data Flow

```
Step 01 → [File counts, word counts, sidecar data]
   ↓
Step 02 → [Formatted dashboard with progress bars and metrics]
   ↓
Step 03 → [Motivational message + next step suggestions]
```

## Key Features

- **Visual Progress Metrics**: Clear progress bars and statistics
- **Multi-Dimensional View**: Chapters, sources, writing sessions, defense prep
- **Sidecar Integration**: Reads agent-specific progress data
- **Motivation Engine**: Celebrates progress, suggests next steps
- **Ultra-Fast**: Completes in under 2 minutes

## Usage

Run from any TAC agent or command:
```
/tac:progress-dashboard
```

Perfect for:
- Morning motivation check
- Weekly progress review
- Fighting "am I getting anywhere?" anxiety
- Celebrating milestones
