export interface Chapter {
  slug: string;
  title: string;
  depth: number;
  parentSlug: string | null;
  order: number;
  file: string;
}

export const chapters: Chapter[] = [
  // ── Depth 0 (group pages) ──────────────────────────────────────────────────
  { slug: 'about', title: 'About', depth: 0, parentSlug: null, order: 1, file: '01-about' },
  { slug: 'disabilities', title: 'Disabilities', depth: 0, parentSlug: null, order: 2, file: '02-disabilities' },
  { slug: 'accessibility', title: 'Accessibility', depth: 0, parentSlug: null, order: 3, file: '08-accessibility' },
  { slug: 'standards', title: 'Standards', depth: 0, parentSlug: null, order: 4, file: '16-standards' },

  // ── Depth 1 under disabilities ────────────────────────────────────────────
  { slug: 'categories-of-disability', title: 'Categories of disability', depth: 1, parentSlug: 'disabilities', order: 1, file: '03-categories-of-disability' },
  { slug: 'models-of-disability', title: 'Models of disability', depth: 1, parentSlug: 'disabilities', order: 2, file: '04-models-of-disability' },
  { slug: 'assistive-technologies', title: 'Assistive Technologies', depth: 1, parentSlug: 'disabilities', order: 3, file: '05-assistive-technologies' },
  { slug: 'demographics-and-statistics', title: 'Demographics and statistics', depth: 1, parentSlug: 'disabilities', order: 4, file: '06-demographics-and-statistics' },
  { slug: 'etiquette', title: 'Etiquette', depth: 1, parentSlug: 'disabilities', order: 5, file: '07-etiquette' },

  // ── Depth 2 under categories-of-disability ────────────────────────────────
  { slug: 'visual-disabilities', title: 'Visual disabilities', depth: 2, parentSlug: 'categories-of-disability', order: 1, file: '03-1-visual-disabilities' },
  { slug: 'auditory-disabilities', title: 'Auditory disabilities', depth: 2, parentSlug: 'categories-of-disability', order: 2, file: '03-2-auditory-disabilities' },
  { slug: 'deafblindness', title: 'Deafblindness', depth: 2, parentSlug: 'categories-of-disability', order: 3, file: '03-3-deafblindness' },
  { slug: 'speech-and-language-disabilities', title: 'Speech and language disabilities', depth: 2, parentSlug: 'categories-of-disability', order: 4, file: '03-4-speech-and-language-disabilities' },
  { slug: 'mobility-and-body-function-disabilities', title: 'Mobility and body function disabilities', depth: 2, parentSlug: 'categories-of-disability', order: 5, file: '03-5-mobility-and-body-function-disabilities' },
  { slug: 'cognitive-disabilities', title: 'Cognitive disabilities', depth: 2, parentSlug: 'categories-of-disability', order: 6, file: '03-6-cognitive-disabilities' },
  { slug: 'seizures', title: 'Seizures', depth: 2, parentSlug: 'categories-of-disability', order: 7, file: '03-7-seizures' },
  { slug: 'psychological-disabilities', title: 'Psychological disabilities', depth: 2, parentSlug: 'categories-of-disability', order: 8, file: '03-8-psychological-disabilities' },
  { slug: 'complex-disabilities', title: 'Complex disabilities', depth: 2, parentSlug: 'categories-of-disability', order: 9, file: '03-9-complex-disabilities' },

  // ── Depth 2 under models-of-disability ────────────────────────────────────
  { slug: 'medical-model', title: 'Medical model', depth: 2, parentSlug: 'models-of-disability', order: 1, file: '04-1-medical-model' },
  { slug: 'social-model', title: 'Social model', depth: 2, parentSlug: 'models-of-disability', order: 2, file: '04-2-social-model' },
  { slug: 'biopsychosocial-model', title: 'Biopsychosocial model', depth: 2, parentSlug: 'models-of-disability', order: 3, file: '04-3-biopsychosocial-model' },
  { slug: 'economic-model', title: 'Economic model', depth: 2, parentSlug: 'models-of-disability', order: 4, file: '04-4-economic-model' },
  { slug: 'functional-solutions-model', title: 'Functional solutions model', depth: 2, parentSlug: 'models-of-disability', order: 5, file: '04-5-functional-solutions-model' },
  { slug: 'identity-or-cultural-affiliation-model', title: 'Identity or cultural affiliation model', depth: 2, parentSlug: 'models-of-disability', order: 6, file: '04-6-identity-or-cultural-affiliation-model' },
  { slug: 'charity-model', title: 'Charity model', depth: 2, parentSlug: 'models-of-disability', order: 7, file: '04-7-charity-model' },

  // ── Depth 2 under assistive-technologies ──────────────────────────────────
  { slug: 'visual-disabilities', title: 'Visual disabilities', depth: 2, parentSlug: 'assistive-technologies', order: 1, file: '05-1-visual-disabilities' },
  { slug: 'auditory-disabilities', title: 'Auditory disabilities', depth: 2, parentSlug: 'assistive-technologies', order: 2, file: '05-2-auditory-disabilities' },
  { slug: 'deafblindness', title: 'Deafblindness', depth: 2, parentSlug: 'assistive-technologies', order: 3, file: '05-3-deafblindness' },
  { slug: 'mobility-and-body-function-disabilities', title: 'Mobility and body function disabilities', depth: 2, parentSlug: 'assistive-technologies', order: 4, file: '05-4-mobility-and-body-function-disabilities' },
  { slug: 'cognitive-disabilities', title: 'Cognitive disabilities', depth: 2, parentSlug: 'assistive-technologies', order: 5, file: '05-5-cognitive-disabilities' },
  { slug: 'seizure-disabilities', title: 'Seizure disabilities', depth: 2, parentSlug: 'assistive-technologies', order: 6, file: '05-6-seizure-disabilities' },
  { slug: 'psychological-disabilities', title: 'Psychological disabilities', depth: 2, parentSlug: 'assistive-technologies', order: 7, file: '05-7-psychological-disabilities' },

  // ── Depth 1 under accessibility ───────────────────────────────────────────
  { slug: 'individualised-vs-universal', title: 'Individualised vs universal', depth: 1, parentSlug: 'accessibility', order: 1, file: '09-individualised-vs-universal' },
  { slug: 'benefits-of-accessibility', title: 'Benefits of accessibility', depth: 1, parentSlug: 'accessibility', order: 2, file: '10-benefits-of-accessibility' },
  { slug: 'web-accessibility', title: 'Web accessibility', depth: 1, parentSlug: 'accessibility', order: 3, file: '11-web-accessibility' },
  { slug: 'built-environment', title: 'Built environment', depth: 1, parentSlug: 'accessibility', order: 4, file: '12-built-environment' },
  { slug: 'universal-design', title: 'Universal design', depth: 1, parentSlug: 'accessibility', order: 5, file: '13-universal-design' },
  { slug: 'universal-design-for-learning', title: 'Universal Design for Learning', depth: 1, parentSlug: 'accessibility', order: 6, file: '14-universal-design-for-learning' },
  { slug: 'usability-and-ux', title: 'Usability and UX', depth: 1, parentSlug: 'accessibility', order: 7, file: '15-usability-and-ux' },

  // ── Depth 2 under web-accessibility ───────────────────────────────────────
  { slug: 'perceivable', title: 'Perceivable', depth: 2, parentSlug: 'web-accessibility', order: 1, file: '11-1-perceivable' },
  { slug: 'operable', title: 'Operable', depth: 2, parentSlug: 'web-accessibility', order: 2, file: '11-2-operable' },
  { slug: 'understandable', title: 'Understandable', depth: 2, parentSlug: 'web-accessibility', order: 3, file: '11-3-understandable' },
  { slug: 'robust', title: 'Robust', depth: 2, parentSlug: 'web-accessibility', order: 4, file: '11-4-robust' },

  // ── Depth 2 under universal-design ────────────────────────────────────────
  { slug: 'equitable-use', title: 'Equitable use', depth: 2, parentSlug: 'universal-design', order: 1, file: '13-1-equitable-use' },
  { slug: 'flexibility-in-use', title: 'Flexibility in use', depth: 2, parentSlug: 'universal-design', order: 2, file: '13-2-flexibility-in-use' },
  { slug: 'intuitive-and-simple', title: 'Intuitive and simple', depth: 2, parentSlug: 'universal-design', order: 3, file: '13-3-intuitive-and-simple' },
  { slug: 'perceptible-information', title: 'Perceptible information', depth: 2, parentSlug: 'universal-design', order: 4, file: '13-4-perceptible-information' },
  { slug: 'tolerance-for-error', title: 'Tolerance for error', depth: 2, parentSlug: 'universal-design', order: 5, file: '13-5-tolerance-for-error' },
  { slug: 'low-physical-effort', title: 'Low physical effort', depth: 2, parentSlug: 'universal-design', order: 6, file: '13-6-low-physical-effort' },
  { slug: 'size-and-space-for-approach-and-use', title: 'Size and space for approach and use', depth: 2, parentSlug: 'universal-design', order: 7, file: '13-7-size-and-space-for-approach-and-use' },

  // ── Depth 2 under universal-design-for-learning ───────────────────────────
  { slug: 'engagement-the-why-of-learning', title: 'Engagement (the “why” of learning)', depth: 2, parentSlug: 'universal-design-for-learning', order: 1, file: '14-1-engagement-the-why-of-learning' },
  { slug: 'representation-the-what-of-learning', title: 'Representation (the “what” of learning)', depth: 2, parentSlug: 'universal-design-for-learning', order: 2, file: '14-2-representation-the-what-of-learning' },
  { slug: 'action-the-how-of-learning', title: 'Action (the “how” of learning)', depth: 2, parentSlug: 'universal-design-for-learning', order: 3, file: '14-3-action-the-how-of-learning' },

  // ── Depth 1 under standards ───────────────────────────────────────────────
  { slug: 'international', title: 'International', depth: 1, parentSlug: 'standards', order: 1, file: '17-international' },
  { slug: 'regional', title: 'Regional', depth: 1, parentSlug: 'standards', order: 2, file: '18-regional' },
  { slug: 'national', title: 'National', depth: 1, parentSlug: 'standards', order: 3, file: '19-national' },
  { slug: 'domain-specific', title: 'Domain-specific', depth: 1, parentSlug: 'standards', order: 4, file: '20-domain-specific' },
  { slug: 'ict-standards', title: 'ICT standards', depth: 1, parentSlug: 'standards', order: 5, file: '21-ict-standards' },
  { slug: 'integrating-ict-accessibility', title: 'Integrating ICT accessibility', depth: 1, parentSlug: 'standards', order: 6, file: '22-integrating-ict-accessibility' },

  // ── Depth 2 under international ───────────────────────────────────────────
  { slug: 'the-universal-declaration-of-human-rights-udhr', title: 'The Universal Declaration of Human Rights (UDHR)', depth: 2, parentSlug: 'international', order: 1, file: '17-1-the-universal-declaration-of-human-rights-udhr' },
  { slug: 'convention-on-the-rights-of-persons-with-disabilities-crpd', title: 'Convention on the Rights of Persons with Disabilities (CRPD)', depth: 2, parentSlug: 'international', order: 2, file: '17-2-convention-on-the-rights-of-persons-with-disabilities-crpd' },
  { slug: 'the-marrakesh-treaty', title: 'The Marrakesh treaty', depth: 2, parentSlug: 'international', order: 3, file: '17-3-the-marrakesh-treaty' },

  // ── Depth 2 under regional ────────────────────────────────────────────────
  { slug: 'eu-charter-of-fundamental-rights', title: 'EU Charter of Fundamental Rights', depth: 2, parentSlug: 'regional', order: 1, file: '18-1-eu-charter-of-fundamental-rights' },
  { slug: 'the-african-charter-on-human-and-peoples-rights', title: "The African Charter on Human and People's Rights", depth: 2, parentSlug: 'regional', order: 2, file: '18-2-the-african-charter-on-human-and-peoples-rights' },
  { slug: 'the-inter-american-convention', title: 'The Inter-American Convention', depth: 2, parentSlug: 'regional', order: 3, file: '18-3-the-inter-american-convention' },

  // ── Depth 2 under national ────────────────────────────────────────────────
  { slug: 'the-equality-act-2010', title: 'The Equality Act 2010', depth: 2, parentSlug: 'national', order: 1, file: '19-1-the-equality-act-2010' },
  { slug: 'the-americans-with-disabilities-act-of-1990-ada', title: 'The Americans with Disabilities Act of 1990 (ADA)', depth: 2, parentSlug: 'national', order: 2, file: '19-2-the-americans-with-disabilities-act-of-1990-ada' },
  { slug: 'ontarians-with-disabilities-act-of-2001-aoda', title: 'Ontarians with Disabilities Act of 2001 (AODA)', depth: 2, parentSlug: 'national', order: 3, file: '19-3-ontarians-with-disabilities-act-of-2001-aoda' },
  { slug: 'disability-laws-in-eu-countries', title: 'Disability laws in EU countries', depth: 2, parentSlug: 'national', order: 4, file: '19-4-disability-laws-in-eu-countries' },

  // ── Depth 2 under domain-specific ─────────────────────────────────────────
  { slug: 'domain-specific-laws', title: 'Domain-specific laws', depth: 2, parentSlug: 'domain-specific', order: 1, file: '20-1-domain-specific-laws' },
  { slug: 'procurement-laws', title: 'Procurement laws', depth: 2, parentSlug: 'domain-specific', order: 2, file: '20-2-procurement-laws' },

  // ── Depth 2 under ict-standards ───────────────────────────────────────────
  { slug: 'us-laws-and-standards', title: 'US laws and standards', depth: 2, parentSlug: 'ict-standards', order: 1, file: '21-1-us-laws-and-standards' },
  { slug: 'eu-laws-and-standards', title: 'EU laws and standards', depth: 2, parentSlug: 'ict-standards', order: 2, file: '21-2-eu-laws-and-standards' },

  // ── Depth 2 under integrating-ict-accessibility ───────────────────────────
  { slug: 'w3c-web-accessibility-initiative-wai-recommendations', title: 'W3C Web Accessibility Initiative (WAI) recommendations', depth: 2, parentSlug: 'integrating-ict-accessibility', order: 1, file: '22-1-w3c-web-accessibility-initiative-wai-recommendations' },
  { slug: 'european-agency-for-special-needs-and-inclusive-education-guidelines', title: 'European Agency for Special Needs & Inclusive education guidelines', depth: 2, parentSlug: 'integrating-ict-accessibility', order: 2, file: '22-2-european-agency-for-special-needs-and-inclusive-education-guidelines' },
  { slug: 'maturity-models', title: 'Maturity models', depth: 2, parentSlug: 'integrating-ict-accessibility', order: 3, file: '22-3-maturity-models' },
  { slug: 'the-importance-of-management-champions', title: 'The importance of management champions', depth: 2, parentSlug: 'integrating-ict-accessibility', order: 4, file: '22-4-the-importance-of-management-champions' },
  { slug: 'evaluating-for-accessibility', title: 'Evaluating for accessibility', depth: 2, parentSlug: 'integrating-ict-accessibility', order: 5, file: '22-5-evaluating-for-accessibility' },
  { slug: 'recruiting-and-hiring', title: 'Recruiting and hiring', depth: 2, parentSlug: 'integrating-ict-accessibility', order: 6, file: '22-6-recruiting-and-hiring' },
  { slug: 'communication-management-strategies', title: 'Communication management strategies', depth: 2, parentSlug: 'integrating-ict-accessibility', order: 7, file: '22-7-communication-management-strategies' },
  { slug: 'legal-and-public-relations-implications', title: 'Legal & Public relations implications', depth: 2, parentSlug: 'integrating-ict-accessibility', order: 8, file: '22-8-legal-and-public-relations-implications' },
  { slug: 'purchasing-processes-and-public-procurement', title: 'Purchasing processes and public procurement', depth: 2, parentSlug: 'integrating-ict-accessibility', order: 9, file: '22-9-purchasing-processes-and-public-procurement' },
];

export function getChapter(slug: string): Chapter | undefined {
  return chapters.find(c => c.slug === slug && c.depth < 2);
}

export function getSection(parentSlug: string, subSlug: string): Chapter | undefined {
  return chapters.find(c => c.depth === 2 && c.parentSlug === parentSlug && c.slug === subSlug);
}
