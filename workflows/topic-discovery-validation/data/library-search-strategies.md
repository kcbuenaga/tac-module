# Library Search Strategies for Academic Research

**Purpose:** Guide effective academic source searching for topic validation and literature review.

**Usage:** Referenced in step-06 (library validation) when Patricia performs source searches.

---

## Search Strategy Framework

**Effective academic searching follows this pattern:**

1. **Identify key concepts** from research question
2. **Generate search terms** (synonyms, related terms, broader/narrower terms)
3. **Combine terms strategically** using Boolean operators
4. **Filter by source quality** (peer-reviewed, date range, publication type)
5. **Refine based on results** (too many? too few? off-topic?)

---

## Identifying Key Concepts

**From Research Question to Search Terms:**

**Example Research Question:**
"What adaptations do Brazilian software teams make to Scrum retrospectives, and how do these adaptations affect team satisfaction?"

**Key Concepts:**
- Concept 1: Brazilian software teams
- Concept 2: Scrum retrospectives
- Concept 3: Adaptations/modifications
- Concept 4: Team satisfaction/outcomes

**For Each Concept, Generate Variations:**

**Brazilian software teams:**
- Brazil* software
- Latin America software
- Brazilian tech
- Brazil IT
- (Note: May need to search without geographic filter and manually review)

**Scrum retrospectives:**
- retrospective*
- sprint review
- team reflection
- agile ceremony
- scrum meeting

**Adaptations:**
- adaptation*
- modification*
- customization*
- tailoring
- localization

**Team satisfaction:**
- satisfaction
- engagement
- morale
- team performance
- effectiveness

---

## Boolean Operators

**AND** - Narrows results (both terms must appear)
```
"scrum retrospective" AND adaptation
```
Use when you have too many results.

**OR** - Expands results (either term can appear)
```
retrospective OR "sprint review" OR "team reflection"
```
Use to capture synonyms and related concepts.

**NOT** - Excludes terms
```
agile NOT manufacturing
```
Use sparingly - may exclude relevant sources.

---

## Building Effective Search Strings

**Start Broad, Then Narrow:**

**Level 1 - Broad Exploration:**
```
agile AND retrospective
```
Goal: Understand the landscape, identify common terminology

**Level 2 - Add Specificity:**
```
(scrum OR agile) AND (retrospective OR "sprint review") AND (adaptation OR customization)
```
Goal: Focus on your specific interest

**Level 3 - Add Context:**
```
(scrum OR agile) AND (retrospective OR "sprint review") AND (adaptation OR customization) AND (Brazil* OR "Latin America")
```
Goal: Match your research question precisely

**Adjust Based on Results:**
- **Too many results (>500)?** Add more specific terms, use AND more
- **Too few results (<10)?** Remove specific terms, use OR more, broaden date range
- **Off-topic results?** Add exclusion terms (NOT), refine key concepts

---

## Phrase Searching

**Use Quotes for Exact Phrases:**

✅ Good:
```
"project management"
"stakeholder communication"
"agile transformation"
```

❌ Bad (searches each word separately):
```
project management
stakeholder communication
agile transformation
```

**When to Use Phrases:**
- Technical terms ("earned value management")
- Methodologies ("critical path method")
- Specific concepts ("scope creep")

---

## Wildcard and Truncation

**Asterisk (*) - Captures Variations:**

```
manag* → manage, manager, management, managing
```

```
Brazil* → Brazil, Brazilian
```

```
stakeholder* → stakeholder, stakeholders
```

**Use When:**
- Multiple word forms exist (organize, organization, organizational)
- Plural/singular variations matter
- Geographic variations (Brazil, Brazilian, Brazilians)

---

## Field-Specific Searching

**When Available, Search Specific Fields:**

**Title Search** - Most relevant results, fewer hits:
```
TITLE: ("project management" AND risk)
```

**Abstract Search** - Good balance:
```
ABSTRACT: (agile AND adaptation)
```

**Keyword Search** - Author-assigned terms:
```
KEYWORD: "scrum retrospective"
```

**Full Text Search** - Most hits, less precise:
```
FULLTEXT: (stakeholder AND communication)
```

**Strategy:** Start with Title/Abstract, expand to Full Text if too few results.

---

## Date Range Filtering

**Academic Research Recency Guidelines:**

**Last 5 years (2019-2024):**
- Current trends and emerging topics
- Technology-related topics (agile, digital transformation)
- Rapidly evolving fields

**Last 10 years (2014-2024):**
- Balanced view of established and emerging research
- Most PM topics fit here
- Good default range

**Last 15-20 years (2004-2024):**
- Foundational topics
- Historical context
- Slower-evolving fields

**Classic/Foundational Works:**
- Don't exclude seminal papers outside date range
- Include if frequently cited in recent work

