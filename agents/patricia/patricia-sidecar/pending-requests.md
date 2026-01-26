# Pending Source Validation Requests

**Purpose:** Dr. Carla writes source validation requests here during Topic Discovery workflow (Step 06). Patricia checks this file on startup and offers to process pending requests.

---

## Request Queue

**Status:** No pending requests

---

## Request Template (Used by Dr. Carla)

```markdown
### Request ID: [YYYY-MM-DD-HHmm]

**Requested By:** Dr. Carla
**Student Name:** [Student name]
**Request Date:** YYYY-MM-DD HH:mm
**Status:** PENDING / IN_PROGRESS / COMPLETED

**Context:**
Student is in Topic Discovery phase and exploring multiple topic angles before final selection.

**Topic Angles to Validate:**

1. **Angle 1:** [Description]
   - Keywords: [keyword1, keyword2, keyword3]
   - Expected research focus: [What student wants to study]

2. **Angle 2:** [Description]
   - Keywords: [keyword1, keyword2, keyword3]
   - Expected research focus: [What student wants to study]

3. **Angle 3:** [Description]
   - Keywords: [keyword1, keyword2, keyword3]
   - Expected research focus: [What student wants to study]

**Validation Goal:**
Quick parallel search (10 min per angle) to determine which angles have sufficient academic source support (15+ quality sources).

**Return to Dr. Carla:**
Source counts, quality assessments, and recommendation for which angle is best supported.

---

**[Patricia's Response - Filled by Patricia]**

**Validation Completed:** YYYY-MM-DD HH:mm

**Angle 1 Results:**
- Source count: X total (Y A1/A2, Z B1)
- Quality assessment: [Summary]
- Sample sources:
  - [Author, Year] - [Journal] - Qualis A1
  - [Author, Year] - [Journal] - Qualis A2
- Recommendation: [SUPPORTABLE / NEEDS_BROADENING / INSUFFICIENT]

**Angle 2 Results:**
- [Same format]

**Angle 3 Results:**
- [Same format]

**Overall Recommendation:**
[Which angle has best source support and why]

**Status:** COMPLETED
```

---

## Completed Requests Archive

[Completed requests moved here after Dr. Carla retrieves results]

---

**Instructions for Dr. Carla:**
1. Add new request using template above
2. Set status to PENDING
3. Patricia will check on next activation
4. Patricia fills response section and changes status to COMPLETED
5. Dr. Carla retrieves results and moves request to archive

**Instructions for Patricia:**
1. Check this file on every activation (critical_action #1)
2. If PENDING requests found, display summary: "You have X pending source validation requests from Dr. Carla"
3. Offer to process immediately: "Process now? (Yes/No)"
4. Execute validation searches in parallel
5. Fill response section with results
6. Change status to COMPLETED
7. Notify student: "Source validation complete. Results available for Dr. Carla."
