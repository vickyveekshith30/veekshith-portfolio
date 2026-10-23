export const links = {
  github: "https://github.com/vickyveekshith30",
  linkedin: "https://linkedin.com/in/veekshith-r-174613379",
  email: "veekshithvicky121230@gmail.com",
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const skillGroups = [
  { title: "Programming Languages", icon: "code", items: ["Java", "Python", "C", "C++"] },
  { title: "Machine Learning", icon: "brain", items: ["Scikit-learn", "TensorFlow", "Keras"] },
  { title: "Databases", icon: "db", items: ["PostgreSQL", "pgvector"] },
  { title: "Development Tools", icon: "tools", items: ["Git", "GitHub", "Docker"] },
  { title: "Computer Vision and OCR", icon: "eye", items: ["OpenCV", "PyTesseract"] },
  {
    title: "Computer Science Fundamentals",
    icon: "cpu",
    items: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Computer Networks (CN)",
    ],
  },
] as const;

export const education = [
  {
    school: "A J Institute of Engineering & Technology",
    title: "B.E. in Computer Science and Engineering (AI & ML)",
    lines: ["Visvesvaraya Technological University (VTU)", "Kottara Chowki, Kodikal, Mangalore"],
    period: "September 2024 – Present",
  },
  {
    school: "Shakthi Residential PU College",
    title: "II PUC — PCMC",
    lines: ["Subjects: Physics, Chemistry, Mathematics", "Shakthinagar, Mangalore"],
    period: "June 2022 – March 2024",
  },
];
