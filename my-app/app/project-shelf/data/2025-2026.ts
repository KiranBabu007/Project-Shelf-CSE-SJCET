import { Project } from "@/types";

const projects: Project[] = [
  {
    id: 49,
    title: "First Project",
    description: "This is a sample Project",
    students: "John,Peter,Bob",
    supervisor: "Sample Supervisor",
    tags: [
      "React",
      "Firebase"
    ]
  },
  {
    id: 50,
    title: "SmartSphere",
    description: "SmartSphere is a Ai driven community-based platform where users can report urban and social issues directly to the relevant authorities for faster action and better coordination. By integrating AI technology, the system can analyze reported incidents, prioritize urgent cases, and improve decision-making for efficient response management. Using geolocation, SmartSphere accurately identifies and tracks the exact location of incidents, helping connect users with the nearest authorities such as police, fire stations, or local service providers. This creates a faster, more organized, and technology-driven approach to improving community safety, communication, and urban management.",
    students: "Alen Jojimon,Advait Arjit,Thomas Mathew,Thomas varghese",
    supervisor: "Renju Renjith",
    tags: [
      "React native",
      "Firebase",
      "MongoDB",
      "Node js",
      "Yolo"
    ]
  },
  {
    id: 51,
    title: "Prevue.AI",
    description: "PREVUE.AI is an AI-powered mock interview platform with virtual AI avatars, speech and behavior analysis, and intelligent interview feedback.",
    students: "Amal Joy, Bijal T Benny, Anush S Kumar, Jismi Saju",
    supervisor: "Prof. Thushara Sukumar",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "AI",
      "MERN",
      "Gemini",
      "Interview"
    ]
  }
];

export default projects;
