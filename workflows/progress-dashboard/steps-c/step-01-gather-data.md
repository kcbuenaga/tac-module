# Step 01: Gather Progress Data

**Goal:** Scan thesis artifacts folder, read files, calculate statistics, and load sidecar data to build comprehensive progress picture.

---

## 1. Welcome

Greet the user:

"**Welcome to your Thesis Progress Dashboard!**

Let me gather data on your thesis progress to show you how far you've come."

---

## 2. Scan Thesis Artifacts Folder

Search for thesis files in `{thesis_artifacts}` folder:

**File types to scan:**
- Markdown files: `**/*.md`
- Exclude: README.md, TODO.md, workflow plans, hidden folders

**Categorize files by type:**
- **Chapters**: Files with "chapter" in name or in chapters/ folder
- **Notes**: Files with "note" in name or in notes/ folder
- **Outlines**: Files with "outline" in name
- **Sources**: Files with "source" or "literature" in name
- **Other**: Any other markdown files

**For each file:**
- Get file path
- Get last modified date
- Read content and count words (split by whitespace)
- Note if file is empty (0 words)

**Calculate totals:**
- Total markdown files
- Total chapters (files in "chapters" category)
- Total word count across all files
- Average words per chapter

---

## 3. Read Sidecar Files

Load progress data from agent sidecars:

**Dr. Carla Sidecar** (`{thesis_artifacts}/.dr-carla-sidecar.json`):
- Topic evolution history
- Research question iterations
- Timeline milestones

**Patricia Sidecar** (`{thesis_artifacts}/.patricia-sidecar.json`):
- Sources collected (count)
- Search history
- Literature review progress

**João Sidecar** (`{thesis_artifacts}/.joao-sidecar.json`):
- Writing sessions completed (count)
- Writing patterns and progress
- Chapters drafted/revised

**Lara Sidecar** (`{thesis_artifacts}/.lara-sidecar.json`):
- Defense preparation status
- Practice sessions completed
- Confidence level

**If sidecar file doesn't exist or is empty:**
- Skip that agent's data
- Note: "No data available" for that dimension

---

## 4. Calculate Progress Metrics

Based on gathered data, calculate:

**Overall Progress:**
- Total files created
- Total words written
- Days since first file created (use oldest file modified date)
- Recent activity (files modified in last 7 days)

**Chapter Progress:**
- Chapters completed (non-empty chapter files)
- Chapters in progress (empty or < 500 words)
- Average words per chapter
- Estimated thesis length (if > 3 chapters, extrapolate)

**Research Progress:**
- Sources collected (from Patricia sidecar)
- Literature review status

**Writing Progress:**
- Writing sessions (from João sidecar)
- Words per day average (total words / days since start)

**Defense Progress:**
- Defense prep status (from Lara sidecar)

---

## 5. Check for Empty Project

**If no markdown files found:**
- Set `isNewProject = true`
- Note: This is a brand new thesis project
- Will display encouragement to start first chapter

**If files found but all empty:**
- Set `isEarlyStage = true`
- Note: Project just started, files created but not written yet

---

## 6. Store Data for Next Steps

Collect all metrics into a data structure:

```javascript
progressData = {
  files: { total, chapters, notes, outlines, sources, other },
  words: { total, perChapter, perDay },
  timeline: { daysActive, recentActivity },
  sidecars: {
    drCarla: { topicEvolution, milestones },
    patricia: { sourcesCollected, searchCount },
    joao: { writingSessions, chaptersProgress },
    lara: { defenseStatus, practiceCount }
  },
  status: { isNewProject, isEarlyStage }
}
```

---

## 7. Auto-Proceed

No menu needed - proceed automatically to dashboard display.

Load and execute `./steps-c/step-02-display-dashboard.md`

---

## Notes for LLM

- This is an init step for a non-document, single-session workflow
- Use Glob tool to scan for markdown files efficiently
- Read file contents to calculate accurate word counts
- Sidecar files are JSON - parse them safely, handle missing/malformed files
- Auto-proceed pattern - no user menu, automatically load next step after data gathering
- Be resilient to missing data - don't fail if sidecars don't exist
