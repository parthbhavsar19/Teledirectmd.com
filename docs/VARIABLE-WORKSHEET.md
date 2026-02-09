# Treatment Page Variable Worksheet

**Condition:** _______________________________
**Author:** _______________________________
**Date:** _______________________________
**Medical Reviewer:** _______________________________

---

## Core Variables

- **[CONDITION_NAME_FULL]:**
  _Full clinical name_

- **[CONDITION_NAME_SHORT]:**
  _Short name for titles_

- **[CONDITION_NAME_COMMON]:**
  _How patients say it_

- **[URL_SLUG]:**
  _URL path (lowercase-with-hyphens)_

- **[ICD10_CODE]:**
  _Primary ICD-10 code_

- **[CONDITION_CATEGORY]:**
  _Choose: respiratory | skin | uti-reproductive | pain | chronic-refill | other_

---

## Clinical Details

- **[GUIDELINE_SOURCE]:**
  _e.g., "Infectious Diseases Society of America (IDSA)"_

- **[GUIDELINE_YEAR]:**
  _e.g., "2012"_

- **[GUIDELINE_APPLICATION]:**
  _How guidelines are used (e.g., "distinguish viral from bacterial infection")_

- **[SPECIFIC_GUIDELINE_NAME_AND_YEAR]:**
  _Full citation_

- **[MAIN_SYMPTOMS]:**
  _Comma-separated list (e.g., "nasal congestion, facial pressure, thick discharge")_

- **[RED_FLAGS]:**
  _Emergency symptoms list_

- **[RED_FLAGS_BRIEF]:**
  _Short summary for disclaimers_

- **[RED_FLAGS_BRIEF_SUMMARY]:**
  _1-2 words for hero card_

- **[FIRST_LINE_RX]:**
  _Primary medication with dosing_

- **[ALTERNATIVE_RX]:**
  _Alternative medication(s)_

- **[SUPPORTIVE_CARE]:**
  _Non-prescription treatments_

---

## Eligibility Criteria

### [ELIGIBLE_IF]
*Positive inclusion criteria (3-5 bullets):*

1.
2.
3.
4.
5.

### [NOT_ELIGIBLE_IF]
*Exclusion criteria (4-6 condition-specific bullets):*

1.
2.
3.
4.
5.
6.

### [EMERGENCY_IF]
*Go to ER criteria (4-6 bullets):*

1.
2.
3.
4.
5.
6.

---

## Comparison Data

- **[TELEDIRECTMD_BEST_FOR]:**
  _Who should use TeleDirectMD for this condition_

- **[URGENT_CARE_REASON]:**
  _When to use urgent care instead_

- **[ER_REASON]:**
  _Emergency symptoms requiring ER_

- **[ER_SYMPTOMS_BRIEF]:**
  _Short list for disclaimers_

- **[PRIMARY_CARE_REASON]:**
  _When to use primary care instead_

- **[SPECIALIST_TYPE]:**
  _Relevant specialist (e.g., "ENT", "Dermatologist")_

- **[SPECIALIST_REASON]:**
  _When to see specialist_

- **[SPECIALIST_SCENARIOS]:**
  _Specific cases requiring specialist_

- **[URGENT_CARE_SCENARIOS]:**
  _Specific cases for urgent care_

---

## Decision Tree

- **[DECISION_STEP_3_QUESTION]:**
  _Condition-specific criteria question_

### [DECISION_STEP_3_CRITERIA]
*Criteria bullets (3-4):*

1.
2.
3.
4.

- **[ALTERNATE_PATH]:**
  _What to do if doesn't meet criteria_

- **[SYMPTOM_DURATION_THRESHOLD]:**
  _e.g., "10 days"_

- **[FEVER_THRESHOLD]:**
  _e.g., "102.2°F (39°C)"_

- **[BACTERIAL_VS_VIRAL]:**
  _How to distinguish (if applicable)_

- **[DIAGNOSTIC_CRITERIA]:**
  _Clinical criteria used for diagnosis_

---

## Hero Section Content

- **[CONDITION_OVERVIEW_PARAGRAPH]:**
  _2-3 sentences explaining what the condition is_

### [HERO_CARD_BULLETS]
*4 bullets about what's included:*

