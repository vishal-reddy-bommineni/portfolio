// All site text lives here. Edit this file to update the portfolio; the components only render it.

export const profile = {
  name: 'Vishal Reddy Bommineni',
  shortName: 'Vishal',
  role: 'Data Science · Bioinformatics',
  location: 'Storrs, Connecticut',
  email: 'vishalreddy.b4@gmail.com',
  linkedin: 'https://linkedin.com/in/vishal-reddy-bommineni',
  github: 'https://github.com/vishal-reddy-bommineni',
  availability: 'M.S. Data Science, UConn · graduating December 2026',
  headline: 'I turn messy clinical, genomic and business data into models people can trust.',
  rotating: ['healthcare analytics', 'statistical genomics', 'machine learning', 'clinical data'],
  intro:
    'Graduate Research Assistant at UConn Health, where I analyse RNA-Seq data from colon biopsies. I build end-to-end work in Python, R and SQL, from cohort definition and statistics to validated machine learning and dashboards, and I care about the part most projects skip: checking that the result holds up.',
  // Put the PDF in public/resume/ with exactly this file name.
  // One entry = a direct "Resume" button. Add a second entry to turn it into a menu.
  resumes: [{ label: 'Resume', file: '/resume/Vishal_Reddy_Bommineni_Resume.pdf' }]
};

export const stats = [
  { value: 101766, label: 'hospital encounters modelled for 30-day readmission risk', separator: ',' },
  { value: 16000, suffix: '+', label: 'genes tested per differential expression analysis', separator: ',' },
  { value: 3052, label: 'independent tumours used to validate a cancer subtype model', separator: ',' },
  { value: 98, suffix: '%', label: 'accuracy of my clinical SQL agent on a 50-question benchmark' }
];

export const about = {
  paragraphs: [
    "I'm a Data Science graduate student, working on data where mistakes are expensive: patient records, gene expression and operational business data.",
    'At UConn Health I run statistical genomics analyses in R: paired RNA-Seq designs, negative binomial models, multiple-testing control and pathway enrichment. Before that, as a Business Data Analyst Intern, I consolidated and validated operational data and built Power BI and Tableau dashboards.',
    'My projects follow the same habits: real public data, a clearly defined cohort, a baseline to beat, leakage-safe validation, and a plain account of what did not work.'
  ],
  focus: [
    { title: 'Healthcare analytics', text: 'Readmission risk, EHR data (MIMIC-IV), cohort definition, calibration and fairness checks.' },
    { title: 'Statistical genomics', text: 'RNA-Seq differential expression, GSEA, survival analysis and cancer subtypes on TCGA.' },
    { title: 'Machine learning & analytics', text: 'Calibrated and explainable ML (XGBoost, SHAP), LLM agents for text-to-SQL, and dbt data models with tests and BI dashboards.' }
  ]
};

export const experience = [
  {
    role: 'Graduate Research Assistant',
    org: 'UConn Health',
    place: 'Farmington, CT',
    period: 'Feb 2026 – Present',
    points: [
      'Analyse paired RNA-Seq data in R (77 proximal/distal colon biopsies, 39 patients), integrating count matrices, clinical metadata and urinary urolithin A measurements; filtered ~63K genes to ~16K.',
      'Ran QC and dimensionality reduction (PCA, t-SNE, distance heatmaps, library depth) to find outliers and sources of variation, which led to location-stratified models that avoid confounding.',
      'Built reproducible DESeq2 pipelines: negative binomial GLMs for paired and multi-factor designs with covariate adjustment and interaction models, Wald tests and Benjamini–Hochberg FDR across 16K+ genes.',
      'Ran preranked GSEA (clusterProfiler, msigdbr) across Hallmark, C2, GO, C7 and MitoCarta, and delivered figures and methods/results documentation to the lab.'
    ],
    tags: ['R', 'DESeq2', 'Bioconductor', 'Negative binomial GLMs', 'FDR', 'PCA / t-SNE', 'GSEA', 'ggplot2']
  },
  {
    role: 'Business Data Analyst Intern',
    org: 'Tasni Trading Private Limited',
    place: 'Telangana, India',
    period: 'Jan 2025 – Jul 2025',
    points: [
      'Consolidated inventory, procurement, sales and supplier data from 5+ sources into one weekly operational view, and built Power BI and Tableau dashboards on it.',
      'Validated 5,000+ business records with Python (pandas) and reconciled inventory and transaction records with SQL, resolving 200+ discrepancies.',
      'Contributed to ERP modules for inventory, procurement and reporting, supporting integration and usability fixes for a system later deployed at a customer site.'
    ],
    tags: ['SQL', 'Python', 'Power BI', 'Tableau', 'Excel']
  }
];

