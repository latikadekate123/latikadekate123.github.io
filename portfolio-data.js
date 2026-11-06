/*
  Portfolio content. Edit this file to change what the site says.
  Every fact here comes from Latika's verified record. Before adding a number,
  make sure you can say where it was measured.

  Skill categories: ml, ai, cv, data, sys, viz, res
  Project domains:  rag, cv, ml, data, sys, viz, res
*/
window.PORTFOLIO = {
  domains: [
    { id: "all",  label: "Everything" },
    { id: "rag",  label: "Retrieval & NLP" },
    { id: "cv",   label: "Computer vision" },
    { id: "ml",   label: "Machine learning" },
    { id: "data", label: "Data & pipelines" },
    { id: "sys",  label: "Systems" },
    { id: "viz",  label: "Visualization" },
    { id: "res",  label: "Research" }
  ],

  categories: {
    ml:   "Machine learning",
    ai:   "Retrieval & NLP",
    cv:   "Computer vision",
    data: "Data",
    sys:  "Systems & engineering",
    viz:  "Visualization",
    res:  "Research tools"
  },

  skills: [
    { id: "python",     name: "Python",              cat: "data" },
    { id: "sql",        name: "SQL / PostgreSQL",    cat: "data" },
    { id: "pandas",     name: "pandas",              cat: "data" },
    { id: "neo4j",      name: "Neo4j",               cat: "data" },
    { id: "kafka",      name: "Kafka",               cat: "data" },

    { id: "pytorch",    name: "PyTorch",             cat: "ml" },
    { id: "sklearn",    name: "scikit-learn",        cat: "ml" },
    { id: "vit",        name: "Vision Transformers", cat: "ml" },
    { id: "gnn",        name: "Graph neural nets",   cat: "ml" },
    { id: "timeseries", name: "Time-series forecasting", cat: "ml" },

    { id: "langchain",  name: "LangChain",           cat: "ai" },
    { id: "llms",       name: "LLMs (Llama, Gemini)", cat: "ai" },
    { id: "chromadb",   name: "ChromaDB",            cat: "ai" },
    { id: "graphrag",   name: "GraphRAG",            cat: "ai" },
    { id: "llmeval",    name: "LLM evaluation",      cat: "ai" },
    { id: "finbert",    name: "FinBERT",             cat: "ai" },
    { id: "spacy",      name: "SpaCy",               cat: "ai" },

    { id: "opencv",     name: "OpenCV",              cat: "cv" },
    { id: "orbslam",    name: "ORB-SLAM3 (C++)",     cat: "cv" },
    { id: "raft",       name: "RAFT optical flow",   cat: "cv" },
    { id: "yolo",       name: "YOLO",                cat: "cv" },

    { id: "docker",     name: "Docker",              cat: "sys" },
    { id: "k8s",        name: "Kubernetes",          cat: "sys" },
    { id: "go",         name: "Go",                  cat: "sys" },
    { id: "react",      name: "React",               cat: "sys" },
    { id: "fastapi",    name: "FastAPI",             cat: "sys" },
    { id: "yjs",        name: "WebSockets & Yjs",    cat: "sys" },
    { id: "bash",       name: "Bash & Linux",        cat: "sys" },
    { id: "aitools",    name: "Claude Code & Codex", cat: "sys" },

    { id: "d3",         name: "D3.js",               cat: "viz" },
    { id: "js",         name: "JavaScript",          cat: "viz" },
    { id: "htmlcss",    name: "HTML & CSS",          cat: "viz" },
    { id: "streamlit",  name: "Streamlit",           cat: "viz" },

    { id: "rl",         name: "Reinforcement learning", cat: "res" },
    { id: "sumo",       name: "SUMO",                cat: "res" },
    { id: "cityflow",   name: "CityFlow",            cat: "res" },
    { id: "libsignal",  name: "LibSignal",           cat: "res" },
    { id: "slurm",      name: "SLURM (ASU Sol)",     cat: "res" }
  ],

  // Skills shown under "Also in my toolkit" (not drawn in the graph).
  toolkit: [
    "TensorFlow", "Hugging Face", "NumPy", "PySpark", "Java", "Data structures & algorithms",
    "Object-oriented design", "Git", "REST APIs", "Flask", "Tableau", "Plotly", "Excel",
    "Hyperparameter tuning", "Experiment tracking"
  ],
  familiar: ["GCP", "Power BI"],

  projects: [
    {
      id: "sim2signal",
      kind: "research",
      name: "Sim2Signal",
      short: "Sim2Signal",
      domains: ["res", "ml"],
      when: "May to Aug 2026",
      context: "Research internship, DaRL Lab, ASU",
      team: "Third of nine authors",
      summary: "A benchmark for why traffic-signal controllers trained in simulation break on real roads, and which fixes actually help.",
      did: [
        "Ran and validated the action-delay experiments on ASU's Sol cluster with SLURM, troubleshooting failed or inconsistent runs and comparing results across settings.",
        "Trained reinforcement-learning agents in LibSignal with SUMO and CityFlow.",
        "Synthesized RL literature on action-delay methods and traced benchmark code paths across agents, trainers, environments and signal execution.",
        "Wrote reproducibility notes and documented experiment gaps for delayed-action planning."
      ],
      result: { kind: "text", big: "Preprint", text: "arXiv:2609.01676, September 2026. Under review at AAAI 2027." },
      skills: ["rl", "sumo", "cityflow", "libsignal", "slurm"],
      links: [
        { label: "Read the paper", url: "https://arxiv.org/abs/2609.01676" },
        { label: "Benchmark code", url: "https://github.com/DaRL-LibSignal/Sim2Signal" }
      ],
      note: "The benchmark design and the paper's results belong to the whole team. My work centered on the action-delay part."
    },
    {
      id: "ragpoison",
      name: "Stealthy Data Poisoning in RAG",
      short: "RAG poisoning",
      domains: ["rag", "ml"],
      when: "Mar to Apr 2026",
      context: "CSE 579 Knowledge Representation and Reasoning",
      team: "Team of five",
      summary: "Can anomaly detectors catch poisoned documents that read like clean ones? Mostly, no.",
      did: [
        "Built the study's final dashboard, the t-SNE embedding analysis, and the detector, mitigation and RAG plots.",
        "Wrote a three-category failure taxonomy, organizing failures by what the embedding sees rather than by detector.",
        "Showed that poisoned documents sit inside clean neighborhoods in embedding space, which is why the detectors struggled."
      ],
      setup: "Natural Questions with Llama 3.1 8B, five 1,000-document knowledge-base variants (factual swaps and semantic distortion at different poison rates), and five detectors.",
      result: { kind: "gauge", value: 0.527, chance: 0.5, label: "Mean detector AUC across 4 detectors and 5 variants. 0.5 is a coin flip." },
      skills: ["python", "langchain", "chromadb", "llms", "llmeval"],
      links: [
        { label: "See the dashboard", url: "https://vpate160.github.io/KRR-Final-Project/results/module4_visualization_report.html" },
        { label: "Code", url: "https://github.com/latikadekate123/KRR-Final-Project" }
      ]
    },
    {
      id: "slam",
      name: "Smart-Sighted SLAM",
      short: "Smart-Sighted SLAM",
      domains: ["cv"],
      when: "Mar to May 2026",
      context: "EEE 515 Machine Vision and Pattern Recognition",
      team: "Team of four",
      summary: "Moving people confuse a camera trying to map a room. We masked them out before the SLAM system ever saw them.",
      did: [
        "Built an offline, camera-only SLAM pipeline on ORB-SLAM3 that masks moving regions before feature extraction.",
        "Compared four masking strategies: PyrLK and Farneback optical flow, learned RAFT flow, and YOLO person masks.",
        "Chose to filter dynamic regions up front instead of rebuilding the SLAM backend."
      ],
      result: {
        kind: "bars", unit: "cm", lowerIsBetter: true,
        label: "Trajectory error (Sim(3) RMSE) on TUM freiburg1_desk, monocular, 3 runs each. One sequence; the baseline varied widely.",
        rows: [
          { name: "No masking", value: 16.90 },
          { name: "Farneback", value: 2.60 },
          { name: "PyrLK", value: 3.21 },
          { name: "RAFT", value: 3.34 }
        ]
      },
      skills: ["orbslam", "opencv", "raft", "yolo", "pytorch", "python"],
      links: []
    },
    {
      id: "breast",
      name: "Breast Cancer Histopathology: ViT + GNN",
      short: "ViT + GNN fusion",
      domains: ["cv", "ml"],
      when: "Oct to Dec 2025",
      context: "EEE 511 Artificial Neural Computation",
      team: "Team of three",
      summary: "Does combining what a Vision Transformer sees with a graph of cell nuclei beat either one alone?",
      did: [
        "Designed and implemented the hybrid fusion experiments and analyzed their results.",
        "Froze both trained encoders and trained only a small fusion head on their combined features, to keep compute modest and limit overfitting."
      ],
      setup: "BreaKHis, 40x magnification, benign vs malignant. Teammates built the ViT and GNN baselines.",
      result: {
        kind: "bars", unit: "%", min: 80,
        label: "Test accuracy on the fold-1 reproduction. A 0.1-point gap from one fold and one run isn't evidence that fusion helps.",
        rows: [
          { name: "ViT", value: 98.20 },
          { name: "GNN", value: 86.00 },
          { name: "Hybrid", value: 98.30 }
        ]
      },
      skills: ["pytorch", "vit", "gnn", "sklearn", "pandas", "python"],
      links: [{ label: "Code", url: "https://github.com/latikadekate123/Breast-Cancer-Clasification" }]
    },
    {
      id: "astranode",
      name: "AstraNode",
      short: "AstraNode",
      domains: ["rag"],
      when: "Oct to Nov 2025",
      context: "NASA Space Apps Challenge 2025",
      team: "Team Nebulizers, five people",
      summary: "A GraphRAG research tool that connects 600+ NASA publications as a knowledge graph instead of a pile of PDFs.",
      did: [
        "Built as a team on a Neo4j knowledge graph with Gemini and Llama models, LangChain, FastAPI, React and D3.js.",
        "Chose a graph approach so papers are explored through their relationships, not as isolated documents."
      ],
      result: { kind: "text", big: "Phoenix winner", text: "Team Nebulizers won the Phoenix, AZ event and advanced to the Global Judging Round." },
      skills: ["neo4j", "graphrag", "langchain", "llms", "fastapi", "react", "d3", "python"],
      links: [{ label: "Code", url: "https://github.com/International-NASA-Space-App-Hackathon/AstraNode" }]
    },
    {
      id: "urban",
      name: "Scalable Urban Transportation Analytics",
      short: "NYC taxi streaming",
      domains: ["data", "sys"],
      when: "Fall 2025",
      context: "CSE 511 Data Processing at Scale",
      team: "Solo",
      summary: "NYC taxi trips as a graph, first in batch, then as a stream.",
      did: [
        "Built a Dockerized Neo4j batch workflow with PageRank and BFS over March 2022 NYC taxi data.",
        "Moved it to a Kafka-based streaming setup on Kubernetes (Minikube), with Kafka Connect writing into Neo4j through idempotent Cypher MERGE.",
        "Debugged Kafka listener and in-cluster networking, and ran ETL, PageRank and BFS against the streaming pipeline."
      ],
      skills: ["python", "docker", "neo4j", "kafka", "k8s"],
      links: []
    },
    {
      id: "textanalyzer",
      name: "Advanced Text Analyzer",
      short: "Text Analyzer",
      domains: ["rag"],
      when: "Aug to Sep 2025",
      context: "Personal project",
      team: "Solo",
      summary: "Paste in text and see its sentiment and named entities, visualized.",
      did: [
        "Combined FinBERT sentiment analysis and SpaCy entity recognition with a D3.js visualization layer.",
        "Kept the NLP processing separate from the interface so each part could be tested and changed on its own.",
        "Used Claude Code and Codex to prototype and debug, reviewing every generated change before it went in."
      ],
      skills: ["python", "finbert", "spacy", "d3", "js", "aitools"],
      links: [{ label: "Code", url: "https://github.com/latikadekate123/Advanced-Text-Analyzer" }]
    },
    {
      id: "smartgrid",
      name: "Smart Grid Load Forecasting",
      short: "Load forecasting",
      domains: ["ml", "data"],
      when: "Jul to Aug 2025",
      context: "Grew out of STP 550 Statistical Machine Learning",
      team: "Course work with a partner, extended solo",
      summary: "Forecasting power-grid load, with a check on whether the data drifts.",
      did: [
        "Extended a course project into a forecasting app with a PostgreSQL feature store and a Streamlit dashboard.",
        "Compared ARIMA with gradient boosting on forecast error instead of assuming either would win.",
        "Added drift checks. Weather inputs are synthetic."
      ],
      skills: ["python", "sql", "timeseries", "sklearn", "streamlit"],
      links: [
        { label: "Try the app (may take a minute to wake)", url: "https://smartgrid-power-system.streamlit.app/" },
        { label: "Code", url: "https://github.com/latikadekate123/Smartgrid-Power-System-Load-Forecasting" }
      ]
    },
    {
      id: "microplastic",
      name: "Microplastic Pollution Scrollytelling",
      short: "Microplastic story",
      domains: ["viz"],
      when: "Mar to May 2025",
      context: "CSE 578 Data Visualization",
      team: "Team of six",
      summary: "A scroll-driven story about microplastics in the world's oceans. I built the map and the views linked to it.",
      did: [
        "Built the world map, stacked-bar and donut-chart views.",
        "Linked them with lasso selection from map to bar to donut, plus an ocean-region dropdown and tooltips.",
        "Simplified, cleaned and preprocessed the large dataset behind them."
      ],
      skills: ["d3", "js", "htmlcss"],
      links: []
    },
    {
      id: "wine",
      name: "White Wine Quality Prediction",
      short: "Wine quality",
      domains: ["ml", "data"],
      when: "Mar to May 2025",
      context: "DSE 501 Statistics for Data Analysts",
      team: "Team of four",
      summary: "Seven regression models, one dataset of 4,898 wines, one honest comparison.",
      did: [
        "Ran a correlation analysis first: alcohol (+0.44) and density (-0.31) were the strongest correlates of quality.",
        "Compared seven regression models on the same held-out 30% split instead of committing to one."
      ],
      result: {
        kind: "bars", unit: "", decimals: 2,
        label: "R² on a single held-out 30% split. Random Forest also had the lowest RMSE (0.60).",
        rows: [
          { name: "Random Forest", value: 0.526 },
          { name: "Gradient Boosting", value: 0.399 },
          { name: "SVR", value: 0.372 },
          { name: "Linear", value: 0.266 },
          { name: "Ridge", value: 0.266 },
          { name: "Decision Tree", value: 0.061 },
          { name: "Lasso", value: 0.0 }
        ]
      },
      skills: ["python", "sklearn", "pandas"],
      links: []
    },
    {
      id: "teammanager",
      name: "Smart Team Manager",
      short: "Team Manager",
      domains: ["sys"],
      when: "Feb to Mar 2026",
      context: "Personal project",
      team: "Solo",
      summary: "A shared team planner where everyone's edits sync live.",
      did: [
        "Built a Go backend and a React + Vite front end connected over WebSockets, packaged with Docker.",
        "Integrated Yjs for conflict-free syncing rather than writing a sync algorithm from scratch, and tested synchronization and collaboration behavior."
      ],
      skills: ["go", "react", "yjs", "docker"],
      links: [{ label: "Code", url: "https://github.com/latikadekate123/Smart-Team-Manager" }]
    },
    {
      id: "citypulse",
      name: "CityPulse Smart Transit",
      short: "CityPulse",
      domains: ["data"],
      when: "Jun to Jul 2025",
      context: "Personal project",
      team: "Solo",
      summary: "Transit data modeled properly in a relational database, with a dashboard on top.",
      did: [
        "Modeled transit data in a PostgreSQL schema instead of loose API records, with support for the live MTA API.",
        "Built a Streamlit dashboard and checked it against queries on the transformed data."
      ],
      skills: ["sql", "python", "streamlit"],
      links: [{ label: "Code", url: "https://github.com/latikadekate123/City-Pulse-Smart-Transit-System-using-SQL" }]
    },
    {
      id: "healthmon",
      name: "System Health Monitor",
      short: "Health Monitor",
      domains: ["sys"],
      when: "Jun to Jul 2025",
      context: "Personal project",
      team: "Solo",
      summary: "A tiny Bash tool that checks on an Ubuntu machine.",
      did: ["Wrote it with only native Linux utilities, so it runs anywhere with no installs."],
      skills: ["bash"],
      links: [{ label: "Code", url: "https://github.com/latikadekate123/System-Health-Monitor-on-Ubuntu" }]
    }
  ],

  experience: [
    {
      role: "Research Intern",
      org: "DaRL Lab, School of Computing and Augmented Intelligence, ASU",
      where: "Tempe, AZ",
      when: "May 2026 to Aug 2026",
      points: [
        "Trained RL agents and ran and validated action-delay experiments on the ASU Sol cluster with SLURM (LibSignal, SUMO, CityFlow).",
        "Synthesized RL literature on action-delay methods and traced benchmark code paths across agents, trainers and environments.",
        "Documented experiment gaps and reproducibility notes for delayed-action planning."
      ]
    },
    {
      role: "ML & DS Coordinator",
      org: "Google Developer Student Clubs, SIES GST",
      where: "Mumbai, India",
      when: "Jul 2022 to Apr 2024",
      points: [
        "Co-led a 10-week machine learning and data science program for 100+ students.",
        "Built workshop curriculum and mentored students through Python, data visualization, model development and debugging.",
        "Organized hackathons and coding events."
      ]
    },
    {
      role: "SEO Intern",
      org: "Help For Coders",
      where: "Mumbai, India",
      when: "Dec 2021 to Apr 2023",
      points: [
        "Analyzed keyword, traffic, ranking and engagement data in Google Analytics, Search Console, Semrush and Excel.",
        "Turned findings into page-level recommendations, some of which were implemented."
      ]
    },
    {
      role: "Machine Learning & Image Processing Intern",
      org: "SIES Graduate School of Technology",
      where: "Mumbai, India",
      when: "27 Jun to 2 Jul 2022",
      points: [
        "Completed a credit card fraud detection project in Python with TensorFlow and scikit-learn.",
        "Did the image preprocessing (cropping, augmentation, normalization) with OpenCV and debugged labeling errors."
      ]
    }
  ],

  education: [
    {
      school: "Arizona State University",
      degree: "M.S., Data Science, Analytics and Engineering (Electrical Engineering)",
      detail: "GPA 3.89 / 4.00. Graduating December 2026."
    },
    {
      school: "SIES Graduate School of Technology, Mumbai",
      degree: "B.E., Electronics & Telecommunication Engineering",
      detail: "GPA 3.71 / 4.00. 2020 to 2024."
    }
  ],

  recognition: [
    {
      title: "NASA Space Apps Challenge 2025",
      text: "Team Nebulizers won the Phoenix, AZ event with AstraNode and advanced to the Global Judging Round.",
      project: "astranode"
    },
    {
      title: "Registered Design, India (No. 415110-001)",
      text: "A 6-layer, dual-band microstrip antenna design for Wi-Fi, registered in 2024. Co-registrant on a team of five."
    },
    {
      title: "Google Cloud Career Practitioners Certificate",
      text: "Cloud Engineering and Data Science / ML tracks, January 2023."
    }
  ]
};
