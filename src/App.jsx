import { useState, useEffect } from "react";
import "./styles.css";

const ME = {
  name: "Mohammed Asif Ameen Baig", initials: "MA", role: "Data Scientist – AI ML Engineer",
  phone: "+91 9985545362",
  email: "md.asif.ameen.baig.2@gmail.com", photo: "/asif_image_dp.png", resume: "",
  place: "Repalle, Andhra Pradesh, India",
  github: "https://github.com/asif684", linkedin: "https://www.linkedin.com/in/mohammedasifameenbaig/",
};

const SKILLS = [
  ["Programming", ["Python", "SQL", "Excel"]],
  ["AI and ML", ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "LLMs", "RAG", "Fine-Tuning", "LangChain", "LangGraph", "Agentic AI", "MCP", "LLMOps", "Claude Code", "Codex"]],
  ["MLOps", ["Docker", "Kubernetes (EKS)", "MLflow", "DagsHub", "DVC", "Git", "GitHub Actions", "Cookiecutter", "Langfuse", "Human-in-the-Loop"]],
  ["Data analytics and engineering", ["Excel", "Power BI", "Confluent Kafka", "Snowflake", "MongoDB", "ETL and ELT", "Databricks", "A/B Testing"]],
  ["Vector stores", ["FAISS", "ChromaDB", "Pinecone"]],
  ["Cloud", ["AWS", "Azure", "GCP", "PySpark (basics)"]],
  ["Workflow", ["Jira"]],
];

const JOBS = [
  ["YBI Foundation", "AI ML Data Science Intern", "Aug 2024 – Feb 2025", "Six months on AI, ML and data science projects alongside senior engineers, including RAG and MLOps pipelines."],
  ["Indian Servers", "Generative AI Intern", "Jun 2024 – Aug 2024", "Two months on generative AI work: prompt optimization, Hugging Face models and Power BI analytics."],
];

const JOB_SIMS = [
  ["Vista", "AI in Action Job Simulation", "Applied AI/ML to business problems: built classification models, evaluated model performance, and presented insights to stakeholders."],
  ["Quantium", "Data Analytics Job Simulation", "Analyzed retail transaction data, performed customer segmentation, built predictive models for churn, and created executive dashboards."],
  ["Siemens", "Operations Industrial Engineer Job Simulation", "Optimized production line efficiency using lean manufacturing principles, time studies, and process simulation."],
  ["British Airways", "Data Science Job Simulation", "Built demand forecasting models for flight routes, analyzed customer feedback sentiment, and optimized pricing strategies."],
  ["GE Aerospace", "Explore Electrical Engineering Job Simulation", "Designed electrical control systems, performed circuit analysis, and simulated power distribution networks."],
  ["Deloitte", "Data Analytics Job Simulation", "Delivered client-ready analytics: data cleaning, KPI tracking, visualization dashboards, and actionable business recommendations."],
  ["BCGX", "Data Science Job Simulation", "End-to-end ML project: problem framing, feature engineering, model training, evaluation, and deployment strategy for a retail client."],
  ["HPE", "Software Engineering Job Simulation", "Built scalable microservices, implemented REST APIs, wrote unit/integration tests, and set up CI/CD pipelines."],
  ["BCGX", "Introduction to Data for Decision Makers Job Simulation", "Translated business questions into analytical frameworks, designed experiments, and communicated data-driven recommendations."],
  ["Goldman Sachs", "Risk Job Simulation", "Critical thinking, decision making, financial literacy, quantitative analysis, risk assessment, and risk management in banking scenarios."],
];

const GH = "https://github.com/asif684/";

