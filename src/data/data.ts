export interface ProjectItem {
  id: string;
  title: string;
  type: string;
  category: "NLP" | "Computer Vision" | "Generative AI" | "Data Science";
  description: string;
  techStack: string[];
  githubUrl: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  visualType: "summarizer" | "attendance" | "style_transfer" | "segmentation";
}

export interface SkillNode {
  id: string;
  name: string;
  category: "Core ML" | "Vision & NLP" | "Generative AI" | "Engineering & Infra" | "Data & Analytics";
  level: "Expert" | "Advanced" | "Proficient";
  description: string;
  connections: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  description: string;
  badgeColor: string;
}

export const PORTFOLIO_DATA = {
  engineer: {
    name: "HEMANT PATIDAR",
    role: "AI/ML Engineer",
    systemStatus: "INTELLIGENCE ENGINE // ONLINE",
    headline: "BUILDING INTELLIGENCE. ENGINEERING WHAT'S NEXT.",
    subheadline: "AI/ML Engineer building intelligent systems across NLP, Computer Vision, Generative AI and Voice AI.",
    manifesto: "I build intelligent systems that turn machine learning into real-world experiences.",
    location: "Indore, Madhya Pradesh, India",
    email: "hemantpatidar822@gmail.com",
    github: "https://github.com/hemant815/hemant815",
    linkedin: "https://www.linkedin.com/in/hemant-patidar-900a69300",
    avatarImage: "/Hemant.png",
    cutoutImage: "/Hemant-cutout.png",
  },
  
  about: {
    editorialTitle: "MORE THAN MODELS.",
    bio: "Hemant Patidar is a B.Tech Computer Science Engineering student specializing in **Artificial Intelligence** at Mandsaur University. With hands-on experience building computer vision pipelines, fine-tuned transformer models, generative style-synthesis apps, and voice authentication systems, he bridges academic ML foundations with real-world software engineering.",
    focusAreas: [
      {
        title: "Natural Language Processing",
        desc: "Transformer architectures, sequence-to-sequence models (T5), text summarization, RAG, and prompt engineering."
      },
      {
        title: "Computer Vision",
        desc: "Real-time face recognition, feature extraction, convolutional neural networks, and OpenCV video analytics."
      },
      {
        title: "Generative AI & Synthesis",
        desc: "Neural Style Transfer with AdaIN, GAN architectures, diffusion concepts, and generative deep learning."
      },
      {
        title: "Voice AI & Audio Systems",
        desc: "Speech recognition, voice biometric verification, waveform analysis, and real-time audio integration."
      }
    ]
  },

  skillsNodes: [
    {
      id: "python",
      name: "Python",
      category: "Core ML",
      level: "Expert",
      description: "Primary programming language for machine learning pipelines, deep learning, PyTorch models, and data processing.",
      connections: ["pytorch", "scikit-learn", "fastapi", "opencv", "transformers"]
    },
    {
      id: "pytorch",
      name: "PyTorch",
      category: "Core ML",
      level: "Expert",
      description: "Deep learning framework used for custom neural net architectures, loss function optimization, AdaIN style transfer, and transformer training.",
      connections: ["python", "transformers", "gans", "style-transfer"]
    },
    {
      id: "scikit-learn",
      name: "Scikit-learn",
      category: "Core ML",
      level: "Advanced",
      description: "Machine learning library for regression, classification, K-Means clustering, PCA dimensionality reduction, and model evaluation.",
      connections: ["python", "pca", "kmeans", "sql"]
    },
    {
      id: "opencv",
      name: "OpenCV",
      category: "Vision & NLP",
      level: "Advanced",
      description: "Computer vision library for image manipulation, video stream processing, face detection, color spaces, and spatial filtering.",
      connections: ["python", "computer-vision", "face-recognition"]
    },
    {
      id: "computer-vision",
      name: "Computer Vision",
      category: "Vision & NLP",
      level: "Advanced",
      description: "Visual intelligence algorithms for facial detection, object classification, edge detection, and real-time camera stream analytics.",
      connections: ["opencv", "pytorch", "face-recognition"]
    },
    {
      id: "nlp",
      name: "NLP",
      category: "Vision & NLP",
      level: "Advanced",
      description: "Natural Language Processing algorithms for tokenization, text normalization, tf-idf, word embeddings, and text classification.",
      connections: ["python", "transformers", "t5", "rag"]
    },
    {
      id: "transformers",
      name: "Transformers",
      category: "Vision & NLP",
      level: "Advanced",
      description: "Self-attention mechanism implementations, encoder-decoder architectures, Hugging Face models, and sequence generation.",
      connections: ["nlp", "t5", "huggingface", "pytorch"]
    },
    {
      id: "t5",
      name: "T5 Transformer",
      category: "Vision & NLP",
      level: "Advanced",
      description: "Text-to-Text Transfer Transformer fine-tuned for abstractive document summarization and text compression.",
      connections: ["transformers", "nlp", "huggingface"]
    },
    {
      id: "generative-ai",
      name: "Generative AI",
      category: "Generative AI",
      level: "Advanced",
      description: "Generative modeling techniques including neural image synthesis, text generation models, and adaptive style transfer.",
      connections: ["gans", "style-transfer", "rag", "agentic-ai"]
    },
    {
      id: "gans",
      name: "GANs",
      category: "Generative AI",
      level: "Proficient",
      description: "Generative Adversarial Networks for synthetic data creation, image-to-image translation, and latent space manipulation.",
      connections: ["generative-ai", "pytorch", "style-transfer"]
    },
    {
      id: "style-transfer",
      name: "Style Transfer",
      category: "Generative AI",
      level: "Advanced",
      description: "Artistic image generation using AdaIN (Adaptive Instance Normalization) and VGG19 feature map extraction.",
      connections: ["pytorch", "generative-ai", "streamlit"]
    },
    {
      id: "rag",
      name: "RAG",
      category: "Generative AI",
      level: "Proficient",
      description: "Retrieval-Augmented Generation architectures combining vector databases with language models for grounded QA systems.",
      connections: ["nlp", "generative-ai", "transformers"]
    },
    {
      id: "agentic-ai",
      name: "Agentic AI",
      category: "Generative AI",
      level: "Proficient",
      description: "Autonomous AI agent workflows with tool calling, multi-step planning, and decision-making logic.",
      connections: ["generative-ai", "python", "fastapi"]
    },
    {
      id: "fastapi",
      name: "FastAPI",
      category: "Engineering & Infra",
      level: "Advanced",
      description: "High-performance Python web framework for building REST APIs to serve ML models with async endpoints and Pydantic validation.",
      connections: ["python", "docker", "sql"]
    },
    {
      id: "docker",
      name: "Docker",
      category: "Engineering & Infra",
      level: "Proficient",
      description: "Containerization of machine learning APIs and web applications for reproducible deployment environments.",
      connections: ["fastapi", "python"]
    },
    {
      id: "huggingface",
      name: "Hugging Face",
      category: "Engineering & Infra",
      level: "Advanced",
      description: "Model hub, Datasets, and Transformers library integration for downloading pre-trained weights and hosting models.",
      connections: ["transformers", "t5", "nlp"]
    },
    {
      id: "streamlit",
      name: "Streamlit",
      category: "Engineering & Infra",
      level: "Advanced",
      description: "Rapid interactive web dashboard framework for demonstrating machine learning models and computer vision pipelines.",
      connections: ["python", "style-transfer"]
    },
    {
      id: "sql",
      name: "SQL",
      category: "Data & Analytics",
      level: "Advanced",
      description: "Relational database querying, schema design, and data persistence for student logs, authentication records, and user data.",
      connections: ["python", "fastapi", "power-bi"]
    },
    {
      id: "power-bi",
      name: "Power BI",
      category: "Data & Analytics",
      level: "Proficient",
      description: "Business intelligence reporting, interactive visual dashboards, and analytics metrics presentation.",
      connections: ["sql", "scikit-learn"]
    }
  ] as SkillNode[],

  projects: [
    {
      id: "01",
      title: "AI TEXT SUMMARIZER",
      type: "Transformer-Based Summarization API",
      category: "NLP",
      description: "An abstractive text summarization system built with a fine-tuned T5 transformer and exposed through a production-style REST API.",
      techStack: ["Python", "T5 Transformer", "Hugging Face", "PyTorch", "FastAPI"],
      githubUrl: "https://github.com/hemant815/hemant815",
      highlights: [
        "Fine-tuned T5 sequence-to-sequence model for abstractive compression",
        "Tokenization pipeline with subword Byte-Pair Encoding (BPE)",
        "FastAPI REST endpoints for low-latency summary generation",
        "Attention weight extraction for visual document breakdown"
      ],
      metrics: [
        { label: "Model Architecture", value: "T5 Transformer" },
        { label: "Processing Mode", value: "Abstractive" }
      ],
      visualType: "summarizer"
    },
    {
      id: "02",
      title: "AI ATTENDANCE SYSTEM",
      type: "Computer Vision & Voice Biometrics",
      category: "Computer Vision",
      description: "A production-style attendance platform combining face recognition and voice authentication with real-time analytics.",
      techStack: ["Computer Vision", "Face Recognition", "Speech Recognition", "FastAPI", "SQL"],
      githubUrl: "https://github.com/hemant815/hemant815",
      highlights: [
        "Facial landmark detection and embedding vector distance verification",
        "Voice biometric waveform matching for multi-factor authentication",
        "Automated attendance logging in relational SQL database",
        "Teacher dashboard for real-time attendance verification & analytics"
      ],
      metrics: [
        { label: "Auth Modalities", value: "Face + Voice" },
        { label: "Verification Speed", value: "< 1.2s" }
      ],
      visualType: "attendance"
    },
    {
      id: "03",
      title: "NEURAL STYLE TRANSFER",
      type: "Generative Image Synthesis Engine",
      category: "Generative AI",
      description: "A generative AI application for artistic image synthesis using Adaptive Instance Normalization.",
      techStack: ["PyTorch", "CNN", "VGG19", "AdaIN", "Streamlit"],
      githubUrl: "https://github.com/hemant815/hemant815",
      highlights: [
        "VGG19 encoder for extracting content and style feature maps",
        "AdaIN (Adaptive Instance Normalization) for fast arbitrary style transfer",
        "Custom decoder trained for real-time artistic reconstruction",
        "Interactive Streamlit web app with real-time style blending sliders"
      ],
      metrics: [
        { label: "Backbone Network", value: "VGG19 CNN" },
        { label: "Normalization", value: "AdaIN" }
      ],
      visualType: "style_transfer"
    },
    {
      id: "04",
      title: "E-COMMERCE CUSTOMER SEGMENTATION",
      type: "Unsupervised Behavioral Clustering",
      category: "Data Science",
      description: "Customer behavioral clustering platform utilizing PCA dimensionality reduction and K-Means clustering.",
      techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "PCA", "K-Means"],
      githubUrl: "https://github.com/hemant815/hemant815",
      highlights: [
        "Data cleaning, missing value imputation, and feature engineering",
        "PCA (Principal Component Analysis) for dimensionality reduction",
        "K-Means clustering validated with Silhouette Analysis",
        "Translating cluster centroids into actionable customer personas"
      ],
      metrics: [
        { label: "Algorithm", value: "PCA + K-Means" },
        { label: "Validation", value: "Silhouette Score" }
      ],
      visualType: "segmentation"
    }
  ] as ProjectItem[],

  education: [
    {
      id: "btech-ai",
      degree: "B.Tech – Computer Science Engineering (Artificial Intelligence)",
      institution: "Mandsaur University",
      location: "Mandsaur, Madhya Pradesh, India",
      duration: "2023 – 2027",
      cgpa: "6.55/10",
      description: "Specialized curriculum focusing on Artificial Intelligence, Machine Learning, Deep Learning, Neural Networks, Database Management Systems, and Software Engineering."
    }
  ],

  certifications: [
    {
      id: "genai-bcg",
      title: "GenAI Powered Data Analytics Job Simulation",
      issuer: "BCG / Forage",
      year: "2024",
      description: "Completed practical tasks in exploratory data analysis, generative AI prompt engineering, and business insights synthesis.",
      badgeColor: "cyan"
    },
    {
      id: "data-science-forage",
      title: "Introduction to Data Science Job Simulation",
      issuer: "Forage",
      year: "2024",
      description: "Practical simulation covering data cleaning, statistical modeling, data visualization, and predictive analytics.",
      badgeColor: "violet"
    },
    {
      id: "nvidia-networking",
      title: "Nvidia Introduction to Networking",
      issuer: "Nvidia Deep Learning Institute",
      year: "2024",
      description: "Fundamental networking concepts, data center interconnects, and high-performance GPU networking basics.",
      badgeColor: "emerald"
    },
    {
      id: "defronix-security",
      title: "Defronix Certified Junior Security Professional",
      issuer: "Defronix Cyber Security",
      year: "2024",
      description: "Core cybersecurity fundamentals, network scanning, vulnerability assessment, and security best practices.",
      badgeColor: "amber"
    }
  ] as CertificationItem[]
};