// category values must match one of `projectFilters` below
export const projectFilters = ['All', 'Machine Learning', 'Bioinformatics', 'Healthcare', 'Analytics & BI', 'GenAI'];

export const projects = [
  {
    slug: 'brca-transcriptomics',
    title: 'Breast Cancer Transcriptomics',
    subtitle: 'Biomarkers, PAM50 subtype prediction and external validation',
    categories: ['Bioinformatics', 'Machine Learning', 'Healthcare'],
    summary:
      'RNA-seq analysis of 1,082 TCGA breast cancer patients in R, and a subtype classifier in Python that I froze and tested on 3,052 tumours from an independent Swedish cohort.',
    highlights: [
      { value: '17,248', label: 'genes differentially expressed in 112 tumour–normal pairs (FDR < 0.05)' },
      { value: '0.915', label: 'macro F1 in nested CV, vs 0.874 for the PAM50 centroid baseline' },
      { value: '0.896', label: 'macro F1 on 3,052 external SCAN-B tumours' }
    ],
    tech: ['R', 'DESeq2', 'limma-voom', 'fgsea', 'survival', 'scikit-learn', 'XGBoost', 'SHAP', 'Streamlit'],
    image: '/projects/brca-transcriptomics.webp',
    repo: 'https://github.com/vishal-reddy-bommineni/brca-transcriptomics',
    demo: '',
    featured: true
  },
  {
    slug: 'readmission-risk',
    title: '30-Day Hospital Readmission Risk',
    subtitle: 'Who should a care team call first?',
    categories: ['Machine Learning', 'Healthcare'],
    summary:
      'A calibrated readmission model on 101,766 real encounters from 130 US hospitals, evaluated on patients it never saw, explained with SHAP and audited for fairness.',
    highlights: [
      { value: '0.689', label: 'test AUROC (95% CI 0.672–0.704) vs 0.619 for a 3-feature baseline' },
      { value: '2.65×', label: 'more readmissions reached than random outreach at a top-10% call list' },
      { value: '±1.5 pts', label: 'agreement between predicted and observed risk in every tier' }
    ],
    tech: ['SQL', 'DuckDB', 'Python', 'XGBoost', 'SHAP', 'Streamlit'],
    image: '/projects/readmission-risk.webp',
    repo: 'https://github.com/vishal-reddy-bommineni/readmission-risk',
    demo: '',
    featured: true
  },
  {
    slug: 'clinical-sql-agent',
    title: 'Clinical SQL Agent',
    subtitle: 'An LLM agent that answers questions on a hospital database',
    categories: ['GenAI', 'Healthcare'],
    summary:
      'An agent that explores a 31-table MIMIC-IV database, writes read-only SQL, reads its own errors and fixes them, measured against a hand-checked 50-question benchmark.',
    highlights: [
      { value: '98%', label: 'execution accuracy, vs 94% one-shot with a data catalog and 84% with the raw schema' },
      { value: '50% → 90%', label: 'clinical-logic accuracy after documenting the data traps' },
      { value: '43', label: 'automated tests, including a mock LLM server and SQL attack queries' }
    ],
    tech: ['Python', 'Gemini API', 'LLM agents', 'SQL', 'DuckDB', 'MIMIC-IV', 'Streamlit'],
    image: '/projects/clinical-sql-agent.webp',
    imageFit: 'contain',
    repo: 'https://github.com/vishal-reddy-bommineni/clinical-sql-agent',
    demo: '',
    featured: true
  },
  {
    slug: 'olist-ecommerce-analytics',
    title: 'E-commerce Analytics',
    subtitle: 'Delivery, retention and seller performance on 100K real orders',
    categories: ['Analytics & BI'],
    summary:
      'Raw marketplace data modelled into a tested dbt star schema on DuckDB, analysed with regression and cohort analysis, and served in Streamlit and Power BI.',
    highlights: [
      { value: '17.7×', label: 'higher odds of a 1–2 star review when an order arrives late' },
      { value: '55', label: 'dbt data-quality and reconciliation tests, 0 failures' },
      { value: '67%', label: 'of revenue from the top 10% of sellers' }
    ],
    tech: ['SQL', 'dbt', 'DuckDB', 'Python', 'statsmodels', 'Power BI', 'Streamlit'],
    image: '/projects/olist-ecommerce-analytics.webp',
    repo: 'https://github.com/vishal-reddy-bommineni/olist-ecommerce-analytics',
    demo: '',
    featured: false
  },
  {
    slug: 'global-ev-adoption-tableau',
    title: 'Global EV Adoption Storyboard',
    subtitle: 'Team Tableau project on IEA data, 2010–2025',
    categories: ['Analytics & BI'],
    summary:
      'A 10-point Tableau story built by a team of five. I designed the data model in pandas and built the Global Adoption dashboards with parameter-driven views.',
    highlights: [
      { value: '49,176', label: 'IEA records reshaped into the dashboards’ data model' },
      { value: '81.8%', label: 'of 2020–2025 EV growth captured by just five markets' },
      { value: '66%', label: 'of 2025 EV car sales were battery-electric' }
    ],
    tech: ['Tableau', 'Python', 'pandas', 'SciPy'],
    image: '/projects/global-ev-adoption.webp',
    repo: 'https://github.com/vishal-reddy-bommineni/global-ev-adoption-tableau',
    demo: '',
    featured: false
  }
];

