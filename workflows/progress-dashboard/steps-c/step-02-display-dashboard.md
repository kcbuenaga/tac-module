# Step 02: Display Dashboard

**Goal:** Format and display visual progress dashboard with statistics, progress bars, and highlights.

---

## 1. Determine Display Mode

Based on data from step-01:

**If isNewProject (no files found):**
- Display "New Project" dashboard (Section 6)
- Skip to step-03 for motivation

**If isEarlyStage (files but no content):**
- Display "Getting Started" dashboard (Section 7)
- Skip to step-03 for motivation

**If has progress data:**
- Display full dashboard (Sections 2-5)
- Proceed to step-03 for motivation

---

## 2. Display Header

```
═══════════════════════════════════════════════════════════
   📊 YOUR THESIS PROGRESS DASHBOARD
═══════════════════════════════════════════════════════════

Project: {project_name}
Date: {current date}
Days Active: {daysActive} days

═══════════════════════════════════════════════════════════
```

---

## 3. Display Core Metrics

### Writing Progress

```
📝 WRITING PROGRESS

Total Words: {totalWords:,} words
Chapters: {chaptersCompleted} completed, {chaptersInProgress} in progress

Progress: [=========>    ] {percentage}%

Daily Average: {wordsPerDay} words/day
Recent Activity: {recentFileCount} files modified this week
```

**Progress bar calculation:**
- Assume typical thesis: ~25,000 words (adjust based on discipline)
- Calculate percentage: (totalWords / 25000) * 100
- Generate progress bar with filled/empty blocks

---

## 4. Display Multi-Dimensional Progress

### Research & Sources (if Patricia data available)

```
📚 RESEARCH & SOURCES

Sources Collected: {sourcesCollected} articles
Literature Searches: {searchCount} queries
Literature Review: {status}
```

---

### Writing Sessions (if João data available)

```
✍️  WRITING SESSIONS

Sessions Completed: {writingSessions}
Chapters Drafted: {chaptersDrafted}
Revisions: {revisionsCount}
```

---

### Defense Preparation (if Lara data available)

```
🎓 DEFENSE PREPARATION

Status: {defenseStatus}
Practice Sessions: {practiceCount}
Readiness: {readinessLevel}
```

---

## 5. Display Highlights & Milestones

```
✨ RECENT HIGHLIGHTS

{if recentMilestones exist:}
✅ {Milestone 1}
✅ {Milestone 2}
✅ {Milestone 3}

{if no recent milestones:}
Keep working steadily - milestones are coming!
```

**Examples of milestones:**
- "Completed Chapter 3 draft"
- "Collected 20+ sources"
- "Wrote 5,000+ words"
- "Completed first defense practice"

---

## 6. Display "New Project" Dashboard

**For brand new projects (no files):**

```
═══════════════════════════════════════════════════════════
   🌱 WELCOME TO YOUR THESIS JOURNEY!
═══════════════════════════════════════════════════════════

Project: {project_name}

This is the beginning of your thesis adventure!

Current Status:
📝 Chapters: 0
📚 Sources: 0
✍️  Words: 0

Your thesis_artifacts folder is ready and waiting.
Let's start building your research!

═══════════════════════════════════════════════════════════
```

---

## 7. Display "Getting Started" Dashboard

**For projects with files but minimal content:**

```
═══════════════════════════════════════════════════════════
   🌱 YOUR THESIS IS TAKING SHAPE
═══════════════════════════════════════════════════════════

Project: {project_name}

Files Created: {fileCount}
Content Started: {wordCount} words

Progress: [=>            ] Early Stage

You've laid the foundation with files and structure.
Now it's time to start filling them with content!

═══════════════════════════════════════════════════════════
```

---

## 8. Display Footer

```
═══════════════════════════════════════════════════════════

Last Updated: {current timestamp}

Run /tac:progress-dashboard anytime to check your progress!

═══════════════════════════════════════════════════════════
```

---

## 9. Auto-Proceed

Once dashboard is displayed, proceed automatically to motivation.

Load and execute `./steps-c/step-03-motivation.md`

---

## Notes for LLM

- Use Unicode box drawing characters for clean visual formatting
- Progress bars should be proportional (not fake)
- Show what data is available, gracefully handle missing data
- "New Project" and "Getting Started" modes are encouraging, not discouraging
- Auto-proceed pattern - no user menu, automatically load next step after display
