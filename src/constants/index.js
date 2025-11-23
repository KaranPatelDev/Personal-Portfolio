import {
    backend,
    css,
    freelance,
    git,
    html,
    javascript,
    mobile,
    mongodb,
    nodejs,
    reactjs,
    sheryians,
    tailwind,
    typescript,
    web
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    href: "#about",
  },
  {
    id: "work",
    title: "Experience",
    href: "#work",
  },

  {
    id: "skills",
    title: "Skills",
    href: "#skills",
  },

  {
    id: "resume",
    title: "Resume",
    href: "/resume.pdf",
    external: true,
  },
];

const services = [
  {
    title: "Scalable Backend Systems",
    icon: web,
  },
  {
    title: "Analytics & BI Solutions",
    icon: mobile,
  },
  {
    title: "Machine Learning Solutions",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    docs: "https://docs.python.org/3/",
  },
  {
    name: "React",
    icon: reactjs,
    docs: "https://react.dev/",
  },
  {
    name: "HTML",
    icon: html,
    docs: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: css,
    docs: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Tailwind",
    icon: tailwind,
    docs: "https://tailwindcss.com/docs",
  },
  {
    name: "JavaScript",
    icon: javascript,
    docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: typescript,
    docs: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "Node.js",
    icon: nodejs,
    docs: "https://nodejs.org/docs/latest/api/",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    docs: "https://www.mongodb.com/docs/",
  },
  {
    name: "SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    docs: "https://dev.mysql.com/doc/",
  },
  {
    name: "FastAPI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    docs: "https://fastapi.tiangolo.com/",
  },
  {
    name: "OpenCV",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
    docs: "https://docs.opencv.org/",
  },
  {
    name: "NumPy",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    docs: "https://numpy.org/doc/",
  },
  {
    name: "Pandas",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    docs: "https://pandas.pydata.org/docs/",
  },
  {
    name: "Matplotlib",
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
    docs: "https://matplotlib.org/stable/index.html",
  },
  {
    name: "Seaborn",
    icon: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
    docs: "https://seaborn.pydata.org/",
  },
  {
    name: "MediaPipe",
    icon: "https://mediapipe.dev/images/mediapipe_small.png",
    docs: "https://developers.google.com/mediapipe",
  },
  {
    name: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    docs: "https://docs.djangoproject.com/",
  },
  {
    name: "Flet",
    icon: "https://flet.dev/img/logo.svg",
    docs: "https://flet.dev/docs/",
  },
  {
    name: "Git",
    icon: git,
    docs: "https://git-scm.com/doc",
  },
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    docs: "https://learning.postman.com/docs/",
  },
];

const experiences = [
  {
    title: "February 2025 - March 2025",
    company_name: "Data Analyst Associate Intern | Excelerate",
    location: "Vadodara, India",
    icon: freelance,
    iconBg: "#0188E3",
    date: "February 2025 - March 2025",
    points: [
      "Analyzed user data to extract insights and support business decision-making by conducted trend analysis and data preprocessing to enhance accuracy.",
      "Built interactive dashboards for real-time data visualization and reporting.",
    ],
  },
  {
    title: "May 2025 - June 2025",
    company_name: "Summer Intern | Insansa Technology",
    location: "Vadodara, India",
    icon: sheryians,
    iconBg: "#ffff",
    date: "May 2025 - June 2025",
    points: [
      "Completed a Support Engineer internship at Insansa Techknowledge Pvt. Ltd., assisting in software and system issue resolution.",
      "Gained practical experience in troubleshooting, technical support, and collaborative problem-solving within a professional environment.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Twick",
    description:
      "Full-featured social media platform enabling microblogging, real-time notifications, direct messaging, and privacy controls. Designed with a modern, responsive UI and robust backend architecture, supporting user authentication, media uploads, and advanced search.",
    tags: [
      {
        name: "fullstack",
        color: "blue-text-gradient",
      },
      {
        name: "social-media",
        color: "green-text-gradient",
      },
      {
        name: "ongoing",
        color: "pink-text-gradient",
      },
    ],
    image: "/img/twick.png",
    source_code_link: "https://twick-docs.netlify.app/",
    live_website_link: "https://twick-docs.netlify.app/",
  },
  {
    name: "Gesture Control Software",
    description:
      "AI-based gesture recognition system for hands-free control. Implemented volume and brightness control, cursor control, virtual keyboard, and app launcher using Python, OpenCV, MediaPipe, PyAutoGUI, and Flet.",
    tags: [
      {
        name: "computer-vision",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
    ],
    image: "/img/gcs.png",
    source_code_link: "https://github.com/KaranPatelDev/Capstone-Project",
    live_website_link: "#",
  },
  {
    name: "Attendance Management System",
    description:
      "Automated attendance tracking using OpenCV and deep learning. Ensured high accuracy in real-time face recognition and verification with advanced algorithms.",
    tags: [
      {
        name: "face-recognition",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
    source_code_link: "https://github.com/",
    live_website_link: "#",
  },
  {
    name: "Resturant Backend",
    description:
      "Production-ready REST API powering food delivery apps with JWT auth, restaurant/food CRUD, and full order lifecycle management. Built with Node.js, Express, and MongoDB using clean architecture.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "rest-api",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    source_code_link: "https://github.com/KaranPatelDev/Restaurant-Food-App",
    live_website_link: "#",
  },
  {
    name: "YouTube-like Video Platform",
    description:
      "Professional-grade backend built with Node.js, Express, and MongoDB. Supports user authentication, video uploads, comments, likes, subscriptions, and analytics using JWT, Cloudinary, and database aggregation.",
    tags: [
      {
        name: "backend",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "cloudinary",
        color: "pink-text-gradient",
      },
    ],
    image: "/img/youtube.jpg",
    source_code_link: "https://github.com/KaranPatelDev/youtube-backend",
    live_website_link: "#",
  },
  {
    name: "Car Price Prediction API",
    description:
      "FastAPI backend for car price prediction, featuring JWT and API key secured endpoints, Redis caching, and Prometheus metrics. Includes Docker-based deployment and ML model training scripts.",
    tags: [
      {
        name: "machine-learning",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800",
    source_code_link: "https://github.com/KaranPatelDev/FastAPI-Capstone-Project",
    live_website_link: "#",
  },
  {
    name: "Waste Classification System",
    description:
      "Fine-tuned InceptionV3 CNN to classify waste images into 9 categories with over 80% accuracy. Features data augmentation, performance metrics, and a Streamlit interface for interactive predictions.",
    tags: [
      {
        name: "deep-learning",
        color: "blue-text-gradient",
      },
      {
        name: "cnn",
        color: "green-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800",
    source_code_link: "https://github.com/KaranPatelDev/Capstone-Project",
    live_website_link: "#",
  },
  {
    name: "MailMate - AI Email Assistant",
    description:
      "AI-powered email assistant leveraging Google Gemini 1.5 Flash to generate professional, contextual email responses. Supports multiple tones, integrates with Gmail for direct sending, and features a Streamlit interface.",
    tags: [
      {
        name: "ai",
        color: "blue-text-gradient",
      },
      {
        name: "nlp",
        color: "green-text-gradient",
      },
      {
        name: "gemini",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800",
    source_code_link: "https://github.com/KaranPatelDev/Mailmate",
    live_website_link: "#",
  },
];

export { experiences, projects, services, technologies, testimonials };

