# Step 05: Finalize Timeline

**Goal:** Review the complete timeline, add final progress tracking elements, and present the finished document to the student.

---

## 1. Load Timeline Document

Read the complete timeline file:
- Path: `{thesis_artifacts}/timeline-{created}.md`
- Verify all sections are populated:
  - Defense deadline
  - Chapter milestones
  - Weekly goals

---

## 2. Add Progress Tracking Section

Update the Progress Tracking section in the timeline:

1. **Read the current timeline file**
2. **Find the section:** `## Progress Tracking`
3. **Update the section** to include actionable tracking:

```markdown
## Progress Tracking

**Last Updated:** {currentDate}

### Completed Milestones
- None yet - your journey begins now!

### Current Focus
- Week 1: {first week's goals}
- Immediate: {nearest chapter milestone}

### Status
✅ **Timeline Created:** {currentDate}
⏳ **Days Remaining:** {daysRemaining}
🎯 **Next Milestone:** {nearest chapter} - {date}

### How to Track Progress

**Weekly:**
- Check off completed goals in the Weekly Goals section
- Update "Last Updated" date
- Move completed items to "Completed Milestones"

**When updating (use Edit mode):**
- Mark chapters as complete when drafted
- Adjust future dates if timeline changes
- Celebrate completed milestones!

**Need help?**
- Run timeline in EDIT mode: `/tac:dr-carla:timeline -e`
- Run validation check: `/tac:dr-carla:timeline -v`
```

4. **Update frontmatter:**
   - Add 'step-05-finalize-timeline' to `stepsCompleted` array
   - Set `lastStep: 'step-05-finalize-timeline'`
   - Set `status: 'active'`

5. **Save the file**

---

## 3. Present Complete Timeline

Display a summary of the timeline to the student:

```
═══════════════════════════════════════════════════════════
   🎓 YOUR THESIS TIMELINE IS COMPLETE
═══════════════════════════════════════════════════════════

Defense Date: {defenseDate}
Days Remaining: {daysRemaining}
Total Chapters: {chapterCount}

📅 CHAPTER MILESTONES
{list chapter deadlines}

📆 NEXT 8 WEEKS
{list first 4 weekly goals}
... and {X} more weekly goals

📍 TIMELINE LOCATION
{full path to timeline file}

═══════════════════════════════════════════════════════════
```

---

## 4. Provide Usage Guidance

Explain to the student:

**How to use this timeline:**

1. **Daily/Weekly Reference:**
   - Keep the timeline file open in your notes app
   - Review weekly goals every Monday
   - Check off completed items

2. **Progress Updates:**
   - Run Edit mode when you complete milestones: `/tac:dr-carla:timeline -e`
   - Update dates if your schedule changes
   - Mark chapters complete as you finish drafts

3. **Quality Check:**
   - Run Validate mode periodically: `/tac:dr-carla:timeline -v`
   - Ensures timeline stays realistic and complete

4. **Staying on Track:**
   - If you fall behind, adjust forward milestones - don't give up
   - Defense date is fixed, but internal milestones can flex
   - Weekly progress beats last-minute marathons

**Key principle:** This timeline transforms your distant deadline into immediate, actionable steps. Use it as your roadmap, not your prison.

---

## 5. Next Steps Recommendation

Suggest to the student:

**Immediate actions:**
- [ ] Save timeline file path to your quick-access bookmarks
- [ ] Set a recurring Monday reminder to review weekly goals
- [ ] Share timeline with your advisor (optional)
- [ ] Start this week's first goal today

**This week:**
- Focus on Week 1 goals from your timeline
- Don't try to work ahead - steady progress wins
- Come back to Edit mode if anything changes

**Long-term:**
- Review monthly milestones when approaching them
- Adjust timeline if major life events occur
- Celebrate completed chapter milestones!

---

## 6. Closing Message

End with an encouraging message from Dr. Carla:

```
You now have a clear roadmap from today to your defense.
The timeline you've created turns an overwhelming thesis
into manageable weekly tasks.

Remember: Progress, not perfection. Consistency beats intensity.

Your thesis journey starts now. You've got this! 🎓

— Dr. Carla
```

---

## 7. Workflow Complete

This is the final step - no menu needed.

Update the timeline frontmatter one final time:
- Add 'step-05-finalize-timeline' to `stepsCompleted` array
- Set `lastStep: 'step-05-finalize-timeline'`
- Set `status: 'active'`
- Save the file

**Workflow ends here.**

---

## Notes for LLM

- This is the final step of Create mode
- Present the complete timeline proudly - the student has a real plan now
- Be encouraging and motivating in the closing
- Emphasize that Edit and Validate modes are available
- The timeline file is now ready for use and future editing
- No further steps in Create mode
