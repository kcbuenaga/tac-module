# Refinement Strategy Examples

**Purpose:** Practical examples of successful search refinements for common scenarios. Loaded by step-06 to guide students through iterative refinement process.

---

## Refinement Scenario Types

### Type 1: Too Few Sources (<8 threshold)
### Type 2: Too Many Irrelevant Sources
### Type 3: Sources Not Recent Enough
### Type 4: Missing Key Perspectives
### Type 5: Topic Scope Needs Adjustment

---

## Type 1: Too Few Sources (<8 threshold)

### Scenario 1A: Overly Specific Topic

**Original Topic:** "Agile scrum implementation in pediatric emergency departments in São Paulo"

**Initial Search Results:** 2 sources found

**Problem Diagnosis:**
- ❌ Too narrow geographically (São Paulo only)
- ❌ Too specific department type (pediatric emergency)
- ❌ Too specific methodology (scrum only)

**Refinement Strategy: BROADEN SCOPE**

**Option 1 - Geographic Expansion:**
- **New Topic:** "Agile implementation in emergency departments in Brazil"
- **Rationale:** Expand from one city to entire country
- **Expected Impact:** 10-15 sources
- **Trade-off:** Less specific to São Paulo context, but more literature available

**Option 2 - Department Type Expansion:**
- **New Topic:** "Agile scrum implementation in hospital emergency departments"
- **Rationale:** Remove pediatric constraint, include all EDs
- **Expected Impact:** 15-20 sources
- **Trade-off:** Mix of adult and pediatric contexts

**Option 3 - Methodology Expansion:**
- **New Topic:** "Agile methodologies in pediatric emergency departments"
- **Rationale:** Include all agile approaches (scrum, kanban, lean)
- **Expected Impact:** 8-12 sources
- **Trade-off:** Broader methodological scope

**Recommended Combination:**
- **New Topic:** "Agile methodologies in hospital emergency departments"
- **Search String:** `(agile OR scrum OR kanban) AND (hospital OR healthcare) AND ("emergency department" OR "emergency room" OR ED)`
- **Date Range:** Expand to last 15 years (was 10 years)
- **Languages:** Include English + Portuguese + Spanish
- **Expected Impact:** 25-30 sources

**Actual Result After Refinement:** 28 sources found ✅

---

### Scenario 1B: Emerging Topic (Limited Literature)

**Original Topic:** "Artificial intelligence for ESG reporting automation"

**Initial Search Results:** 4 sources found

**Problem Diagnosis:**
- ❌ Very recent topic (limited academic research)
- ❌ Intersection of three fields (AI + ESG + reporting)
- ✅ Topic is valid but literature still emerging

**Refinement Strategy: EXPAND CONCEPTUALLY**

**Option 1 - Include Adjacent Technologies:**
- **New Topic:** "Automation technologies for sustainability reporting"
- **Search String:** `(AI OR "artificial intelligence" OR automation OR "machine learning") AND (ESG OR sustainability OR "corporate social responsibility") AND (reporting OR disclosure)`
- **Expected Impact:** 12-15 sources

**Option 2 - Include Grey Literature:**
- **Sources:** Industry reports, white papers, working papers
- **Where to Look:** SSRN, ResearchGate, company reports (Deloitte, PwC)
- **Expected Impact:** +8 sources (total: 12)

**Option 3 - Broaden to Each Component:**
- Search separately:
  1. "AI in corporate reporting" → 15 sources
  2. "ESG disclosure automation" → 8 sources
  3. "Technology in sustainability reporting" → 12 sources
- **Expected Impact:** 35 sources (with overlap)

**Recommended Approach:**
- Combine Option 1 + Option 2
- Accept grey literature from reputable sources
- Note in thesis: "Emerging topic - limited academic research"
- **Expected Impact:** 15-18 total sources

**Actual Result After Refinement:** 16 sources (8 academic + 8 professional reports) ✅

---

## Type 2: Too Many Irrelevant Sources

### Scenario 2A: Ambiguous Term

**Original Topic:** "Cloud adoption in small businesses"

**Initial Search Results:** 850 sources found (too many, mostly irrelevant)

**Problem Diagnosis:**
- ❌ "Cloud" returns results about meteorology, philosophy ("cloud of unknowing"), etc.
- ❌ "Small business" varies by definition
- ✅ Topic is valid but search too broad

**Refinement Strategy: NARROW AND SPECIFY**