const PROJECTS = [
  {
    title: "Production-Grade Movie Sentiment Analysis with MLOps on AWS",
    desc: "End-to-end production-grade MLOps pipeline for movie sentiment classification — fully automated, containerized, deployed, and monitored using AWS cloud services and DevOps tools. Eight-stage pipeline from S3 ingestion to Prometheus and Grafana monitoring, deployed as a Flask app on AWS EKS.",
    tags: ["DVC", "MLflow", "Dagshub", "Docker", "GitHub Actions", "EKS", "Prometheus", "Grafana", "AWS S3/ECR/EC2/IAM", "Flask", "Cookiecutter"],
    url: GH + "production-grade-movie-sentiment-mlops-aws",
    cats: ["MLOps"]
  },
  {
    title: "Air Pressure System (APS) Failure Prediction – MLOps Production Grade",
    desc: "Production-grade MLOps pipeline predicting failures in truck air pressure systems. Optimizes for asymmetric misclassification costs: False Negative (missed failure) costs 50× more than False Positive. Complete CI/CD with Docker, AWS S3/EC2/ECR, GitHub Actions, FastAPI real-time inference, and MongoDB.",
    tags: ["Docker", "AWS S3", "AWS EC2", "AWS ECR", "GitHub Actions", "FastAPI", "MongoDB", "Python", "XGBoost", "RobustScaler", "Custom Cost Metric"],
    url: GH + "SENSORLIVE_MLOPS_Production_grade_project",
    cats: ["MLOps"]
  },
  {
    title: "Visa Approval Prediction – MLOps Production Grade",
    desc: "End-to-end MLOps pipeline automating visa approval prediction using Confluent Kafka for real-time data ingestion into MongoDB, Evidently AI for data drift detection, Docker containerization, GitHub Actions CI/CD, and FastAPI deployment on AWS EC2/ECR/S3.",
    tags: ["Confluent Kafka", "MongoDB Atlas", "Evidently AI", "Docker", "GitHub Actions", "AWS EC2", "AWS ECR", "AWS S3", "AWS IAM", "FastAPI", "Python"],
    url: GH + "visa-approval-mlops-production-grade-project",
    cats: ["MLOps"]
  },
  {
    title: "Full-Stack AI-Powered ATS Resume Builder SaaS",
    desc: "Full-stack resume builder with AI-powered keyword extraction and resume generation using multiple LLM providers. Features JWT auth, profile management (education, experience, projects, certificates, skills), ATS keyword extraction from job descriptions, 10+ LLM providers (OpenAI, Anthropic, Gemini, Groq, Cerebras, OpenRouter, Together AI, etc.), free/low-latency model prioritization, flexible API key management, three prompt options (system/custom LLM/custom prompt), AI-suggested project selection, chat-format resume output with section editing, and PDF/Word generation scaffold.",
    tags: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Prisma ORM", "JWT Auth", "TanStack Query", "Zustand", "React Hook Form", "Zod", "Multiple LLM Providers", "Groq", "Cerebras", "Together AI", "OpenRouter", "Google Gemini", "OpenAI", "Anthropic", "Docker", "Rate Limiting", "Helmet", "AES-256-GCM"],
    url: GH + "Full-Stack-AI-Powered-ATS-Resume-Builder-SaaS-Application",
    cats: ["Full Stack"]
  },
  {
    title: "Voice-Driven Multi-Agent Assistant with MCP & LangSmith",
    desc: "Voice-controlled executive assistant (LangChain + Google Gemini) acting on real Gmail & Notion via MCP. Multi-agent: Orchestrator delegates to specialist agents (Gmail expert, Notion expert, Researcher). STT: Deepgram/Whisper, TTS: ElevenLabs/OpenAI. Guardrails: PII detection, prompt injection blocking, human-in-the-loop. LangSmith tracing. Deployed on Render (Docker).",
    tags: ["LangChain", "Google Gemini", "MCP (Gmail + Notion)", "Deepgram", "ElevenLabs", "Tavily", "LangSmith", "FastAPI", "Docker", "Guardrails", "Multi-Agent", "Render"],
    url: GH + "Voice-driven-multi-agent-orchestration-with-MCP-guardrails-and-full-LangSmith-observability",
    cats: ["Generative AI"]
  },
  {
    title: "Medical Chatbot with LLMs, LangChain & Pinecone",
    desc: "Production-grade AI Medical Chatbot answering medical queries using LLMs, RAG, and vector-based retrieval. LangChain + Euri LLMs, Pinecone vector store, Flask backend, Docker containerization, AWS CI/CD with GitHub Actions, deployed on EC2/ECR. Secured with .env and GitHub secrets.",
    tags: ["Python", "LangChain", "Flask", "GPT/Euri LLMs", "Pinecone", "Docker", "GitHub Actions", "AWS EC2", "AWS ECR", "RAG"],
    url: GH + "Build-a-Complete-Medical-Chatbot-with-LLMs-LangChain-Pinecone-Flask-AWS",
    cats: ["Generative AI"]
  },
  {
    title: "GPT From Scratch – Decoder-Only Transformer",
    desc: "Fully functional decoder-only GPT model built from scratch in TensorFlow/Keras. Implements multi-head self-attention, custom positional encoding, feed-forward blocks, residual connections, LayerNorm, causal masking, autoregressive next-token prediction, temperature sampling. Vocab 5000, seq len 100, emb 256, 8 heads, 4 layers, FFN 1024.",
    tags: ["TensorFlow/Keras", "Multi-Head Self-Attention", "Positional Encoding", "Feed-Forward Networks", "Residual Connections", "LayerNorm", "Causal Masking", "Temperature Sampling", "Autoregressive Training"],
    url: GH + "GPT-From-Scratch",
    cats: ["Generative AI"]
  },
  {
    title: "Bank Loan Report Dashboard",
    desc: "Three interactive Power BI dashboards (Summary, Overview, Details) on Microsoft SQL Server with MTD/MoM time intelligence. KPIs for Total Applications, Funded Amount, Amount Received, Avg Interest Rate, Avg DTI, Good vs Bad Loan metrics, Loan Status Grid, Monthly Trends, State Map, Loan Term Donut, Employee Length, Purpose Breakdown, Home Ownership Tree Map.",
    tags: ["MSSQL Server", "Power BI", "Power Query", "DAX", "SQL (CTE, Joins, Aggregations)", "Date Functions", "Time Intelligence (MTD/QTD/YTD/MoM)", "CALCULATE, SUMX", "Filled Map, Donut, Bar, Tree Map"],
    url: GH + "Bank-Financial-Analytics-PowerBI-MSsql-Server-Dashboard",
    cats: ["Data analytics"]
  },
  {
    title: "Coffee Shop Sales Analytics Dashboard",
    desc: "End-to-end cloud-based analytics pipeline: AWS S3 (data storage) → Snowflake (data warehousing) → Power BI (visualization). Interactive dashboard with Calendar Heat Map, Weekday vs Weekend analysis, Store Location maps, Daily Sales with Average Line, Product Category analysis, Top 10 Products, and Day/Hour Heat Maps with custom tooltips.",
    tags: ["AWS S3", "Snowflake", "Power BI", "SQL", "DAX", "Power Query", "STR_TO_DATE", "Window Functions", "CTEs", "JOINs"],
    url: GH + "coffee-shop-sales-analysis-aws-s3-snowflake-powerbi",
    cats: ["Data analytics"],
    result: "Top 10 products bring in over 60% of sales. Urban stores outperform suburban by 25%. Peak hours: 8–11 AM & 4–7 PM."
  },
  {
    title: "Computer Vision Robotic Arm with Human Hand-Like End-Effector",
    desc: "Autonomous robotic system integrating YOLOv8 object detection (OpenCV) with a 10-servo human-hand-like end-effector on Arduino Uno. CAD modeled in Fusion 360, simulated in Maya & Tinkercad. Dataset prep & training via Roboflow/Google Colab. Real-time detect → grip → reset → rotate cycle.",
    tags: ["YOLOv8", "OpenCV", "Arduino IDE", "Fusion 360", "AutoDesk Maya", "Tinkercad", "Roboflow", "Google Colab", "Servo Motors", "DC Motor (L293D)", "pyserial", "ultralytics"],
    url: GH + "Computer-Vision-Robotic-Arm-with-Human-Hand-Like-End-Effector",
    cats: ["Computer vision"]
  },
  {
    title: "Chest Cancer Classification – MLOps Production Grade",
    desc: "Fully production-grade chest cancer image classification system with reproducible ML pipelines, experiment tracking, and automated cloud deployment. End-to-end ML pipeline with DVC for data versioning, MLflow for experiment tracking, GitHub Actions CI/CD, Docker containerization, and AWS EC2/ECR/S3 deployment.",
    tags: ["Python", "DVC", "MLflow", "Docker", "GitHub Actions", "AWS IAM", "EC2", "ECR", "S3", "TensorFlow/Keras", "config.yaml/params.yaml/secrets.yaml"],
    url: GH + "Chest-Cancer-Classification-MLOPS-Production-Grade",
    cats: ["MLOps", "Computer vision"]
  },
  {
    title: "Memory-Based Chatbot with RAG & Persistent FAISS Memory",
    desc: "Intelligent chatbot with Retrieval-Augmented Generation (RAG) and persistent vector memory using FAISS. Euriai API for embeddings and chat completions. Context-aware personalized conversations persisting across sessions. Streamlit UI with sidebar controls for API key, identity, and custom memories. Optional LangChain integration.",
    tags: ["Python", "FAISS", "Streamlit", "Euriai API", "dotenv", "LangChain (optional)", "RAG", "Vector Search"],
    url: GH + "MEMORYBOT",
    cats: ["Generative AI"]
  },
  {
    title: "AI-Powered Job Recommendation System with MCP",
    desc: "Career assistant analyzing resumes, detecting skill gaps, creating career roadmaps, and fetching real-time jobs from Naukri & LinkedIn via Apify Actors. EURI AI for embeddings & reasoning, FastMCP for backend tools (fetch_naukri_jobs), Streamlit UI. PDF parsing with PyMuPDF, uv for dependency management.",
    tags: ["Streamlit", "FastMCP", "EURI AI (gpt-4.1-nano)", "Apify Actors (Naukri/LinkedIn)", "PyMuPDF", "dotenv", "uv", "MCP Protocol"],
    url: GH + "Ai_powered_job_recommendation_system_with_mcp",
    cats: ["Generative AI"]
  },
  {
    title: "A/B Test: Facebook vs AdWords Marketing Campaigns",
    desc: "Comprehensive A/B test comparing Facebook and Google AdWords campaigns (365 days, 2019). Hypothesis testing (p ≈ 9.35e-134), regression (R²=76.35%), time-series analysis (weekday/monthly trends, CPC patterns), cointegration testing. Facebook significantly outperforms AdWords in conversions (11.74 vs 5.98/day) and ROI.",
    tags: ["pandas", "NumPy", "Matplotlib", "Seaborn", "SciPy", "Statsmodels", "Scikit-learn", "LinearRegression", "seasonal_decompose", "coint", "Hypothesis Testing"],
    url: GH + "A-B-Testing-Analysis-Facebook-VS-Adword-",
    cats: ["Data analytics"],
    result: "Facebook: 11.74 conversions/day vs AdWords: 5.98 (p < 0.05). R² = 76.35% click-to-conversion."
  },
  {
    title: "Fraud Analytics Big Data ETL Pipeline",
    desc: "Real-time fraud detection ETL: Confluent Kafka (streaming) → Databricks (transformation/fraud logic) → MongoDB (storage) → Python SMTP (email alerts). Scalable big-data architecture for high-velocity financial transaction streams with minimal latency.",
    tags: ["Confluent Kafka", "Databricks", "MongoDB", "Python (SMTP)", "Real-time Streaming", "ETL Pipeline", "Fraud Detection Logic"],
    url: GH + "ETL_fraud_analytics_kafka_mongodb",
    cats: ["Data analytics"]
  },
];

