import { Project } from "@/types";

const projects: Project[] = [
  {
    id: 23,
    title: "AI-Driven Video Prompt Analysis",
    description: "Not Available",
    students: "Allen Saji, Ashik David Roy, Nithin V. James, Reenphy George",
    supervisor: "Prof. Smitha Jacob",
    tags: [
      "Computer Vision",
      "AI"
    ]
  },
  {
    id: 26,
    title: "Animal Intrusion Detection",
    description: "Not Available",
    students: "Anita Augustine, Annu Rajesh, Gautham S, Ria Siby",
    supervisor: "Prof. Thushara Sukumar",
    tags: [
      "Computer Vision",
      "IoT"
    ]
  },
  {
    id: 15,
    title: "AquaAlert",
    description: "IoT-driven flood protection system with real-time monitoring and predictive analytics.",
    students: "Kevin Tomy, Abhishek Ca, Joseph Jacob",
    supervisor: "Prof. Athirasree Das",
    tags: [
      "IoT",
      "Flood Protection",
      "Predictive Analytics"
    ]
  },
  {
    id: 3,
    title: "AquaRover",
    description: "An Automated flood rescue boat leveraging IoT",
    students: "Akash Vijay, Johns Raju, Jose K James, Tomin Joy",
    supervisor: "Prof. Sarju S",
    tags: [
      "Automation",
      "Flood Rescue",
      "Robotics"
    ]
  },
  {
    id: 6,
    title: "AquaTech",
    description: "Smart irrigation system using image processing, sensors, and machine learning to calculate water needs for plants and control sprinklers.",
    students: "Bibin Biju, Leon Jose Mathew, Liss Maria John, Nikhil Jose",
    supervisor: "Prof. Divya Sunny",
    tags: [
      "Smart Irrigation",
      "Image Processing",
      "Machine Learning",
      "Agriculture"
    ]
  },
  {
    id: 11,
    title: "AugmentSpace",
    description: "AR technology for immersive interior design, enabling real-time visualization and modification of room layouts.",
    students: "Anandukrishna Vr, Derine Mary David, Jimmy Jose, Krishnatheertha Ts",
    supervisor: "Prof. Kishore Sebastian",
    tags: [
      "Augmented Reality",
      "Interior Design",
      "Visualization"
    ]
  },
  {
    id: 16,
    title: "Care Wave",
    description: "App for elderly care, featuring medication reminders and vitals monitoring with alert signals.",
    students: "Emy Joshy, Georlit George, Meenu Susan Mony, Swathilekshmi S",
    supervisor: "Prof. Dona Mary Cherian",
    tags: [
      "Elderly Care",
      "Health Monitoring",
      "Alert Systems"
    ]
  },
  {
    id: 28,
    title: "CogniCare",
    description: "Not Available",
    students: "Ashish Rajesh, Delna K Jose, Fahad Salim, Gautham Krishna N",
    supervisor: "Prof. Angitha George",
    tags: [
      "Healthcare",
      "Mobile App"
    ]
  },
  {
    id: 7,
    title: "CookItUp",
    description: "Visual search technology for recipe discovery using advanced image recognition algorithms.",
    students: "Ann Rosa Binu, Navya Saju, Sara Babu, Lakshmi Suresh",
    supervisor: "Prof. Gayathri R Krishna",
    tags: [
      "Visual Search",
      "Recipe Discovery",
      "Image Recognition"
    ]
  },
  {
    id: 38,
    title: "Culinary Hub",
    description: "Not Available",
    students: "Alenta Joseph, Juval James, Vishnu A.V",
    supervisor: "Prof. Syamamol T",
    tags: [
      "Food Tech",
      "Application"
    ]
  },
  {
    id: 27,
    title: "D-SIGN: Speech to Sign Translator",
    description: "Speech to Sign Translator",
    students: "Krishnaveni M, Anna Jose, Bincy Benny, Sandra Maria Jose",
    supervisor: "Prof. Vimal Babu P",
    tags: [
      "NLP",
      "Accessibility"
    ]
  },
  {
    id: 30,
    title: "DeepReality",
    description: "Not Available",
    students: "Harikrishnan Ashok, Mareena Roy, P S Arjun, V S Nikhil Maheswar",
    supervisor: "Prof. Athirasree Das",
    tags: [
      "Computer Vision",
      "AR/VR"
    ]
  },
  {
    id: 42,
    title: "Ecodefenders",
    description: "Not Available",
    students: "Anita Augustine, Annu Rajesh, Gautham S, Ria Siby",
    supervisor: "Prof. Thushara Sukumar",
    tags: [
      "Sustainability"
    ],
    projectType: "mini"
  },
  {
    id: 5,
    title: "EcoExpense",
    description: "Personal finance manager and analyzer.",
    students: "Adwaith M, Dony Tomy, Jibbin Jacob Daniel, Justin Jolly",
    supervisor: "Prof. Jibin Philip",
    tags: [
      "Finance",
      "Personal Management",
      "Analysis"
    ]
  },
  {
    id: 21,
    title: "EnviroGuard",
    description: "Not Available",
    students: "Alan Joy, Allwina Anna Soy Jose, Anitta Siby, Savio Shaji",
    supervisor: "Prof. Kishore Sebastian",
    tags: [
      "Environmental Monitoring"
    ]
  },
  {
    id: 24,
    title: "FarmSage",
    description: "Not Available",
    students: "Amala Maria Kuruvilla, Anitha P Benny, Manjusree Raveendran, Raina Raj",
    supervisor: "Prof. Mereen Thomas",
    tags: [
      "Agriculture",
      "Mobile App"
    ]
  },
  {
    id: 14,
    title: "Fulmine",
    description: "System for forecasting energy consumption and optimizing industrial efficiency based on machine schedules.",
    students: "Taniya Thomas, Praise Elizabeth Thomas, Priya Babu, Rithika Anilkumar",
    supervisor: "Prof. Bino Thomas",
    tags: [
      "Energy Forecasting",
      "Optimization",
      "Industrial Efficiency"
    ]
  },
  {
    id: 18,
    title: "Game-Dev",
    description: "Not Available",
    students: "Aimil Bij Joseph, Alen Emmanuel, Allen Alex Alaney, Pranav P",
    supervisor: "Prof. Mereen Thomas",
    tags: [
      "Game Development"
    ]
  },
  {
    id: 13,
    title: "Handrehab",
    description: "Web application using computer vision for hand rehabilitation and assessment.",
    students: "Adithiya Suresh, Akshara Kalathil, Amal B Palackal, Athul Saji",
    supervisor: "Prof. Angitha George",
    tags: [
      "Rehabilitation",
      "Computer Vision",
      "Healthcare"
    ]
  },
  {
    id: 19,
    title: "HazeBuster",
    description: "Vehicle license plate recognition for fog-haze environments",
    students: "Aishwarya Sebastian, Amrutha Prakash, Ann Maria Sabu, Mubeena S",
    supervisor: "Prof. Gayathri R Krishna",
    tags: [
      "Computer Vision",
      "Image Processing"
    ]
  },
  {
    id: 4,
    title: "ImagineAI",
    description: "Technology for the visually impaired, integrating navigation, object recognition, facial recognition, and text-to-speech with real-time feedback.",
    students: "Dona Siby, Gautham Babu, Karun Chery James, Melissa Manoj Thondoli",
    supervisor: "Prof. Ashly Thomas",
    tags: [
      "AI",
      "Accessibility",
      "Object Recognition",
      "Text-to-Speech"
    ]
  },
  {
    id: 17,
    title: "IoT Based Plastic Detector",
    description: "Not Available",
    students: "Abin K Jaimon, Aravind Binu, Arun Kumar K Jose, Treesa Joseph",
    supervisor: "Prof. Bino Thomas",
    tags: [
      "IoT"
    ]
  },
  {
    id: 20,
    title: "Third Eye: IoT Based Project For Blind People",
    description: "Not Available",
    students: "Akhil Sanker S, Alphy George, Irene Molly Varughese, Rinta Maria Raju",
    supervisor: "Prof. Thushara Sukumar",
    tags: [
      "IoT",
      "Accessibility"
    ]
  },
  {
    id: 29,
    title: "Luminous Pursuit",
    description: "Not Available",
    students: "Benjamin Joseph, George John, Krishnaprasad Cp, Sonu T Shaji",
    supervisor: "Prof. Ashly Thomas",
    tags: [
      "Gaming"
    ]
  },
  {
    id: 33,
    title: "ProBo",
    description: "Not Available",
    students: "Abin K Jaimon, Aravind Binu, Arun Kumar K Jose, Treesa Joseph",
    supervisor: "Prof. Bino Thomas",
    tags: [
      "IoT"
    ],
    projectType: "mini"
  },
  {
    id: 12,
    title: "SkillVault",
    description: "Mock interview platform with adaptive question sets, audio, and video analysis, providing feedback to improve interview skills.",
    students: "Ajay Johny, Bibin Benny, Bibin Jose, Jerry Sebastian",
    supervisor: "Prof. Dyni Thomas",
    tags: [
      "Interview Preparation",
      "AI",
      "Audio Analysis",
      "Video Analysis"
    ]
  },
  {
    id: 1,
    title: "Smart Aquaculture",
    description: "An AIOT-based system for intelligent remote control and management of fishpond equipment, promoting professional aquaculture and lowering entry barriers.",
    students: "Aadit V Biju, Ajo Thomas, Alvin Varghese, Lloyd Sibi",
    supervisor: "Prof. Smitha Jacob",
    tags: [
      "AIOT",
      "Aquaculture",
      "Remote Management"
    ]
  },
  {
    id: 32,
    title: "Smart Dustbin",
    description: "Not Available",
    students: "Nihal Vijoy, Rahul Babu, Shalon Mary Michael, Sona Joseph",
    supervisor: "Prof. Jibin Philip",
    tags: [
      "IoT",
      "Sustainability"
    ]
  },
  {
    id: 8,
    title: "SmartEco",
    description: "System for real-time analysis and control of home energy usage, with integration for smart device control and energy cost forecasting.",
    students: "Alan Mathew Tom, Christi Joseph, Mathews P Mathew, Naveen S Pananthanam",
    supervisor: "Prof. Maria Yesudas",
    tags: [
      "Smart Home",
      "Energy Management",
      "Data Analysis",
      "IoT"
    ]
  },
  {
    id: 25,
    title: "TalkSync",
    description: "A real time speech translation platform",
    students: "Anandu Unnikrishnan, Harinand S, Jithin Jerome, Sreelakshmi S",
    supervisor: "Prof. Maria Yesudas",
    tags: [
      "NLP",
      "Accessibility"
    ]
  },
  {
    id: 2,
    title: "TechSow",
    description: "An Innovative agricultural system with a smart robot for soil and crop monitoring using AI, weather data, and a mobile app to improve farming efficiency.",
    students: "Afna Ayshu Jaffin, Juna Teres Martin, Nimitha Joy, Rese Raju",
    supervisor: "Prof. Divya Sunny",
    tags: [
      "Agriculture",
      "Robotics",
      "AI",
      "Soil Monitoring"
    ]
  },
  {
    id: 31,
    title: "TRACE",
    description: "Not Available",
    students: "Athul Soman, Joseph George, Thomson Stanes, Vimal Suresh",
    supervisor: "Prof. Dyni Thomas",
    tags: [
      "Sustainability"
    ]
  },
  {
    id: 9,
    title: "TranslateHub",
    description: "App for real-time speech translation with the ability to save, share, and browse translations.",
    students: "Divya Suresh, Megha Rajesh, Saranya S Nair, Sweety Sonny",
    supervisor: "Prof. Vimal Babu P",
    tags: [
      "Language Translation",
      "Speech-to-Text",
      "Audio Processing"
    ]
  },
  {
    id: 10,
    title: "Wander05",
    description: "AI-powered travel app offering personalized itineraries, supporting local businesses, and promoting sustainable tourism.",
    students: "Ajai Sankar Hareesh, Anu Mathew, Ashly Rose Antony, Vivekanand R",
    supervisor: "Dr. Praseetha VM",
    tags: [
      "AI",
      "Travel",
      "Sustainability",
      "Personalization"
    ]
  },
];

export default projects;
