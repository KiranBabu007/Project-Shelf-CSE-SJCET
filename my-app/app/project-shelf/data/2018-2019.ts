import { Project } from "@/types";

const projects: Project[] = [
  {
    id: 1,
    title: "Supervised Machine Learning in Intelligent Character Recognition of Handwritten and Printed Nameplate",
    description: "A system leveraging supervised machine learning for the recognition and interpretation of handwritten and printed nameplates.",
    students: "Allen Jose, Amal Sunny, Felix Stephen Joseph, Beany Emmanuvel",
    supervisor: "Prof. Divya Sunny",
    tags: [
      "Machine Learning",
      "OCR",
      "Image Processing",
      "AI"
    ]
  },
  {
    id: 2,
    title: "Haemart-Drop of Life",
    description: "A blood donation and management application connecting donors and recipients effectively.",
    students: "Ashitha Annu Andrews, Akshay Ajith, Agin Sebastian, Christy Sebastian",
    supervisor: "Prof. Smitha Jacob",
    tags: [
      "Healthcare",
      "App Development",
      "Blood Donation",
      "IoT"
    ]
  },
  {
    id: 3,
    title: "IP Speaker with SIP and Smart Notification System",
    description: "A smart IP speaker system integrating SIP protocols and real-time notifications.",
    students: "Deepu Xavi, Jino Antony, Amal Thankachan, Abin John",
    supervisor: "Prof. Kishore Sebastian",
    tags: [
      "IoT",
      "Communication",
      "SIP",
      "Smart Systems"
    ]
  },
  {
    id: 4,
    title: "AD Analysis Using Deep Learning",
    description: "A deep learning framework for analyzing advertisements to improve consumer engagement.",
    students: "Akshaya Sasikumar, Dona Elizabeth Sebastian, Carolin Thomas",
    supervisor: "Prof. Suma R",
    tags: [
      "Deep Learning",
      "Advertising",
      "AI",
      "Data Analysis"
    ]
  },
  {
    id: 5,
    title: "Sound Mate: A Hearing Aid Application",
    description: "A mobile application to assist hearing-impaired individuals by amplifying and filtering sounds.",
    students: "Jane Martin, Angel Liza Sabu, Aneena Thomas",
    supervisor: "Prof. Mereen Thomas Vadakkel",
    tags: [
      "Healthcare",
      "Hearing Aid",
      "Mobile App",
      "Accessibility"
    ]
  },
  {
    id: 6,
    title: "Smart Banking",
    description: "An intelligent banking system offering secure and innovative financial services.",
    students: "Anju K Cherian, Jiby Maria Jose, Jino R",
    supervisor: "Prof. Sarju S",
    tags: [
      "Banking",
      "FinTech",
      "AI",
      "Cybersecurity"
    ]
  },
  {
    id: 7,
    title: "Prediction of Diabetes Using Machine Learning",
    description: "A predictive system using machine learning to identify the risk of diabetes.",
    students: "Anumol Joseph, Irene Johnson, Jensia Thomas",
    supervisor: "Prof. Jeena Thomas",
    tags: [
      "Machine Learning",
      "Healthcare",
      "Predictive Analytics",
      "AI"
    ]
  },
  {
    id: 8,
    title: "Smart Parking System Based on IoT",
    description: "An IoT-enabled solution for efficient parking management and monitoring.",
    students: "Albin George, Akshay K Joseph, Jino Jacob",
    supervisor: "Prof. Bino Thomas",
    tags: [
      "IoT",
      "Smart Parking",
      "Automation",
      "Cloud Computing"
    ]
  },
  {
    id: 9,
    title: "Chord Master",
    description: "A music application for learning and mastering guitar chords through interactive features.",
    students: "Abhith Chandran, Abhishek Sebastian, Bony B Nalpathanchil, Elwin Augustin",
    supervisor: "Prof. Alphonsa Johny",
    tags: [
      "Music",
      "Learning App",
      "Guitar",
      "Interactive Tools"
    ]
  },
  {
    id: 10,
    title: "Smart Waste Management with Deep Learning on IoT",
    description: "An IoT-based waste management system enhanced with deep learning for efficient operations.",
    students: "Allen James, Alwin Johny, Jobin Joseph, Aswin R",
    supervisor: "Prof. Prince V Jose",
    tags: [
      "IoT",
      "Waste Management",
      "Deep Learning",
      "Smart Systems"
    ]
  },
  {
    id: 11,
    title: "WOE – A View Into the Life of an Autistic Child",
    description: "An interactive system to help understand and support children with autism through simulations and educational tools.",
    students: "Anoop Joel, Joseph Mathai, Jerin Thomas, Irein Joseph",
    supervisor: "Prof. Prince Abraham",
    tags: [
      "Healthcare",
      "Education",
      "Autism",
      "Interactive Systems"
    ]
  },
  {
    id: 12,
    title: "Academic Analyzer",
    description: "A data-driven platform for analyzing academic performance and providing actionable insights.",
    students: "Elezabeth Thomas, Ansu Antony, Ashlin James",
    supervisor: "Prof. Jikku Thomas",
    tags: [
      "Education",
      "Data Analytics",
      "AI",
      "Performance Monitoring"
    ]
  },
  {
    id: 13,
    title: "CARTER PAL - Vehicle Document Automation App",
    description: "A mobile application to manage and automate vehicle document organization and reminders.",
    students: "Joseph Sanchin Biju, Vivek B Pillai, Malavika Unni, Pooja Lakshmi",
    supervisor: "Dr. Praseetha V M",
    tags: [
      "Automation",
      "Mobile App",
      "Transportation",
      "Document Management"
    ]
  },
  {
    id: 14,
    title: "Emotion Recognition Using Deep Learning",
    description: "A system utilizing deep learning to analyze and recognize human emotions through facial expressions.",
    students: "Marly K Mathew, Meera B Nair, Pallavi Lal",
    supervisor: "Prof. Alphonsa Johny",
    tags: [
      "Deep Learning",
      "Emotion Recognition",
      "AI",
      "Image Processing"
    ]
  },
  {
    id: 15,
    title: "Phishing Website Detection Using Machine Learning",
    description: "A cybersecurity tool to identify and mitigate phishing websites using machine learning algorithms.",
    students: "Karthik Stephen Joseph, Akshay Krishna K G, Simon S Mathew, Mark M Tharakan",
    supervisor: "Prof. Mereen Thomas",
    tags: [
      "Cybersecurity",
      "Machine Learning",
      "Phishing Detection",
      "AI"
    ]
  },
  {
    id: 16,
    title: "Car Lease Using Blockchain",
    description: "A blockchain-based platform for secure and transparent car leasing transactions.",
    students: "Joyal Babu, Roshan Robin, Saju Mathew, Noel Philip",
    supervisor: "Prof. Angitha George",
    tags: [
      "Blockchain",
      "Car Leasing",
      "FinTech",
      "Security"
    ]
  },
  {
    id: 17,
    title: "Voting Using Blockchain",
    description: "A blockchain-enabled voting system ensuring transparency and integrity in elections.",
    students: "Roni K James, Prince Thomas, Shyamjith S A, Neetha K Saju",
    supervisor: "Prof. Sarju S",
    tags: [
      "Blockchain",
      "Voting",
      "Security",
      "Transparency"
    ]
  },
  {
    id: 18,
    title: "Image Processing Algorithms for Quality Enhancements in MR Images",
    description: "A set of algorithms designed to enhance the quality of magnetic resonance (MR) images using image processing techniques.",
    students: "Merwin Rommel Augustine, Varghese P I, Roshan Joe, Bibin George",
    supervisor: "Prof. Kishore Sebastian",
    tags: [
      "Image Processing",
      "Medical Imaging",
      "AI",
      "Healthcare"
    ]
  },
  {
    id: 19,
    title: "LUCE - An Assistant to Blind People",
    description: "A smart assistant for visually impaired individuals providing navigation and object detection support.",
    students: "Sahil Jose Parakkal, Stephy Jolly, Julia Suzanne Mathew",
    supervisor: "Prof. Bino Thomas",
    tags: [
      "Accessibility",
      "IoT",
      "AI",
      "Assistive Technology"
    ]
  },
  {
    id: 20,
    title: "Health Care Ecosystem Using Blockchain",
    description: "A blockchain-based platform to manage and secure healthcare data across multiple stakeholders.",
    students: "Tezzy Thomas, Vignesh Chandran, Saurav Joy, Mathew Paul",
    supervisor: "Prof. Ashly Thomas",
    tags: [
      "Blockchain",
      "Healthcare",
      "Data Security",
      "Ecosystem"
    ]
  },
  {
    id: 21,
    title: "ALLY - A Personalized Android Diary Entry App",
    description: "An Android application for users to maintain a personalized digital diary with advanced features.",
    students: "Josna Jose Kochikunnel, Riya Elizebeth Zavi, Sharon Shilpa Philip, Laveena George",
    supervisor: "Prof. Prince V Jose",
    tags: [
      "Mobile App",
      "Diary App",
      "Personalization",
      "Android"
    ]
  },
  {
    id: 22,
    title: "Chat Bot for College Domain",
    description: "An AI-powered chatbot designed to assist students and staff with queries related to the college.",
    students: "Silja Byju, Shilpa Shiva, Kiran Mathew, Linsu Soni",
    supervisor: "Prof. Suma R",
    tags: [
      "Chatbot",
      "AI",
      "Education",
      "Natural Language Processing"
    ]
  },
  {
    id: 23,
    title: "Real-time Vehicle Speed Tracking and Alert System",
    description: "An IoT-based solution for monitoring and alerting vehicle speed in real-time to enhance road safety.",
    students: "Toby Manuel, Melwyn Joseph Punnoose, Tomin Mathew, Nikhil P Paul",
    supervisor: "Prof. Prince Abraham",
    tags: [
      "IoT",
      "Road Safety",
      "Real-Time Monitoring",
      "Automation"
    ]
  }
];

export default projects;
