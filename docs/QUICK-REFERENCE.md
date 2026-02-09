# Quick Reference Guide - Treatment Page Template v2.1

## 🚀 Fast Track: Create a New Treatment Page in 30 Minutes

### Step 1: Prepare (5 minutes)
```bash
# Copy the worksheet
cp docs/VARIABLE-WORKSHEET.md docs/worksheets/[condition-name]-worksheet.md

# Copy the template
cp templates/treatment-page-template-v2.1.html pages/[condition-slug].html
```

### Step 2: Research & Fill Variables (15 minutes)
1. Look up clinical guidelines (IDSA, AAD, CDC, etc.)
2. Fill out the worksheet with all variables
3. Get MD input on:
   - Red flags
   - Exclusion criteria
   - First-line treatments
   - Guideline citations

### Step 3: Execute Find & Replace (5 minutes)

**Priority 1 - Core Identity:**
```
[CONDITION_NAME_FULL] → "Adult Urinary Tract Infection (UTI) Treatment"
[CONDITION_NAME_SHORT] → "UTI"
[CONDITION_NAME_COMMON] → "urinary tract infection"
[URL_SLUG] → "urinary-tract-infection-treatment-online"
[ICD10_CODE] → "N39.0"
```

**Priority 2 - Clinical:**
```
[GUIDELINE_SOURCE] → "Infectious Diseases Society of America (IDSA)"
[GUIDELINE_YEAR] → "2011"
[FIRST_LINE_RX] → "Nitrofurantoin 100mg BID × 5 days"
[ALTERNATIVE_RX] → "Trimethoprim-sulfamethoxazole DS BID × 3 days"
```

**Priority 3 - Safety:**
```
[RED_FLAGS] → "fever >101.5°F, flank pain, nausea/vomiting"
[EMERGENCY_IF] → Full bullet list of ER criteria
[NOT_ELIGIBLE_IF] → Full bullet list of exclusions
```

### Step 4: Content Sections (5 minutes)
Replace bracketed content blocks:
- `[CONDITION_OVERVIEW_PARAGRAPH]` - Write 2-3 sentences
- `[SYMPTOM_TABLE_ROWS]` - Add 6-10 table rows
- `[FAQ_ITEMS]` - Create 10-12 Q&A pairs
- `[MEDICATION_ROWS]` - Add 4-8 medication rows

### Step 5: Final Review
- [ ] All `[PLACEHOLDERS]` replaced
- [ ] No "TODO" or "[" remaining
- [ ] Links functional
- [ ] MD reviewed
- [ ] Deploy!

---

## 📋 Most Common Variables (Top 20)

| Variable | Example | Where Used |
|----------|---------|------------|
| `[CONDITION_NAME_FULL]` | "Adult Bacterial Sinusitis Treatment (Acute Bacterial Rhinosinusitis)" | Hero, title, throughout |
| `[CONDITION_NAME_SHORT]` | "Bacterial Sinusitis" | Headers, sections |
| `[CONDITION_NAME_COMMON]` | "sinus infection" | Patient-facing text |
| `[URL_SLUG]` | "bacterial-sinusitis-treatment-online" | URLs, IDs, anchors |
| `[ICD10_CODE]` | "J01.90" | Schema.org, metadata |
| `[GUIDELINE_SOURCE]` | "IDSA" | Clinical credibility |
| `[FIRST_LINE_RX]` | "Amoxicillin-clavulanate 875/125mg BID × 5-7d" | Treatment section |
| `[RED_FLAGS]` | "high fever, severe headache, vision changes" | Safety warnings |
| `[SPECIALIST_TYPE]` | "ENT" | Comparison table, when not section |
| `[LAST_REVIEWED_DATE]` | "2026-01-21" | Schema.org |

---

## 🎯 Critical Sections Checklist

### Must Be Excellent:
✅ **Section 1: Hero** - First impression, value prop
✅ **Section 2: Eligibility Checklist** - Clear yes/no decision
✅ **Section 13: Common Search Queries** - AI discovery (ChatGPT will read this!)
✅ **Section 15: FAQ** - Structured data for AI (CRITICAL for Perplexity, ChatGPT)

### Must Be Complete:
☑️ **Section 3: Comparison Table** - Show value vs alternatives
☑️ **Section 6: Symptoms & Red Flags Table** - Safety screening
☑️ **Section 10: Medications Table** - Specific regimens
☑️ **Section 12: When NOT to Use** - Legal protection

### Must Be Accurate:
⚕️ All red flags comprehensive
⚕️ All exclusion criteria listed
⚕️ Guideline sources with year
⚕️ Medication dosing correct

---

## 🔍 Find & Replace Patterns

### Text Editor (VS Code, Sublime, etc.)
```
Find:     \[([A-Z_]+)\]
Replace:  (manually, one by one)
```

