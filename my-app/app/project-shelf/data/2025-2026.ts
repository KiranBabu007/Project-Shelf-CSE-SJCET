import { Project } from "@/types";

const projects: Project[] = [
  {
    id: 1,
    title: "Prevue.AI",
    description: "PREVUE.AI is an AI-powered mock interview platform with virtual AI avatars, speech and behavior analysis, and intelligent interview feedback.",
    students: "Amal Joy, Bijal T Benny, Anush S Kumar, Jismi Saju",
    supervisor: "Prof. Thushara Sukumar",
    tags: ["React", "Node.js", "MongoDB", "AI", "MERN", "Gemini", "Interview"]
  },
  {
    id: 2,
    title: "SmartSphere",
    description: "SmartSphere is an AI-driven community-based platform where users can report urban and social issues directly to the relevant authorities for faster action and better coordination. By integrating AI technology, the system can analyze reported incidents, prioritize urgent cases, and improve decision-making for efficient response management. Using geolocation, SmartSphere accurately identifies and tracks the exact location of incidents, helping connect users with the nearest authorities such as police, fire stations, or local service providers.",
    students: "Alen Jojimon, Advait Arjit, Thomas Mathew, Thomas Varghese",
    supervisor: "Renju Renjith",
    tags: ["React Native", "Firebase", "MongoDB", "Node.js", "YOLO"]
  },
  {
    id: 3,
    title: "DentCare",
    description: "An integrated digital healthcare platform that combines oral cancer screening and dental treatment visualizer with patient management functionalities such as appointment scheduling, medical record maintenance, and follow-up notifications.",
    students: "Anita Mary Joseph, Githin Ciril, Gowrikrishhna C, Nikita Ajay",
    supervisor: "Prof. Thushara Sukumar",
    tags: ["Node.js", "MongoDB", "TensorFlow", "React Native", "OpenCV", "MediaPipe"]
  },
  {
    id: 4,
    title: "Neurod: Learning Management Platform for Neuro-divergent Learners",
    description: "An adaptive learning platform for neuro-divergent learners that provides personalized content and accessibility features to support diverse learning needs.",
    students: "Alwin J Thomas, AwinDas R, Alen Siju, Chris Reji Kuriakose",
    supervisor: "Prof. Sarju S",
    tags: ["React", "AI", "Next.js", "NestJS", "TypeScript"]
  },
  {
    id: 5,
    title: "StamFree: AI Powered Speech Therapy Assistant",
    description: "StamFree transforms speech therapy into an interactive, gamified mobile application powered by AI. It uses a deep learning model called WavLM to analyze raw speech directly, accurately identifying specific disfluencies like repetitions, blocks, and prolongations, providing a supportive, low-anxiety environment that keeps children motivated to practice consistently.",
    students: "Adithya P Binu, Devika Rajeev, Doney Siby, Emitta Mathew",
    supervisor: "Dr. Joby P.P",
    tags: ["React Native", "Firebase", "AI", "Python", "Flask", "ML"]
  },
  {
    id: 6,
    title: "GestureMate: Malayalam Sign Language Recognition System",
    description: "GestureMate is a real-time Malayalam sign language recognition and communication platform designed to bridge the communication gap between deaf and mute individuals and the general public. The system recognises hand gestures conforming to the Malayalam Sign Language standard developed by NISH, Trivandrum, converts them into text, and provides bidirectional voice-text support.",
    students: "Stephin Mathew, Kevin Biju Kulangara, Jeswin Sabu, Prapanch J",
    supervisor: "Prof. Vimal Babu P",
    tags: ["React", "Python", "AI", "Next.js"]
  },
  {
    id: 7,
    title: "Electra: Blockchain Integrated Secure Voting and Voter Authentication System",
    description: "A secure and transparent digital voting framework that integrates biometric authentication with blockchain technology to ensure electoral integrity. Voter authentication is performed using fingerprint-based biometric verification. Each vote is converted into a unique SHA-256 cryptographic hash and recorded immutably on a private blockchain through smart contracts.",
    students: "Adithyan Biju, Alan KB, Fahad Rasheed, Jeswin Jose",
    supervisor: "Prof. Gayathri R Krishna",
    tags: ["React", "MongoDB", "Python", "Flask", "Blockchain"]
  },
  {
    id: 8,
    title: "StockGenie: AI-Driven Stock Market Assistant and Forecasting System",
    description: "An AI-driven stock market assistance system that facilitates informed investment decisions through predictive modeling, visual analytics, portfolio evaluation, and simulated trading experiences. The system utilizes ARIMA and LSTM neural networks for time-series forecasting, alongside an interactive visualization dashboard, portfolio advisory component, virtual trading simulator, and AI-powered chatbot.",
    students: "Nagaraj Menon KS, Felix Jobi, Revathy Biju, Shraya S Santhosh",
    supervisor: "Prof. Anu V Kottath",
    tags: ["Flask", "Next.js", "MongoDB", "ARIMA", "LSTM"]
  },
  {
    id: 9,
    title: "Footage Analysis Toolkit: Semantic Video Retrieval and Structured Forensic Analysis",
    description: "An AI-powered video surveillance assistant that allows users to ask natural language questions, upload images to search for people or objects, and instantly find relevant timestamps and video clips. The system monitors live surveillance for unusual or suspicious activities in real time, making surveillance faster, smarter, and more accessible through intelligent automation.",
    students: "Adithya Raj, Jibin Gigi, Lidiya Reju, Manu Emmanuel",
    supervisor: "Prof. Smitha Jacob",
    tags: ["Python", "CLIP", "FAISS", "Electron.js", "YOLO"]
  },
];

export default projects;
