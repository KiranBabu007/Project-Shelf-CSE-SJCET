const projectsData = {

    "2023": [
        { id: 1, title: "IOT Based plastic detector", description: "Not Available", students: "Abin K Jaimon, Aravind Binu, Arun Kumar K Jose, Treesa Joseph", supervisor: "Prof. Bino Thomas", tags: ["IoT"] },
        { id: 2, title: "Game-Dev", description: "Not Available", students: "Aimil Bij Joseph, Alen Emmanuel, Allen Alex Alaney, Pranav P", supervisor: "Prof. Mereen Thomas", tags: ["Game Development"] },
        { id: 3, title: "HazeBuster(Vehicle license plate recognition for fog-haze environments)", description: "Not Available", students: "Aishwarya Sebastian, Amrutha Prakash, Ann Maria Sabu, Mubeena S", supervisor: "Prof. Gayathri R Krishna", tags: ["Computer Vision", "Image Processing"] },
        { id: 4, title: "IoT Based Project For Blind People(Third Eye)", description: "Not Available", students: "Akhil Sanker S, Alphy George, Irene Molly Varughese, Rinta Maria Raju", supervisor: "Thushara Sukumar", tags: ["IoT", "Accessibility"] },
        { id: 5, title: "EnviroGuard", description: "Not Available", students: "Alan Joy, Allwina Anna Soy Jose, Anitta Siby, Savio Shaji", supervisor: "Prof. Kishore Sebastian", tags: ["Environmental Monitoring"] },
        { id: 6, title: "Tailored Recipes And Culinary", description: "Not Available", students: "Alenta Joseph, Juval James, Vishnu A.V", supervisor: "Prof. Syamamol T", tags: ["Food Tech"] },
        { id: 7, title: "AI-Driven Video Prompt Analysis", description: "Not Available", students: "Allen Saji, Ashik David Roy, Nithin V. James, Reenphy George", supervisor: "Prof. Smitha Jacob", tags: ["Computer Vision", "AI"] },
        { id: 8, title: "FarmSage", description: "Not Available", students: "Amala Maria Kuruvilla, Anitha P Benny, Manjusree Raveendran, Raina Raj", supervisor: "Prof. Mereen Thomas", tags: ["Agriculture", "Mobile App"] },
        { id: 9, title: "TalkSync: A real time speech translation extension", description: "Not Available", students: "Anandu Unnikrishnan, Harinand S, Jithin Jerome, Sreelakshmi S", supervisor: "Prof. Maria Yesudas", tags: ["NLP", "Accessibility"] },
        { id: 10, title: "Animal Intrusion detection", description: "Not Available", students: "Anita Augustine, Annu Rajesh, Gautham S, Ria Siby", supervisor: "Prof. Thushara Sukumar", tags: ["Computer Vision", "IoT"] },
        { id: 11, title: "D-SIGN (Speech to Sign Translator)", description: "Not Available", students: "Krishnaveni M, Anna Jose, Bincy Benny, Sandra Maria Jose", supervisor: "Prof. Vimal Babu P", tags: ["NLP", "Accessibility"] },
        { id: 12, title: "CogniCare", description: "Not Available", students: "Ashish Rajesh, Delna K Jose, Fahad Salim, Gautham Krishna N", supervisor: "Prof. Angitha George", tags: ["Healthcare", "Mobile App"] },
        { id: 13, title: "Luminous Pursuit", description: "Not Available", students: "Benjamin Joseph, George John, Krishnaprasad CP, Sonu T Shaji", supervisor: "Prof. Ashly Thomas", tags: ["Gaming"] },
        { id: 14, title: "DeepReality", description: "Not Available", students: "Harikrishnan Ashok, Mareena Roy, P S Arjun, V S Nikhil Maheswar", supervisor: "Prof. Athirasree Das", tags: ["Computer Vision", "AR/VR"] },
        { id: 15, title: "TRACE", description: "Not Available", students: "Athul Soman, Joseph George, Thomson Stanes, Vimal Suresh", supervisor: "Prof. Dyni Thomas", tags: ["Sustainability"] },
        { id: 16, title: "Smart Dustbin", description: "Not Available", students: "Nihal Vijoy, Rahul Babu, Shalon Mary Michael, Sona Joseph", supervisor: "Prof. Jibin Philip", tags: ["IoT", "Sustainability"] }
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