import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  javaDev,
  webDev,
  fullStackDev,
  frontEnd,
  backEnd,
  dataAnalyst,
  ibm,
  daysCoding,
  udemy,
  ui,
  spello,
  tcr,
  ypsilon,
  python,
  nodejsIcon,
  express,
  django,
  springboot,
  mongodbIcon,
  sql,
  mern,
  rest,
  netlify,
  dataAnalystIcon,
  artAuction,
  calculator,
  disease,
  library,
  movie,
  quiz,
  student,
  todo
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "certification",
    title: "Certification",
  },
  {
    id: "clangskills",
    title: "Skills",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Java Developer",
    icon: javaDev,
  },
  {
    title: "Web Developer",
    icon: webDev,
  },
  {
    title: "Full Stack Developer",
    icon: fullStackDev,
  },
  {
    title: "Front-End Developer",
    icon: frontEnd,
  },
  {
    title: "Back-End Developer",
    icon: backEnd,
  },
  {
    title: "Data Analyst",
    icon: dataAnalyst,
  },
];

const appDev = [
  {
    name: "Java",
    icon: javaDev,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React.js",
    icon: reactjs,
  },
  {
    name: "MERN",
    icon: mern,
  },
  {
    name: "SpringBoot",
    icon: springboot,
  },
  {
    name: "Django",
    icon: django,
  },
]

const dvtools = [
  {
    name: "MongoDB",
    icon: mongodbIcon,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "RestApis",
    icon: rest,
  },
  {
    name: "dataAnalytics",
    icon: dataAnalystIcon,
  },
  
]
const dataAnaylsis = [
  
]
const technologies = [
  {

  }
]

const certifications = [
  {
    title: "Data Analyst Professional Certification",
    issuer: "IBM",
    icon: ibm,
    iconBg: "white",
    date: "March 2025",
    points: [
      "Learned core principles of data analysis.",
      "Gained hands-on experience with tools like Excel, SQL, Python, Jupyter Notebooks, and Cognos Analytics..",
      "Gained practical experience with data manipulation, data analysis, and data visualization",
    ],
  },
  {
    title: "Data Visualization with Python",
    issuer: "IBM",
    icon: ibm,
    iconBg: "white",
    date: "March 2025",
    points: [
      "Gained hands-on experience creating static and interactive visualizations using Python libraries such as Matplotlib, Seaborn, and Plotly.",
      "Learned to analyze data trends and patterns through visual storytelling.",
      "Created visualizations for real-world datasets, focusing on clarity, accuracy, and insight delivery.",
    ],
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM",
    icon: ibm,
    iconBg: "white",
    date: "March 2025",
    points: [
      "Performed data wrangling, cleaning, and transformation using pandas and NumPy.",
      "Analyzed structured data with grouping, aggregation, and statistical methods.",
      "Prepared data for visualization or modeling through manipulation techniques.",
      "Handled real-world formats like CSV, Excel, and JSON via APIs.",
    ],
  },
  {
    title: "Databases and SQL for Data Science",
    issuer: "IBM",
    icon: ibm,
    iconBg: "white",
    date: "February 2025",
    points: [
      "Proficient in writing SQL queries for data extraction, filtering, aggregation, and joins.",
      "Worked with relational databases to perform CRUD operations and schema design.",
      "Gained hands-on experience with SQL and explored data using Jupyter Notebooks.",
    ],
  },
  {
    title: "Python for Data Science AI and Development",
    issuer: "IBM",
    icon: ibm,
    iconBg: "white",
    date: "January 2025",
    points: [
      "Developed proficiency in Python programming for data manipulation, analysis, and automation.",
      "Utilized Python libraries such as NumPy, Pandas, Matplotlib, and Seaborn for data wrangling and visualization.",
      "Explored APIs, web scraping, and data collection techniques."
    ],
  },
  {
    title: "MERN Full Stack Development",
    issuer: "30 Days Coding",
    icon: daysCoding,
    iconBg: "black",
    date: "July 2024",
    points: [
      "Built full-stack web applications using MongoDB, Express.js, React.js, and Node.js (MERN) stack.",
      "Developed RESTful APIs and handled CRUD operations using Node.js and Express.",
      "Designed responsive and dynamic frontend interfaces with React, including routing with React Router.",
      "Deployed applications using Netlify following Git Versioning and collaborative development.",
    ],
  },
  {
    title: "Spring Boot 3 & Spring Frameowork 6 with Java",
    issuer: "Udemy",
    icon: udemy,
    iconBg: "white",
    date: "August 2023",
    points: [
      "Developed robust RESTful APIs using Spring Boot 3 and worked with Spring MVC, Spring Data JPA, and Spring Security.",
      "Built scalable and maintainable Java-based web applications.",
      "Implemented CRUD operations and connected with databases using Hibernate & JPA.",
      "Used Spring Boot Starter dependencies to streamline setup and development.",
    ],
  },
  {
    title: "Javascript from Beginner to Expert",
    issuer: "Udemy",
    icon: udemy,
    iconBg: "white",
    date: "April 2022",
    points: [
      "Mastered core JavaScript concepts: variables, data types, loops, conditionals, and functions.",
      "Worked with ES6+ features like arrow functions, destructuring, template literals, and modules",
      "Applied asynchronous programming concepts with Promises, async/await, and callbacks",
      "Developed mini-projects like to-do lists, calculators, and interactive forms",
    ],
  },
  {
    title: "Core Java",
    issuer: "Universal Informatics",
    icon: ui,
    iconBg: "white",
    date: "June 2021",
    points: [
      "Gained strong understanding of Object-Oriented Programming (OOP) concepts: classes, objects, inheritance, polymorphism, encapsulation, and abstraction.",
      "Worked with collections like ArrayList, HashMap, HashSet, etc.",
      "Hands-on with exception handling and file I/O operations,multithreading and concurrency",
    ],
  },
];

