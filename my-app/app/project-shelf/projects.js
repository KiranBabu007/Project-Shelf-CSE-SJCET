const projectsData = {
  "2017-2018": [
    {
      id: 1,
      title: "Smart Trolleye",
      description:
        "An intelligent trolley system designed to enhance shopping convenience and automate billing.",
      students: "Amala James, Anju Abraham, Jayasree Santhosh",
      supervisor: "Prof. Kishore Sebastian",
      tags: ["IoT", "Automation", "Retail", "Smart Systems"],
    },
    {
      id: 2,
      title: "Gait Recognition",
      description:
        "A biometric system using gait patterns for identifying individuals.",
      students: "Celeyamma Gregory, Diya Anna Joys, Greeni Anna George",
      supervisor: "Prof. Smitha Jacob",
      tags: ["Biometrics", "AI", "Image Processing", "Security"],
    },
    {
      id: 3,
      title: "Language Emulator",
      description:
        "An application for learning and simulating multiple languages through interactive modules.",
      students: "Anjali Anna Jacob, Anjana Shaji, Ashly Panoose",
      supervisor: "Prof. Kishore Sebastian",
      tags: ["Language Learning", "AI", "Mobile App", "Education"],
    },
    {
      id: 4,
      title:
        "Android Controlled Multipurpose Wheelchair for the Elderly & Handicapped",
      description:
        "A wheelchair controlled via Android devices to assist the elderly and handicapped.",
      students: "Anju Joseph, Flona Siby, Jesily Jose",
      supervisor: "Prof. Sinu Maria Kurian",
      tags: ["Healthcare", "Assistive Technology", "IoT", "Android"],
    },
    {
      id: 5,
      title: "Automated and Intelligent",
      description:
        "An intelligent system designed for automation in various operational workflows.",
      students: "Greshma Rachel Shaji, Gremy Johnson, Bittu Elsa George",
      supervisor: "Prof. Kishore Sebastian",
      tags: ["AI", "Automation", "IoT", "Smart Systems"],
    },
    {
      id: 6,
      title: "FACT",
      description:
        "An educational platform focusing on advanced learning techniques and collaboration.",
      students: "Alisha Sebastian Kulathassery, Anjali Scaria, Ashy Dony",
      supervisor: "Prof. Jubil T Sunny",
      tags: ["Education", "Collaboration", "Technology", "AI"],
    },
    {
      id: 7,
      title: "Electroswayer",
      description:
        "An innovative device designed for energy generation and management.",
      students: "Alan Kuriakose, Akhil Saji, Jismon Lukose",
      supervisor: "Prof. Smitha Jacob",
      tags: ["Energy", "Innovation", "Technology", "IoT"],
    },
    {
      id: 8,
      title: "Emotion Based Music Player",
      description:
        "A music player that adapts to the user's emotions using facial recognition.",
      students: "Jerin Joshy, Jino Saji, Kiran Kumar",
      supervisor: "Prof. Kishore Sebastian",
      tags: ["AI", "Emotion Recognition", "Music", "User Experience"],
    },
    {
      id: 9,
      title: "Penetration Testing Tool",
      description:
        "A cybersecurity tool designed for performing penetration testing and vulnerability analysis.",
      students: "Anil Charles, Dominic Emmanuel",
      supervisor: "Prof. Sinu Maria Kurian",
      tags: [
        "Cybersecurity",
        "Penetration Testing",
        "Ethical Hacking",
        "Tools",
      ],
    },
    {
      id: 10,
      title: "Digital Assistant",
      description:
        "An AI-powered digital assistant to aid in daily tasks and improve productivity.",
      students: "Archana Babu, Bhagya Roy, Josin Saji Abraham",
      supervisor: "Prof. Angitha George",
      tags: ["AI", "Productivity", "Digital Assistant", "Automation"],
    },
    {
      id: 11,
      title: "Lashvagan Trace",
      description:
        "A tracking system designed for logistics and supply chain management.",
      students: "Abin Abraham, Albin P S, Denil Ulahannan, John Philip",
      supervisor: "Prof. Kishore Sebastian",
      tags: ["Tracking", "Logistics", "IoT", "Supply Chain"],
    },
    {
      id: 12,
      title: "Fuel Friend",
      description:
        "An application designed to optimize fuel usage and provide real-time tracking.",
      students: "Anusha Babu, Jain Joseph, Jubil Gea Joy",
      supervisor: "Prof. Ashly Thomas",
      tags: ["IoT", "Energy Efficiency", "Tracking", "Smart Systems"],
    },
    {
      id: 13,
      title: "Line Follower",
      description:
        "An automated robot designed to follow pre-defined lines for navigation.",
      students: "Anju V John, Ann Maria Jaison, Ann Maria Joseph",
      supervisor: "Prof. Kishore Sebastian",
      tags: ["Robotics", "Automation", "IoT", "Navigation"],
    },
    {
      id: 14,
      title: "Tracking Based Driver Drowsiness Monitoring and Warning System",
      description:
        "A real-time system to monitor driver drowsiness and provide warnings.",
      students: "Alina Elizabeth Sathish, Angel P Joshy, Greshma Rachel Shaji",
      supervisor: "Prof. Kishore Sebastian",
      tags: ["Road Safety", "IoT", "AI", "Driver Monitoring"],
    },
    {
      id: 15,
      title: "Smart Fool Device",
      description:
        "An intelligent system designed to prevent deceptive practices using AI.",
      students: "Akhil Jose Britto, Bimal S Kiran, Jerin John",
      supervisor: "Prof. Kishore Sebastian",
      tags: ["AI", "Security", "Smart Systems", "Prevention"],
    },
    {
      id: 16,
      title: "IoT Theft Detection Using Raspberry Pi and Image Processing",
      description:
        "A theft detection system using Raspberry Pi and advanced image processing techniques.",
      students: "Priya Alex, Rosmi Thomas, Thomaskutty Antony",
      supervisor: "Prof. Alphonsa Johny",
      tags: ["IoT", "Image Processing", "Security", "Raspberry Pi"],
    },
    {
      id: 17,
      title: "SECRETCAM",
      description:
        "A compact security camera system with stealth capabilities for surveillance.",
      students: "Sneha T Varghese, Melby K Ann, Neena Kurian",
      supervisor: "Prof. Jubil T Sunny",
      tags: ["Security", "Surveillance", "IoT", "Cameras"],
    },
    {
      id: 18,
      title: "DELTA ++",
      description:
        "An advanced system for processing and analyzing big data in industrial contexts.",
      students: "Vishnu Soman, Philip Sebastian, Sebin P Siby",
      supervisor: "Prof. Jeena Thomas",
      tags: ["Big Data", "Analytics", "Industrial Applications", "AI"],
    },
    {
      id: 19,
      title: "S.A.M",
      description:
        "A smart assistant module aimed at improving productivity and task management.",
      students: "Jino Saji, Kiran Kumar, Jerin John",
      supervisor: "Prof. Prince V Jose",
      tags: ["AI", "Productivity", "Task Management", "Automation"],
    },
    {
      id: 20,
      title: "AIR GO",
      description:
        "An air quality monitoring system designed for urban environments using IoT.",
      students: "John Kavalakkattu, Naveen Antony Jacob, Neethu Naduvathettu",
      supervisor: "Prof. Divya Sunny",
      tags: ["IoT", "Environmental Monitoring", "Air Quality", "Smart Cities"],
    },
    {
      id: 21,
      title: "Smart Band",
      description:
        "A wearable band equipped with sensors to monitor health and activity.",
      students: "Akhil Jose Britto, Bimal S Kiran, Jerin Joshy",
      supervisor: "Prof. Prince Abraham",
      tags: ["Wearables", "Health Monitoring", "IoT", "Fitness"],
    },
    {
      id: 22,
      title: "HITCH-ON",
      description:
        "An innovative system to streamline ride-sharing and transportation logistics.",
      students: "Alina Elizabeth Sathish, Angel P Joshy, Greeshma Joy",
      supervisor: "Prof. Suma R",
      tags: ["Ride-Sharing", "Transportation", "IoT", "Logistics"],
    },
    {
      id: 23,
      title: "SEF-PISCATOR: An Aid for Marine Fisherman",
      description:
        "A digital platform aimed at assisting marine fishermen with navigation and resource tracking.",
      students: "Sharon Shibu, Shona George, Sobina Joseph",
      supervisor: "Prof. Smija Das",
      tags: ["Marine Technology", "Navigation", "IoT", "Fishing"],
    },
    {
      id: 24,
      title: "Rent Hub",
      description:
        "A platform for managing and streamlining the rental process for properties and assets.",
      students: "Nevin John, Richy John, Sebin Sunny",
      supervisor: "Prof. Prince Abraham",
      tags: ["Real Estate", "Automation", "Rental Management", "Smart Systems"],
    },
    {
      id: 25,
      title: "FIT & MATCH",
      description:
        "A fitness application integrating personalized workout plans and dietary recommendations.",
      students: "Mariya M Thomas, Navitha Mathew, Pritta George",
      supervisor: "Prof. Sinu Maria Kurian",
      tags: ["Fitness", "HealthTech", "Personalization", "Mobile App"],
    },
    {
      id: 26,
      title: "LEARN IT",
      description:
        "An e-learning platform providing interactive modules and assessments for students.",
      students: "Shervin Mathews Sabu, Roshan Scaria, Alex Mathew",
      supervisor: "Prof. Ashly Thomas",
      tags: ["E-Learning", "Education", "Interactive Tools", "Technology"],
    },
    {
      id: 27,
      title: "NEXUS - A Social Network",
      description:
        "A unique social networking platform focusing on secure and private communication.",
      students: "Mathews Sunny, Muthumani V, Nikhil Thomas, Nyjil James",
      supervisor: "Prof. Bino Thomas",
      tags: ["Social Networking", "Privacy", "Technology", "Communication"],
    },
    {
      id: 28,
      title: "IHMO - Intelligent Homes",
      description:
        "A smart home management system that integrates IoT devices for seamless automation.",
      students: "Manu K R, Meekha Merin Jose, Prince Baby, Merin Jose",
      supervisor: "Prof. Sarju S",
      tags: ["Smart Homes", "IoT", "Automation", "Energy Efficiency"],
    },
    {
      id: 29,
      title: "Justice in a Click",
      description:
        "A legal assistance platform providing real-time solutions for justice seekers.",
      students: "Preeti Manoj, Pretty Deena Mathew, Pritika Merryl Prasad",
      supervisor: "Prof. Aneena Alex",
      tags: ["LegalTech", "Real-Time Assistance", "Justice", "Technology"],
    },
    {
      id: 30,
      title:
        "Big Data Analytics of Geosocial Media for Planning and Real-Time Decision",
      description:
        "A platform leveraging big data analytics on geosocial media for urban planning and decision-making.",
      students: "Steffi Merin Philip",
      supervisor: "Prof. Smitha Jacob",
      tags: ["Big Data", "Geosocial Media", "Urban Planning", "Analytics"],
    },
  ],

  "2018-2019": [
    {
      id: 1,
      title:
        "Supervised Machine Learning in Intelligent Character Recognition of Handwritten and Printed Nameplate",
      description:
        "A system leveraging supervised machine learning for the recognition and interpretation of handwritten and printed nameplates.",
      students: "Allen Jose, Amal Sunny, Felix Stephen Joseph, Beany Emmanuvel",
      supervisor: "Prof. Divya Sunny",
      tags: ["Machine Learning", "OCR", "Image Processing", "AI"],
    },
    {
      id: 2,
      title: "Haemart-Drop of Life",
      description:
        "A blood donation and management application connecting donors and recipients effectively.",
      students:
        "Ashitha Annu Andrews, Akshay Ajith, Agin Sebastian, Christy Sebastian",
      supervisor: "Prof. Smitha Jacob",
      tags: ["Healthcare", "App Development", "Blood Donation", "IoT"],
    },
    {
      id: 3,
      title: "IP Speaker with SIP and Smart Notification System",
      description:
        "A smart IP speaker system integrating SIP protocols and real-time notifications.",
      students: "Deepu Xavi, Jino Antony, Amal Thankachan, Abin John",
      supervisor: "Prof. Kishore Sebastian",
      tags: ["IoT", "Communication", "SIP", "Smart Systems"],
    },
    {
      id: 4,
      title: "AD Analysis Using Deep Learning",
      description:
        "A deep learning framework for analyzing advertisements to improve consumer engagement.",
      students: "Akshaya Sasikumar, Dona Elizabeth Sebastian, Carolin Thomas",
      supervisor: "Prof. Suma R",
      tags: ["Deep Learning", "Advertising", "AI", "Data Analysis"],
    },
    {
      id: 5,
      title: "Sound Mate: A Hearing Aid Application",
      description:
        "A mobile application to assist hearing-impaired individuals by amplifying and filtering sounds.",
      students: "Jane Martin, Angel Liza Sabu, Aneena Thomas",
      supervisor: "Prof. Mereen Thomas Vadakkel",
      tags: ["Healthcare", "Hearing Aid", "Mobile App", "Accessibility"],
    },
    {
      id: 6,
      title: "Smart Banking",
      description:
        "An intelligent banking system offering secure and innovative financial services.",
      students: "Anju K Cherian, Jiby Maria Jose, Jino R",
      supervisor: "Prof. Sarju S",
      tags: ["Banking", "FinTech", "AI", "Cybersecurity"],
    },
    {
      id: 7,
      title: "Prediction of Diabetes Using Machine Learning",
      description:
        "A predictive system using machine learning to identify the risk of diabetes.",
      students: "Anumol Joseph, Irene Johnson, Jensia Thomas",
      supervisor: "Prof. Jeena Thomas",
      tags: ["Machine Learning", "Healthcare", "Predictive Analytics", "AI"],
    },
    {
      id: 8,
      title: "Smart Parking System Based on IoT",
      description:
        "An IoT-enabled solution for efficient parking management and monitoring.",
      students: "Albin George, Akshay K Joseph, Jino Jacob",
      supervisor: "Prof. Bino Thomas",
      tags: ["IoT", "Smart Parking", "Automation", "Cloud Computing"],
    },
    {
      id: 9,
      title: "Chord Master",
      description:
        "A music application for learning and mastering guitar chords through interactive features.",
      students:
        "Abhith Chandran, Abhishek Sebastian, Bony B Nalpathanchil, Elwin Augustin",
      supervisor: "Prof. Alphonsa Johny",
      tags: ["Music", "Learning App", "Guitar", "Interactive Tools"],
    },
    {
      id: 10,
      title: "Smart Waste Management with Deep Learning on IoT",
      description:
        "An IoT-based waste management system enhanced with deep learning for efficient operations.",
      students: "Allen James, Alwin Johny, Jobin Joseph, Aswin R",
      supervisor: "Prof. Prince V Jose",
      tags: ["IoT", "Waste Management", "Deep Learning", "Smart Systems"],
    },
    {
      id: 11,
      title: "WOE – A View Into the Life of an Autistic Child",
      description:
        "An interactive system to help understand and support children with autism through simulations and educational tools.",
      students: "Anoop Joel, Joseph Mathai, Jerin Thomas, Irein Joseph",
      supervisor: "Prof. Prince Abraham",
      tags: ["Healthcare", "Education", "Autism", "Interactive Systems"],
    },
    {
      id: 12,
      title: "Academic Analyzer",
      description:
        "A data-driven platform for analyzing academic performance and providing actionable insights.",
      students: "Elezabeth Thomas, Ansu Antony, Ashlin James",
      supervisor: "Prof. Jikku Thomas",
      tags: ["Education", "Data Analytics", "AI", "Performance Monitoring"],
    },
    {
      id: 13,
      title: "CARTER PAL - Vehicle Document Automation App",
      description:
        "A mobile application to manage and automate vehicle document organization and reminders.",
      students:
        "Joseph Sanchin Biju, Vivek B Pillai, Malavika Unni, Pooja Lakshmi",
      supervisor: "Dr. Praseetha V M",
      tags: [
        "Automation",
        "Mobile App",
        "Transportation",
        "Document Management",
      ],
    },
    {
      id: 14,
      title: "Emotion Recognition Using Deep Learning",
      description:
        "A system utilizing deep learning to analyze and recognize human emotions through facial expressions.",
      students: "Marly K Mathew, Meera B Nair, Pallavi Lal",
      supervisor: "Prof. Alphonsa Johny",
      tags: ["Deep Learning", "Emotion Recognition", "AI", "Image Processing"],
    },
    {
      id: 15,
      title: "Phishing Website Detection Using Machine Learning",
      description:
        "A cybersecurity tool to identify and mitigate phishing websites using machine learning algorithms.",
      students:
        "Karthik Stephen Joseph, Akshay Krishna K G, Simon S Mathew, Mark M Tharakan",
      supervisor: "Prof. Mereen Thomas",
      tags: ["Cybersecurity", "Machine Learning", "Phishing Detection", "AI"],
    },
    {
      id: 16,
      title: "Car Lease Using Blockchain",
      description:
        "A blockchain-based platform for secure and transparent car leasing transactions.",
      students: "Joyal Babu, Roshan Robin, Saju Mathew, Noel Philip",
      supervisor: "Prof. Angitha George",
      tags: ["Blockchain", "Car Leasing", "FinTech", "Security"],
    },
    {
      id: 17,
      title: "Voting Using Blockchain",
      description:
        "A blockchain-enabled voting system ensuring transparency and integrity in elections.",
      students: "Roni K James, Prince Thomas, Shyamjith S A, Neetha K Saju",
      supervisor: "Prof. Sarju S",
      tags: ["Blockchain", "Voting", "Security", "Transparency"],
    },
    {
      id: 18,
      title:
        "Image Processing Algorithms for Quality Enhancements in MR Images",
      description:
        "A set of algorithms designed to enhance the quality of magnetic resonance (MR) images using image processing techniques.",
      students:
        "Merwin Rommel Augustine, Varghese P I, Roshan Joe, Bibin George",
      supervisor: "Prof. Kishore Sebastian",
      tags: ["Image Processing", "Medical Imaging", "AI", "Healthcare"],
    },
    {
      id: 19,
      title: "LUCE - An Assistant to Blind People",
      description:
        "A smart assistant for visually impaired individuals providing navigation and object detection support.",
      students: "Sahil Jose Parakkal, Stephy Jolly, Julia Suzanne Mathew",
      supervisor: "Prof. Bino Thomas",
      tags: ["Accessibility", "IoT", "AI", "Assistive Technology"],
    },
    {
      id: 20,
      title: "Health Care Ecosystem Using Blockchain",
      description:
        "A blockchain-based platform to manage and secure healthcare data across multiple stakeholders.",
      students: "Tezzy Thomas, Vignesh Chandran, Saurav Joy, Mathew Paul",
      supervisor: "Prof. Ashly Thomas",
      tags: ["Blockchain", "Healthcare", "Data Security", "Ecosystem"],
    },
    {
      id: 21,
      title: "ALLY - A Personalized Android Diary Entry App",
      description:
        "An Android application for users to maintain a personalized digital diary with advanced features.",
      students:
        "Josna Jose Kochikunnel, Riya Elizebeth Zavi, Sharon Shilpa Philip, Laveena George",
      supervisor: "Prof. Prince V Jose",
      tags: ["Mobile App", "Diary App", "Personalization", "Android"],
    },
    {
      id: 22,
      title: "Chat Bot for College Domain",
      description:
        "An AI-powered chatbot designed to assist students and staff with queries related to the college.",
      students: "Silja Byju, Shilpa Shiva, Kiran Mathew, Linsu Soni",
      supervisor: "Prof. Suma R",
      tags: ["Chatbot", "AI", "Education", "Natural Language Processing"],
    },
    {
      id: 23,
      title: "Real-time Vehicle Speed Tracking and Alert System",
      description:
        "An IoT-based solution for monitoring and alerting vehicle speed in real-time to enhance road safety.",
      students:
        "Toby Manuel, Melwyn Joseph Punnoose, Tomin Mathew, Nikhil P Paul",
      supervisor: "Prof. Prince Abraham",
      tags: ["IoT", "Road Safety", "Real-Time Monitoring", "Automation"],
    },
  ],
  "2019-2020": [
    {
      id: 1,
      title: "Text To Speech Conversion For Visually Impaired People",
      description:
        "A tool that converts text into speech for visually impaired users.",
      students:
        "Anjaly Siby, Chikku Lawrance, Anisha P. Emmanuel, Jain Mariya Jayan",
      supervisor: "Prof. Kishore Sebastian",
      tags: ["Accessibility", "Speech Recognition", "Assistive Technology"],
    },
    {
      id: 2,
      title:
        "Modeling Of Bitcoin Price Prediction Algorithm Using Deep Learning",
      description: "A deep learning model to predict Bitcoin prices.",
      students: "Ann Maria Babu, Hari Priya, Jismin K. Jose, Jiss Maria Jijo",
      supervisor: "Prof. Prince V Jose",
      tags: ["Finance", "Machine Learning", "Cryptocurrency"],
    },
    {
      id: 3,
      title: "Elements- Voice Activated Image Editing Software",
      description: "Image editing software controlled via voice commands.",
      students:
        "Akash Johny, Albin Saji, Benjamin G Nechicattu, Done Maria James",
      supervisor: "Prof. Suma R",
      tags: ["Image Processing", "Voice Commands", "Software Development"],
    },
    {
      id: 4,
      title: "Indoor Maps",
      description: "A navigation system for indoor environments.",
      students:
        "Abhijith Ajith, Albin Mathew Thomas, Jestin Antony, Joel Joseph",
      supervisor: "Prof. Suma R",
      tags: ["Navigation", "Indoor Mapping", "GIS"],
    },
    {
      id: 5,
      title: "IoT Based Drowsy Detection And Warning System",
      description:
        "A real-time IoT solution to detect driver drowsiness and issue warnings.",
      students:
        "Aneesha Shaly George, Christy Shaji, Harikrishnan A, Jose Paul",
      supervisor: "Prof. Ashly Thomas",
      tags: ["IoT", "Driver Safety", "Real-Time Alerts"],
    },
    {
      id: 6,
      title: "Placement Management System – Phase 1",
      description:
        "An automated system for managing placement activities in educational institutions.",
      students: "Ajeena Sunny, Aneena Felix, Angelin Saji, Christina Sebastian",
      supervisor: "Prof. Praseetha V. M",
      tags: ["Management System", "Education", "Automation"],
    },
    {
      id: 7,
      title: "Omnis Agro: Agriculture For Everyone",
      description:
        "A smart farming solution using IoT for optimized agricultural practices.",
      students: "Boney George, Francis P. B., Gion Dany, Joseph Hermis",
      supervisor: "Prof. Prince Abraham",
      tags: ["Agriculture", "IoT", "Smart Farming"],
    },
    {
      id: 8,
      title: "Placement Management System - Phase 2",
      description:
        "A continuation of the placement management system with additional features.",
      students:
        "Daibin Raju, Irene Treesa Jose, Jeebu Abraham Aniyankunju, Joel James",
      supervisor: "Prof. Mereen Thomas",
      tags: ["Education", "Placement", "Software Development"],
    },
    {
      id: 9,
      title:
        "Flood Rescue Management And Zone Mapping Using GIS And Advanced Technologies",
      description:
        "A system leveraging GIS and cutting-edge technologies to assist in flood rescue operations and accurate zone mapping for disaster management.",
      students:
        "Aksa Reji, Alen Mathew, Andrews P George, Christina Tresa Abraham",
      supervisor: "Prof. Jikku Thomas",
      tags: ["GIS", "Flood Rescue", "Technology"],
    },
    {
      id: 10,
      title: "Sign Language Translator For Deaf-Mute",
      description:
        "A translator tool designed to bridge communication gaps for the deaf-mute community by converting sign language into text or speech.",
      students: "Alka Augustine, Anit Mathew, Ashna Saji, Elizabeth Jose",
      supervisor: "Prof. Angitha George",
      tags: ["Sign Language", "Translator", "Technology"],
    },
    {
      id: 11,
      title: "Asra- Cloud Computing Based Framework For Blood Services",
      description:
        "A robust cloud computing platform designed to optimize and manage blood donation and transfusion services.",
      students: "Adharsh Raju, Albert Kurian, Basil Joseph Benny",
      supervisor: "Prof. (Dr.) Joby P P",
      tags: ["Cloud Computing", "Blood Services", "Framework"],
    },
    {
      id: 12,
      title: "Vulnerability Scanner",
      description:
        "A cybersecurity tool designed to detect and report vulnerabilities in computer systems and networks.",
      students: "Binny George, Jenu Maria Scaria, Jobin B",
      supervisor: "Prof. (Dr.) Praseetha V. M",
      tags: ["Cybersecurity", "Vulnerability", "Scanner"],
    },
    {
      id: 13,
      title: "Automatic Image Detection And Censoring",
      description:
        "An automated system for identifying and censoring sensitive content in images.",
      students: "Adithye Joseph, Ajay Chacko Thomas, Jobin Jose",
      supervisor: "Prof. Divya Sunny",
      tags: ["Image Detection", "Censorship", "Automation"],
    },
    {
      id: 14,
      title: "Malayalam Speech To Text Conversion",
      description:
        "A natural language processing system that converts spoken Malayalam into written text.",
      students:
        "Abhishek M P, Ajay P Mathews, Anandhu Sasikuttan, Ashish James",
      supervisor: "Prof. Kishore Sebastian",
      tags: ["Speech Recognition", "Malayalam", "Text Conversion"],
    },
    {
      id: 15,
      title: "Homomorphic Encryption Based Online Voting System",
      description:
        "A secure online voting platform leveraging homomorphic encryption for confidentiality and accuracy.",
      students: "Alen Manoj",
      supervisor: "Dr. Joby P P",
      tags: ["Homomorphic Encryption", "Online Voting", "Security"],
    },
    {
      id: 16,
      title: "Detection Of Helmetless Riders Using Faster R-Cnn",
      description:
        "A traffic monitoring system using Faster R-CNN to detect motorcyclists riding without helmets.",
      students: "Meenu R, Sinta Raju, Smrithi P Paul, Swathy Sajeev",
      supervisor: "Prof. Alphonsa Johny",
      tags: ["Helmet Detection", "Faster R-CNN", "Safety"],
    },
    {
      id: 17,
      title: "A Device For Communication With Deaf-Blind People",
      description:
        "An assistive technology device enabling communication for individuals with both hearing and visual impairments.",
      students: "Joyal James, Kevin M Jeggy, Ramjith Ramadas, Sonu Martin",
      supervisor: "Prof. Jikku Thomas",
      tags: ["Deaf-Blind Communication", "Assistive Technology"],
    },
    {
      id: 18,
      title: "Mechy- Maintenance Of Car Engine Using Augmented Reality",
      description:
        "An AR-based application to guide users in maintaining and repairing car engines.",
      students:
        "Maju Joseph, Nikhil Josy, Ron George Valiyaveettil, Vishnudas V",
      supervisor: "Prof. Smitha Jacob",
      tags: ["Car Maintenance", "Augmented Reality", "Technology"],
    },
    {
      id: 19,
      title: "E-Lending System",
      description:
        "An online platform for secure and efficient lending and borrowing transactions.",
      students: "Vineeth K",
      supervisor: "Prof. Smitha Jacob",
      tags: ["E-Lending", "System", "Online Platform"],
    },
    {
      id: 20,
      title: "Omnis Agro: Agriculture For Everyone",
      description:
        "A smart agriculture platform designed to enhance productivity and accessibility for farmers.",
      students:
        "Rahal Bency Paul, Roshen Reji George, Sachin Sajikumar, Sreelakshmi R",
      supervisor: "Prof. Prince Abraham",
      tags: ["Agriculture", "Technology", "Farming"],
    },
    {
      id: 21,
      title: "SIGNOS: A Solution For Unhearing",
      description:
        "A communication tool for hearing-impaired individuals, utilizing sign language recognition.",
      students: "Rahul Ajith, Sebin Skariah, Slomo A Thomas, Visakh S Nair",
      supervisor: "Prof. Sarju S",
      tags: ["Sign Language", "Hearing Impaired", "Communication"],
    },
    {
      id: 22,
      title: "Automated HR",
      description:
        "An HR management system automating repetitive tasks and streamlining processes.",
      students:
        "Maria Rose Chacko, Megha Philip, Merin Mary Saju, Nimmy George",
      supervisor: "Prof. Prince V Jose",
      tags: ["HR", "Automation", "Human Resources"],
    },
    {
      id: 23,
      title: "Melanoma Detection Using Deep Learning",
      description:
        "A medical AI system for early detection of melanoma using deep learning techniques.",
      students: "Jovel Jose, Melvin Mathew, Reenu Tresa Manuel, Syam Philip",
      supervisor: "Prof. Alphonsa Johny",
      tags: ["Melanoma", "Deep Learning", "Medical Technology"],
    },
    {
      id: 24,
      title: "Medidocs",
      description:
        "A digital solution for efficient management and storage of medical records.",
      students: "Reon Saji, Robin Thomas, Mohammed Shabin Moidu, Praveen K S",
      supervisor: "Prof. Sarju S",
      tags: ["Medical Documentation", "Health Tech"],
    },
    {
      id: 25,
      title: "Home Automation System Using Malayalam Language",
      description:
        "A smart home system controlled through voice commands in Malayalam.",
      students: "Mathew Santhosh, Nayan Thara Prakash, Sneha Raj M P, Gokul G",
      supervisor: "Prof. Gemini George",
      tags: ["Home Automation", "Malayalam", "Technology"],
    },
    {
      id: 26,
      title: "Web Hosting Using Docker Containers",
      description:
        "A scalable and efficient web hosting solution utilizing Docker container technology.",
      students: "Minto Sunny, Sen Shaji, Sheen Sabu, Udith Uthaman",
      supervisor: "Prof. Gemini George",
      tags: ["Web Hosting", "Docker Containers", "Technology"],
    },
    {
      id: 27,
      title: "A Smart Music Player Using Facial Recognition",
      description:
        "An AI-powered music player that curates playlists based on the user's facial expressions.",
      students:
        "Shain Tom Mathew, Riya Issac, Stephy Theres Mathew, Asma Mehnas Muthalib",
      supervisor: "Prof. Divya Sunny",
      tags: ["Music Player", "Facial Recognition", "AI"],
    },
    {
      id: 28,
      title: "Artificial Intelligence Based Depression Recognition System",
      description:
        "An AI-based system designed to detect signs of depression through behavioral analysis.",
      students: "Nissy Alex, Lija Joy, Sherin Thomas, Teenu Sunny",
      supervisor: "Prof. Angitha George",
      tags: ["AI", "Depression Recognition", "Mental Health"],
    },
    {
      id: 29,
      title: "Non-Invasive Anemic Detection - DetectIR",
      description:
        "A health tech system for detecting anemia using non-invasive infrared technology.",
      students:
        "Nesnu Elizabeth Kurian, Reshma Sara Joe, Sonita Ann Koshy, Vishnupriya V Gopal",
      supervisor: "Prof. Mereen Thomas",
      tags: ["Anemia Detection", "Non-invasive", "Health Tech"],
    },
    {
      id: 30,
      title: "Online Toll Payment App",
      description:
        "A mobile application for seamless toll payment, reducing wait times and improving convenience.",
      students: "Justin Varghese, Sijin John, Nimith Thomas",
      supervisor: "Prof. Sinu Maria Kurian",
      tags: ["Toll Payment", "App Development", "Technology"],
    },
    {
      id: 31,
      title: "Certificate Management System Using Blockchain",
      description:
        "A secure platform for managing and verifying certificates using blockchain technology.",
      students: "Mili Rafi",
      supervisor: "Prof. Ashly Thomas",
      tags: ["Blockchain", "Certificate Management", "Security"],
    },
  ],

  "2020-2021": [
    {
      id: 1,
      title: "Automated Bus Scheduling",
      description: "A solution for automated bus scheduling and optimization",
      students: "Anandu R, Aishwarya Michael",
      supervisor: "Prof. Kishore Sebastian",
      tags: ["Transportation", "Automation"],
    },
    {
      id: 2,
      title: "Virus Tracking System",
      description: "A system to track virus spread and analyze data",
      students:
        "Alwin Varghese, Anu Justin, Ashly Sibichan, Augustine S Aykara",
      supervisor: "Prof. Smitha Jacob",
      tags: ["Health Monitoring", "Data Analysis", "Tracking"],
    },
    {
      id: 3,
      title: "Integrated Platform for Online Education",
      description: "A platform for managing online education needs",
      students:
        "Athira Gopinath, Felix V James, Johan Issac, Justin Johny Mathew",
      supervisor: "Prof. Mereen Thomas",
      tags: ["Education", "Online Platform"],
    },
    {
      id: 4,
      title: "Shared Parking System",
      description: "A system to share and manage parking spaces efficiently",
      students: "Amel John, Alan K George, Allen Jose, Joseph Mathew",
      supervisor: "Prof. Bino Thomas",
      tags: ["Parking Management", "IoT"],
    },
    {
      id: 5,
      title: "Handwriting Recognition System Using Deep Learning",
      description: "A handwriting recognition system leveraging deep learning",
      students: "Alex Joseph, Athira M Nair, Blessil Bose, Chrissie Aldo",
      supervisor: "Dr. Praseetha V. M",
      tags: ["Deep Learning", "Image Processing"],
    },
    {
      id: 6,
      title: "Skin Disease Detection",
      description: "An AI-based system for detecting skin diseases",
      students: "Don Basil Peter, Alwin Sonny, Jerin Jose Reeni, Bijesh Biju",
      supervisor: "Prof. Jikku Thomas",
      tags: ["Healthcare", "AI", "Image Processing"],
    },
    {
      id: 7,
      title: "Spot-U",
      description: "A mobile app for real-time parking spot tracking",
      students: "Akhil K Anil, David Pious, Joseph Alen Shaji, Ankith Suresh",
      supervisor: "Prof. Angitha George",
      tags: ["Parking", "App Development"],
    },
    {
      id: 8,
      title: "SpiderBot",
      description: "A robotic spider for inspection tasks",
      students: "Christin Mathew, Alen Joy, Jobson P Varghese, Jeff Mathew",
      supervisor: "Prof. Sinu Maria Kurian",
      tags: ["Robotics", "IoT"],
    },
    {
      id: 9,
      title: "Storing Patients’ Medical Records Using Blockchain",
      description: "A blockchain solution for securing medical records",
      students:
        "Ashas P Uday, Jobin K Kurian, Abey Jose Sebastian, Abin Mathew",
      supervisor: "Prof. Divya Sunny",
      tags: ["Blockchain", "Healthcare"],
    },
    {
      id: 10,
      title: "VR Kerala",
      description: "A virtual reality experience showcasing Kerala",
      students: "Amal Sebastian",
      supervisor: "Prof. Sarju S.",
      tags: ["Virtual Reality", "Tourism"],
    },
    {
      id: 11,
      title: "LeFarm - One Step Platform for Farmers",
      description:
        "A digital platform for farmers to connect and manage activities",
      students:
        "Akshara Mariya Josy, Alka Brigit Senson, Amelin Thomas, Aysha Nazarudeen",
      supervisor: "Prof. Suma R.",
      tags: ["Agriculture", "App Development"],
    },
    {
      id: 12,
      title: "AR Classroom for Teachers and Students",
      description: "An AR-based classroom experience for education",
      students:
        "Christy Varghese, Amal Anto, Hanna Elsa Reni George, Jiya George",
      supervisor: "Prof. Bino Thomas",
      tags: ["Augmented Reality", "Education"],
    },
    {
      id: 13,
      title: "We4You",
      description: "A social platform connecting people in need with helpers",
      students: "Albin Francis, Amala Saji, Aparna Thomas, Dhaya Mathew",
      supervisor: "Prof. Mereen Thomas",
      tags: ["Social Platform", "Community Support"],
    },
    {
      id: 14,
      title: "Securing Healthcare Portal",
      description: "A portal for securing patient data and healthcare services",
      students: "Indu Cyriac, Divya Shaji Thomas, Avinash A Panicker",
      supervisor: "Prof. Akshara Sasidharan",
      tags: ["Healthcare", "Cybersecurity"],
    },
    {
      id: 15,
      title: "Game Development",
      description: "Development of an engaging and interactive game",
      students: "Clement P Tom, Dona Tom, James Jacob Jose, Joseph Thomas",
      supervisor: "Prof. Prince Abraham",
      tags: ["Game Development", "Interactive Media"],
    },
    {
      id: 16,
      title: "Automatic Bus Scheduling and Travel Companion",
      description:
        "A system to automate bus scheduling and provide a travel companion service",
      students: "Kennith Feryl Philips, Smitha John",
      supervisor: "Prof. Kishore Sebastian",
      tags: ["Transportation", "Automation"],
    },
    {
      id: 17,
      title: "Intelligent Question Answering Using Deep Learning",
      description:
        "An intelligent system to answer questions using deep learning techniques",
      students: "Sebin Byju, Roval Benny, Royal Benny, Richu Joy",
      supervisor: "Dr. Gemini George",
      tags: ["Deep Learning", "AI"],
    },
    {
      id: 18,
      title: "Raptor",
      description: "A project focused on advanced robotic systems",
      students: "Megan Jacob, Sandra Stephen, Santhosh Thomas, Sandeep Salmon",
      supervisor: "Prof. Jikku Thomas",
      tags: ["Robotics", "Automation"],
    },
    {
      id: 19,
      title: "Digi-Valuate",
      description: "A digital tool for asset valuation",
      students: "Mileen Sebastian, Rachel Kunjumon, Samaanta Shaji",
      supervisor: "Prof. Suma R",
      tags: ["Asset Management", "Digital Tool"],
    },
    {
      id: 20,
      title: "Quality Grading of Fruits and Vegetables",
      description:
        "A system to assess the quality of fruits and vegetables using AI",
      students: "Teresa George, Respa R S, Rhea Salih, Shibreeze K Sebastian",
      supervisor: "Dr. Sruthy S",
      tags: ["AI", "Agriculture"],
    },
    {
      id: 21,
      title: "Early Fire Detection",
      description: "An IoT-based system for early detection of fire hazards",
      students: "Rithin Jose, Romal Roy, Roop Saji, Rose Maria M T",
      supervisor: "Prof. Ashly Thomas",
      tags: ["IoT", "Fire Safety"],
    },
    {
      id: 22,
      title: "Ride Sharing Platform",
      description: "A platform for efficient ride sharing",
      students: "Leion Sunny, Riya Theresa Abraham, Saranya S, Chrisbin Sunny",
      supervisor: "Dr. Joby P.P",
      tags: ["Transportation", "App Development"],
    },
    {
      id: 23,
      title: "Game Development Using Spark AR Docile",
      description: "A game development project using Spark AR",
      students: "Santhul Joseph, Rony Thomas, Pheleena V Thomas, Natha B",
      supervisor: "Prof. Prince V Jose",
      tags: ["Game Development", "Augmented Reality"],
    },
    {
      id: 24,
      title: "Vehicle Accident Detection with Emergency Notification",
      description:
        "A system to detect vehicle accidents and notify emergency services",
      students: "Suneer Methar, Wasim Saju, Megha Sunny, Sandra Raju",
      supervisor: "Dr. Gemini George",
      tags: ["AI", "Safety"],
    },
    {
      id: 25,
      title: "IoT Assisted Device Controlling System",
      description: "A system to control devices using IoT technology",
      students: "Kichu Sebastian, Justine Francis, Stebin Paul, Subin M",
      supervisor: "Prof. Ashly Thomas",
      tags: ["IoT", "Automation"],
    },
    {
      id: 26,
      title: "AgroSight",
      description: "A solution for smart farming and agricultural monitoring",
      students: "Nidhun S, Thomas Alphonse Benny, Vaishnavi S, Nidhina Tom",
      supervisor: "Prof. Nimmy Joshy",
      tags: ["Agriculture", "IoT"],
    },
    {
      id: 27,
      title: "VR Kerala",
      description: "A virtual reality experience to promote Kerala tourism",
      students: "Lija Alex, S Nikhit, Muhammed Aftab N Sait, Remya Raju",
      supervisor: "Dr. Praseetha V.M",
      tags: ["Virtual Reality", "Tourism"],
    },
    {
      id: 28,
      title: "Building a Decentralized Economy Using Blockchain",
      description:
        "A project to create a decentralized economy using blockchain technology",
      students: "Alwin K Scaria, Shinu Shaju, Teena Tomy",
      supervisor: "Prof. Prince Abraham",
      tags: ["Blockchain", "Economy"],
    },
    {
      id: 29,
      title: "Third Eye",
      description: "A smart assistant system for visually impaired individuals",
      students:
        "Vimal Jose, Solomon Joyce, Sonu Kuruvilla Babychan, Nibin Sabu Thomas",
      supervisor: "Prof. Anna N Kurian",
      tags: ["Assistive Technology", "AI"],
    },
    {
      id: 30,
      title: "Medi-Cloud",
      description: "A cloud-based solution for managing medical data",
      students:
        "Kiran Xavier, Praveena P Prabhu, Rohann Tom Soney, Sanjay Suresh",
      supervisor: "Prof. Angitha George",
      tags: ["Healthcare", "Cloud Computing"],
    },
  ],
  "2021-2022": [
    {
      id: 1,
      title: "DIFI",
      description: "Not available",
      students: "Abhiraj M S, Carol Varghese, Edwin Vincent, Irine Jomy",
      supervisor: "Prof. Kishore Sebastian",
      tags: ["IoT", "Data Analysis", "Embedded Systems"],
    },
    {
      id: 2,
      title: "Backend as a Platform",
      description: "Not available",
      students:
        "Noble Mathew, Arjun Shibu, Anitta Mary Thomas, Stefhina George",
      supervisor: "Prof. Smitha Jacob",
      tags: ["Backend Development", "Microservices", "APIs"],
    },
    {
      id: 3,
      title: "GMedica+",
      description: "Not available",
      students: "Liya Mathew, Amy Rosy John, Sona Joseph, Taniya Elizabeth Max",
      supervisor: "Prof. Angitha George",
      tags: ["Healthcare", "Mobile App", "Firebase"],
    },
    {
      id: 4,
      title: "Automatic Floor Plan Designer",
      description: "Not available",
      students: "Anandhu J, Anaina Elizabeth Johny, Annu Mathew, Anandu K P",
      supervisor: "Prof. Mereen Thomas Vadakkel",
      tags: ["AI", "Computer Vision", "CAD"],
    },
    {
      id: 5,
      title: "Ease Life",
      description: "Not available",
      students: "Ashlin V Rajan, Binu Babu, Christo Shaji, Noel Benny",
      supervisor: "Prof. Akshara Sasidharan",
      tags: ["Lifestyle", "Mobile App", "Automation"],
    },
    {
      id: 6,
      title: "IBH App",
      description: "Not available",
      students:
        "Christeena John, Raniya Rachel Varghese, Ritta Sara Thomas, Ryan Maria Sunil",
      supervisor: "Prof. Bino Thomas",
      tags: ["Healthcare", "Mobile App", "AI"],
    },
    {
      id: 7,
      title: "Guide My Way",
      description: "Not available",
      students:
        "Martin Francis, Teena Thomas, Sebin Benny, Christeen Maria Philip",
      supervisor: "Prof. Bino Thomas",
      tags: ["Navigation", "Mobile App", "Travel"],
    },
    {
      id: 8,
      title: "Helping Hands",
      description: "Not available",
      students:
        "Abin S Bijo, Benson Bastian Siby, Fibin Pious, Sam Dominic Benjamin",
      supervisor: "Prof. Maria Yesudas",
      tags: ["Social Service", "Mobile App", "Community"],
    },
    {
      id: 9,
      title: "Virtual Docent Using Augmented Reality",
      description: "Not available",
      students: "Joel Sajan, Joseph Joseph, Ken Binoy, Thomas P J",
      supervisor: "Prof. Divya Sunny",
      tags: ["AR", "Education", "Tourism"],
    },
    {
      id: 10,
      title: "Aspire - Student Performance Analyser",
      description: "Not available",
      students: "David P Joseph, George T Saju, Lince Varghese, Roshan Thomas",
      supervisor: "Dr. Praseetha VM",
      tags: ["Education", "Data Analytics", "Web App"],
    },
    {
      id: 11,
      title: "Re Collect",
      description: "Not available",
      students: "Mihil Jose, Rahul Rajan, Christine Sam, Sebastian George",
      supervisor: "Prof. Sarju S",
      tags: ["Memory Game", "Mobile App", "Entertainment"],
    },
    {
      id: 12,
      title: "Music Transcription App",
      description: "Not available",
      students:
        "Shyam Mathew, Varun V Nair, Praful Sanal Kumar, Rajath Alphonse",
      supervisor: "Prof. Angitha George",
      tags: ["Music", "AI", "Mobile App"],
    },
    {
      id: 13,
      title: "Smart Restaurant",
      description: "Not available",
      students: "Namitha Shiby, Neethu Charly, Sandra Pramod, Tessa J Malayil",
      supervisor: "Dr. Joby PP",
      tags: ["Hospitality", "IoT", "Automation"],
    },
    {
      id: 14,
      title: "WEBCA",
      description: "Not available",
      students: "Sanjay S, Kusanath R, Alen Xavier, John Thejus Joy",
      supervisor: "Prof. Ashly Thomas",
      tags: ["Web Development", "Browser Extension", "Automation"],
    },
    {
      id: 15,
      title: "Missing Person Identification",
      description: "Not available",
      students: "Heran Mariam Nechicattu, Jinju Raju, Jiya Mathai",
      supervisor: "Prof. Jibin Philip",
      tags: ["AI", "Facial Recognition", "Security"],
    },
    {
      id: 16,
      title: "Secure Online Bidding and Exchanging System",
      description: "Not available",
      students: "Emil Mathew, Boby Sebastian, Joel James, Akhil Sabeesh",
      supervisor: "Prof. Jikku Thomas",
      tags: ["E-commerce", "Security", "Blockchain"],
    },
    {
      id: 17,
      title: "We Serve",
      description: "Not available",
      students:
        "Amal Alphonse Mathew, Suhail Shamsuddin, Sojan Philip, Mishell Mariya Joseph",
      supervisor: "Prof. Jikku Thomas",
      tags: ["Community", "Mobile App", "Service Platform"],
    },
    {
      id: 18,
      title: "SMITI",
      description: "Not available",
      students: "Liya Philip, Migha Maria Joseph, Parvathy T.B, Rithu S Nair",
      supervisor: "Prof. Smitha Jacob",
      tags: ["IoT", "Smart Devices", "Automation"],
    },
    {
      id: 19,
      title: "Prime-Swap",
      description: "Not available",
      students: "Jessel Jose, Amalu Rajan, Alan Thomas, Elvin Sebastian",
      supervisor: "Prof. Sarju S",
      tags: ["Cryptography", "Blockchain", "Trading"],
    },
    {
      id: 20,
      title: "Placement Management System",
      description: "Not available",
      students: "Akshara Raju, Dona Maria Sunny, Theertha S Nair",
      supervisor: "Prof. Reby John",
      tags: ["Web App", "Education", "Management"],
    },
    {
      id: 21,
      title: "Happy Paws",
      description: "Not available",
      students: "Merin Benny, Sneha Anie Jacob, Rayona Mathew",
      supervisor: "Prof. Mereen Thomas Vadakkel",
      tags: ["Animal Care", "Mobile App", "Community"],
    },
    {
      id: 22,
      title: "E-Motion",
      description: "Not available",
      students: "Sona Ann Saji, Sreelakshmi S, Riya Mathew",
      supervisor: "Prof. Divya Sunny",
      tags: ["Emotion Analysis", "AI", "Mobile App"],
    },
    {
      id: 23,
      title: "Driver Assistant",
      description: "Not available",
      students: "Sachin Binoy, Tresa Soney, Sana Kuruvila",
      supervisor: "Prof. Ashly Thomas",
      tags: ["Automotive", "AI", "Assistant"],
    },
    {
      id: 24,
      title: "PIREC",
      description: "Not available",
      students:
        "Joseph Thomas, Meljo Sunny, Mithun Varghese Mathew, Varkey Martin",
      supervisor: "Prof. Jibin Philip",
      tags: ["Recycling", "Sustainability", "IoT"],
    },
    {
      id: 25,
      title: "Shopping with Augmented Reality",
      description: "Not available",
      students: "Josia Philip, Juval Raj, Jitto Thomas, Geo Mathew George",
      supervisor: "Dr. Sruthy S",
      tags: ["Augmented Reality", "Retail", "Mobile App"],
    },
    {
      id: 26,
      title: "WeCare - Mental Health Care Application",
      description: "Not available",
      students:
        "Amrutha M Nair, Anish Mathew Sunny, Anita Mariya Babu, Devi Nair",
      supervisor: "Prof. Anna N Kurian",
      tags: ["Mental Health", "Healthcare", "Mobile App"],
    },
    {
      id: 27,
      title: "Guard - Parental Control App",
      description: "Not available",
      students: "Treasa Mary Kurian, Riya Ann Biju, Nisha Mohan",
      supervisor: "Prof. Kishore Sebastian",
      tags: ["Parental Control", "Mobile App", "Privacy"],
    },
    {
      id: 28,
      title: "Emo-Doc",
      description: "Not available",
      students: "Gokul K Mohanan, Jibin P Thomas",
      supervisor: "Dr. Sruthy S",
      tags: ["Healthcare", "Emotion Detection", "AI"],
    },
    {
      id: 29,
      title: "Gesture Based Device Controlling System",
      description: "Not available",
      students: "Anjana V M, Tinu Sam",
      supervisor: "Dr. Praseetha V M",
      tags: ["IoT", "Gesture Control", "Automation"],
    },
  ],

  "2022-2023": [
    {
      id: 1,
      title: "Animal Intrusion Detection System Using YOLO Algorithm",
      description:
        "A system leveraging the YOLO algorithm for real-time detection of animal intrusions, enhancing safety in farms and restricted areas.",
      students: "Bibin Mathew, Aibin Abraham",
      supervisor: "Prof. Jaya John",
      tags: ["YOLO", "Animal Detection", "Machine Learning"],
    },
    {
      id: 2,
      title: "Heart Monitoring System using IOT",
      description:
        "An IoT-based system for continuous heart monitoring, providing real-time data and alerts to healthcare providers.",
      students: "Aswin Suseel, Devika Suresh Kumar, Isha Sameer",
      supervisor: "Prof. Dona Mary Cherian",
      tags: ["IOT", "Heart Monitoring", "Machine Learning"],
    },
    {
      id: 3,
      title: "Auxilia: Assistive Learning Tool for children with Down Syndrome",
      description:
        "An assistive learning application tailored for children with Down Syndrome, enhancing cognitive skills through interactive tools.",
      students: "Anna Thomas",
      supervisor: "Prof. Ashly Thomas",
      tags: ["Assistive Learning", "Down Syndrome", "Machine Learning"],
    },
    {
      id: 4,
      title: "SJCET Arena",
      description:
        "A cloud-based platform for managing campus events with real-time IoT integration.",
      students: "Akash K, Georgin Jose, Joel James",
      supervisor: "Prof. Thushara Sukumar",
      tags: ["Event Management", "IOT", "Cloud Computing"],
    },
    {
      id: 5,
      title: "ARVidya: Gamified AR Learning App",
      description:
        "An augmented reality learning platform gamified to enhance student engagement and interactive education.",
      students: "Aiswarya Raju, Akash Manuel, Joel Joby",
      supervisor: "Prof. Smitha Jacob",
      tags: ["AR", "Gamification", "Education"],
    },
    {
      id: 6,
      title:
        "A Personalisable Super-App Solution to Support Multiple Applications",
      description:
        "A multi-functional super-app framework that integrates various applications, customizable to user preferences.",
      students: "Aravind Manoj, Davis Emmanuel, Ann Susan George",
      supervisor: "Prof. Smitha Jacob",
      tags: ["Super-App", "Multi-Application", "App Development"],
    },
    {
      id: 7,
      title: "School Bus Security and Management System",
      description:
        "An IoT-enabled system to enhance security and tracking for school buses, ensuring student safety.",
      students: "Akhil Shaji, Athulkrishna M J, Joel Biju",
      supervisor: "Prof. Bino Thomas",
      tags: ["Security", "School Bus", "IOT"],
    },
    {
      id: 8,
      title: "Amigo Application with Health Band",
      description:
        "A health monitoring app integrated with a wearable health band for real-time health tracking and alerts.",
      students: "Anna Jose, Anit Devesiya Kuttiyaka, Albin Scaria Sabu",
      supervisor: "Prof. Maria Yesudas",
      tags: ["Health Band", "App Development", "IOT"],
    },
    {
      id: 9,
      title: "Lane and Curve Detection using Image Processing",
      description:
        "An image processing tool to detect lanes and curves for advanced driver assistance systems.",
      students: "Amitha Fathima, Anitta George, Aromal Mohan Kunnam",
      supervisor: "Dr.Sruthy",
      tags: ["Image Processing", "Lane Detection", "Curve Detection"],
    },
    {
      id: 10,
      title: "FINGSPELL - SPEECH TO ISL TRANSLATOR",
      description:
        "An AI-powered tool that translates speech into Indian Sign Language (ISL), bridging communication gaps.",
      students: "Alen Babu, Amal Joe Paulo, Jestin O Saji",
      supervisor: "Prof. Kishore Sebastian",
      tags: ["Speech to Text", "Language Translation", "AI"],
    },
    {
      id: 11,
      title: "Analysis of Brain Tumor Detection using VGG-16 and DenseNet",
      description:
        "A deep learning model employing VGG-16 and DenseNet architectures for accurate brain tumor detection.",
      students: "Diya Paramesh G, Elza Mary Thomas, Gayathri V",
      supervisor: "Prof. Anu V Kottath",
      tags: ["Brain Tumor", "Image Processing", "Deep Learning"],
    },
    {
      id: 12,
      title: "Image Forgery Detection",
      description:
        "A system for identifying and detecting forged images using deep learning and advanced image processing techniques.",
      students: "Adams Mathew, Akhil J Medackal, Nikhil J Medackal",
      supervisor: "Prof. Dyni Thomas",
      tags: ["Image Forgery", "Image Processing", "Deep Learning"],
    },
    {
      id: 13,
      title: "Detection of Alzheimer's Disease and Assistance",
      description:
        "A machine learning solution for early detection of Alzheimer's disease and assistance for patients.",
      students: "Jissin K Jose, Haritha H Kurup, Devananda A",
      supervisor: "Prof. Kishore Sebastian",
      tags: ["Alzheimer's Disease", "Assistance", "Machine Learning"],
    },
    {
      id: 14,
      title: "Offline Communication Application (Mobify)",
      description:
        "An offline communication app designed to facilitate peer-to-peer messaging without internet dependency.",
      students: "Freddy Francis, Jerin T Varghese, Abin S Varghese",
      supervisor: "Prof. Dyni Thomas",
      tags: ["Offline Communication", "App Development", "IOT"],
    },
    {
      id: 15,
      title: "Malware Classification Framework based on Deep Learning",
      description:
        "A framework utilizing deep learning algorithms for effective classification and detection of malware.",
      students: "Abeera Biju, Aleena T James, Diya Joji",
      supervisor: "Prof. Anu V Kottath",
      tags: ["Malware Detection", "Deep Learning", "Machine Learning"],
    },
    {
      id: 16,
      title: "Vaccine Tracking System using IoT and Blockchain Technology",
      description:
        "A system combining IoT and blockchain to ensure secure and transparent vaccine distribution tracking.",
      students: "Athira S, Jerickson George, Sidharth Ganesh",
      supervisor: "Prof. Bino Thomas",
      tags: ["Vaccine Tracking", "IoT", "Blockchain"],
    },
    {
      id: 17,
      title: "Two Factor Authentication System",
      description:
        "A robust two-factor authentication system enhancing security for digital platforms.",
      students: "Francies Sunny",
      supervisor: "Prof. Athirasree Das",
      tags: ["Two Factor Authentication", "Security", "App Development"],
    },
    {
      id: 18,
      title: "Synkit: The collaborative software toolkit",
      description:
        "A collaborative software toolkit integrated with machine learning for streamlined teamwork and project management.",
      students: "Varghese Martin, Varun K V, Vishnu Nair P",
      supervisor: "Prof. Mereen Thomas",
      tags: ["Collaborative Software", "Machine Learning", "App Development"],
    },
    {
      id: 19,
      title: "INED: Stock prediction using Machine Learning",
      description:
        "A machine learning-based platform for analyzing and predicting stock market trends.",
      students: "M Devi Aswin Shanker, Nithin Mani, Rithin Soney",
      supervisor: "Dr. Praseetha V M",
      tags: ["Machine Learning", "Stock Prediction", "Data Analysis"],
    },
    {
      id: 20,
      title: "MARC: Motion Controlled Robotic Claw",
      description:
        "A robotic claw controlled by motion detection for industrial and assistive applications.",
      students: "Tom C Antony, Tinsa Sojan",
      supervisor: "Prof. Angitha George",
      tags: ["Robotics", "Motion Control", "Machine Learning"],
    },
    {
      id: 21,
      title: "DDoS Attack Detection and Mitigation",
      description:
        "A machine learning framework to detect and mitigate Distributed Denial-of-Service (DDoS) attacks.",
      students: "Lisha Chacko, Jone Abraham, Anu Jose",
      supervisor: "Dr. Sruthy",
      tags: ["DDoS Attack", "Network Security", "Machine Learning"],
    },
    {
      id: 22,
      title: "Smart Bike-safety enhanced motor vehicle",
      description:
        "An IoT-enabled smart bike system focused on improving rider safety and reducing accidents.",
      students: "Roshan Mathew Thomas, Toney G Jolly, Tony Raju Kuzhinjalil",
      supervisor: "Prof. Jibin Philip",
      tags: ["Smart Bike", "Bicycle Safety", "IOT"],
    },
    {
      id: 23,
      title: "Skin Cancer Detection using CNN",
      description:
        "A convolutional neural network (CNN) model for early and accurate detection of skin cancer.",
      students: "Merin Alex, Roshan Varghese, Saniya Sebastian",
      supervisor: "Prof. Jibin Philip",
      tags: ["Skin Cancer", "CNN", "Machine Learning"],
    },
    {
      id: 24,
      title: "Mining Online Product Reviews using NLP",
      description:
        "A natural language processing (NLP) tool to extract insights from online product reviews for better decision-making.",
      students: "Justine J Iby Varghese, Martin T V, Raghu Suresndran",
      supervisor: "Prof. Mereen Thomas",
      tags: ["NLP", "Product Reviews", "Machine Learning"],
    },
    {
      id: 25,
      title:
        "HashFunds: A decentralized Fundraising application using blockchain",
      description:
        "A blockchain-based decentralized platform for secure and transparent fundraising activities.",
      students: "Shalom Abraham, Rahul Rajeev, Terin Mathew",
      supervisor: "Prof. Angitha George",
      tags: ["Blockchain", "Decentralized Fundraising", "App Development"],
    },
    {
      id: 26,
      title: "Secure File Storage in Cloud using Hybrid Encryption",
      description:
        "A secure file storage solution leveraging hybrid encryption techniques for cloud computing.",
      students: "Rosa Mariam John, Rinu Maria Jose, Lekshmi S Nair",
      supervisor: "Dr. Joby P P",
      tags: ["File Storage", "Cloud Computing", "Hybrid Encryption"],
    },
    {
      id: 27,
      title: "DRO: A Tool for Designing Robot",
      description:
        "A machine learning-powered design tool for creating and simulating robotic systems.",
      students: "Riya Roy, Sandhra Shaji, Therease Siby",
      supervisor: "Prof. Divya Sunny",
      tags: ["Robot Design", "Robotics", "Machine Learning"],
    },
    {
      id: 28,
      title:
        "DriveGo: A decentralised application for peer to peer transportation using blockchain",
      description:
        "A decentralized transportation app leveraging blockchain for peer-to-peer ride-sharing services.",
      students: "Kajal Sebastian, Karthik Krishna, Merin Thomas",
      supervisor: "Prof. Maria Yesudas",
      tags: ["Blockchain", "Decentralized Transportation", "App Development"],
    },
    {
      id: 29,
      title: "Fleet Management System",
      description:
        "A machine learning-enabled system for efficient management and monitoring of transportation fleets.",
      students: "Jojimon George, Mathew Anil, Milan M Philip",
      supervisor: "Prof. Alinen Nellary",
      tags: ["Fleet Management", "Transportation", "Machine Learning"],
    },
    {
      id: 30,
      title:
        "AIS - Video Surveillance Using Artificial Intelligence for Old Aged",
      description:
        "An AI-based video surveillance system designed to ensure the safety and care of elderly individuals.",
      students: "Niveditha P M, Sona Elizebeth Shaji, Vishnupriya R",
      supervisor: "Prof. Ashly Thomas",
      tags: ["Video Surveillance", "Artificial Intelligence", "Old Aged Care"],
    },
    {
      id: 31,
      title:
        "SpecAssist: Smart glasses with real-time speech recognition and transcription",
      description:
        "Smart glasses featuring real-time speech recognition and transcription to assist individuals with hearing impairments.",
      students: "Noel Jacob, Rajat Mathew",
      supervisor: "Prof. Divya Sunny",
      tags: ["Smart Glasses", "Speech Recognition", "Transcription"],
    },
    {
      id: 32,
      title: "Smart Basket",
      description:
        "An intelligent shopping basket utilizing machine learning to enhance the e-commerce shopping experience.",
      students: "Kevin George, Léojin Thomas, Nicholas Soman",
      supervisor: "Prof. Jikku Thomas",
      tags: ["Smart Basket", "E-commerce", "Machine Learning"],
    },
  ],

  "2023-2024": [
    {
      id: 1,
      title: "Smart Aquaculture",
      description:
        "An AIOT-based system for intelligent remote control and management of fishpond equipment, promoting professional aquaculture and lowering entry barriers.",
      students: "AADIT V BIJU, AJO THOMAS, ALVIN VARGHESE, LLOYD SIBI",
      supervisor: "Prof. Smitha Jacob",
      tags: ["AIOT", "Aquaculture", "Remote Management"],
    },
    {
      id: 2,
      title: "TechSow",
      description:
        "An Innovative agricultural system with a smart robot for soil and crop monitoring using AI, weather data, and a mobile app to improve farming efficiency.",
      students: "AFNA AYSHU JAFFIN, JUNA TERES MARTIN, NIMITHA JOY, RESE RAJU",
      supervisor: "Prof. Divya Sunny",
      tags: ["Agriculture", "Robotics", "AI", "Soil Monitoring"],
    },
    {
      id: 3,
      title: "AquaRover",
      description: "An Automated flood rescue boat leveraging IoT",
      students: "AKASH VIJAY, JOHNS RAJU, JOSE K JAMES, TOMIN JOY",
      supervisor: "Prof. Sarju S",
      tags: ["Automation", "Flood Rescue", "Robotics"],
    },
    {
      id: 4,
      title: "ImagineAI",
      description:
        "Technology for the visually impaired, integrating navigation, object recognition, facial recognition, and text-to-speech with real-time feedback.",
      students:
        "DONA SIBY, GAUTHAM BABU, KARUN CHERY JAMES, MELISSA MANOJ THONDOLI",
      supervisor: "Prof. Ashly Thomas",
      tags: ["AI", "Accessibility", "Object Recognition", "Text-to-Speech"],
    },
    {
      id: 5,
      title: "EcoExpense",
      description: "Personal finance manager and analyzer.",
      students: "ADWAITH M, DONY TOMY, JIBBIN JACOB DANIEL, JUSTIN JOLLY",
      supervisor: "Prof. Jibin Philip",
      tags: ["Finance", "Personal Management", "Analysis"],
    },
    {
      id: 6,
      title: "AquaTech",
      description:
        "Smart irrigation system using image processing, sensors, and machine learning to calculate water needs for plants and control sprinklers.",
      students: "BIBIN BIJU, LEON JOSE MATHEW, LISS MARIA JOHN, NIKHIL JOSE",
      supervisor: "Prof. Divya Sunny",
      tags: [
        "Smart Irrigation",
        "Image Processing",
        "Machine Learning",
        "Agriculture",
      ],
    },
    {
      id: 7,
      title: "CookItUp",
      description:
        "Visual search technology for recipe discovery using advanced image recognition algorithms.",
      students: "ANN ROSA BINU, NAVYA SAJU, SARA BABU, LAKSHMI SURESH",
      supervisor: "Prof. Gayathri R Krishna",
      tags: ["Visual Search", "Recipe Discovery", "Image Recognition"],
    },
    {
      id: 8,
      title: "SmartEco",
      description:
        "System for real-time analysis and control of home energy usage, with integration for smart device control and energy cost forecasting.",
      students:
        "ALAN MATHEW TOM, CHRISTI JOSEPH, MATHEWS P MATHEW, NAVEEN S PANANTHANAM",
      supervisor: "Prof. Maria Yesudas",
      tags: ["Smart Home", "Energy Management", "Data Analysis", "IoT"],
    },
    {
      id: 9,
      title: "TranslateHub",
      description:
        "App for real-time speech translation with the ability to save, share, and browse translations.",
      students: "DIVYA SURESH, MEGHA RAJESH, SARANYA S NAIR, SWEETY SONNY",
      supervisor: "Prof. Vimal Babu P",
      tags: ["Language Translation", "Speech-to-Text", "Audio Processing"],
    },
    {
      id: 10,
      title: "Wander05",
      description:
        "AI-powered travel app offering personalized itineraries, supporting local businesses, and promoting sustainable tourism.",
      students:
        "AJAI SANKAR HAREESH, ANU MATHEW, ASHLY ROSE ANTONY, VIVEKANAND R",
      supervisor: "Dr. Praseetha VM",
      tags: ["AI", "Travel", "Sustainability", "Personalization"],
    },
    {
      id: 11,
      title: "AugmentSpace",
      description:
        "AR technology for immersive interior design, enabling real-time visualization and modification of room layouts.",
      students:
        "ANANDUKRISHNA VR, DERINE MARY DAVID, JIMMY JOSE, KRISHNATHEERTHA TS",
      supervisor: "Prof. Kishore Sebastian",
      tags: ["Augmented Reality", "Interior Design", "Visualization"],
    },
    {
      id: 12,
      title: "SkillVault",
      description:
        "Mock interview platform with adaptive question sets, audio, and video analysis, providing feedback to improve interview skills.",
      students: "AJAY JOHNY, BIBIN BENNY, BIBIN JOSE, JERRY SEBASTIAN",
      supervisor: "Prof. Dyni Thomas",
      tags: ["Interview Preparation", "AI", "Audio Analysis", "Video Analysis"],
    },
    {
      id: 13,
      title: "Handrehab",
      description:
        "Web application using computer vision for hand rehabilitation and assessment.",
      students:
        "ADITHIYA SURESH, AKSHARA KALATHIL, AMAL B PALACKAL, ATHUL SAJI",
      supervisor: "Prof. Angitha George",
      tags: ["Rehabilitation", "Computer Vision", "Healthcare"],
    },
    {
      id: 14,
      title: "Fulmine",
      description:
        "System for forecasting energy consumption and optimizing industrial efficiency based on machine schedules.",
      students:
        "TANIYA THOMAS, PRAISE ELIZABETH THOMAS, PRIYA BABU, RITHIKA ANILKUMAR",
      supervisor: "Prof. Bino Thomas",
      tags: ["Energy Forecasting", "Optimization", "Industrial Efficiency"],
    },
    {
      id: 15,
      title: "AquaAlert",
      description:
        "IoT-driven flood protection system with real-time monitoring and predictive analytics.",
      students: "KEVIN TOMY, ABHISHEK CA, JOSEPH JACOB",
      supervisor: "Prof. Athirasree Das",
      tags: ["IoT", "Flood Protection", "Predictive Analytics"],
    },
    {
      id: 16,
      title: "Care Wave",
      description:
        "App for elderly care, featuring medication reminders and vitals monitoring with alert signals.",
      students: "EMY JOSHY, GEORLIT GEORGE, MEENU SUSAN MONY, SWATHILEKSHMI S",
      supervisor: "Prof. Dona Mary Cherian",
      tags: ["Elderly Care", "Health Monitoring", "Alert Systems"],
    },
    {
      id: 17,
      title: "IoT Based Plastic Detector",
      description: "Not Available",
      students: "Abin K Jaimon, Aravind Binu, Arun Kumar K Jose, Treesa Joseph",
      supervisor: "Prof. Bino Thomas",
      tags: ["IoT"],
    },
    {
      id: 18,
      title: "Game-Dev",
      description: "Not Available",
      students: "Aimil Bij Joseph, Alen Emmanuel, Allen Alex Alaney, Pranav P",
      supervisor: "Prof. Mereen Thomas",
      tags: ["Game Development"],
    },
    {
      id: 19,
      title:
        "HazeBuster (Vehicle License Plate Recognition for Fog-Haze Environments)",
      description: "Not Available",
      students:
        "Aishwarya Sebastian, Amrutha Prakash, Ann Maria Sabu, Mubeena S",
      supervisor: "Prof. Gayathri R Krishna",
      tags: ["Computer Vision", "Image Processing"],
    },
    {
      id: 20,
      title: "IoT Based Project For Blind People (Third Eye)",
      description: "Not Available",
      students:
        "Akhil Sanker S, Alphy George, Irene Molly Varughese, Rinta Maria Raju",
      supervisor: "Thushara Sukumar",
      tags: ["IoT", "Accessibility"],
    },
    {
      id: 21,
      title: "EnviroGuard",
      description: "Not Available",
      students: "Alan Joy, Allwina Anna Soy Jose, Anitta Siby, Savio Shaji",
      supervisor: "Prof. Kishore Sebastian",
      tags: ["Environmental Monitoring"],
    },
    {
      id: 22,
      title: "Tailored Recipes And Culinary",
      description: "Not Available",
      students: "Alenta Joseph, Juval James, Vishnu A.V",
      supervisor: "Prof. Syamamol T",
      tags: ["Food Tech"],
    },
    {
      id: 23,
      title: "AI-Driven Video Prompt Analysis",
      description: "Not Available",
      students: "Allen Saji, Ashik David Roy, Nithin V. James, Reenphy George",
      supervisor: "Prof. Smitha Jacob",
      tags: ["Computer Vision", "AI"],
    },
    {
      id: 24,
      title: "FarmSage",
      description: "Not Available",
      students:
        "Amala Maria Kuruvilla, Anitha P Benny, Manjusree Raveendran, Raina Raj",
      supervisor: "Prof. Mereen Thomas",
      tags: ["Agriculture", "Mobile App"],
    },
    {
      id: 25,
      title: "TalkSync: A real time speech translation extension",
      description: "Not Available",
      students: "Anandu Unnikrishnan, Harinand S, Jithin Jerome, Sreelakshmi S",
      supervisor: "Prof. Maria Yesudas",
      tags: ["NLP", "Accessibility"],
    },
    {
      id: 26,
      title: "Animal Intrusion detection",
      description: "Not Available",
      students: "Anita Augustine, Annu Rajesh, Gautham S, Ria Siby",
      supervisor: "Prof. Thushara Sukumar",
      tags: ["Computer Vision", "IoT"],
    },
    {
      id: 27,
      title: "D-SIGN (Speech to Sign Translator)",
      description: "Not Available",
      students: "Krishnaveni M, Anna Jose, Bincy Benny, Sandra Maria Jose",
      supervisor: "Prof. Vimal Babu P",
      tags: ["NLP", "Accessibility"],
    },
    {
      id: 28,
      title: "CogniCare",
      description: "Not Available",
      students: "Ashish Rajesh, Delna K Jose, Fahad Salim, Gautham Krishna N",
      supervisor: "Prof. Angitha George",
      tags: ["Healthcare", "Mobile App"],
    },
    {
      id: 29,
      title: "Luminous Pursuit",
      description: "Not Available",
      students: "Benjamin Joseph, George John, Krishnaprasad CP, Sonu T Shaji",
      supervisor: "Prof. Ashly Thomas",
      tags: ["Gaming"],
    },
    {
      id: 30,
      title: "DeepReality",
      description: "Not Available",
      students:
        "Harikrishnan Ashok, Mareena Roy, P S Arjun, V S Nikhil Maheswar",
      supervisor: "Prof. Athirasree Das",
      tags: ["Computer Vision", "AR/VR"],
    },
    {
      id: 31,
      title: "TRACE",
      description: "Not Available",
      students: "Athul Soman, Joseph George, Thomson Stanes, Vimal Suresh",
      supervisor: "Prof. Dyni Thomas",
      tags: ["Sustainability"],
    },
    {
      id: 32,
      title: "Smart Dustbin",
      description: "Not Available",
      students: "Nihal Vijoy, Rahul Babu, Shalon Mary Michael, Sona Joseph",
      supervisor: "Prof. Jibin Philip",
      tags: ["IoT", "Sustainability"],
    },
    {
      id: 33,
      title: "ProBo",
      description: "Not Available",
      students: "Abin K Jaimon, Aravind Binu, Arun Kumar K Jose, Treesa Joseph",
      supervisor: "Prof. Bino Thomas",
      tags: ["Product"],
    },
    {
      id: 34,
      title: "Game-Dev",
      description: "Not Available",
      students: "Aimil Bij Joseph, Alen Emmanuel, Allen Alex Alaney, Pranav P",
      supervisor: "Prof. Mereen Thomas",
      tags: ["Application"],
    },
    {
      id: 35,
      title: "Haze Buster",
      description:
        "Vehicle license plate recognition for fog-haze environments",
      students:
        "Aishwarya Sebastian, Amrutha Prakash, Ann Maria Sabu, Mubeena S",
      supervisor: "Prof. Gayathri R Krishna",
      tags: ["Application"],
    },
    {
      id: 36,
      title: "Third Eye",
      description: "Connecting the dots of the unseen world",
      students:
        "Akhil Sanker S, Alphy George, Irene Molly Varughese, Rinta Maria Raju",
      supervisor: "Prof. Thushara Sukumar",
      tags: ["Product"],
    },
    {
      id: 37,
      title: "EnviroGuard",
      description: "Not Available",
      students: "Alan Joy, Allwina Anna Soy Jose, Anitta Siby, Savio Shaji",
      supervisor: "Prof. Kishore Sebastian",
      tags: ["Product"],
    },
    {
      id: 38,
      title: "Culinary Hub",
      description: "Not Available",
      students: "Alenta Joseph, Juval James, Vishnu A.V",
      supervisor: "Prof. Syamamol T",
      tags: ["Application"],
    },
    {
      id: 39,
      title: "AI-Driven Video Prompt Analysis",
      description: "Not Available",
      students: "Allen Saji, Ashik David Roy, Nithin V. James, Reenphy George",
      supervisor: "Prof. Smitha Jacob",
      tags: ["Application"],
    },
    {
      id: 40,
      title: "FarmSage",
      description: "Not Available",
      students:
        "Amala Maria Kuruvilla, Anitha P Benny, Manjusree Raveendran, Raina Raj",
      supervisor: "Prof. Mereen Thomas",
      tags: ["Product"],
    },
    {
      id: 41,
      title: "TalkSync",
      description: "A Real Time Speech Translation Platform",
      students: "Anandu Unnikrishnan, Harinand S, Jithin Jerome, Sreelakshmi S",
      supervisor: "Prof. Maria Yesudas",
      tags: ["Application"],
    },
    {
      id: 42,
      title: "Ecodefenders",
      description: "Not Available",
      students: "Anita Augustine, Annu Rajesh, Gautham S, Ria Siby",
      supervisor: "Prof. Thushara Sukumar",
      tags: ["Product"],
    },
    {
      id: 43,
      title: "D-SIGN",
      description: "Speech to Sign Translator",
      students: "Krishnaveni M, Anna Jose, Bincy Benny, Sandra Maria Jose",
      supervisor: "Prof. Vimal Babu P",
      tags: ["Application"],
    },
    {
      id: 44,
      title: "CogniCare",
      description: "Not Available",
      students: "Ashish Rajesh, Delna K Jose, Fahad Salim, Gautham Krishna N",
      supervisor: "Prof. Angitha George",
      tags: ["Application"],
    },
    {
      id: 45,
      title: "Luminous Pursuit",
      description: "Not Available",
      students: "Benjamin Joseph, George John, Krishnaprasad CP, Sonu T Shaji",
      supervisor: "Prof. Ashly Thomas",
      tags: ["Product"],
    },
    {
      id: 46,
      title: "DeepReality",
      description: "Not Available",
      students:
        "Harikrishnan Ashok, Mareena Roy, P S Arjun, V S Nikhil Maheswar",
      supervisor: "Prof. Athirasree Das",
      tags: ["Application"],
    },
    {
      id: 47,
      title: "TRACE",
      description: "Not Available",
      students: "Athul Soman, Joseph George, Thomson Stanes, Vimal Suresh",
      supervisor: "Prof. Dyni Thomas",
      tags: ["Application"],
    },
    {
      id: 48,
      title: "Smart Dustbin",
      description: "Not Available",
      students: "Nihal Vijoy, Rahul Babu, Shalon Mary Michael, Sona Joseph",
      supervisor: "Prof. Jibin Philip",
      tags: ["Product"],
    },
  ],
  "2024-2025": [
    {
      id: 5,
      title: "Curently",
      description: "A Household electricity consumption monitoring solution",
      students: "Kiran Babu,Indrajith S Nair,Sidharth Manikuttan,Anit Thomas",
      supervisor: "Prof. Jikku Thomas",
      tags: ["IoT", "App Development", "FireBase", "React Native"],
    },
    {
      id: 6,
      title: "EduNet",
      description:
        "Professional Networking and Event Engagement App for Students and Alumni",
      students:
        "Kennith Joseph, Amiya Hidayathulla,Melby Mariam Chandy,Akshay CA",
      supervisor: "Prof. Smitha Jacob",
      tags: ["Flutter", "App Development", "REST API"],
    },
    {
      id: 7,
      title: "LegalEase AI",
      description:
        "LegalEase is a web application that provides users with accessible legal guidance, information on specific laws, and connections to specialized legal experts.",
      students:
        "Agnel Brigit Shaji,Akash Benny,Rohan Joshy,Sereena Mariam Saji",
      supervisor: "Dr. Praseetha V.M",
      tags: ["Dialogflow", "HTML", "CSS", "JavaScript", "Firebase"],
    },
    {
      id: 8,
      title: "SecureWin",
      description:
        "A blockchain-based lottery system enchancing transparency and security in Kerala.",
      students: "Hridya Mathew,Jebin Tom,Vinny Elz Vincent,Tini Treesa Joseph",
      supervisor: "Prof. Angitha George",
      tags: [
        "Blockchain",
        "Flutter",
        "Firebase",
        "HTML",
        "CSS",
        "JavaScript",
        "Twilio",
      ],
    },
    {
      id: 9,
      title: "MyClinicMate",
      description:
        "A online platform for managing medical appointments,allows patients to book appointments, find doctors, and receive notifications, while doctors can manage their schedules and provide patient updates.",
      students: "Abhinand R,Sona Binu,Theres Boby,Theresa Shaji",
      supervisor: "Prof. Ashly Thomas",
      tags: ["Flutter", "FireBase", "Google Map API"],
    },
    {
      id: 10,
      title: "MeetMyHelper",
      description:
        "MeetMyHelper is a platform for easily finding, booking, and managing caregiving services.",
      students: "Kavya K A,Liya Tony,Maria Joe,Nayana Tony",
      supervisor: "Prof. Jibin Philip",
      tags: ["React", "Firebase"],
    },
    {
      id: 11,
      title: "JourneySync",
      description: "Not Available",
      students: "Melvin Devasia,Adithyan B,Alishya Elezabath Tomy,Akhil Sabu",
      supervisor: "Prof. Dyni Thomas",
      tags: ["Web", "HTML", "CSS"],
    },
    {
      id: 12,
      title: "Voltz",
      description: "Not Available",
      students: "Aadithyaa MD,Abel Abraham Philip,Sachin Philip,Thomas K Binu",
      supervisor: "Prof. Jikku Thomas",
      tags: ["IoT"],
    },
    {
      id: 13,
      title: "MathMindCare",
      description:
        "MathMindCare is a platform designed to detect the likelihood of dyscalculia in children and, if needed, offers targeted tasks and training to help them improve their mathematical skills",
      students:
        "Celcia George,Riya Mariya George,Sneha Shaji,Tesna Treesa Benny",
      supervisor: "Prof. Mereen Thomas",
      tags: ["HTML", "CSS", "JS", "SQL"],
    },
    {
      id: 14,
      title: "HomeConnect",
      description:
        "HomeConnect is a platform that helps users easily find and book PGs and hostels, while providing property owners with simple management tools.",
      students: "Shaine Thomas,Rogy Benni,Surya Saji,Linta John",
      supervisor: "Prof. Angitha George",
      tags: ["Flutter", "Firebase", "Google Map Services"],
    },
    {
      id: 15,
      title: "AgroGuide",
      description:
        "Web application that enables a direct marketplace connecting farmers and consumers, eliminating the need for intermediaries. Also  offers personalized crop recommendations based on soil parameters provided by users and provide educational resources based on best cultivation practices.",
      students: "Gopika M,Deepna Maria Jimson,Nandana Venugopal,Rose George",
      supervisor: "Prof. Thushara Sukumar",
      tags: ["JavaScript", "php", "Flask", "MySQL", "ML"],
    },
    {
      id: 17,
      title: "EliteArena",
      description:
        "Elite Arena is a comprehensive esports platform designed to streamline the management of tournaments, providing tools for organizing competitions, team creation, and secure payment processing for both organizers and players.",
      students: "Joel Varghese,Noel Roy,Mohammed Aadhil Thahir,Alan Augustine",
      supervisor: "Prof. Bino Thomas",
      tags: ["HTML", "CSS", "JavaScript", "React", "MongoDB"],
    },
    {
      id: 18,
      title: "SmartHire",
      description: "A Resume based shortlisting software for companies",
      students: "Shifaz Abdul Kareem,Sarun Siby,Tobin Thomas,Abin Mathew Siby",
      supervisor: "Prof. Thushara Sukumar",
      tags: ["Web", "HTML", "CSS"],
    },
    {
      id: 19,
      title: "WorkEase",
      description: "Not Available",
      students: "Aayush.G,Devamanas S.S,Dona Sosa Joe",
      supervisor: "Prof. Dona Mary Cherian",
      tags: ["HTML", "CSS"],
    },
    {
      id: 20,
      title: "On-spot Mechanic",
      description:
        "A platform to bring mechanic services to users upon emergency situations based on their gps location.",
      students: "Sanjid S,Edwin Rajesh,Ajay Cyriac,Jithmon P Cherian",
      supervisor: "Prof. Jibin Philip",
      tags: ["Flutter", "Google Maps services", "Firebase"],
    },
    {
      id: 21,
      title: "Foodie Buddy",
      description: "A Recipe App",
      students: "Niketh A,Abin Varghese,Mathew Raino",
      supervisor: "Prof. Smitha Jacob",
      tags: ["Flutter", "Firebase"],
    },
  ],
  "2025-2026": [
    {
      id: 49,
      title: "First Project",
      description:
        "This is a sample Project",
      students: "John,Peter,Bob",
      supervisor: "Sample Supervisor",
      tags: ["React", "Firebase"],
    },
  ],
};

export default projectsData;
