# TeleDirectMD Treatment Page Template v2.1 - Usage Guide

## Overview

This template is a comprehensive, reusable HTML structure for creating condition-specific treatment pages for TeleDirectMD. It's optimized for:
- SEO and AI discoverability (ChatGPT, Perplexity, etc.)
- Clear patient decision-making
- Medical accuracy and evidence-based guidelines
- Consistent brand messaging

## File Location

**Template:** `/templates/treatment-page-template-v2.1.html`

## How to Use This Template

### Step 1: Define Your Variables

Before creating a new treatment page, fill out the complete variable list. Start by copying the variable reference sheet below:

### Step 2: Find and Replace

Use your text editor's find-and-replace feature to substitute all placeholder variables with your condition-specific content:

1. Replace core variables (CONDITION_NAME_FULL, URL_SLUG, etc.)
2. Replace clinical details (GUIDELINE_SOURCE, FIRST_LINE_RX, etc.)
3. Fill in all bracketed sections with actual content
4. Review and customize narrative sections

### Step 3: Content Sections

Each section serves a specific purpose:

#### Always Include (16 sections):
1. **Hero** - First impression, value proposition
2. **Eligibility Checklist** - Clear yes/no criteria
3. **Comparison Table** - TeleDirectMD vs other care options
4. **Decision Guide** - Step-by-step care pathway
5. **Cost Breakdown** - Transparent pricing
6. **What Is The Condition** - Educational content
7. **Symptoms & Red Flags** - Safety screening
8. **When Is Telehealth Appropriate** - Clinical guidance
9. **Treatment Options** - Evidence-based approaches
10. **Medications Table** - Specific regimens
11. **Home Care & Expectations** - Recovery timeline
12. **When NOT to Use TeleDirectMD** - Exclusions
13. **Common Search Queries** - AI optimization
14. **Disclaimer** - Legal protection
15. **FAQ** - Structured data for AI
16. **Related Conditions** - Internal linking

#### Optional Sections:
- **Differential Diagnosis** (Section 7) - For complex conditions where distinguishing from other diagnoses is critical

### Step 4: Quality Checklist

Before publishing, verify:

- [ ] All [PLACEHOLDER] variables replaced
- [ ] Medical accuracy reviewed by MD
- [ ] Guideline sources cited (with year)
- [ ] Red flags clearly emphasized
- [ ] Exclusion criteria comprehensive
- [ ] No controlled substances mentioned inappropriately
- [ ] State list accurate (27 states)
- [ ] Schema.org structured data complete
- [ ] Related conditions linked properly
- [ ] FAQ items have clear questions and answers
- [ ] All internal links functional

## Variable Reference Guide

### Core Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `[CONDITION_NAME_FULL]` | Complete clinical name | "Adult Bacterial Sinusitis Treatment (Acute Bacterial Rhinosinusitis)" |
| `[CONDITION_NAME_SHORT]` | Shortened version for headers | "Bacterial Sinusitis" |
| `[CONDITION_NAME_COMMON]` | Patient-friendly term | "sinus infection" |
| `[URL_SLUG]` | URL path (lowercase, hyphens) | "bacterial-sinusitis-treatment-online" |
| `[ICD10_CODE]` | Primary diagnosis code | "J01.90" |
| `[CONDITION_CATEGORY]` | Category grouping | respiratory, skin, uti-reproductive, pain, chronic-refill, other |

### Clinical Details

| Variable | Description | Example |
|----------|-------------|---------|
| `[GUIDELINE_SOURCE]` | Authoritative medical organization | "Infectious Diseases Society of America (IDSA)" |
| `[GUIDELINE_YEAR]` | Publication year | "2012" |
| `[MAIN_SYMPTOMS]` | Comma-separated symptom list | "nasal congestion, facial pressure, thick discharge" |
| `[RED_FLAGS]` | Emergency warning signs | "high fever, severe headache, vision changes" |
| `[FIRST_LINE_RX]` | Primary treatment | "Amoxicillin-clavulanate 875/125 mg BID × 5-7 days" |
| `[ALTERNATIVE_RX]` | Backup options | "Doxycycline (for penicillin allergy)" |
| `[SUPPORTIVE_CARE]` | Non-prescription measures | "Saline irrigation, decongestants, pain relief" |

### Eligibility Criteria

| Variable | Description |
|----------|-------------|
| `[ELIGIBLE_IF]` | Positive inclusion criteria (3-5 bullets) |
| `[NOT_ELIGIBLE_IF]` | Exclusion criteria (4-6 bullets) |
| `[EMERGENCY_IF]` | Go-to-ER criteria (4-6 bullets) |

### Comparison Data

| Variable | Description |
|----------|-------------|
| `[TELEDIRECTMD_BEST_FOR]` | When to use TeleDirectMD |
| `[URGENT_CARE_REASON]` | When to use urgent care instead |
| `[ER_REASON]` | When to use ER instead |
| `[PRIMARY_CARE_REASON]` | When to use primary care instead |
| `[SPECIALIST_TYPE]` | Relevant specialist (e.g., ENT, Dermatologist) |
| `[SPECIALIST_REASON]` | When to see specialist |

### Decision Tree

| Variable | Description |
|----------|-------------|
| `[DECISION_STEP_3_QUESTION]` | Condition-specific screening question |
| `[DECISION_STEP_3_CRITERIA]` | Criteria bullets for Step 3 |
| `[ALTERNATE_PATH]` | What to do if doesn't meet Step 3 criteria |

