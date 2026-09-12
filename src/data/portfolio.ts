export interface ProjectData {
  id: string;
  title: string;
  category: string;
  technologies: string[];
  description: string;
  problem: string;
  approach: string;
  pipelineSteps: string[];
  githubUrl?: string;
  visualTheme: string;
}

export interface CertificationData {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
}

export const PORTFOLIO_DATA = {
  engineer: {
    name: "HEMANT PATIDAR",
    role: "AI / ML ENGINEER",
    location: "Indore, Madhya Pradesh, India",
    email: "hemantpatidar822@gmail.com",
    github: "https://github.com/hemant815/hemant815",
    linkedin: "https://www.linkedin.com/in/hemant-patidar-900a69300",
    headline: "Building intelligent systems across NLP, Computer Vision, Generative AI and Voice AI.",
    manifesto: "I build intelligent systems that turn machine learning into real-world experiences.",
    cutoutImage: "/Hemant-cutout.png",
    rawImage: "/Hemant.png",
    resumeUrl: "/Resume 3.pdf",
  },

  education: {
    degree: "B.Tech — Computer Science Engineering (Artificial Intelligence)",
    institution: "Mandsaur University",
    location: "Mandsaur, Madhya Pradesh, India",
    duration: "2023 — 2027",
    cgpa: "6.55 / 10",
    details: "Core specialization in Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, Neural Networks, and Software Engineering."
  },

  certifications: [
    {
      id: "genai-bcg",
      title: "GenAI Powered Data Analytics Job Simulation",
      issuer: "BCG / Forage",
      year: "2024",
      description: "Exploratory data analysis, generative AI prompt engineering, and business insights synthesis."
    },
    {
      id: "data-science-forage",
      title: "Introduction to Data Science Job Simulation",
      issuer: "Forage",
      year: "2024",
      description: "Practical simulation covering data cleaning, statistical modeling, data visualization, and predictive analytics."
    },
    {
      id: "nvidia-networking",
      title: "Nvidia Introduction to Networking",
      issuer: "Nvidia Deep Learning Institute",
      year: "2024",
      description: "Fundamental networking concepts, data center interconnects, and high-performance GPU networking basics."
    },
    {
      id: "defronix-security",
      title: "Defronix Certified Junior Security Professional",
      issuer: "Defronix Cyber Security",
      year: "2024",
      description: "Core cybersecurity fundamentals, network scanning, vulnerability assessment, and security best practices."
    }
  ] as CertificationData[],

  projects: [
    {
      id: "01",
      title: "AI TEXT SUMMARIZER",
      category: "NLP / TRANSFORMERS",
      technologies: ["Python", "Hugging Face Transformers", "T5", "FastAPI", "PyTorch", "Pydantic", "Jinja2"],
      description: "A fine-tuned T5 abstractive text summarization system with an inference pipeline and production-style FastAPI API.",
      problem: "Long documents, research papers, and news articles require manual effort to read and compress into digestible insights.",
      approach: "Fine-tuned a T5 sequence-to-sequence model using Byte-Pair Encoding tokenization and self-attention, serving predictions via FastAPI.",
      pipelineSteps: ["Raw Document Input", "Subword Tokenization", "T5 Transformer Processing", "Beam Search Decoding", "Abstractive Summary Output"],
      githubUrl: "https://github.com/hemant815/hemant815",
      visualTheme: "from-red-900/40 via-[#0a0d1a] to-black"
    },
    {
      id: "02",
      title: "AI ATTENDANCE SYSTEM",
      category: "COMPUTER VISION & BIOMETRICS",
      technologies: ["Python", "Face Recognition", "Speech Recognition", "ML", "FastAPI", "SQL"],
      description: "Attendance platform combining face recognition and voice authentication with a teacher dashboard and REST APIs.",
      problem: "Traditional manual attendance marking is slow, proxy-prone, and lacks real-time verification logs.",
      approach: "Combined OpenCV facial landmark vector extraction with voice frequency spectrum matching for dual-factor biometric attendance verification.",
      pipelineSteps: ["Camera Stream Capture", "Facial Landmark Mesh", "Voice Waveform Match", "Euclidean Distance Verification", "SQL Database Record"],
      githubUrl: "https://github.com/hemant815/hemant815",
      visualTheme: "from-cyan-950/40 via-[#0a0d1a] to-black"
    },
    {
      id: "03",
      title: "NEURAL STYLE TRANSFER",
      category: "GENERATIVE DEEP LEARNING",
      technologies: ["Python", "PyTorch", "CNN", "VGG19", "AdaIN", "Streamlit"],
      description: "Generative image synthesis system using Adaptive Instance Normalization for artistic style transfer.",
      problem: "Artistic style synthesis traditionally required lengthy per-image iterative optimization loops.",
      approach: "Implemented Adaptive Instance Normalization (AdaIN) with a VGG19 encoder-decoder network to instantly synthesize arbitrary artistic styles.",
      pipelineSteps: ["Content & Style Images", "VGG19 Feature Extraction", "AdaIN Layer Normalization", "Decoder Image Synthesis", "Artistic Image Output"],
      githubUrl: "https://github.com/hemant815/hemant815",
      visualTheme: "from-violet-950/40 via-[#0a0d1a] to-black"
    },
    {
      id: "04",
      title: "E-COMMERCE CUSTOMER SEGMENTATION",
      category: "DATA SCIENCE & CLUSTERING",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn", "PCA", "K-Means", "Matplotlib"],
      description: "Customer behavioral clustering using dimensionality reduction, feature engineering and K-Means clustering.",
      problem: "E-commerce platforms struggle to personalize marketing strategies without understanding distinct customer purchasing personas.",
      approach: "Cleaned raw transaction logs, engineered RFM features, reduced feature dimensions with PCA, and trained K-Means clustering validated by Silhouette Analysis.",
      pipelineSteps: ["Raw Transactions Log", "RFM Feature Scaling", "PCA Dimensionality Reduction", "K-Means Centroid Allocation", "Customer Persona Segments"],
      githubUrl: "https://github.com/hemant815/hemant815",
      visualTheme: "from-emerald-950/40 via-[#0a0d1a] to-black"
    }
  ] as ProjectData[],

  techGroups: [
    {
      name: "MACHINE LEARNING",
      items: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Regression", "Classification", "K-Means", "PCA"]
    },
    {
      name: "DEEP LEARNING",
      items: ["PyTorch", "CNN", "VGG19", "Neural Networks", "AdaIN"]
    },
    {
      name: "NLP & GENERATIVE AI",
      items: ["T5 Transformer", "Transformers", "Hugging Face", "RAG", "Agentic AI", "GANs"]
    },
    {
      name: "ENGINEERING & INFRA",
      items: ["FastAPI", "Docker", "Git", "GitHub", "SQL", "OpenCV", "Streamlit"]
    }
  ]
};
