import axios from 'axios';

// Actual Backend URL (Ngrok)
const API_BASE_URL = 'https://portfolio-api-u2mx.onrender.com';

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 30000,
    headers: {
        "ngrok-skip-browser-warning": "true" // Often needed for ngrok free tier
    }
});

// Mock Data Fallback
const MOCK_PROFILE = {
    name: "Manoj kumar purushothaman",
    bio: "I am a pre-final year AI & Data Science student with a strong focus on building AI-powered, real-world solutions. I specialize in developing end-to-end systems that combine intelligent models, scalable backend APIs, and clean user experiences. My work includes backend AI model training across NLP, Speech-to-Text, CV, LLM fine-tuning, as well as building Agentic AI and RAG systems. I bring strong collaboration and leadership skills, and I enjoy working in fast-paced teams to deliver impactful, scalable AI solutions.",
    skills: [
        "Python", "Java", "Node js", "pytorch", "Agentic ai", "Data analytics", "mongoDB", "SQL"
    ],
    socialMedia: {
        email: "manojkumar.prush005@gmail.com",
        linkedin: "https://www.linkedin.com/in/manoj-kumar-38a836293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/Manojkumar211205",
        phone: "8667496714"
    },
    profilePic: "https://res.cloudinary.com/deby7xmkp/image/upload/v1765721742/portfolio-images/gempy3alckky6r7ps8h8.png",
    resumeUrl: "https://drive.google.com/uc?export=download&id=1OrmY7tyZpM6YnLfPk5leXAqGsGktdzYZ" // Converted to direct link
};

const MOCK_ACHIEVEMENTS = [
    {
        achievement: "0Xday Hackathon winning",
        description: "Won first runner up in 0xday hackathon for our project speaksi a speach recognition based app which help speach impaired people ",
        certificateLink: "https://www.linkedin.com/posts/manoj-kumar-purushothaman_speaksi-activity-7281239435231248384-gZLs?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEci7ZoBiUPuLnyxGvFL6Cx3chWauGFJYjY",
        certificateImg: "https://res.cloudinary.com/deby7xmkp/image/upload/v1765723079/portfolio-images/tevp0o47aky3h7ltyqyz.jpg"
    },
    {
        achievement: "Thiran Hackathon winning",
        description: "Won first place in thiran hackathon(Sri Eshwar College of Engineering, Coimbatore) for our speach therapy system for speach impaired people",
        certificateLink: "https://www.linkedin.com/posts/manoj-kumar-purushothaman_aiinnovation-speaksi-thiran2025-activity-7298975389576482817-GWDo?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEci7ZoBiUPuLnyxGvFL6Cx3chWauGFJYjY",
        certificateImg: "https://res.cloudinary.com/deby7xmkp/image/upload/v1765723659/portfolio-images/yprcgzn5iqtofohr9ydk.jpg"
    },
    {
        achievement: "Bajaj HackRx hackathon",
        description: "Led my team to the final round (Top 35 teams) by building a multi-modal RAG-based agent system. The journey involved international collaboration and working alongside students from IITs and IIMs during HackRx 6.0, making it an enriching and impactful experience.",
        certificateLink: "https://www.linkedin.com/posts/manoj-kumar-purushothaman_hackrx6-hackathon-ai-activity-7375365219365302273-SfBJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEci7ZoBiUPuLnyxGvFL6Cx3chWauGFJYjY",
        certificateImg: "https://res.cloudinary.com/deby7xmkp/image/upload/v1765724291/portfolio-images/butm7jfwb8kr7xhtqvmx.jpg"
    },
    {
        achievement: "Hackmasters Hackathon",
        description: "Awarded Best Project at the HackMasters Hackathon for HealthConnect, a web application designed to enable effective online collaboration between doctors and patients, streamlining appointments, communication, and healthcare access.",
        certificateLink: "https://www.linkedin.com/posts/manoj-kumar-purushothaman_ai-datascience-bestprojectaward-activity-7271973132637249536-KMPa?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEci7ZoBiUPuLnyxGvFL6Cx3chWauGFJYjY",
        certificateImg: "https://res.cloudinary.com/deby7xmkp/image/upload/v1765724655/portfolio-images/xrogukyjne3kgkd7x0dx.jpg"
    },
    {
        achievement: "AWS cloud club core lead",
        description: "Selected as Tech Lead of the AWS Cloud Club at SMVEC, where I gained hands-on experience in team management, technical leadership, and scalable system thinking, transitioning my approach from development-focused solutions to production-ready, scalable architectures.",
        certificateLink: "https://www.credly.com/badges/72802d5b-619b-47b5-80a2-a45295a39f51/public_url",
        certificateImg: "https://res.cloudinary.com/deby7xmkp/image/upload/v1765725367/portfolio-images/en60hy1kuwlmzkusfhxs.jpg"
    }
];