**Step 1 - Add Qualifying Terms:**
- **New Search:** `"cloud computing" AND "small business" NOT weather NOT meteorology`
- **Result:** 240 sources (better, but still too many)

**Step 2 - Add Context-Specific Terms:**
- **New Search:** `"cloud computing" AND ("small business" OR SME OR "small enterprise") AND (adoption OR implementation OR migration)`
- **Result:** 95 sources (manageable)

**Step 3 - Limit to Specific Aspects:**
- **New Search:** `"cloud computing" AND SME AND (adoption OR implementation) AND (challenges OR barriers OR factors)`
- **Result:** 42 sources (targeted)

**Step 4 - Filter by Field:**
- **New Search:** Previous search + limit to "Business" or "Information Systems" subject area
- **Result:** 28 sources (refined) ✅

**Actual Result:** 28 highly relevant sources

---

### Scenario 2B: Multi-Meaning Keyword

**Original Topic:** "Lean methodology in hospitals"

**Initial Search Results:** 1,200 sources (includes lean manufacturing, lean startup, lean cuisine!)

**Problem Diagnosis:**
- ❌ "Lean" has multiple meanings across industries
- ❌ Need to specify healthcare context

**Refinement Strategy: USE EXCLUSIONS**

**Refined Search:**
```
"lean" AND (hospital OR healthcare OR "health care" OR medical)
NOT manufacturing
NOT automotive
NOT startup
NOT "lean cuisine"
NOT construction
```

**Result:** 85 sources

**Further Refinement - Add Specific Concepts:**
```
"lean methodology" AND (hospital OR healthcare) AND (implementation OR process OR improvement OR "patient care")
```

**Result:** 38 sources (highly relevant) ✅

---

## Type 3: Sources Not Recent Enough

### Scenario 3A: Older Literature Dominates

**Original Topic:** "Digital transformation in retail banking"

**Initial Search Results:** 45 sources, but 35 are from 2010-2015 (pre-fintech disruption)

**Problem Diagnosis:**
- ❌ Most sources pre-date recent digital banking trends
- ❌ Missing mobile banking, AI, blockchain context
- ✅ Topic valid but needs recent perspective

**Refinement Strategy: RECENT FOCUS + SPECIFIC TECHNOLOGIES**

**Option 1 - Recent Date Filter:**
- **Original Date Range:** 2010-2025 (15 years)
- **New Date Range:** 2020-2025 (5 years)
- **Result:** 18 sources (but may miss foundational literature)

**Option 2 - Add Recent Technology Terms:**
- **New Search:** Original search + `AND ("mobile banking" OR fintech OR "digital wallet" OR "open banking" OR API OR blockchain OR AI)`
- **Keep Date Range:** 2015-2025 (10 years)
- **Result:** 32 sources (balance of recent + foundational)

**Recommended Approach:**
- Use Option 2 for main search (balanced)
- Separately search with Option 1 filter for very recent trends
- Include 5-8 foundational sources (2010-2015) for historical context
- **Expected Total:** 35-40 sources with good temporal balance ✅

---

## Type 4: Missing Key Perspectives

### Scenario 4A: Geographic Bias

**Original Topic:** "Remote work impact on productivity"

**Initial Search Results:** 38 sources, all from US/Europe

**Problem Diagnosis:**
- ❌ Missing Latin American, Asian, African perspectives
- ❌ Cultural context matters for remote work
- ✅ Need geographic diversity

**Refinement Strategy: EXPAND REGIONAL COVERAGE**

**Step 1 - Add Regional Keywords:**
- **New Search:** Original search + `AND (Brazil OR "Latin America" OR Asia OR Africa OR "developing countries" OR "emerging markets")`
- **Result:** +12 sources from other regions

**Step 2 - Search Regional Databases:**
- **SciELO:** Focus on Latin American sources
- **AfricanJournalsOnline:** African perspectives
- **Result:** +8 sources

**Step 3 - Include Local Language Sources:**
- **Search in Portuguese:** `trabalho remoto AND produtividade`
- **Search in Spanish:** `trabajo remoto AND productividad`
- **Result:** +6 sources

**Total After Refinement:** 64 sources with global perspectives ✅

---

### Scenario 4B: Methodological Imbalance

**Original Topic:** "Blockchain adoption in supply chain"

**Initial Search Results:** 28 sources, but all are conceptual/theoretical - no empirical studies

**Problem Diagnosis:**
- ❌ Missing case studies, surveys, experiments
- ❌ Need practical evidence, not just theory
- ✅ Add empirical focus

