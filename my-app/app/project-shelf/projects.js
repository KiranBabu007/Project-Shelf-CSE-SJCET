const projectsData = {

    "2023": [
        {
            id: 1,
            title: "Smart Aquaculture",
            description: "An AIOT-based system for intelligent remote control and management of fishpond equipment, promoting professional aquaculture and lowering entry barriers.",
            students: "AADIT V BIJU, AJO THOMAS, ALVIN VARGHESE, LLOYD SIBI",
            supervisor: "Prof. Smitha Jacob",
            tags: ["AIOT", "Aquaculture", "Remote Management"]
        },
        {
            id: 2,
            title: "TechSow",
            description: "An Innovative agricultural system with a smart robot for soil and crop monitoring using AI, weather data, and a mobile app to improve farming efficiency.",
            students: "AFNA AYSHU JAFFIN, JUNA TERES MARTIN, NIMITHA JOY, RESE RAJU",
            supervisor: "Prof. Divya Sunny",
            tags: ["Agriculture", "Robotics", "AI", "Soil Monitoring"]
        },
        {
            id: 3,
            title: "AquaRover",
            description: "An Automated flood rescue boat leveraging IoT",
            students: "AKASH VIJAY, JOHNS RAJU, JOSE K JAMES, TOMIN JOY",
            supervisor: "Prof. Sarju S",
            tags: ["Automation", "Flood Rescue", "Robotics"]
        },
        {
            id: 4,
            title: "ImagineAI",
            description: "Technology for the visually impaired, integrating navigation, object recognition, facial recognition, and text-to-speech with real-time feedback.",
            students: "DONA SIBY, GAUTHAM BABU, KARUN CHERY JAMES, MELISSA MANOJ THONDOLI",
            supervisor: "Prof. Ashly Thomas",
            tags: ["AI", "Accessibility", "Object Recognition", "Text-to-Speech"]
        },
        {
            id: 5,
            title: "EcoExpense",
            description: "Personal finance manager and analyzer.",
            students: "ADWAITH M, DONY TOMY, JIBBIN JACOB DANIEL, JUSTIN JOLLY",
            supervisor: "Prof. Jibin Philip",
            tags: ["Finance", "Personal Management", "Analysis"]
        },
        {
            id: 6,
            title: "AquaTech",
            description: "Smart irrigation system using image processing, sensors, and machine learning to calculate water needs for plants and control sprinklers.",
            students: "BIBIN BIJU, LEON JOSE MATHEW, LISS MARIA JOHN, NIKHIL JOSE",
            supervisor: "Prof. Divya Sunny",
            tags: ["Smart Irrigation", "Image Processing", "Machine Learning", "Agriculture"]
        },
        {
            id: 7,
            title: "CookItUp",
            description: "Visual search technology for recipe discovery using advanced image recognition algorithms.",
            students: "ANN ROSA BINU, NAVYA SAJU, SARA BABU, LAKSHMI SURESH",
            supervisor: "Prof. Gayathri R Krishna",
            tags: ["Visual Search", "Recipe Discovery", "Image Recognition"]
        },
        {
            id: 8,
            title: "SmartEco",
            description: "System for real-time analysis and control of home energy usage, with integration for smart device control and energy cost forecasting.",
            students: "ALAN MATHEW TOM, CHRISTI JOSEPH, MATHEWS P MATHEW, NAVEEN S PANANTHANAM",
            supervisor: "Prof. Maria Yesudas",
            tags: ["Smart Home", "Energy Management", "Data Analysis", "IoT"]
        },
        {
            id: 9,
            title: "TranslateHub",
            description: "App for real-time speech translation with the ability to save, share, and browse translations.",
            students: "DIVYA SURESH, MEGHA RAJESH, SARANYA S NAIR, SWEETY SONNY",
            supervisor: "Prof. Vimal Babu P",
            tags: ["Language Translation", "Speech-to-Text", "Audio Processing"]
        },
        {
            id: 10,
            title: "Wander05",
            description: "AI-powered travel app offering personalized itineraries, supporting local businesses, and promoting sustainable tourism.",
            students: "AJAI SANKAR HAREESH, ANU MATHEW, ASHLY ROSE ANTONY, VIVEKANAND R",
            supervisor: "Dr. Praseetha VM",
            tags: ["AI", "Travel", "Sustainability", "Personalization"]
        },
        {
            id: 11,
            title: "AugmentSpace",
            description: "AR technology for immersive interior design, enabling real-time visualization and modification of room layouts.",
            students: "ANANDUKRISHNA VR, DERINE MARY DAVID, JIMMY JOSE, KRISHNATHEERTHA TS",
            supervisor: "Prof. Kishore Sebastian",
            tags: ["Augmented Reality", "Interior Design", "Visualization"]
        },
        {
            id: 12,
            title: "SkillVault",
            description: "Mock interview platform with adaptive question sets, audio, and video analysis, providing feedback to improve interview skills.",
            students: "AJAY JOHNY, BIBIN BENNY, BIBIN JOSE, JERRY SEBASTIAN",
            supervisor: "Prof. Dyni Thomas",
            tags: ["Interview Preparation", "AI", "Audio Analysis", "Video Analysis"]
        },
        {
            id: 13,
            title: "Handrehab",
            description: "Web application using computer vision for hand rehabilitation and assessment.",
            students: "ADITHIYA SURESH, AKSHARA KALATHIL, AMAL B PALACKAL, ATHUL SAJI",
            supervisor: "Prof. Angitha George",
            tags: ["Rehabilitation", "Computer Vision", "Healthcare"]
        },
        {
            id: 14,
            title: "Fulmine",
            description: "System for forecasting energy consumption and optimizing industrial efficiency based on machine schedules.",
            students: "TANIYA THOMAS, PRAISE ELIZABETH THOMAS, PRIYA BABU, RITHIKA ANILKUMAR",
            supervisor: "Prof. Bino Thomas",
            tags: ["Energy Forecasting", "Optimization", "Industrial Efficiency"]
        },
        {
            id: 15,
            title: "AquaAlert",
            description: "IoT-driven flood protection system with real-time monitoring and predictive analytics.",
            students: "KEVIN TOMY, ABHISHEK CA, JOSEPH JACOB",
            supervisor: "Prof. Athirasree Das",
            tags: ["IoT", "Flood Protection", "Predictive Analytics"]
        },
        {
            id: 16,
            title: "Care Wave",
            description: "App for elderly care, featuring medication reminders and vitals monitoring with alert signals.",
            students: "EMY JOSHY, GEORLIT GEORGE, MEENU SUSAN MONY, SWATHILEKSHMI S",
            supervisor: "Prof. Dona Mary Cherian",
            tags: ["Elderly Care", "Health Monitoring", "Alert Systems"]
        },
        {
            id: 17,
            title: "IoT Based Plastic Detector",
            description: "Not Available",
            students: "Abin K Jaimon, Aravind Binu, Arun Kumar K Jose, Treesa Joseph",
            supervisor: "Prof. Bino Thomas",
            tags: ["IoT"]
        },
        {
            id: 18,
            title: "Game-Dev",
            description: "Not Available",
            students: "Aimil Bij Joseph, Alen Emmanuel, Allen Alex Alaney, Pranav P",
            supervisor: "Prof. Mereen Thomas",
            tags: ["Game Development"]
        },
        {
            id: 19,
            title: "HazeBuster (Vehicle License Plate Recognition for Fog-Haze Environments)",
            description: "Not Available",
            students: "Aishwarya Sebastian, Amrutha Prakash, Ann Maria Sabu, Mubeena S",
            supervisor: "Prof. Gayathri R Krishna",
            tags: ["Computer Vision", "Image Processing"]
        },
        {
            id: 20,
            title: "IoT Based Project For Blind People (Third Eye)",
            description: "Not Available",
            students: "Akhil Sanker S, Alphy George, Irene Molly Varughese, Rinta Maria Raju",
            supervisor: "Thushara Sukumar",
            tags: ["IoT", "Accessibility"]
        },
        {
            id: 21,
            title: "EnviroGuard",
            description: "Not Available",
            students: "Alan Joy, Allwina Anna Soy Jose, Anitta Siby, Savio Shaji",
            supervisor: "Prof. Kishore Sebastian",
            tags: ["Environmental Monitoring"]
        },
        {
            id: 22,
            title: "Tailored Recipes And Culinary",
            description: "Not Available",
            students: "Alenta Joseph, Juval James, Vishnu A.V",
            supervisor: "Prof. Syamamol T",
            tags: ["Food Tech"]
        },
        { id: 23, title: "AI-Driven Video Prompt Analysis", description: "Not Available", students: "Allen Saji, Ashik David Roy, Nithin V. James, Reenphy George", supervisor: "Prof. Smitha Jacob", tags: ["Computer Vision", "AI"] },
        { id: 24, title: "FarmSage", description: "Not Available", students: "Amala Maria Kuruvilla, Anitha P Benny, Manjusree Raveendran, Raina Raj", supervisor: "Prof. Mereen Thomas", tags: ["Agriculture", "Mobile App"] },
        { id: 25, title: "TalkSync: A real time speech translation extension", description: "Not Available", students: "Anandu Unnikrishnan, Harinand S, Jithin Jerome, Sreelakshmi S", supervisor: "Prof. Maria Yesudas", tags: ["NLP", "Accessibility"] },
        { id: 26, title: "Animal Intrusion detection", description: "Not Available", students: "Anita Augustine, Annu Rajesh, Gautham S, Ria Siby", supervisor: "Prof. Thushara Sukumar", tags: ["Computer Vision", "IoT"] },
        { id: 27, title: "D-SIGN (Speech to Sign Translator)", description: "Not Available", students: "Krishnaveni M, Anna Jose, Bincy Benny, Sandra Maria Jose", supervisor: "Prof. Vimal Babu P", tags: ["NLP", "Accessibility"] },
        { id: 28, title: "CogniCare", description: "Not Available", students: "Ashish Rajesh, Delna K Jose, Fahad Salim, Gautham Krishna N", supervisor: "Prof. Angitha George", tags: ["Healthcare", "Mobile App"] },
        { id: 29, title: "Luminous Pursuit", description: "Not Available", students: "Benjamin Joseph, George John, Krishnaprasad CP, Sonu T Shaji", supervisor: "Prof. Ashly Thomas", tags: ["Gaming"] },
        { id: 30, title: "DeepReality", description: "Not Available", students: "Harikrishnan Ashok, Mareena Roy, P S Arjun, V S Nikhil Maheswar", supervisor: "Prof. Athirasree Das", tags: ["Computer Vision", "AR/VR"] },
        { id: 31, title: "TRACE", description: "Not Available", students: "Athul Soman, Joseph George, Thomson Stanes, Vimal Suresh", supervisor: "Prof. Dyni Thomas", tags: ["Sustainability"] },
        { id: 32, title: "Smart Dustbin", description: "Not Available", students: "Nihal Vijoy, Rahul Babu, Shalon Mary Michael, Sona Joseph", supervisor: "Prof. Jibin Philip", tags: ["IoT", "Sustainability"] },
        { id: 33, title: "ProBo", description: "Not Available", students: "Abin K Jaimon, Aravind Binu, Arun Kumar K Jose, Treesa Joseph", supervisor: "Prof. Bino Thomas", tags: ["Product"] },
        { id: 34, title: "Game-Dev", description: "Not Available", students: "Aimil Bij Joseph, Alen Emmanuel, Allen Alex Alaney, Pranav P", supervisor: "Prof. Mereen Thomas", tags: ["Application"] },
        { id: 35, title: "Haze Buster", description: "Vehicle license plate recognition for fog-haze environments", students: "Aishwarya Sebastian, Amrutha Prakash, Ann Maria Sabu, Mubeena S", supervisor: "Prof. Gayathri R Krishna", tags: ["Application"] },
        { id: 36, title: "Third Eye", description: "Connecting the dots of the unseen world", students: "Akhil Sanker S, Alphy George, Irene Molly Varughese, Rinta Maria Raju", supervisor: "Prof. Thushara Sukumar", tags: ["Product"] },
        { id: 37, title: "EnviroGuard", description: "Not Available", students: "Alan Joy, Allwina Anna Soy Jose, Anitta Siby, Savio Shaji", supervisor: "Prof. Kishore Sebastian", tags: ["Product"] },
        { id: 38, title: "Culinary Hub", description: "Not Available", students: "Alenta Joseph, Juval James, Vishnu A.V", supervisor: "Prof. Syamamol T", tags: ["Application"] },
        { id: 39, title: "AI-Driven Video Prompt Analysis", description: "Not Available", students: "Allen Saji, Ashik David Roy, Nithin V. James, Reenphy George", supervisor: "Prof. Smitha Jacob", tags: ["Application"] },
        { id: 40, title: "FarmSage", description: "Not Available", students: "Amala Maria Kuruvilla, Anitha P Benny, Manjusree Raveendran, Raina Raj", supervisor: "Prof. Mereen Thomas", tags: ["Product"] },
        { id: 41, title: "TalkSync", description: "A Real Time Speech Translation Platform", students: "Anandu Unnikrishnan, Harinand S, Jithin Jerome, Sreelakshmi S", supervisor: "Prof. Maria Yesudas", tags: ["Application"] },
        { id: 42, title: "Ecodefenders", description: "Not Available", students: "Anita Augustine, Annu Rajesh, Gautham S, Ria Siby", supervisor: "Prof. Thushara Sukumar", tags: ["Product"] },
        { id: 43, title: "D-SIGN", description: "Speech to Sign Translator", students: "Krishnaveni M, Anna Jose, Bincy Benny, Sandra Maria Jose", supervisor: "Prof. Vimal Babu P", tags: ["Application"] },
        { id: 44, title: "CogniCare", description: "Not Available", students: "Ashish Rajesh, Delna K Jose, Fahad Salim, Gautham Krishna N", supervisor: "Prof. Angitha George", tags: ["Application"] },
        { id: 45, title: "Luminous Pursuit", description: "Not Available", students: "Benjamin Joseph, George John, Krishnaprasad CP, Sonu T Shaji", supervisor: "Prof. Ashly Thomas", tags: ["Product"] },
        { id: 46, title: "DeepReality", description: "Not Available", students: "Harikrishnan Ashok, Mareena Roy, P S Arjun, V S Nikhil Maheswar", supervisor: "Prof. Athirasree Das", tags: ["Application"] },
        { id: 47, title: "TRACE", description: "Not Available", students: "Athul Soman, Joseph George, Thomson Stanes, Vimal Suresh", supervisor: "Prof. Dyni Thomas", tags: ["Application"] },
        { id: 48, title: "Smart Dustbin", description: "Not Available", students: "Nihal Vijoy, Rahul Babu, Shalon Mary Michael, Sona Joseph", supervisor: "Prof. Jibin Philip", tags: ["Product"] }
        
    ],
    "2024": [
        { id: 5, title: "Curently", description: "A Household electricty consumption monitoring solution", students: "Kiran Babu,Indrajith S Nair,Sidharth Manikuttan,Anit Thomas", supervisor: "Prof. Jikku Thomas", tags: ["IoT", "App Development", "FireBase", "React Native"] },
        { id: 6, title: "EduNet", description: "Professional Networking and Event Engagement App for Students and Alumni", students: "Kennith Joseph, Amiya Hidayathulla,Melby Mariam Chandy,Akshay CA", supervisor: "Prof. Smitha Jacob", tags: ["Flutter", "App Development", "REST API"] },
        { id: 7, title: "LegalEase AI", description: "LegalEase is a web application that provides users with accessible legal guidance, information on specific laws, and connections to specialized legal experts.", students: "Agnel Brigit Shaji,Akash Benny,Rohan Joshy,Sereena Mariam Saji", supervisor: "Dr.Praseetha V.M", tags: ["Dialogflow", "HTML", "CSS", "JavaScript", "Firebase"] },
        { id: 8, title: "SecureWin", description: "A blockchain-based lottery system enchancing transparency and security in Kerala.", students: "Hridya Mathew,Jebin Tom,Vinny Elz Vincent,Tini Treesa Joseph", supervisor: "Prof.Angitha George", tags: ["Blockchain", "Flutter", "Firebase", "HTML", "CSS", "JavaScript", "Twilio"] },
        { id: 9, title: "MyClinicMate", description: "A online platform for managing medical appointments,allows patients to book appointments, find doctors, and receive notifications, while doctors can manage their schedules and provide patient updates.", students: "Abhinand R,Sona Binu,Theres Boby,Theresa Shaji", supervisor: "Prof.Ashly Thomas", tags: ["Flutter", "FireBase", "Google Map API"] },
        { id: 10, title: "MeetMyHelper", description: "MeetMyHelper is a platform for easily finding, booking, and managing caregiving services.", students: "Kavya K A,Liya Tony,Maria Joe,Nayana Tony", supervisor: "Prof.Jibin Philip", tags: ["React", "Firebase"] },
        { id: 11, title: "JourneySync", description: "Not Available", students: "Melvin Devasia,Adithyan B,Alishya Elezabath Tomy,Akhil Sabu", supervisor: "Prof.Dyni Thomas", tags: ["Web", "HTML", "CSS"] },
        { id: 12, title: "Voltz", description: "Not Available", students: "Aadithyaa MD,Abel Abraham Philip,Sachin Philip,Thomas K Binu", supervisor: "Prof.Jikku Thomas", tags: ["IoT"] },
        { id: 13, title: "MathMindCare", description: "MathMindCare is a platform designed to detect the likelihood of dyscalculia in children and, if needed, offers targeted tasks and training to help them improve their mathematical skills", students: "Celcia George,Riya Mariya George,Sneha Shaji,Tesna Treesa Benny", supervisor: "Prof. Mereen Thomas", tags: ["HTML", "CSS", "JS", "SQL"] },
        { id: 14, title: "HomeConnect", description: "HomeConnect is a platform that helps users easily find and book PGs and hostels, while providing property owners with simple management tools.", students: "Shaine Thomas,Rogy Benni,Surya Saji,Linta John", supervisor: "Prof.Angitha George", tags: ["Flutter", "Firebase", "Google Map Services"] },
        { id: 15, title: "AgroGuide", description: "Web application that enables a direct marketplace connecting farmers and consumers, eliminating the need for intermediaries. Also  offers personalized crop recommendations based on soil parameters provided by users and provide educational resources based on best cultivation practices.", students: "Gopika M,Deepna Maria Jimson,Nandana Venugopal,Rose George", supervisor: "Prof.Thushara Sukumar", tags: ["JavaScript", "php", "Flask", "MySQL", "ML"] },

        { id: 17, title: "EliteArena", description: "Elite Arena is a comprehensive esports platform designed to streamline the management of tournaments, providing tools for organizing competitions, team creation, and secure payment processing for both organizers and players.", students: "Joel Varghese,Noel Roy,Mohammed Aadhil Thahir,Alan Augustine", supervisor: "Prof.Bino Thomas", tags: ["HTML", "CSS", "JavaScript", "React", "MongoDB"] },
        { id: 18, title: "SmartHire", description: "A Resume based shortlisting software for companies", students: "Shifaz Abdul Kareem,Sarun Siby,Tobin Thomas,Abin Mathew Siby", supervisor: "Prof.Thushara Sukumar", tags: ["Web", "HTML", "CSS"] },
        { id: 19, title: "WorkEase", description: "Not Available", students: "Aayush.G,Devamanas S.S,Dona Sosa Joe", supervisor: "Prof.Dona Mary Cherian", tags: ["HTML", "CSS"] },
        { id: 20, title: "On-spot Mechanic", description: "A platform to bring mechanic services to users upon emergency situations based on their gps location.", students: "Sanjid S,Edwin Rajesh,Ajay Cyriac,Jithmon P Cherian", supervisor: "Prof.Jibin Philip", tags: ["Flutter", "Google Maps services", "Firebase"] },
        { id: 21, title: "Foodie Buddy", description: "A Recipe App", students: "Niketh A,Abin Varghese,Mathew Raino", supervisor: "Prof.Smitha Jacob", tags: ["Flutter", "Firebase"] }
        

    ]
};

export default projectsData; 