const CERTS = [
  ["Euron Certifications", [
    ["Euron", "AWS"],
    ["Euron", "Azure"],
    ["Euron", "GCP"],
    ["Euron", "MCP (Model Context Protocol)"],
    ["Euron", "Big Data"],
    ["Euron", "Generative AI with Agentic AI and Fine-Tuning"],
    ["Euron", "Snowflake"],
    ["Euron", "SQL"],
    ["Euron", "RAG"],
    ["Euron", "MLOps"],
    ["Euron", "Power BI"],
    ["Euron", "Full Stack Data Science"],
    ["Euron", "Mathematics for Data Science and Data Analytics"],
    ["Euron", "Computer Vision Masters"],
  ]],
  ["Cisco Certifications", [
    ["Cisco", "Data Analytics Essentials"],
    ["Cisco", "Data Science Essentials with Python"],
  ]],
  ["Workshops", [
    ["Wonder Automation", "Two-Day Workshop on PLC Automation"],
    ["Sapcon Systems", "Five-Day Workshop on Integration of Design & Manufacturing using Siemens SolidEdge"],
  ]],
];

const ABOUT_SKILLS = [
  ["Programming", ["Python", "SQL"]],
  ["MLOps & Cloud", ["DVC", "MLflow", "Docker", "Kubernetes (EKS/AKS)", "GitHub Actions", "AWS/Azure/GCP", "Prometheus", "Grafana", "Cookiecutter", "DagsHub", "Langfuse", "Human-in-the-Loop"]],
  ["Generative AI & Agents", ["LangChain", "LangGraph", "MCP", "RAG", "Fine-Tuning", "LLMs", "Guardrails", "LangSmith", "Multi-Agent Systems", "FastMCP", "Claude Code", "Codex"]],
  ["Data Analytics & Engineering", ["Snowflake", "Power BI", "Confluent Kafka", "Databricks", "MongoDB", "ETL/ELT", "A/B Testing", "DAX", "SQL", "Evidently AI", "Excel"]],
  ["Computer Vision & Robotics", ["YOLOv8", "OpenCV", "TensorFlow/Keras", "Arduino", "Fusion 360", "PLC", "Microcontrollers", "Roboflow", "Edge Deployment"]],
  ["Vector Stores", ["FAISS", "ChromaDB", "Pinecone", "Weaviate", "RAG"]],
];