**Refinement Strategy: ADD METHODOLOGICAL TERMS**

**Refined Search:**
```
"blockchain" AND "supply chain" AND (
  "case study" OR empirical OR survey OR interview OR
  implementation OR "pilot study" OR experiment OR
  "real-world" OR deployment OR "field study"
)
```

**Result:** +15 empirical sources

**Total After Refinement:** 43 sources (balance of theory + practice) ✅

---

## Type 5: Topic Scope Needs Adjustment

### Scenario 5A: Topic Too Broad (Should Narrow)

**Original Topic:** "Leadership in organizations"

**Initial Search Results:** 8,500+ sources (completely unmanageable)

**Problem Diagnosis:**
- ❌ Topic too broad - "leadership" covers decades of research
- ❌ Need specific research question
- ⚠️ **Topic Change Signal** - Should consult Dr. Carla

**Refinement Strategy: COLLABORATE WITH DR. CARLA**

**Patricia's Recommendation:**
"Your initial search returned over 8,500 sources - this suggests the topic scope is too broad for a focused thesis. This isn't a search problem; it's a research question problem.

**I recommend consulting with Dr. Carla to narrow your topic.**

**Potential Narrowing Options:**
1. **Specific Leadership Style:** "Transformational leadership in healthcare organizations"
2. **Specific Context:** "Leadership during organizational change"
3. **Specific Outcome:** "Leadership impact on innovation in tech startups"
4. **Specific Level:** "Middle management leadership in multinational corporations"

Would you like to:
- **[C]arla:** Consult with Dr. Carla about narrowing your topic
- **[E]xplore:** I can search each narrower option to show source availability
- **[P]roceed:** Continue with current broad topic (not recommended)"

**User Selected:** [C]arla - Topic refinement with Dr. Carla ✅

---

### Scenario 5B: Topic Too Narrow (Legitimately Need to Broaden)

**Original Topic:** "Six Sigma implementation in Brazilian family-owned pharmaceutical manufacturing SMEs during COVID-19"

**Initial Search Results:** 0 sources

**Problem Diagnosis:**
- ❌ Too many constraints: Six Sigma + family-owned + pharma + SMEs + Brazil + COVID timing
- ❌ Intersection too specific
- ✅ Valid research interest but needs broader framing

**Refinement Strategy: SYSTEMATIC BROADENING**

**Phase 1 - Remove One Constraint at a Time:**

**Test 1:** Remove "COVID-19 timing"
- Search: `"Six Sigma" AND pharmaceutical AND SME AND Brazil AND "family-owned"`
- Result: 0 sources

**Test 2:** Remove "family-owned"
- Search: `"Six Sigma" AND pharmaceutical AND SME AND Brazil`
- Result: 2 sources

**Test 3:** Remove "Brazil" (keep regional)
- Search: `"Six Sigma" AND pharmaceutical AND SME AND ("Latin America" OR Brazil)`
- Result: 5 sources

**Test 4:** Expand methodology
- Search: `("Six Sigma" OR "lean six sigma" OR "quality management") AND pharmaceutical AND SME`
- Result: 18 sources ✅

**Phase 2 - Add Back Constraints as Filters:**
- Use 18 sources as foundation
- Filter manually for family-owned businesses (if data available)
- Note COVID-19 timing in analysis (not search constraint)
- Look for Brazil/Latin America examples within results

**Recommended Topic Revision:**
- **From:** "Six Sigma implementation in Brazilian family-owned pharmaceutical manufacturing SMEs during COVID-19"
- **To:** "Quality management implementation in pharmaceutical SMEs in Latin America"
- **Note in Thesis:** Focus on family-owned examples where available; analyze COVID-19 impact from timeline perspective

**Final Sources:** 18 academic + 6 industry reports = 24 total ✅

---

## Refinement Decision Tree