### Automated Script (Use with caution!)
```bash
# Example: Replace core variables
sed -i 's/\[CONDITION_NAME_FULL\]/Adult Bacterial Sinusitis Treatment/g' page.html
sed -i 's/\[CONDITION_NAME_SHORT\]/Bacterial Sinusitis/g' page.html
sed -i 's/\[CONDITION_NAME_COMMON\]/sinus infection/g' page.html
```

**⚠️ Warning:** Only automate simple text replacements. Content blocks require manual writing.

---

## 📝 Content Block Templates

### [CONDITION_OVERVIEW_PARAGRAPH]
**Template:**
```
[CONDITION_NAME_SHORT] is a [type of condition] that affects [body system/area].
In adults, it typically [causes/presents with] [main symptoms]. TeleDirectMD MDs
use evidence-based criteria from [GUIDELINE_SOURCE] ([YEAR]) to diagnose and treat
[CONDITION_NAME_COMMON] via secure video visit when appropriate for telehealth.
```

**Example:**
```
Bacterial sinusitis is a bacterial infection of the sinus cavities that affects
the nasal passages and facial sinuses. In adults, it typically causes nasal
congestion, facial pressure, and thick nasal discharge lasting more than 10 days.
TeleDirectMD MDs use evidence-based criteria from the Infectious Diseases Society
of America (IDSA 2012) to distinguish bacterial from viral sinusitis and recommend
appropriate antibiotic treatment when indicated.
```

### [HERO_CARD_BULLETS]
**Template:**
```
- Complete evaluation for [condition symptoms]
- Evidence-based [treatment type] when appropriate
- Prescription sent directly to your pharmacy
- Clear follow-up instructions and safety guidance
```

### [ELIGIBLE_IF_BULLETS]
**Template:**
```
- You have [primary symptom] lasting [duration]
- You have [secondary symptom] or [alternative symptom]
- You do not have [red flag symptom]
- You have not had [recent relevant medical event]
- You are not [specific exclusion criterion]
```

---

## 🚨 Common Mistakes to Avoid

### Critical Errors:
❌ Leaving `[PLACEHOLDERS]` in production
❌ Forgetting Schema.org JSON arrays
❌ Missing red flags or exclusion criteria
❌ Broken internal links
❌ Wrong state count (must be 27)
❌ Overpromising treatment ("always," "guaranteed")

### Quality Issues:
⚠️ Inconsistent condition naming
⚠️ Missing guideline citations
⚠️ Vague red flags
⚠️ Incomplete FAQ section
⚠️ No related conditions linked

### SEO Problems:
📉 FAQ not optimized for AI
📉 Common queries missing
📉 Schema.org incomplete
📉 Related conditions not linked

---

## 💡 Pro Tips

### Speed Up Creation:
1. **Use worksheets in parallel** - MD fills clinical, you fill structure
2. **Start with FAQ** - Helps clarify scope and approach
3. **Copy similar condition** - Adapt UTI page for kidney infection, etc.
4. **Batch similar variables** - Replace all RX variables at once

### Ensure Quality:
1. **Read aloud** - Catches awkward phrasing
2. **Search for brackets** - `grep -r "\[" page.html` to find missed placeholders
3. **Validate JSON** - Use jsonlint.com for Schema.org
4. **Test mobile view** - Responsive design critical

### Optimize for AI:
1. **FAQ = Gold** - AI models prioritize structured Q&A
2. **Natural language** - Write how patients actually search
3. **Answer directly** - Don't bury the lead
4. **Link internally** - Related conditions boost discoverability

---

## 📊 Template Statistics

- **Total sections:** 16 (15 required, 1 optional)
- **Variables to replace:** 80+
- **Content blocks to write:** 25+
- **Tables to complete:** 4
- **FAQ items recommended:** 10-12
- **Related conditions:** 4
- **Word count range:** 4,000-6,000 words
- **Time to complete:** 30-60 minutes (with prep)

---

## 🎓 Learning Resources

### First Page?
1. Read: `TEMPLATE-USAGE-GUIDE.md` (15 min)
2. Review: An existing page (10 min)
3. Fill: `VARIABLE-WORKSHEET.md` (20 min)
4. Build: Your first page (60 min)

### Experienced?
1. Copy worksheet
2. Fill variables
3. Find & replace
4. Review quality
5. Deploy
⏱️ **Time: 30 minutes**

---

## 🔗 Quick Links

- **Template:** `/templates/treatment-page-template-v2.1.html`
- **Full Guide:** `/docs/TEMPLATE-USAGE-GUIDE.md`
- **Worksheet:** `/docs/VARIABLE-WORKSHEET.md`
- **Examples:** `/pages/` (when created)
- **GitHub:** Create PR when done

---

**Last Updated:** February 9, 2026
**For Template Version:** 2.1