const HUES = [[265, "Violet"], [195, "Cyan"], [335, "Rose"], [150, "Green"], [30, "Amber"]];
const TABS = ["About", "Skills", "Projects", "Experience", "Job Simulations", "Education", "Honors & Awards", "Certificates", "Contact"];
const TAB_IDS = ["about", "skills", "projects", "experience", "job-simulations", "education", "honors-awards", "certificates", "contact"];

const Row = ({ icon, label, text, href, ext, cls }) => {
  const inner = (<><span className="ico" aria-hidden="true">{icon}</span><span className="rt"><b>{label}</b>{text}</span></>);
  return (
    <li className={cls}>{href
      ? <a className="row" href={href} aria-label={label} {...(ext ? { target: "_blank", rel: "noreferrer" } : {})}>{inner}</a>
      : <div className="row">{inner}</div>}</li>
  );
};

function Card() {
  const [imgError, setImgError] = useState(false);
  return (
    <aside className="glass card">
      <div className="avatar">
        {!imgError && ME.photo ? (
          <img
            src={ME.photo}
            alt={ME.name}
            onError={() => setImgError(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
          />
        ) : (
          <span aria-hidden="true">{ME.initials}</span>
        )}
      </div>
      <h1>{ME.name}</h1>
      <span className="role">{ME.role}</span>
      <ul className="contacts">
        <Row icon="📞" label="Phone" text={ME.phone} href={"tel:" + ME.phone.replace(/\s+/g, "")} />
        <Row icon="✉️" label="Email" text={ME.email} href={"mailto:" + ME.email} />
        <Row icon="🔗" label="LinkedIn" text="mohammedasifameenbaig" href={ME.linkedin} ext />
        <Row icon="💻" label="GitHub" text="github.com/asif684" href={ME.github} ext />
      </ul>
    </aside>
  );
}

const About = ({ go }) => (
  <>
    <h2 className="hero">Gold Medalist Robotics Engineer → AI/ML & Data Science Engineer</h2>
    <p className="subheadline">Building production-oriented AI systems, intelligent agents, scalable data pipelines, and cloud-native ML solutions.</p>

    <div className="about-block">
      <h3 className="block-title">Background</h3>
      <p>I am a <strong>Gold Medalist in Robotics and Automation Engineering</strong> with 8 months of hands-on internship experience in <strong>AI/ML, Data Science, Generative AI, and Agentic AI</strong>.</p>
    </div>

    <div className="about-block">
      <h3 className="block-title">What I Build</h3>
      <p>I have developed <strong>production-grade, cloud-deployed AI solutions</strong>, translating complex technical requirements into practical and scalable applications. My technical experience includes <strong>Agentic AI, MCP (Model Context Protocol), Claude Code, OpenAI Codex, and Spec-Driven Development (SDD)</strong>, applying modern AI-driven development practices to build structured, efficient, and reliable solutions.</p>
    </div>

    <div className="about-block">
      <h3 className="block-title">Engineering Foundation</h3>
      <p>My multidisciplinary engineering background spans <strong>Mechanical Engineering, Electronics, Robotics, Aerospace, and Software Development</strong>, providing a broad perspective on solving real-world engineering challenges. I also bring an understanding of the <strong>Software Development Life Cycle (SDLC)</strong> and modern software engineering practices.</p>
    </div>

    <p className="actions"><button className="btn" onClick={() => go("Contact")}>Contact me</button><button className="btn alt" onClick={() => go("Projects")}>View projects</button></p>
    <div className="grid">
      <div className="tile"><h3>🏅 Gold Medalist</h3><p>Highest academic performance in Robotics & Automation Engineering across 8 semesters, awarded by GNA University (Nov 2025).</p></div>
      <div className="tile"><h3>8 Months Internship</h3><p>6 months at YBI Foundation (AI/ML/Data Science) + 2 months at Indian Servers (Generative AI).</p></div>
      <div className="tile"><h3>13 Production Projects</h3><p>MLOps pipelines on EKS, GenAI agents with MCP/LangGraph, Kafka→Databricks fraud ETL, YOLOv8 robotic arm, Power BI dashboards.</p></div>
    </div>
  </>
);

const Skills = () => (
  <>
    {ABOUT_SKILLS.map(([g, items]) => (
      <div key={g} style={{ marginTop: 18 }}><span style={{ color: "var(--muted)", fontSize: 14, fontWeight: 600 }}>{g}</span>
        <div className="chips" style={{ marginTop: 8 }}>{items.map(s => <span className="chip" key={s}>{s}</span>)}</div></div>))}
  </>
);

const Experience = () => (
  <>
    <h2>Experience</h2>
    <ul className="tl">{JOBS.map(([co, t, d, p]) => (
      <li key={co}><span className="when">{d}</span><h3>{t}, {co}</h3><p>{p}</p></li>))}</ul>
  </>
);

const JobSimulations = () => (
  <>
    <h2>Job Simulation Experience</h2>
    <p className="lead">10 virtual job simulations from top firms — hands-on projects mirroring real work in Data Science, Analytics, Engineering, and Risk.</p>
    <ul className="tl">{JOB_SIMS.map(([co, t, d]) => (
      <li key={co + t}><span className="when">{co}</span><h3>{t}</h3><p>{d}</p></li>))}</ul>
  </>
);

const Education = () => (
  <>
    <h2>Education</h2>
    <ul className="tl">
      <li>
        <span className="when">Aug 2021 – Jul 2025</span>
        <h3>B.Tech, Robotics and Automation Engineering</h3>
        <p>GNA University. <strong>Gold Medalist 🥇</strong> — ranked 1st in class across 8 semesters.</p>
        <p style={{ marginTop: 8, color: "var(--muted)" }}>Specialized in AI, Data Science, Robotics, CAD/CAM, PLC, Microcontrollers, 3D Printing, Industrial Automation.</p>
      </li>
      <li>
        <span className="when">2019 – 2021</span>
        <h3>12th (Intermediate), MPC — Mathematics, Physics, Chemistry</h3>
        <p>Sri Hamsa Junior College. <strong>95%</strong>.</p>
      </li>
      <li>
        <span className="when">2018 – 2019</span>
        <h3>10th (SSC)</h3>
        <p>Municipal High School, Repalle. <strong>9.8 GPA</strong>.</p>
      </li>
    </ul>
  </>
);

const HonorsAwards = () => (
  <>
    <h2>Honors & Awards</h2>
    <ul className="tl">
      <li>
        <span className="when">Nov 2025</span>
        <h3>Gold Medalist 🥇 – Robotics and Automation Engineering</h3>
        <p>GNA University. Highest academic performance across 8 semesters. Recognition for technical competency and innovation in Robotics, CAD/CAM, Automation, AI/ML, Deep Learning, and Industrial Systems.</p>
      </li>
    </ul>
  </>
);

const Resume = () => {
  const downloadResume = () => {
    if (ME.resume) {
      const link = document.createElement('a');
      link.href = ME.resume;
      link.download = 'Mohammed_Asif_Ameen_Baig_Resume.pdf';
      link.click();
    } else {
      alert('Resume PDF not yet uploaded. Please check back later or contact me directly.');
    }
  };
  return (
    <>
      <h2>Resume</h2>
      <div className="tile" style={{ maxWidth: "700px", marginBottom: 24 }}>
        <h3>📄 Resume (Coming Soon)</h3>
        <p>I'm currently finalizing my resume PDF. In the meantime, you can explore my <strong>Education</strong>, <strong>Skills</strong>, <strong>Projects</strong>, and <strong>Experience</strong> sections for a complete picture.</p>
        <button className="btn" onClick={downloadResume} style={{ marginTop: 12 }}>Download Resume (when ready)</button>
        {ME.resume && <a className="btn alt" href={ME.resume} download style={{ marginTop: 12, marginLeft: 8 }}>Direct Download</a>}
      </div>
      <h3 style={{ marginTop: 28 }}>Quick Summary</h3>
      <p className="lead">🥇 Gold Medalist in Robotics and Automation Engineering (GNA University, 2025), ranked 1st in class. Two AI internships and 13 production-style ML projects across MLOps, Generative AI, Data Analytics, and Computer Vision.</p>
      <h3 style={{ marginTop: 20 }}>Core Skills & Expertise</h3>
      {SKILLS.map(([g, items]) => (
        <div key={g} style={{ marginTop: 14 }}><span style={{ color: "var(--muted)", fontSize: 14 }}>{g}</span>
          <div className="chips" style={{ marginTop: 6 }}>{items.map(s => <span className="chip" key={s}>{s}</span>)}</div></div>))}
    </>
  );
};

const Certificates = () => (
  <>
    <h2>Certificates</h2>
    {CERTS.map(([group, items]) => (
      <details key={group} open={group !== "Euron Certifications"}>
        <summary><h3>{group}</h3><span className="chip">{items.length}</span></summary>
        <ul className="rows">{items.map(([org, name]) => (
          <li key={org + name}><span className="org">{org}</span><span>{name}</span></li>))}</ul>
      </details>))}
  </>
);

const Projects = () => {
  const [f, setF] = useState("All");
  const [all, setAll] = useState(false);
  const catList = ["All", "MLOps", "Generative AI", "Data analytics", "Computer vision", "Full Stack"];
  const list = PROJECTS.filter(p => f === "All" || p.cats.includes(f));
  const more = f === "All" && !all && list.length > 6;
  const shown = more ? list.slice(0, 6) : list;
  return (
    <>
      <h2>Projects</h2>
      <div className="chips" role="group" aria-label="Filter projects">{catList.map(c => (
        <button key={c} className={"chip fbtn" + (f === c ? " on" : "")} aria-pressed={f === c} onClick={() => setF(c)}>{c}</button>))}</div>
      <div className="grid">{shown.map(p => (
        <div className="tile pcard" key={p.title}>{p.extra?.image && <img className="shot" src={p.extra.image} alt={p.title} />}<h3>{p.title}</h3><p>{p.desc}</p>
          {p.result && <p style={{ color: "var(--text)", fontWeight: 600 }}>{p.result}</p>}
          <div className="chips">{p.tags.map(x => <span className="chip" key={x}>{x}</span>)}</div>
          <p className="plink"><a className="link" href={p.url} target="_blank" rel="noreferrer">View on GitHub</a>{p.extra?.demo && <> &nbsp;·&nbsp; <a className="link" href={p.extra.demo} target="_blank" rel="noreferrer">Live demo</a></>}</p></div>))}</div>
      {more && <p style={{ marginTop: 20 }}><button className="btn alt" onClick={() => setAll(true)}>Show all {list.length} projects</button></p>}
    </>
  );
};

const Contact = () => {
  const [state, setState] = useState("idle");
  const copy = async () => {
    try { await navigator.clipboard.writeText(ME.email); setState("ok"); setTimeout(() => setState("idle"), 2000); }
    catch (e) { setState("fail"); }
  };
  const copyPhone = async () => {
    try { await navigator.clipboard.writeText(ME.phone); setState("ok"); setTimeout(() => setState("idle"), 2000); }
    catch (e) { setState("fail"); }
  };
  return (
    <>
      <h2>Let's talk</h2>
      <p className="lead">I'm looking for a graduate trainee role in AI and automation. Email or phone is the fastest way to reach me.</p>
      <p style={{ color: "var(--text)", fontWeight: 600 }}>{ME.email}</p>
      <p style={{ color: "var(--text)", fontWeight: 600, marginTop: 8 }}>{ME.phone}</p>
      <a className="btn" href={"mailto:" + ME.email}>Send an email</a>
      <a className="btn" href={"tel:" + ME.phone.replace(/\s+/g, "")}>Call me</a>
      <button className="btn alt" onClick={copy}>{state === "ok" ? "Copied" : state === "fail" ? "Select the address above to copy" : "Copy email"}</button>
      <button className="btn alt" onClick={copyPhone}>Copy phone</button>
      <a className="btn alt" href={ME.linkedin} target="_blank" rel="noreferrer">Message on LinkedIn</a>
      <a className="btn alt" href={ME.github} target="_blank" rel="noreferrer">See my code</a>
    </>
  );
};

function App() {
  const fromHash = () => {
    const hash = location.hash.slice(1).toLowerCase();
    const idx = TAB_IDS.indexOf(hash);
    return idx >= 0 ? TABS[idx] : "About";
  };
  const [tab, setTabState] = useState(fromHash);
  const [hue, setHue] = useState(() => { try { return +localStorage.getItem("hue") || 265; } catch (e) { return 265; } });
  const [mode, setMode] = useState(() => { try { return localStorage.getItem("theme") || "auto"; } catch (e) { return "auto"; } });
  const [sys, setSys] = useState(() => !!(window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches));
  const theme = mode === "auto" ? (sys ? "dark" : "light") : mode;
  const setTab = t => { setTabState(t); try { const idx = TABS.indexOf(t); if (idx >= 0 && location.hash.slice(1) !== TAB_IDS[idx]) location.hash = TAB_IDS[idx]; } catch (e) {} };
  useEffect(() => {
    const mq = matchMedia("(prefers-color-scheme: dark)");
    const f = e => setSys(e.matches);
    mq.addEventListener("change", f);
    return () => mq.removeEventListener("change", f);
  }, []);
  useEffect(() => {
    const f = () => setTabState(fromHash());
    window.addEventListener("hashchange", f);
    return () => window.removeEventListener("hashchange", f);
  }, []);
  useEffect(() => { window.scrollTo(0, 0); }, [tab]);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.setProperty("--h", hue);
    try { localStorage.setItem("theme", mode); localStorage.setItem("hue", hue); } catch (e) {}
  }, [theme, mode, hue]);
  const Page = {
    About,
    Skills,
    Projects,
    Experience,
    "Job Simulations": JobSimulations,
    Education,
    "Honors & Awards": HonorsAwards,
    Certificates,
    Contact
  }[tab];
  return (
    <div className="app">
      <Card />
      <div className="main">
        <nav className="glass bar" aria-label="Sections">
          <div className="bar-top">
            <div className="tabs" role="tablist">{TABS.map((t, i) => (
              <button key={t} role="tab" aria-selected={tab === t} className="tab" onClick={() => setTab(t)}>{t}</button>))}</div>
          </div>
          <div className="bar-bottom">
            <div className="theme-row">
              <span className="theme-label">Accent</span>
              <div className="swatches" role="group" aria-label="Accent color">
                {HUES.map(([h, n]) => (
                  <button key={h} className="sw" aria-label={n} title={n} aria-pressed={hue === h}
                    style={{ background: `hsl(${h} 85% 60%)` }} onClick={() => setHue(h)} />
                ))}
              </div>
              <span className="swname">{(HUES.find(x => x[0] === hue) || [0, ""])[1]}</span>
            </div>
            <div className="theme-row">
              <span className="theme-label">Mode</span>
              <div className="seg" role="group" aria-label="Color mode">
                {[["auto", "⚙️", "Match my device"], ["light", "☀️", "Light"], ["dark", "🌙", "Dark"]].map(([m, i, n]) => (
                  <button key={m} aria-pressed={mode === m} aria-label={n} title={n} onClick={() => setMode(m)}>{i}</button>
                ))}
              </div>
            </div>
          </div>
        </nav>
        <main className="glass panel" key={tab}><Page go={setTab} /></main>
      </div>
    </div>
  );
}

export default App;