export const skills = [
  { group: 'Languages', items: ['Python (pandas, NumPy)', 'R (tidyverse, Bioconductor)', 'SQL (DuckDB)', 'Jupyter', 'VS Code'] },
  {
    group: 'Machine learning',
    items: ['scikit-learn', 'XGBoost', 'SHAP', 'Nested cross-validation', 'Calibration', 'External validation', 'Fairness audits']
  },
  {
    group: 'Statistics',
    items: ['GLMs (logistic, negative binomial)', 'Hypothesis testing', 'FDR control', 'Survival analysis (Kaplan–Meier, Cox)', 'Bootstrap CIs', 'PCA, t-SNE']
  },
  {
    group: 'Bioinformatics',
    items: ['RNA-Seq', 'DESeq2', 'edgeR', 'limma-voom', 'GSEA (fgsea, clusterProfiler)', 'TCGA / GDC', 'GEO', 'Bioconductor']
  },
  { group: 'Data engineering', items: ['dbt', 'DuckDB', 'Data validation', 'ETL', 'Star-schema modelling', 'Git'] },
  { group: 'GenAI', items: ['LLM agents', 'Tool calling', 'Text-to-SQL', 'Gemini API', 'Benchmark evaluation'] },
  { group: 'Visualisation', items: ['Power BI', 'Tableau', 'Streamlit', 'ggplot2', 'matplotlib', 'Excel'] }
];

export const education = [
  { school: 'University of Connecticut', place: 'Storrs, CT', degree: 'Master of Science in Data Science', period: 'Aug 2025 – Dec 2026' },
  { school: 'Punjab Engineering College', place: 'Chandigarh, India', degree: 'B.Tech in Electronics and Communication Engineering', period: 'Dec 2020 – Oct 2024' }
];