**Strategy:**
- Start with 10-year range
- If too few sources, expand to 15-20 years
- If validating topic feasibility, focus on last 5 years (shows current interest)

---

## Source Type Filtering

**Prioritize by Quality:**

**Tier 1 - Highest Quality:**
- Peer-reviewed journal articles
- Academic conference proceedings (top-tier conferences)
- Academic book chapters (published by university presses)

**Tier 2 - Good Quality:**
- Industry research reports (Gartner, Forrester, McKinsey)
- Professional association publications (PMI, ACM)
- Thesis and dissertations (PhD level)

**Tier 3 - Use Sparingly:**
- Trade magazines
- White papers (vendor-neutral only)
- Master's theses

**Tier 4 - Avoid for Academic Research:**
- Blog posts
- General news articles
- Marketing materials
- Wikipedia (use references, not the article itself)

**Filter Strategy:**
- Initial validation: Tier 1 only (proves academic interest)
- Literature review: Tiers 1-2
- Practical context: Carefully selected Tier 2-3

---

## Database-Specific Strategies

### Google Scholar (Fallback Option)

**Advantages:**
- Broad coverage
- Includes citation counts
- Free access

**Limitations:**
- Less precise filtering
- Includes non-peer-reviewed content
- No advanced field searching

**Best Practices:**
- Use quote marks for phrases
- Use "cited by" to find influential papers
- Check "Related articles" for similar work
- Filter by date range manually
- Verify peer-review status manually

**Example Search:**
```
"scrum retrospective" adaptation Brazil 2014-2024
```

### Academic Database Connector (When Available)

**Advantages:**
- Precise field searching
- Advanced filters (peer-review, journal ranking)
- Access to full-text PDFs
- Citation export

**Databases Likely Included:**
- Web of Science
- Scopus
- IEEE Xplore (for IT/software topics)
- Business Source Complete (for business/management)
- ProQuest Dissertations

**Best Practices:**
- Use advanced search builder
- Save searches for later refinement
- Set up alerts for new publications
- Export citations to reference manager

---

## Search Refinement Tactics

**If Too Many Results (>100):**
1. Add more specific terms (AND)
2. Search in Title/Abstract only (not Full Text)
3. Narrow date range (last 5 years)
4. Add context terms (industry, geography, methodology)
5. Require peer-review filter

**If Too Few Results (<10):**
1. Remove specific terms
2. Use OR for synonyms
3. Expand date range (15-20 years)
4. Remove geographic restrictions
5. Search Full Text instead of Title/Abstract
6. Consider related concepts (broaden)

**If Off-Topic Results:**
1. Review search terms - are they ambiguous?
2. Add exclusion terms (NOT)
3. Use exact phrases instead of separate words
4. Search in Title only (most precise)
5. Check subject/keyword fields in relevant results

---

## Citation Chaining

**Two Directions:**

**Backward Citation (Reference Checking):**
- Find a highly relevant paper
- Review its references
- Follow promising citations

**Forward Citation (Citation Tracking):**
- Find a seminal paper
- See who cited it (Google Scholar "Cited by")
- More recent work building on foundations

**Use When:**
- Initial searches yield few results
- Building comprehensive literature review
- Identifying key authors in the field

---

## Search Documentation

**For Step-06 Validation, Document:**

1. **Search string used:**
   - Exact query with Boolean operators

2. **Database/source:**
   - Google Scholar, Academic Database, etc.

3. **Filters applied:**
   - Date range, peer-review, source type

4. **Results count:**
   - Total results, relevant results after review

5. **Sample sources:**
   - 3-5 most relevant sources with titles, URLs, relevance

**Why This Matters:**
- Reproducible searches
- Transparent validation
- Student can repeat/refine searches later

---

## Quality Over Quantity

**Remember:**
- 15 highly relevant sources > 50 tangentially related sources
- Recent sources show current academic interest
- Peer-reviewed sources provide credibility
- Geographic diversity may require broader searching
- Emerging topics may have fewer sources (that's okay)

---

## Patricia's Search Protocol

**When validating topics in step-06:**

1. Extract key concepts from research question
2. Build search string with Boolean operators
3. Search academic database (or Google Scholar fallback)
4. Apply filters: peer-reviewed, 10-year range
5. Count relevant results
6. Assess quality: recent? peer-reviewed? relevant?
7. Select 3-5 sample sources
8. Document search for transparency

**Return to Dr. Carla:**
- Source count (be honest - not inflated)
- Quality assessment (Good/Moderate/Limited)
- Sample sources with URLs and relevance descriptions
- Search string used (for student reference)

---

**Goal:** Provide students with realistic assessment of source availability so they can make informed topic choices.
