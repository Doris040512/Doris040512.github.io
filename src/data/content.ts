export const profile = {
  name: "Doris Wang",
  github: "https://github.com/Doris040512",
  linkedin: "https://www.linkedin.com/in/shuozishanwang040512/",
  headline: "Statistical thinking. Applied AI. Human-centered solutions.",
  intro:
    "My work spans statistical modeling, LLM evaluation, and business analytics. I’m interested in how careful analysis and thoughtful technology can support better decisions—and better learning.",
};
export const categories = [
  "All work",
  "AI & applications",
  "Statistics",
  "Business analytics",
  "Research",
] as const;
export type Project = {
  id: string;
  name: string;
  eyebrow: string;
  category: string;
  description: string;
  tags: string[];
  repo: string;
  visual: string;
  featured: boolean;
  role: string;
  problem: string;
  approach: string;
  implementation: string;
  results: string;
  limitations: string;
  lessons: string;
  demo?: string;
};
export const projects: Project[] = [
  {
    id: "lost-in-the-middle",
    name: "Where context gets lost",
    eyebrow: "01 / LLM EVALUATION",
    category: "AI & applications",
    description:
      "A controlled study of how information placement affects structured extraction from long documents.",
    tags: ["Python", "LLM evaluation", "Experimental design"],
    repo: "STAT-496",
    visual: "context",
    featured: true,
    role: "Collaborative STAT 496 research with Yijing Chen and Chenyi Wang. Individual implementation responsibilities have not yet been confirmed.",
    problem:
      "Does structured extraction become less reliable when the relevant facts appear in the middle of a document?",
    approach:
      "Place target employee attributes at the beginning, middle, or end of synthetic documents. Compare extracted JSON against ground truth with field-level and exact-match scoring.",
    implementation:
      "The repository includes a seeded document generator, extraction prompts, a Python inference runner, JSON parsing, evaluation scripts, and stored outputs. The documented baseline model is gpt-4o-mini.",
    results:
      "The stored scored_results.csv contains 100 documents per position. All-field exact matches are 100/100 at the beginning, 97/100 in the middle, and 100/100 at the end. These are repository-recorded results, not a new independent experiment.",
    limitations:
      "A narrow synthetic task and a single documented model limit generalization. The report describes the effect as small and suggestive. The inference runner supports a configurable API endpoint; endpoint provenance and repeated-trial variability need review before replication.",
    lessons:
      "A useful evaluation needs challenging test cases, robust output parsing, and clear limits on what the measurements establish.",
  },
  {
    id: "housing-uncertainty",
    name: "Beyond a point prediction",
    eyebrow: "02 / STATISTICAL MODELING",
    category: "Statistics",
    description:
      "Housing-price regression with bootstrap confidence intervals and Jackknife+ prediction intervals.",
    tags: ["R", "Regression", "Bootstrap", "Conformal prediction"],
    repo: "STAT-403-Project",
    visual: "interval",
    featured: true,
    role: "Individual STAT/Q Sci 403 course project, attributed to Shuozishan Wang in the final report.",
    problem:
      "How can a house-price model communicate uncertainty alongside its predictions?",
    approach:
      "Model log-transformed King County house prices using living area, bedrooms, bathrooms, and grade. Compare Gaussian and bootstrap coefficient intervals, then construct Jackknife+ prediction intervals.",
    implementation:
      "R Markdown documents model fitting, diagnostics, bootstrap resampling, leave-one-out fits, and prediction intervals. The repository includes a rendered report and exported output files.",
    results:
      "The report records adjusted R² of approximately 0.556 and 196 covered observations out of 200 test cases for Jackknife+ intervals. The reported median interval width is about $840,652; coverage should be interpreted alongside these wide intervals.",
    limitations:
      "Results are reported from the course analysis and have not been independently rerun. Some supplied data artifacts are PDFs, which limits straightforward reproduction. A high coverage rate alone does not establish useful precision.",
    lessons:
      "Uncertainty is part of a prediction. Coverage, interval width, assumptions, and test-set size all matter.",
  },
  {
    id: "retail-analytics",
    name: "Reading the retail rhythm",
    eyebrow: "03 / BUSINESS INTELLIGENCE",
    category: "Business analytics",
    description:
      "Tableau dashboards connecting product demand, shopping patterns, and seasonal retail performance.",
    tags: ["Tableau", "Data visualization", "Business analysis"],
    repo: "Datathon-2025",
    visual: "retail",
    featured: true,
    role: "Team datathon project. The README attributes visualization, business insights, and dashboard design to Shuozishan Wang. The report and slides also name Xiaoquan Shang alongside Yanyuzi (Crystal) Chen; the full division of work needs confirmation.",
    problem:
      "How can retail transaction data reveal the markets, products, and shopping patterns that deserve closer attention?",
    approach:
      "Explore revenue and quantity by country, product performance, monthly demand, basket size, and time-of-day patterns.",
    implementation:
      "A Tableau .twb workbook is accompanied by an analytical report and presentation. The linked interactive dashboard is hosted on a collaborator’s Tableau Public profile.",
    results:
      "The project documents strong UK sales concentration, a Q4 demand increase, and afternoon shopping patterns. These are descriptive findings from the project dataset, not measured business impact.",
    limitations:
      "The workbook is .twb rather than a packaged .twbx file; external data may be needed to reopen it. Team attribution differs between the README and presentation and needs reconciliation.",
    lessons:
      "A useful dashboard connects patterns to a business question while keeping recommendations distinct from observed outcomes.",
    demo: "https://public.tableau.com/app/profile/yanyuzi.chen3379/viz/Datathon_Retail/RegionsvsquantityRevenue",
  },
  {
    id: "feedback-builder",
    name: "Feedback with a next step",
    eyebrow: "04 / HUMAN-CENTERED AI",
    category: "AI & applications",
    description:
      "A formative-feedback workspace and a separate two-step LLM prototype that keeps instructors in the loop.",
    tags: ["Python", "HTML / CSS", "JavaScript", "OpenAI API"],
    repo: "EDUC6192-Assignment2-Version2",
    visual: "feedback",
    featured: true,
    role: "Course prototype documented in Doris Wang’s assignment notebook, including an acknowledgment of AI-assisted development and human review.",
    problem:
      "How can instructors organize specific, rubric-aligned feedback without automatically grading or rewriting a student’s work?",
    approach:
      "Collect assignment instructions, a rubric, and a student response. Validate missing inputs, separate analysis from feedback generation, and retain instructor review.",
    implementation:
      "The HTML application provides a manual feedback workspace. A separate Google Colab notebook uses two API calls: rubric-based analysis followed by prioritized formative feedback. API credentials are read through Colab Secrets.",
    results:
      "The notebook documents representative-input testing, missing-rubric handling, and comparison of single-step and two-step feedback. Its reflection notes that some feedback remains general; no formal learning-outcome study is reported.",
    limitations:
      "The static HTML page does not call the LLM. The API workflow is a separate notebook prototype, not a publicly deployed AI service. Student privacy, fairness, and output accuracy require further evaluation.",
    lessons:
      "More model calls do not automatically produce better feedback. Specific inputs, task boundaries, and instructor judgment remain central.",
  },
  {
    id: "influenza-seasonality",
    name: "What shapes a flu season?",
    eyebrow: "05 / APPLIED MODELING",
    category: "Statistics",
    description:
      "Comparing temperature-driven, seasonal, and mechanistic models of influenza-like illness in Washington.",
    tags: ["Python", "pandas", "SciPy", "statsmodels"],
    repo: "AMATH-383",
    visual: "flu",
    featured: true,
    role: "Course modeling project attributed to Shuozishan Wang in the December 2025 report.",
    problem:
      "Does temperature variation explain observed influenza-like illness patterns better than a fixed annual cycle?",
    approach:
      "Combine 2010–2019 Washington ILI observations and temperature records. Compare temperature regression, a seasonal cosine model, and an SIR model with temperature-dependent transmission.",
    implementation:
      "A Python notebook covers cleaning, weekly data alignment, exploratory plots, regression fitting, differential-equation simulation, and train/test model comparison.",
    results:
      "The repository reports test RMSE of 63.0 for temperature regression, 68.8 for the seasonal model, and 88.8 for the SIR model. These are recorded model-comparison results, not independently reproduced metrics.",
    limitations:
      "Predictive fit does not demonstrate that temperature causes the observed patterns. Humidity, behavior, strain changes, and other omitted factors may matter.",
    lessons:
      "Mechanistic interpretation and predictive accuracy answer different questions; both benefit from explicit baselines and held-out evaluation.",
  },
  {
    id: "causal-sensitivity",
    name: "How fragile is a causal claim?",
    eyebrow: "06 / RESEARCH NOTES",
    category: "Research",
    description:
      "A report and presentation exploring unmeasured confounding and sensitivity analysis.",
    tags: ["Causal inference", "DAGs", "Research synthesis"],
    repo: "DRP",
    visual: "causal",
    featured: false,
    role: "Report and presentation attributed to Shuozishan (Doris) Wang, with mentor Kenny Zhang.",
    problem:
      "How should observational conclusions be interpreted when important confounders may be unmeasured?",
    approach:
      "Explain potential outcomes, directed acyclic graphs, omitted-variable bias, robustness values, and partial R².",
    implementation:
      "A written conceptual report and presentation synthesize the relevant methods and references.",
    results:
      "The repository provides explanatory research materials. It does not contain a new empirical causal estimate or a computational sensitivity-analysis implementation.",
    limitations:
      "This is a theoretical study and presentation, not a publication or deployed analysis package.",
    lessons:
      "A clear causal argument requires assumptions and an account of how hidden bias could change the conclusion.",
  },
  {
    id: "covid-demographics",
    name: "Demographics and mortality",
    eyebrow: "07 / PUBLIC HEALTH ANALYSIS",
    category: "Statistics",
    description:
      "A course report examining age, gender, and COVID-19 mortality patterns in CDC records.",
    tags: ["Python", "Statistical testing", "Data visualization"],
    repo: "CSE_163",
    visual: "health",
    featured: false,
    role: "CSE 163 project report attributed to Shuozishan Wang.",
    problem:
      "How do reported mortality patterns vary across demographic groups?",
    approach:
      "Explore CDC records with demographic comparisons, statistical tests, and baseline predictive modeling.",
    implementation:
      "The public repository contains a report with analysis and code; the README describes cleaning, visualization, t-tests, and baseline classifiers.",
    results:
      "The report investigates demographic associations and limitations of prediction from a small feature set. No clinical or causal claim is made here.",
    limitations:
      "The standalone source files and cleaned dataset described by the README are not present in the inspected checkout. Findings need the report’s methodological context.",
    lessons:
      "Descriptive demographic patterns need careful denominators, uncertainty, and restraint in interpretation.",
  },
];
export const education = [
  {
    school: "University of Pennsylvania",
    program: "Graduate studies · Learning Sciences and Technologies",
    detail:
      "Interests in learning analytics, AI-supported learning, and human-centered technology. Program dates and formal degree title await confirmation.",
  },
  {
    school: "University of Washington",
    program: "Bachelor’s degree · Statistics, Applied Statistics track",
    detail:
      "A foundation in statistical modeling, quantitative methods, and applied analysis. Education details supplied by Doris; dates await confirmation.",
  },
];
export const skills = [
  {
    title: "Analysis & modeling",
    items: [
      "Python",
      "R",
      "pandas",
      "NumPy",
      "statsmodels",
      "SciPy",
      "scikit-learn",
    ],
  },
  {
    title: "Data & communication",
    items: [
      "SQL",
      "Tableau",
      "Matplotlib",
      "Statistical inference",
      "Data visualization",
    ],
  },
  {
    title: "AI & applications",
    items: [
      "LLM evaluation",
      "Structured extraction",
      "OpenAI API",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    title: "Research methods",
    items: [
      "Experimental design",
      "Regression",
      "Bootstrap",
      "Conformal prediction",
      "Causal inference foundations",
    ],
  },
];