const MOCK_PROJECTS = [
    {
        name: "Speaksi",
        description: "Speaksi is a speach recognition based appilcation where i finetuned a ASR model with the audion of  partial mute person to make the model best do s2t for them and convey ther thoughts easily. and it has speach teraph in a gamifyed system which is good for kids and it has efficient hearing head manager",
        techUsed: ["python", "flutter", "flask", "SQL", "Deep learning"],
        projectImg: "https://res.cloudinary.com/deby7xmkp/image/upload/v1765727576/portfolio-images/dinz0bwemzvvatgsy7wo.png",
        projectLinks: {
            live: "https://youtu.be/Wr1LwPc4PWI",
            github: "https://github.com/Manojkumar211205/speaksi"
        }
    },
    {
        name: "IEEE creator",
        description: "This project allows users to upload any document and automatically converts it into a proper IEEE-formatted research paper. The system extracts content from PDFs, Word files, or text documents, restructures it into standard IEEE sections (Abstract, Introduction, Methodology, Results, Conclusion, and References), and applies correct formatting, citations, and layout. This significantly reduces manual effort and helps students and researchers produce publication-ready IEEE documents quickly and accurately.",
        techUsed: ["python", "flask", "jinja syntax", "NLP"],
        projectImg: "https://res.cloudinary.com/deby7xmkp/image/upload/v1765733970/portfolio-images/mfhtypphezmrvextmjaa.png",
        projectLinks: {
            live: null,
            github: "https://github.com/Manojkumar211205/Doc-to-IEEE-paper-converter"
        }
    },
    {
        name: "Lab Report Summarizer",
        description: "AI-Powered Lab Report Analysis is a smart healthcare application that automatically extracts key information from medical lab reports, predicts potential disease risks, and visualizes health trends in real time. The system combines ML models and rule-based logic to transform complex medical data into clear, actionable insights for faster and more informed decision-making.",
        techUsed: ["python", "Machine learning", "flask", "jinja syntax", "NLP"],
        projectImg: "https://res.cloudinary.com/deby7xmkp/image/upload/v1765735698/portfolio-images/rgfithsp4wr1f2si7cca.jpg",
        projectLinks: {
            live: "https://www.linkedin.com/posts/manoj-kumar-purushothaman_machinelearning-ai-healthcaretech-activity-7300428993336418304-CQ5O?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEci7ZoBiUPuLnyxGvFL6Cx3chWauGFJYjY",
            github: "https://github.com/Manojkumar211205/Doc-to-IEEE-paper-converter"
        }
    },
    {
        name: "Health connnect",
        description: "AI-Powered Lab Report Analysis is a smart healthcare application that automatically extracts key information from medical lab reports, predicts potential disease risks, and visualizes health trends in real time. The system combines ML models and rule-based logic to transform complex medical data into clear, actionable insights for faster and more informed decision-making.",
        techUsed: ["python", "HTML", "flask", "css", "java script"],
        projectImg: "https://res.cloudinary.com/deby7xmkp/image/upload/v1765736793/portfolio-images/whndyh3fn307qjqzdppm.png",
        projectLinks: {
            live: "https://www.linkedin.com/posts/manoj-kumar-purushothaman_python-flask-restfulapi-activity-7284666740146388992-pGd2?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEci7ZoBiUPuLnyxGvFL6Cx3chWauGFJYjY",
            github: null // Explicitly null as per request if missing
        }
    }
];


export const fetchProfile = async () => {
    try {
        const response = await api.get('/api/profile');
        // Handle both array (old) and object (new) formats from backend
        const resData = response.data.data;
        const data = Array.isArray(resData) ? resData[0] : resData;

        if (!data) throw new Error("No profile data");

        // Map backend fields to frontend expected components

        // Helper to force download on Cloudinary URLs or Google Drive URLs
        let finalResumeUrl = data.resumeUrl;
        if (finalResumeUrl) {
            // Check for Google Drive URL
            if (finalResumeUrl.includes("drive.google.com")) {
                const fileIdMatch = finalResumeUrl.match(/\/d\/(.+?)\//);
                if (fileIdMatch && fileIdMatch[1]) {
                    finalResumeUrl = `https://drive.google.com/uc?export=download&id=${fileIdMatch[1]}`;
                }
            }
            // Check for Cloudinary URL
            else if (finalResumeUrl.includes("cloudinary.com")) {
                if (finalResumeUrl.includes("fl_attachment:false")) {
                    finalResumeUrl = finalResumeUrl.replace("fl_attachment:false", "fl_attachment:true");
                } else if (!finalResumeUrl.includes("fl_attachment")) {
                    finalResumeUrl = finalResumeUrl.replace("/upload/", "/upload/fl_attachment/");
                }
            }
        }

        return {
            name: data.name,
            bio: data.bio,
            skills: data.skills,
            profilePic: data.profilePicture, // Map profilePicture -> profilePic
            resumeUrl: finalResumeUrl,
            socialMedia: {
                github: data.socialMediaLinks?.github || "https://github.com",
                linkedin: data.socialMediaLinks?.linkedin || "https://linkedin.com",
                email: data.socialMediaLinks?.email || data.socialMediaLinks?.emai, // Handle both spelling variants
                phone: data.socialMediaLinks?.phone
            }
        };
    } catch (error) {
        console.warn("Using mock profile data (Fetch failed)", error);
        return MOCK_PROFILE;
    }
};

export const fetchProjects = async () => {
    try {
        const response = await api.get('/projects'); // User specified /projects not /api/projects
        const dataArray = response.data.data || [];

        return dataArray.map(project => ({
            name: project.projectName,
            description: project.description,
            techUsed: project.technologiesUsed,
            projectImg: project.projectImage || 'https://via.placeholder.com/600x400',
            projectLinks: {
                live: project.projectLink,
                github: project.githubLink // Only pass if exists
            }
        }));
    } catch (error) {
        console.warn("Using mock projects data (Fetch failed)", error);
        return MOCK_PROJECTS;
    }
};

export const fetchAchievements = async () => {
    try {
        const response = await api.get('/api/achievements/');
        const dataArray = response.data.data || [];

        return dataArray.map(item => ({
            achievement: item.achievementName,
            description: item.description,
            certificateLink: item.certificateLink,
            certificateImg: item.certificateImage
        }));
    } catch (error) {
        console.warn("Using mock achievements data (Fetch failed)", error);
        return MOCK_ACHIEVEMENTS;
    }
};
