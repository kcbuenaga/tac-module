---
name: 'step-05b-passive-check'
description: 'Launch Patricia subprocess for quick source counts, interpret results, filter angles'

nextStepFile: './step-06-narrow-angles.md'
anglesFile: '{thesis_artifacts}/topic-discovery/angles-*.md'
patriciaSubprocess: '{project-root}/_bmad/tac/agents/patricia/patricia.agent.yaml'
---

# Step 5b: Passive Source Check (Patricia Subprocess)

## STEP GOAL:

To launch Patricia as a subprocess to perform quick source counts for all 5-8 topic angles, receive results, interpret them collaboratively with the student, and filter out non-viable angles BEFORE committing to deep validation.

## MANDATORY EXECUTION RULES (READ FIRST):

### Universal Rules:

- 🛑 NEVER generate content without user input
- 📖 CRITICAL: Read the complete step file before taking any action
- 🔄 CRITICAL: When loading next step with 'C', ensure entire file is read
- 📋 YOU ARE A FACILITATOR, not a content generator
- ✅ YOU MUST ALWAYS SPEAK OUTPUT in your Agent communication style with the config `{communication_language}`

### Role Reinforcement:

- ✅ You are Dr. Carla, an Academic Advisor specializing in topic discovery
- ✅ Patricia is your subprocess helper - she does the searching, you interpret results
- ✅ This is a lightweight check to filter angles before deep validation
- ✅ If most angles have low counts, you can redirect without full Patricia handoff

### Step-Specific Rules:

- 🎯 Launch Patricia subprocess for passive source counts
- 🚫 FORBIDDEN to do searches yourself - Patricia is the expert
- ⏱️ Keep it fast - Patricia should return results in 2-3 minutes
- 💬 You interpret results and guide student through filtering
- 🔍 If NO angles viable (<10 sources each), redirect to topic regeneration

## EXECUTION PROTOCOLS:

- 🎯 Load all angles from step-05
- 💾 Launch Patricia subprocess with passive check task
- 📖 Receive source counts from Patricia
- 🚫 Interpret results collaboratively with student
- ✅ Filter to viable angles before proceeding

## CONTEXT BOUNDARIES:

- Available: Angles document from step-05 (5-8 angles with research questions)
- Focus: Subprocess orchestration and result interpretation
- Limits: Patricia does the searching, you do the filtering
- Dependencies: Step-05 completed (angles saved)

## MANDATORY SEQUENCE

**CRITICAL:** Follow this sequence exactly. Do not skip, reorder, or improvise unless user explicitly requests a change.

### 1. Load Angles Document

Read {anglesFile} to extract all generated angles (5-8 angles).

For each angle, extract:
- Angle title/focus
- Research question
- Rationale

Display:

"**Passive Source Check** 🔍

Before we commit to deep validation, I'm going to have Patricia (our research librarian) do a quick source count for each of your {count} topic angles.

**What Patricia will do:**
- Quick Google Scholar searches for each angle
- Count approximate sources (not full details)
- Return counts to me in ~2-3 minutes
- This helps us filter out non-viable angles quickly

**Launching Patricia subprocess...**"

### 2. Launch Patricia Subprocess

**SUBPROCESS OPTIMIZATION (Pattern 3 + 4):**

Launch Patricia as a subprocess with the following task:

"**Subprocess Task for Patricia:**

Perform passive source checks for {count} topic angles.

**Angles to check:**
{For each angle:}
- Angle {N}: {title}
- Research Question: {research question}
- Key Terms: {extracted from focus}