1.
2.
3.
4.

---

## Section 5: What Is The Condition?

- **[CONDITION_DEFINITION]:**
  _2-4 paragraphs covering:_
  - What the condition is
  - How common it is
  - Causes/triggers
  - How TeleDirectMD approaches it
  - Guideline sources (if applicable)

---

## Section 6: Symptoms & Red Flags Table

### [SYMPTOM_TABLE_ROWS]
*6-10 rows with format: Symptom | What it suggests | Telehealth appropriate? | Red flag?*

| Symptom/Situation | What it suggests | Telehealth OK? | Red flag? |
|-------------------|------------------|----------------|-----------|
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |

---

## Section 7: Differential Diagnosis (Optional)

- **[IF_DIFFERENTIAL_NEEDED]:**
  _Yes/No - Use for complex conditions_

### [POSITIVE_FINDINGS]
*Clinical findings supporting this diagnosis:*

1.
2.
3.
4.

### [DIFFERENTIAL_CONDITIONS]
*3-5 alternative diagnoses with descriptions:*

1.
2.
3.
4.
5.

---

## Section 8: When Is Telehealth Appropriate?

### [TELEHEALTH_APPROPRIATE_BULLETS]
*5-6 bullets:*

1.
2.
3.
4.
5.
6.

### [RED_FLAG_BULLETS]
*4-6 bullets requiring in-person/ER:*

1.
2.
3.
4.
5.
6.

---

## Section 9: Treatment Options

- **[TREATMENT_OVERVIEW_PARAGRAPH]:**
  _Introduction to treatment approach_

- **[TREATMENT_CATEGORY_1_NAME]:**
  _e.g., "Supportive Care"_

### [TREATMENT_CATEGORY_1_BULLETS]

1.
2.
3.
4.

- **[TREATMENT_CATEGORY_2_NAME]:**
  _e.g., "Prescription Medications"_

- **[TREATMENT_CATEGORY_2_CONTENT]:**
  _Introductory paragraph_

### [TREATMENT_CATEGORY_2_BULLETS]

1.
2.
3.
4.

- **[OPTIONAL_TREATMENT_CATEGORY_3]:**
  _If needed_

---

## Section 10: Medications Table

- **[INDIVIDUALIZATION_FACTORS]:**
  _e.g., "symptom pattern, allergy history, recent antibiotics"_

- **[CONDITION_SPECIFIC_MED_WARNING]:**
  _Special warnings if applicable_

### [MEDICATION_ROWS]
*4-8 rows with format: Medication | Dose | Duration | When used*

| Medication | Dose | Duration | When Used |
|------------|------|----------|-----------|
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |

---

## Section 11: Home Care & Expectations

- **[RECOVERY_TIMELINE_INTRO_PARAGRAPH]:**
  _Overview of recovery expectations_

### [RECOVERY_TIMELINE_BULLETS]
*Organized by time periods:*

- **Days 1-2:**
- **Days 3-5:**
- **Days 5-7:**
- **Beyond 1 week:**

### [HOME_CARE_BULLETS]
*Specific self-care instructions:*

1.
2.
3.
4.
5.

### [RETURN_TO_WORK_BULLETS]
*Guidance on return to activities:*

1.
2.
3.

### [FOLLOWUP_TRIGGERS]
*Warning signs requiring follow-up:*

1.
2.
3.
4.
5.

---

## Section 12: When NOT to Use TeleDirectMD

- **[PEDIATRIC_REFERRAL_GUIDANCE]:**
  _Where to seek pediatric care_

### [CONDITION_SPECIFIC_EXCLUSIONS]
*6-10 bullets:*

1.
2.
3.
4.
5.
6.
7.
8.
9.
10.

---

## Section 13: Common Search Queries

- **[PRIMARY_TREATMENT_TYPE]:**
  _e.g., "antibiotics", "prescriptions"_

- **[ANSWER_CAN_GET_RX_ONLINE]:**
  _Can patients get this treatment online?_

- **[ANSWER_VIRTUAL_DIAGNOSIS]:**
  _How MDs can diagnose via telehealth_

### [CONDITION_SPECIFIC_COMMON_QUERIES]
*4-6 additional Q&As:*

