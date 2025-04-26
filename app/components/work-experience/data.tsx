import Kokopilot1 from "./images/kokopilot-1.webp";
import Kokopilot2 from "./images/kokopilot-2.webp";
import OrderAI1 from "./images/order-ai-1.webp";
import OrderAI2 from "./images/order-ai-2.webp";
import RouteOptimization1 from "./images/route-optimization-1.webp";
import RouteOptimization2 from "./images/route-optimization-2.webp";
import RouteOptimization3 from "./images/route-optimization-3.webp";

export const workExperiences = [
  {
    companyName: "Farmio",
    companyUrl: "https://farmio.com",
    period: "2024 - present",
    jobTitle: "Senior Software Engineer",
    description: (
      <>
        Building thoughtful software and shaping user experiences.
        <br />
        Finds meaning in refining details, collaborating with others, and
        learning from every project.
        <br />
        Believes in approaching technical challenges with curiosity, care, and a
        focus on what&apos;s genuinely useful for people.
        <br />
        Turning ideas into products that matter.
      </>
    ),
    showcaseProjects: [
      {
        title: "Kokopilot",
        description: (
          <>
            AI-powered business intelligence and consulting agent that leverages
            data-driven analysis to generate actionable insights and
            recommendations, enabling businesses to make informed decisions
            based on their transactional data.
          </>
        ),
        images: [Kokopilot1, Kokopilot2],
        skills: [],
      },
      {
        title: "Chat Order AI Agent",
        description: (
          <>
            Intelligent AI agent for WhatsApp that proactively monitors user
            conversations and autonomously processes order creation requests.
          </>
        ),
        images: [OrderAI1, OrderAI2],
        skills: [],
      },
      {
        title: "Route Optimization",
        description: (
          <>
            route optimization module to enhance logistics planning for
            businesses, reducing operational costs by minimizing travel
            distances.
          </>
        ),
        images: [RouteOptimization1, RouteOptimization2, RouteOptimization3],
        skills: [],
      },
    ],
  },
  {
    companyName: "BINUS University",
    companyUrl: "https://binus.ac.id",
    period: "2020 - 2023",
    jobTitle: "Fullstack Engineer",
    description: (
      <>
        Joined the Research and Development Team after a year as a teaching
        assistant, maintaining and improving existing applications and also
        building new ones to support stakeholders&abpos; needs.
      </>
    ),
    showcaseProjects: [
      {
        title: "Messier",
        description: (
          <>
            Maintained, optimized, and developed new features for Messier, a
            platform supporting laboratory and practicum activities at Binus
            Kemanggisan, including management of teaching assistant tasks,
            scheduling, KPI calculation, student performance, course
            information, and many more.
          </>
        ),
        images: [],
        skills: [
          "C#",
          ".NET",
          "SQL Server",
          "DevOps",
          "Cross-team Collaboration",
        ],
      },
      {
        title: "Bee-chase",
        description: (
          <>
            Created a web-based treasure hunt game to help students become
            familiar with the campus environment after the COVID-19 pandemic,
            featuring activities like seek and scan the QR code, location-based
            check-ins, multiple choice questions, interactive photo challenges,
            and many more.
          </>
        ),
        images: [],
        skills: [
          "React (TypeScript)",
          "Laravel (PHP)",
          "Concurrency",
          "Geofencing",
        ],
      },
      {
        title: "Tourist Destination Ticket War",
        description: (
          <>
            Developed an internal application featuring a ticket-war mechanism
            to help employees select preferred tourist destinations for company
            holidays.
          </>
        ),
        images: [],
        skills: ["React (TypeScript)", "Laravel (PHP)", "Concurrency"],
      },
    ],
  },
  {
    companyName: "BINUS University",
    companyUrl: "https://binus.ac.id",
    period: "2020 - 2021",
    jobTitle: "Teaching Assistant",
    description: (
      <>
        Teaching practicum subjects, participating in teaching qualification
        programs and trainings, and assisting with grading and student
        evaluation.
      </>
    ),
    showcaseProjects: [
      {
        title: "Souls-like Tower Defense Game (Unity)",
        description: (
          <>
            Developed a souls-like tower defense game in Unity as a personal
            training project, focusing on thoughtful design and steady
            improvement in gameplay mechanics.
          </>
        ),
        images: [],
        skills: ["Unity", "C#", "3D Game Design"],
      },
      {
        title: "Banking Desktop Application (C# & UML)",
        description: (
          <>
            Created a banking desktop application using C#, .NET, and UML
            diagrams, with care for clarity and reliability in features like
            queue ticketing, money transfer, ledger accounting, etc.
          </>
        ),
        images: [],
        skills: ["C#", ".NET", "UML", "Business Analyst"],
      },
      {
        title: "Steam Clone wih Angular and Golang",
        description: (
          <>
            Built a Steam-inspired web application, using Angular for the
            frontend and Golang for the backend, exploring smooth web UI/UX,
            backend scalability, and clean software architecture.
          </>
        ),
        images: [],
        skills: ["Angular", "Golang", "CI/CD", "Web Application"],
      },
      {
        title: "Reddit Clone Mobile App",
        description: (
          <>
            Developed a Reddit-inspired mobile application using Kotlin and
            Android Studio with Google Firebase as the backend, focusing on
            profile creation and management, creating threads,
            upvoting/downvoting threads, and commenting on threads.
          </>
        ),
        images: [],
        skills: ["Kotlin", "Android Studio", "Firebase", "Mobile Application"],
      },
    ],
  },
];