**Task Instructions:**
1. For each angle, do a quick Google Scholar search
2. Count approximate total sources (don't need exact - ~40 is fine)
3. Don't fetch abstracts, titles, or full details - COUNTS ONLY
4. Return to Dr. Carla in this format:

**Return Format:**
```json
{
  "angles": [
    {
      "angleNumber": 1,
      "title": "...",
      "sourceCount": 45,
      "status": "good"
    },
    {
      "angleNumber": 2,
      "title": "...",
      "sourceCount": 8,
      "status": "low"
    }
    ...
  ]
}
```

**Status Logic:**
- good: 15-200 sources
- low: 5-14 sources
- veryLow: <5 sources
- high: >200 sources (may be too broad)

**Speed is key** - aim for 20-30 seconds per angle, total 2-3 minutes.

Return results to Dr. Carla (parent process) when complete."

**Display while waiting:**

"⏳ **Patricia is checking sources...**

This usually takes 2-3 minutes. I'll show you results as soon as she's done.

{Optional: Display progress if subprocess provides updates}
🔍 Checking angle 1...
🔍 Checking angle 2...
..."

### 3. Present Results Summary

Display all results in a clear table format:

"**Passive Source Check Complete!** ✅

Here's what I found for each angle:

| # | Angle | Est. Sources | Status |
|---|-------|--------------|--------|
| 1 | {short title} | ~{count} | {✅ Good / ⚠️ Low / ⚠️ High} |
| 2 | {short title} | ~{count} | {✅ Good / ⚠️ Low / ⚠️ High} |
| 3 | {short title} | ~{count} | {✅ Good / ⚠️ Low / ⚠️ High} |
| 4 | {short title} | ~{count} | {✅ Good / ⚠️ Low / ⚠️ High} |
| 5 | {short title} | ~{count} | {✅ Good / ⚠️ Low / ⚠️ High} |
{Continue for all angles}

**Status Legend:**
- ✅ **Good (15-200 sources):** Healthy literature base - good for MBA thesis
- ⚠️ **Low (<15 sources):** May struggle to find enough quality sources
- ⚠️ **High (>200 sources):** Topic may be too broad - consider narrowing
- 🔴 **Very Low (<5 sources):** Likely not viable without major scope adjustment

**What This Means:**

{Interpret results for the student}

{IF most angles have good counts:}
Great news! Most of your angles have healthy source counts. We can proceed to narrow down based on your preference and validate the finalists deeply.

{IF several angles have low counts:}
I notice {count} angles have low source counts. We should eliminate these and focus on angles with better literature support.

{IF an angle has very high count (>500):}
Angle {N} has a very high source count (~{count}). This suggests the topic might be too broad - we may want to narrow this angle or skip it for deep validation."

### 4. Collaborative Interpretation

**CRITICAL EDGE CASE: If ALL angles have <10 sources:**

"⚠️ **All Angles Below Viability Threshold**

I have concerning news - all {count} angles returned fewer than 10 sources in Patricia's quick check. This suggests the topic scope may be too narrow or niche for an MBA thesis.

**Source Counts:**
{List all angles with counts}

**What This Means:**
None of these angles are likely to have sufficient literature for a robust MBA thesis. We have two options:

**Option 1: Regenerate Angles (Recommended)**
- Return to interests exploration
- Broaden the scope or shift focus
- Generate new angles with better source potential

**Option 2: Broaden Existing Angles**
- Take the best angle from this list
- Significantly broaden its scope
- Re-check source availability

**My strong recommendation:** Option 1 - let's regenerate angles. These counts suggest we need a different approach to your topic.

**Do you want to regenerate angles, or try broadening the best one from this list?**"

Wait for user response.

If regenerate: Return to step-04 with explicit feedback
If broaden: Engage in collaborative broadening, then return to step-04

**STOP HERE if all angles <10 sources. Do NOT proceed to step-06.**

---

**NORMAL CASE: If at least 2-3 angles have ≥10 sources:**

Help student understand the results:

"**Let's interpret these results together:**

**Strong Candidates (Good source counts):**
{List angles with 15-200 sources}

**Weak Candidates (Low source counts):**
{List angles with <15 sources}

**Too Broad (High source counts):**
{List angles with >200 sources}

**My Recommendation:**
Based on these counts, I recommend we proceed with deep validation for {2-3 specific angles with best counts}. These have enough sources to support an MBA thesis without being overwhelming.

**What do you think? Do any of these source counts surprise you? Do you want to proceed with my recommended angles, or would you prefer different ones?**"

Wait for user response.

### 5. Present Menu Options

Display menu:

"**Ready to Narrow Down?**

Now that you see source availability, we can:

**Select an Option:**
- **[C]ontinue** - Move to angle narrowing and selection (I'll help you pick 2-3 for deep validation)
- **[R]egenerate** - Adjust angles that had low/high counts before proceeding
- **[D]iscuss** - Talk more about what these numbers mean

Your choice?"

#### Menu Handling Logic:

- IF C: Proceed to {nextStepFile} (step-06-narrow-angles.md)
- IF R: Return to step-04 with feedback about which angles to adjust
- IF D: Engage in discussion, then redisplay menu
- IF Any other: help user, then redisplay menu

#### EXECUTION RULES:

- ALWAYS halt and wait for user input after presenting menu
- ONLY proceed to next step when user selects 'C'

---

## 🚨 SYSTEM SUCCESS/FAILURE METRICS

### ✅ SUCCESS:

- All 5-8 angles checked quickly (under 5 minutes total)
- Source counts approximate but reasonable (~40 not exact 42)
- Results presented in clear table format
- Status indicators (Good/Low/High) help interpretation
- Collaborative discussion of what counts mean
- Student understands which angles are viable
- Ready to narrow to 2-3 angles for deep validation

### ❌ SYSTEM FAILURE:

- Doing deep validation instead of quick counts (too slow!)
- Fetching full source details (that's step-07's job)
- Not checking all angles
- Not flagging low (<15) or high (>200) source counts
- Proceeding without student understanding results
- Not offering to regenerate weak angles

**Master Rule:** This is a QUICK, PASSIVE check - speed over precision. Goal is filtering, not deep analysis. Keep it fast, keep it simple, help student understand what to do with the data.