const experiences = [
  {
    title: "Java Developer",
    company_name: "Spello Enterprise",
    icon: spello,
    iconBg: "white",
    date: "November 2023 - Present",
    points: [
      "Worked on designing and developing a web application for the Primary Education Department, Government of Gujarat..",
      "Built the backend using Java and Spring Boot and Front-End using React.js.",
      "Collaborated with cross-functional teams to ensure seamless delivery.",
      "Participated in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Back-End Web Developer Intern",
    company_name: "TCR Innovation",
    icon: tcr,
    iconBg: "black",
    date: "July 2022 - December 2022",
    points: [
      "Developed a full-fledged Library Management System with Django for the backend and HTML, CSS, JavaScript for the frontend.",
      "Integrated APIs to expand functionality and ensured a responsive, user-friendly experience.",
      "Contributed to both logic and interface design.",
      "Participated in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Java Software Developer Intern",
    company_name: "Ypsilon IT Solutions",
    icon: ypsilon,
    iconBg: "white",
    date: "June 2021 - November 2021",
    points: [
      "Contributed to building an E-Farming Store using Java and Spring Boot.",
      "Implemented full CRUD functionality, integrated APIs, and worked on responsive UI to improve product management workflows..",
      "Ensured smooth backend operations and performance..",
      "Participated in code reviews and providing constructive feedback to other developers.",
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
    name: "BookMyTicket",
    description:
      "Designed a user-friendly movie ticket booking platform to streamline movie selection, date, and time scheduling with personalized experiences for frequent users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/",
  },
  {
    name: "To Do List App",
    description:
      "Created a task management application to help users efficiently organize, track, and manage daily to-dos with a clean and interactive interface.",
    tags: [
      {
        name: "spring-boot",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "react.js",
        color: "pink-text-gradient",
      },
      {
        name: "git",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/",
  },
  {
    name: "QuizMania",
    description:
      "Built an interactive quiz platform offering real-time scoring and feedback to enhance user engagement through a responsive and accessible interface.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "git",
        color: "blue-text-gradient",
      }
    ],
    image: quiz,
    source_code_link: "https://github.com/",
  },
  {
    name: "Art Auction",
    description:
      "Developed a web platform for managing art auctions, enabling seamless bidding and product showcasing through a user-friendly interface.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "rest-api",
        color: "pink-text-gradient",
      },
      {
        name: "sql",
        color: "blue-text-gradient",
      },
    ],
    image: artAuction,
    source_code_link: "https://github.com/",
  },
  {
    name: "Disease prediction system",
    description:
      "Built a disease prediction web app that provides accurate diagnoses based on user input using machine learning and decision-tree algorithms.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "html-css",
        color: "pink-text-gradient",
      },
      {
        name: "decision-trees",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      }
      
    ],
    image: disease,
    source_code_link: "https://github.com/",
  },
  {
    name: "Library Management System",
    description:
      "Developed a library management system to streamline book inventory, user registrations, and borrowing operations through an organized digital interface.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "rest-api",
        color: "pink-text-gradient",
      },
      {
        name: "sql",
        color: "blue-text-gradient",
      },
    ],
    image: library,
    source_code_link: "https://github.com/",
  },
  {
    name: "Student Registration System",
    description:
      "Created a desktop application for managing student registrations, enabling efficient data entry, storage, and retrieval through a user-friendly interface..",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "swing-awt",
        color: "green-text-gradient",
      },
      {
        name: "jdbc",
        color: "pink-text-gradient",
      },
      {
        name: "sql",
        color: "blue-text-gradient",
      }
    ],
    image: student,
    source_code_link: "https://github.com/",
  },
  {
    name: "Calculator",
    description:
      "Built a responsive calculator app to perform basic arithmetic operations with an intuitive and interactive user interface.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      }
    ],
    image: calculator,
    source_code_link: "https://github.com/",
  }
];

export { appDev,dvtools,dataAnaylsis,services,technologies, experiences, testimonials, projects,certifications };
