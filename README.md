# TeleDirectMD Website Repository

**MD-Only Virtual Urgent Care for Adults**

This repository contains templates and resources for creating consistent, medically-accurate, SEO-optimized treatment pages for TeleDirectMD.

## What is TeleDirectMD?

TeleDirectMD provides board-certified MD-only virtual urgent care for adults 18+ via secure video visits. We offer:

- **$49 flat-fee** per adult visit
- **No insurance required** (or accepted)
- **27 states served** across the US
- **MD-only care** (no mid-level providers)
- **Evidence-based treatment** following clinical guidelines

## Repository Structure

```
Teledirectmd.com/
├── templates/
│   └── treatment-page-template-v2.1.html    # Main template for condition pages
├── docs/
│   ├── TEMPLATE-USAGE-GUIDE.md              # Comprehensive usage instructions
│   └── VARIABLE-WORKSHEET.md                # Working document for new pages
├── TeleDirectMD_Intake_Form.html            # Patient intake form
├── TeleDirectMD_React_Homepage.zip          # Homepage React components
└── README.md                                # This file
```

## Quick Start: Creating a New Treatment Page

1. **Review the documentation**
   - Read `/docs/TEMPLATE-USAGE-GUIDE.md` for complete instructions
   - Download `/docs/VARIABLE-WORKSHEET.md` as your working document

2. **Fill out variables**
   - Complete all required variables in the worksheet
   - Consult medical guidelines for accuracy
   - Get MD review for clinical content

3. **Use the template**
   - Copy `/templates/treatment-page-template-v2.1.html`
   - Find and replace all `[PLACEHOLDER]` variables
   - Review all 16 sections for completeness

4. **Quality check**
   - Verify all placeholders replaced
   - Test all internal links
   - Validate HTML structure
   - Get final MD approval

5. **Deploy**
   - Name file: `[condition-slug].html`
   - Upload to production
   - Update sitemap

## Treatment Page Template v2.1

The template includes **16 comprehensive sections**:

### Always Include:
1. Hero - Value proposition and overview
2. Eligibility Checklist - Clear inclusion/exclusion criteria
3. Comparison Table - TeleDirectMD vs other care options
4. Decision Guide - Step-by-step care pathway
5. Cost Breakdown - Transparent $49 pricing
6. What Is The Condition - Educational content
7. Symptoms & Red Flags - Safety screening table
8. When Is Telehealth Appropriate - Clinical guidance
9. Treatment Options - Evidence-based approaches
10. Medications Table - Specific regimens
11. Home Care & Expectations - Recovery timeline
12. When NOT to Use TeleDirectMD - Clear exclusions
13. Common Search Queries - AI optimization (critical!)
14. Disclaimer - Legal protection
15. FAQ - Structured Q&A for AI discovery (critical!)
16. Related Conditions - Internal linking

### Optional:
- Differential Diagnosis (for complex conditions)

## Key Features

### SEO & AI Optimization
- Structured data (Schema.org)
- FAQ section optimized for ChatGPT, Perplexity, Claude
- Common search queries answered in plain language
- Comprehensive related condition linking

### Medical Accuracy
- Evidence-based guideline citations
- Clear red flag warnings
- Appropriate exclusion criteria
- MD review requirements

### Patient Experience
- Transparent pricing ($49 flat fee)
- Clear decision-making tools
- Step-by-step guidance
- No surprises about limitations

### Legal Protection
- Comprehensive disclaimers
- Clear scope of practice
- Emergency care guidance
- Age restrictions (18+ only)

## Brand Standards

### Core Messaging
- **MD-only care** - No mid-level providers (PAs, NPs)
- **$49 flat fee** - No hidden costs, no insurance billing
- **Adults 18+ only** - No pediatric care
- **Evidence-based** - Clinical guidelines followed
- **Transparent limitations** - Clear about when NOT appropriate

### Tone & Voice
- Professional but accessible
- Direct and transparent
- Patient education focused
- Safety-conscious
- No overpromising