### Related Conditions

Create 4 related condition cards:

| Variable | Description |
|----------|-------------|
| `[RELATED_1_NAME]` | Condition name |
| `[RELATED_1_URL]` | Link to treatment page |
| `[RELATED_1_DESC]` | Brief description (1-2 sentences) |

Repeat for `RELATED_2`, `RELATED_3`, `RELATED_4`

### Metadata

| Variable | Description | Format |
|----------|-------------|--------|
| `[LAST_REVIEWED_DATE]` | Medical review date | ISO 8601: "2026-01-21" |
| `[LAST_REVIEWED_DATE_DISPLAY]` | Human-readable date | "January 21, 2026" |
| `[CONDITION_DESCRIPTION_META]` | Schema.org description | 2-3 sentence summary |

## Section-Specific Content Guidelines

### Hero Section
- Keep condition overview paragraph to 2-3 sentences
- Mention guideline-based approach when applicable
- Hero card bullets: 4 items about what's included
- Keep red flag summary brief

### Eligibility Checklist
- Include criteria: 3-5 condition-specific bullets
- Exclude criteria: 4-6 condition-specific bullets
- Always include age 18+, state location, payment ability
- Always exclude pediatric, controlled substances

### Comparison Table
- Keep "Best for" descriptions concise (2-3 lines max)
- Emphasize TeleDirectMD advantages without exaggeration
- ER row should emphasize true emergencies only

### Decision Guide
- Step 1: Always emergency screening
- Step 2: Always age verification (18+)
- Step 3: Condition-specific appropriateness
- Step 4: Confirmation and CTA

### Symptoms & Red Flags Table
- 6-10 rows covering spectrum of severity
- Columns: Symptom | What it suggests | Telehealth appropriate? | Red flag?
- Include both benign and concerning presentations

### Treatment Options
- Organize into 2-3 categories (e.g., Supportive Care, Prescription, Advanced)
- Mention guideline sources
- Avoid "always" or "never" language
- Emphasize individualization

### Medications Table
- 4-8 rows typical
- Include first-line, alternatives, and supportive care
- Always add disclaimer about individualization
- Note allergy alternatives

### FAQ Section
- 10-12 questions typical
- Cover: diagnosis, treatment criteria, timeline, red flags, differential, stewardship, insurance, imaging limitations
- Use conversational tone
- Include structured data for AI

## Schema.org Structured Data

The template includes comprehensive structured data for:
- BreadcrumbList
- MedicalWebPage
- MedicalCondition
- MedicalProcedure
- FAQPage
- Organization

Ensure all schema variables are filled:
- `[CONDITION_ALTERNATE_NAMES_ARRAY]` - JSON array of alternate names
- `[SYMPTOM_SCHEMA_ARRAY]` - JSON array of symptoms
- `[TREATMENT_SCHEMA_ARRAY]` - JSON array of treatments
- `[SPECIALTY_SCHEMA_ARRAY]` - JSON array of medical specialties
- `[FAQ_SCHEMA_ARRAY]` - JSON array of FAQ items with Question/Answer

## SEO & AI Optimization

### Critical for AI Discovery:
1. **Section 13: Common Search Queries** - Answers top patient questions in plain language
2. **Section 15: FAQ** - Structured Q&A format AI models prefer
3. **Schema.org markup** - Machine-readable structured data

### Best Practices:
- Use natural language (how patients actually search)
- Answer questions directly and concisely
- Include cost, state availability, virtual diagnosis capability
- Emphasize MD-only care, evidence-based approach
- Be transparent about limitations

## Common Mistakes to Avoid

1. **Forgetting to replace placeholders** in Schema.org JSON
2. **Overpromising treatment** - Use "may," "when appropriate," "if clinically indicated"
3. **Inadequate red flags** - Be comprehensive about when NOT to use telehealth
4. **Missing exclusion criteria** - Pediatrics, controlled substances, complex cases
5. **Inconsistent condition naming** - Use consistent terminology throughout
6. **Broken internal links** - Verify all `/what-we-treat`, `/book`, and related condition links
7. **Outdated state list** - Verify current 27-state coverage
8. **Missing guideline citations** - Include organization name and year

## File Naming Convention

When creating new pages, use this naming pattern:
```
[condition-slug].html
```

Examples:
- `bacterial-sinusitis-treatment-online.html`
- `urinary-tract-infection-treatment-online.html`
- `acne-treatment-online.html`

## Version History

- **v2.1** (Current) - AI-optimized with enhanced FAQ and common queries sections
- **v2.0** - Added decision guide and comprehensive comparison table
- **v1.0** - Initial template with 16 core sections

## Support

For questions about this template:
- **Medical content**: Consult with Dr. Parth Bhavsar
- **Technical issues**: Development team
- **SEO optimization**: Marketing team

## Quick Start Checklist

When creating a new treatment page:

1. [ ] Copy template file
2. [ ] Rename with condition slug
3. [ ] Fill out all core variables
4. [ ] Write condition-specific content for each section
5. [ ] Replace all `[PLACEHOLDER]` text
6. [ ] Complete Schema.org structured data
7. [ ] Medical review by MD
8. [ ] Test all internal links
9. [ ] Validate HTML
10. [ ] SEO review
11. [ ] Deploy to production

---

**Last Updated:** February 9, 2026
**Template Version:** 2.1
**Maintained by:** TeleDirectMD Development Team