```
Start: How many sources found?

├─ 0-3 sources
│  └─ Topic likely TOO NARROW
│     ├─ Option 1: BROADEN SCOPE (geographic, temporal, conceptual)
│     ├─ Option 2: EXPAND METHODOLOGY (include adjacent approaches)
│     ├─ Option 3: INCLUDE GREY LITERATURE (reports, working papers)
│     └─ Option 4: CONSULT DR. CARLA (may need topic revision)
│
├─ 4-7 sources
│  └─ BELOW THRESHOLD - Needs refinement
│     ├─ Option 1: MODERATE BROADENING (expand one dimension)
│     ├─ Option 2: ADD RELATED KEYWORDS (synonyms, related concepts)
│     ├─ Option 3: EXPAND DATE RANGE (go back further in time)
│     └─ Option 4: ADD CUSTOM SOURCES (sources you already know)
│
├─ 8-30 sources
│  └─ THRESHOLD MET - Optimal range
│     ├─ Proceed to selection if quality/relevance good
│     ├─ Minor refinement if missing key perspectives
│     └─ Can add custom sources if needed
│
├─ 31-100 sources
│  └─ MANAGEABLE but may want to REFINE
│     ├─ Option 1: NARROW SCOPE (add specific constraints)
│     ├─ Option 2: INCREASE RECENCY (recent 5 years only)
│     ├─ Option 3: FILTER BY QUALITY (peer-reviewed, top journals)
│     └─ Option 4: PROCEED (if diversity valuable)
│
└─ 100+ sources
   └─ TOO MANY - Must refine
      ├─ Option 1: ADD SPECIFIC CONSTRAINTS (narrow research question)
      ├─ Option 2: USE EXCLUSIONS (NOT terms for irrelevant areas)
      ├─ Option 3: LIMIT TO TITLE/ABSTRACT (not full-text search)
      └─ Option 4: CONSULT DR. CARLA (topic may be too broad)
```

---

## Common Refinement Patterns

### Pattern 1: The Funnel (Broad → Narrow → Targeted)

**Use When:** Initial exploration of a topic

**Steps:**
1. **Broad Search:** Understand the landscape (100+ sources)
2. **Identify Subtopics:** Note emerging themes in top 20 sources
3. **Narrow Focus:** Add constraints based on themes (30-50 sources)
4. **Target Specifics:** Add methodological or contextual terms (10-20 sources)

**Example:**
1. "Digital transformation" → 5,000+ sources
2. Note theme: "Digital transformation in healthcare" → 450 sources
3. Add: "Digital transformation in hospitals" → 120 sources
4. Specify: "Digital transformation in hospital emergency departments" → 28 sources ✅

---

### Pattern 2: The Pyramid (Narrow → Broaden → Balance)

**Use When:** Topic too specific, need to expand scope

**Steps:**
1. **Narrow Search:** Original specific topic (0-5 sources)
2. **Broaden One Dimension:** Remove one constraint (10-15 sources)
3. **Broaden Second Dimension:** Remove another constraint (20-30 sources)
4. **Balance:** Keep broader scope, add filters for relevance (15-25 sources)

**Example:**
1. "Agile scrum in pediatric EDs in São Paulo" → 2 sources
2. "Agile in pediatric EDs" (remove geographic) → 8 sources
3. "Agile in emergency departments" (remove pediatric) → 35 sources
4. Filter by "implementation challenges" → 22 sources ✅

---

### Pattern 3: The Bridge (Gap Filling)

**Use When:** Missing specific perspectives or methodologies

**Steps:**
1. **Assess Gaps:** Identify what's missing (geographic, temporal, methodological)
2. **Targeted Additions:** Add specific searches for gap areas
3. **Integrate:** Combine original + gap-filling sources

**Example:**
- Original: 20 sources (all quantitative, US/Europe, pre-2020)
- Gap-Fill Search 1: Add "qualitative OR case study" → +8 sources
- Gap-Fill Search 2: Add "Latin America OR Asia" + SciELO → +6 sources
- Gap-Fill Search 3: Filter "2020-2025" → +10 sources
- **Total:** 44 balanced sources ✅

---

## Patricia's Refinement Tips

💡 **Iterate, Don't Guess**
- Make one change at a time
- Check results after each change
- Learn what works for your specific topic

💡 **Document Your Refinements**
- Keep track of search strings tried
- Note what worked and what didn't
- Include in thesis methodology section

💡 **Know When to Stop**
- 8-30 sources is optimal for most MBA theses
- Quality > Quantity
- Diminishing returns after 40-50 sources

💡 **Recognize Topic Change Signals**
- If refinement requires major scope shift → consult Dr. Carla
- If broadening changes research question → consult Dr. Carla
- If you're forcing sources to fit → topic may need revision

💡 **Use Refinement as Discovery**
- Refinement process teaches you about your field
- Note gaps in literature (potential contributions!)
- Identify debates and controversies (interesting angles)

---

**Last Updated:** 2026-01-25
**For:** Source Validation Workflow (Patricia - TAC Module)
**Version:** 1.0