### Key Differentiators
1. MD-only (not mid-levels)
2. Flat fee (no surprise bills)
3. No insurance needed
4. Evidence-based guidelines
5. Clear exclusion criteria

## States Served (27)

Alabama, Arizona, California, Colorado, Florida, Georgia, Illinois, Indiana, Iowa, Kentucky, Louisiana, Michigan, Minnesota, Mississippi, Missouri, Nevada, New Jersey, North Carolina, Ohio, Oklahoma, Pennsylvania, South Carolina, Tennessee, Texas, Utah, Washington, Wisconsin

*Note: Patient must be physically located in a served state during the video visit*

## Medical Guidelines Referenced

Treatment pages should cite authoritative sources:
- **IDSA** - Infectious Diseases Society of America
- **AAD** - American Academy of Dermatology
- **AUGS** - American Urogynecologic Society
- **CDC** - Centers for Disease Control
- **ACP** - American College of Physicians

Always include guideline year (e.g., "IDSA 2012 guidelines")

## Not Prescribed Through TeleDirectMD

- **Controlled substances** (narcotics, benzodiazepines, stimulants)
- **Pediatric medications** (under 18)
- **Compounded medications** (not available through standard pharmacies)
- **Injectable medications** (except in rare cases where self-administered)

## Development Workflow

### Branch Strategy
- `main` - Production-ready code
- `claude/[feature-name]-[id]` - Feature branches

### Creating New Pages
1. Create feature branch: `claude/[condition-slug]-[id]`
2. Use template and worksheet
3. Complete all sections
4. Get MD review
5. Commit and push
6. Create pull request to main

### Commit Message Format
```
Add [Condition Name] treatment page

- Complete all 16 template sections
- MD reviewed by Dr. [Name]
- Includes Schema.org structured data
- Related conditions linked

https://claude.ai/code/session_[ID]
```

## Quality Standards

### Medical Accuracy
- [ ] Guideline sources cited
- [ ] Red flags comprehensive
- [ ] Exclusion criteria complete
- [ ] MD reviewed and approved

### Technical
- [ ] All placeholders replaced
- [ ] HTML validates
- [ ] Internal links functional
- [ ] Schema.org JSON valid

### SEO
- [ ] FAQ optimized for AI
- [ ] Common queries answered
- [ ] Related conditions linked
- [ ] Meta descriptions complete

### Brand Compliance
- [ ] MD-only messaging
- [ ] $49 flat fee highlighted
- [ ] Adults 18+ specified
- [ ] Clear limitations stated

## Resources

### Documentation
- **Template Guide:** `/docs/TEMPLATE-USAGE-GUIDE.md`
- **Variable Worksheet:** `/docs/VARIABLE-WORKSHEET.md`
- **Template File:** `/templates/treatment-page-template-v2.1.html`

### External Resources
- [Schema.org Medical Documentation](https://schema.org/MedicalCondition)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [HTML Validator](https://validator.w3.org/)

## Support

### Questions About:
- **Medical content** - Contact Dr. Parth Bhavsar
- **Template usage** - See `/docs/TEMPLATE-USAGE-GUIDE.md`
- **Technical issues** - Development team
- **SEO optimization** - Marketing team

## Version History

### v2.1 (Current) - February 2026
- AI-optimized template
- Enhanced FAQ structure
- Common search queries section
- Comprehensive Schema.org markup

### v2.0 - January 2026
- Decision guide added
- Comparison table enhanced
- Cost breakdown section

### v1.0 - 2025
- Initial template structure
- 16 core sections

---

## License

Proprietary - TeleDirectMD, LLC
All rights reserved.

## Contact

**TeleDirectMD**
- Website: https://teledirectmd.com
- Phone: +1-678-956-1855
- Provider: Parth Bhavsar, MD

---

**Last Updated:** February 9, 2026
**Repository Maintained By:** TeleDirectMD Development Team
