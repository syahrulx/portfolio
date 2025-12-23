export const siteConfig = {
  name: "Syahrul Izwan",
  title: "Information System Engineering Student",
  description: "Portfolio website of Syahrul Izwan - Information System Engineering Student at UiTM",
  accentColor: "#1d4ed8",
  social: {
    email: "izwansyahrul72@gmail.com",
    linkedin: "www.linkedin.com/in/syahrul-izwan-ahmad-bazlan-98a891310",
    github: "https://github.com/syahrulx",
  },
  aboutMe:
    "I am an Information System Engineering student at UiTM with a passion for building web and mobile applications. I enjoy working on full-stack development projects, from designing user interfaces to implementing backend systems. My experience spans various technologies including Laravel, Flutter, Java, and modern web frameworks.",
  skills: ["Laravel", "PHP", "Flutter", "Dart", "Java", "JavaScript", "MySQL", "Firebase", "HTML/CSS", "Git"],
  projects: [
    {
      name: "HR Management System",
      type: "web",
      images: ["/hr1.png", "/hr2.png"],
      description:
        "A comprehensive Human Resource Management System built with Vue.js frontend and Laravel backend. Features include employee management, attendance tracking, leave management, payroll processing, and performance evaluation modules.",
      link: "https://github.com/syahrulx",
      skills: ["Vue.js", "Laravel", "PHP", "MySQL"],
    },
    {
      name: "PPAS App",
      type: "mobile",
      images: ["/ppas1.png", "/ppas2.png", "/ppas3.png", "/ppas4.png"],
      description:
        "An official iOS application published on the App Store for Pustaka Raja Tun Uda Shah Alam. Built with native SwiftUI, featuring facility booking, event management, book loan tracking with due dates, book search functionality, and AI-powered book quizzes.",
      link: "https://apps.apple.com/my/app/ppas/id6752301341",
      skills: ["SwiftUI", "iOS", "Swift", "App Store"],
    },
    {
      name: "UiTMToGo+",
      type: "mobile",
      images: ["/uitmtogo1.png", "/uitmtogo2.png", "/uitmtogo3.png", "/uitmtogo4.png", "/uitmtogo5.png"],
      description:
        "A comprehensive mobile platform for UiTM students featuring food delivery services and a student marketplace. Enables students to order food, buy and sell items, with real-time tracking, payment integration, and delivery management.",
      link: "https://github.com/syahrulx",
      skills: ["Flutter", "Dart", "Laravel", "Firebase"],
    },
  ],
  experience: [
    {
      company: "Pustaka Raja Tun Uda Shah Alam",
      title: "Software Development Intern (Team Lead)",
      dateRange: "September 2024 - February 2025",
      bullets: [
        "Led a team of 5 interns in developing the PPAS iOS application",
        "Built the official library app using native SwiftUI, published on the App Store",
        "Implemented key features including facility booking, event management, and book loan tracking",
        "Developed AI-powered book quiz functionality to enhance user engagement",
        "Collaborated with library staff to gather requirements and deliver user-centric solutions",
      ],
    },
  ],
  education: [
    {
      school: "Universiti Teknologi MARA (UiTM) Kampus Shah Alam",
      degree: "Bachelor of Information System Engineering",
      dateRange: "2025 - Present",
      achievements: [
        "Specializing in software development and system design",
        "Completed coursework in database systems, web development, and mobile applications",
        "Active participant in programming projects and hackathons",
      ],
    },
    {
      school: "Universiti Teknologi MARA (UiTM) Kampus Jasin",
      degree: "Diploma in Computer Science",
      dateRange: "2022 - 2024",
      achievements: [
        "Completed foundational coursework in programming and software development",
        "Built multiple projects using various programming languages",
        "Developed strong problem-solving and analytical skills",
      ],
    },
  ],
};
