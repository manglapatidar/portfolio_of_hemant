export const PORTFOLIO_DATA = {
  about: {
    bio: "I'm a Computer Science Engineering student specializing in **Artificial Intelligence** at Mandsaur University. My work blends the rigor of machine learning with the curiosity to explore Computer Vision, NLP, and Generative AI. I build models and systems that turn raw data into real, usable intelligence — from face-recognition pipelines to AI-driven image generation.",
    education: {
      degree: "B.Tech — Computer Science Engineering (AI)",
      institution: "Mandsaur University, Mandsaur (M.P.)",
      duration: "2023 – Present",
      cgpa: "6.38/10"
    },
    stats: [
      { id: 1, label: "Projects Built", value: 3, suffix: "+" },
      { id: 2, label: "Certifications", value: 2, suffix: "" },
      { id: 3, label: "AI/ML Focus", value: 100, suffix: "%" }
    ]
  },
  skills: [
    {
      category: "Languages",
      items: ["Python", "SQL"]
    },
    {
      category: "ML / Deep Learning",
      items: ["Scikit-learn", "PyTorch", "Regression", "Classification", "CNN", "RNN", "Clustering"]
    },
    {
      category: "Tools & Frameworks",
      items: ["Git", "GitHub", "Jupyter", "VS Code", "FastAPI", "Streamlit", "Docker"]
    },
    {
      category: "Data Visualization",
      items: ["Seaborn", "Matplotlib"]
    },
    {
      category: "Exploring / Familiar With",
      items: ["RAG", "GANs", "Transformers", "Agentic AI"]
    }
  ],
  projects: [
    {
      id: "01",
      title: "AI Attendance System",
      type: "Computer Vision System",
      description: "An AI-powered attendance management system combining Face Recognition and Voice Authentication for fast, reliable student identification. Includes a full Teacher Dashboard for tracking attendance, viewing analytics, and generating reports — backed by REST APIs and real-time database workflows.",
      tags: ["Python", "Face & Speech Recognition", "Machine Learning", "FastAPI", "SQL"],
      githubUrl: "https://github.com/hemant815/hemant815"
    },
    {
      id: "02",
      title: "Neural Style Transfer",
      type: "Deep Learning / Generative AI",
      description: "A Neural Style Transfer application built with PyTorch and AdaIN, using a VGG19 encoder-decoder architecture to blend the content of one image with the artistic style of another — wrapped in an interactive Streamlit web app.",
      tags: ["Python", "PyTorch", "CNN", "VGG19", "Streamlit"],
      githubUrl: "https://github.com/hemant815/hemant815"
    },
    {
      id: "03",
      title: "E-Commerce Customer Segmentation",
      type: "Data Science / Unsupervised Learning",
      description: "An end-to-end customer segmentation pipeline — data cleaning, feature engineering, and EDA on e-commerce data, followed by K-Means clustering and PCA to uncover distinct customer segments, validated with Silhouette Score and translated into actionable business insights.",
      tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "PCA", "K-Means", "Matplotlib"],
      githubUrl: "https://github.com/hemant815/hemant815"
    }
  ],
  journey: [
    {
      id: 1,
      title: "Certified Junior Security Professional — Defronix",
      note: "Completed certification covering core security fundamentals.",
      date: "2024",
      type: "Certification"
    },
    {
      id: 2,
      title: "MongoDB Workshop",
      note: "Hands-on workshop covering database design and querying with MongoDB.",
      date: "2024",
      type: "Workshop"
    },
    {
      id: 3,
      title: "B.Tech — AI Specialization Begins",
      note: "Mandsaur University",
      date: "2023 – Present",
      type: "Education"
    }
  ],
  education: [
    {
      id: 1,
      degree: "B.Tech – Computer Science Engineering (AI)",
      institution: "Mandsaur University",
      duration: "2023–2027",
      cgpa: "6.38/10"
    },
    {
      id: 2,
      degree: "Class XII",
      institution: "St. Paul Convent School, Jaora",
      duration: "2023",
      cgpa: ""
    },
    {
      id: 3,
      degree: "Class X",
      institution: "St. Paul Convent School, Jaora",
      duration: "2021",
      cgpa: ""
    }
  ],
  contact: {
    location: "Rasulpur, Jaora, India",
    phone: "+91 8085350579",
    email: "hemantpatidar822@gmail.com",
    github: "https://github.com/hemant815/hemant815",
    linkedin: "https://www.linkedin.com/in/hemant-patidar-900a69300",
  }
};