**Q1:**
**A1:**

**Q2:**
**A2:**

**Q3:**
**A3:**

**Q4:**
**A4:**

**Q5:**
**A5:**

**Q6:**
**A6:**

---

## Section 15: FAQ

### [FAQ_ITEMS]
*10-12 items covering: diagnostic criteria, treatment need, telehealth fit, first-line rx, timeline, supportive care, red flags, differential, stewardship, what makes TDMD different, insurance, imaging*

**FAQ 1:**
Q:
A:

**FAQ 2:**
Q:
A:

**FAQ 3:**
Q:
A:

**FAQ 4:**
Q:
A:

**FAQ 5:**
Q:
A:

**FAQ 6:**
Q:
A:

**FAQ 7:**
Q:
A:

**FAQ 8:**
Q:
A:

**FAQ 9:**
Q:
A:

**FAQ 10:**
Q:
A:

**FAQ 11:**
Q:
A:

**FAQ 12:**
Q:
A:

- **[CTA_HEADLINE]:**
  _Condition-specific, addressing common concern_

- **[VALUE_PROP_BRIEF]:**
  _Brief value proposition_

---

## Section 16: Related Conditions

- **[RELATED_CONDITIONS_INTRO]:**
  _Explain why these conditions are related_

### Related Condition 1
- **[RELATED_1_NAME]:**
- **[RELATED_1_URL]:**
- **[RELATED_1_DESC]:**

### Related Condition 2
- **[RELATED_2_NAME]:**
- **[RELATED_2_URL]:**
- **[RELATED_2_DESC]:**

### Related Condition 3
- **[RELATED_3_NAME]:**
- **[RELATED_3_URL]:**
- **[RELATED_3_DESC]:**

### Related Condition 4
- **[RELATED_4_NAME]:**
- **[RELATED_4_URL]:**
- **[RELATED_4_DESC]:**

---

## Metadata

- **[LAST_REVIEWED_DATE]:**
  _ISO format: "2026-01-21"_

- **[LAST_REVIEWED_DATE_DISPLAY]:**
  _Human format: "January 21, 2026"_

- **[CONDITION_DESCRIPTION_META]:**
  _2-3 sentence summary for schema.org_

---

## Schema.org Arrays (JSON Format)

- **[CONDITION_ALTERNATE_NAMES_ARRAY]:**
  ```json
  ["alternate name 1", "alternate name 2", "alternate name 3"]
  ```

- **[SYMPTOM_SCHEMA_ARRAY]:**
  ```json
  [
    {"@type": "MedicalSymptom", "name": "symptom 1"},
    {"@type": "MedicalSymptom", "name": "symptom 2"}
  ]
  ```

- **[TREATMENT_SCHEMA_ARRAY]:**
  ```json
  [
    {"@type": "MedicalTherapy", "name": "treatment 1"},
    {"@type": "MedicalTherapy", "name": "treatment 2"}
  ]
  ```

- **[SPECIALTY_SCHEMA_ARRAY]:**
  ```json
  [
    {"@type": "MedicalSpecialty", "name": "specialty 1"},
    {"@type": "MedicalSpecialty", "name": "specialty 2"}
  ]
  ```

- **[FAQ_SCHEMA_ARRAY]:**
  ```json
  [
    {
      "@type": "Question",
      "name": "Question text?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer text"
      }
    }
  ]
  ```

- **[SERVICE_DESCRIPTION]:**
  _One sentence describing the video visit service for this condition_

---

## Review Checklist

Before publishing, verify:

- [ ] All variables filled in
- [ ] Medical accuracy reviewed by MD
- [ ] Guideline sources cited with year
- [ ] Red flags comprehensive and clear
- [ ] Exclusion criteria complete
- [ ] No inappropriate controlled substance mentions
- [ ] State list accurate (27 states)
- [ ] Schema.org JSON valid
- [ ] Related conditions linked
- [ ] All internal links functional
- [ ] FAQ structured for AI discoverability
- [ ] Common queries answered in patient language
- [ ] Transparent about limitations

---

**Worksheet Version:** 2.1
**Date Created:** February 9, 2026
**For Template Version:** 2.1
