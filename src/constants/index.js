import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import project5 from "../assets/projects/project-5.webp.jpg"
import project6 from "../assets/projects/project6.png"
import project7 from "../assets/projects/project7.webp";

const calculateExperienceDuration = () => {
    // Start date for the experience: June 1, 2023
    const startDate = new Date('2023-06-01');
    const today = new Date();

    let years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();

    // Adjust for negative months (if current month is before start month)
    if (months < 0) {
        years--;
        months += 12;
    }

    // Format the output string
    const yearStr = years === 1 ? 'year' : 'years';
    const monthStr = months === 1 ? 'month' : 'months';

    if (years === 0) {
        return `${months} ${monthStr}`;
    }

    if (months === 0) {
        return `${years} ${yearStr}`;
    }

    return `${years} ${yearStr} and ${months} ${monthStr}`;
};

const DYNAMIC_DURATION = calculateExperienceDuration();

// --- HERO CONTENT ---
export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With ${DYNAMIC_DURATION} of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = "I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.";

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Software Engineer",
    company: "Autodesk",
    description: "Played a key role in developing robust web applications with JavaScript, React.js, and Node.js, enhancing user experience and performance. Utilized MongoDB for efficient data storage solutions, implementing optimized schemas and query methods for large datasets. Worked closely with product managers to prioritize features and deliver enhancements, ensuring alignment with business goals.",
    technologies: ["React.js", "Node.js", "Express.js", "SQL Server", "C#", "ASP.NET MVC", "Next.js"],
  },
  {
    year: "2022 - Present",
    role: "Freelancer",
    company: "Self-Employed",
    description: "Specialized in building and designing responsive user interfaces using Next.js and React, focusing on user-centric design. Coordinated with backend developers to seamlessly integrate frontend components with Node.js APIs. Implemented responsive designs and optimized loading times to enhance frontend performance, improving user engagement.",
    technologies: ["MERN Stack"],
  },
];

export const PROJECTS = [
  {
    title: "Advocates Consultation Website– Highly Scalable (Try it out - click here)",
    image: project7,
    description: "Spearheaded the end-to-end development of the instantvakil legal consultation platform. This involved building the application from scratch, managing hosting infrastructure, and implementing extensive SEO strategies to achieve top search rankings. Focus areas included optimizing the codebase for an extremely lightweight and high-performance user experience, ensuring 100% responsiveness across all mobile and desktop devices, and integrating a robust, multi-channel consultation booking system.",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "SEO Optimization", "Node.js", "MongoDB", "Cloud Hosting - Vercel", " Firebase(Auth)"],
    link: "https://www.instantvakil.com"
  }
  ,
  {
    title: "E-Commerce Website – Highly Scalable",
    image: project1,
    description: "Developed a feature-rich e-commerce platform capable of handling high traffic volumes, ensuring scalability and security. Integrated functionalities such as dynamic product listings, secure shopping cart, and user authentication. Focused on optimizing frontend and backend performance and set up CI/CD pipelines for seamless updates and maintenance.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "CI/CD"],
  },
  {
    title: "Video Streaming Website (Netflix Clone)",
    image: project2,
    description: "Built a high-performance video streaming platform inspired by Netflix, emphasizing scalability and personalized recommendations. Included user authentication, video playback, and content recommendations to enhance user engagement. Used TailwindCSS and React to create a responsive, intuitive UI, integrated Firebase for real-time data handling, and CI/CD for automated testing and deployment.",
    technologies: ["JSX", "TailwindCSS", "React", "API", "Firebase", "CI/CD"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description: "Designed a personal portfolio website to showcase professional skills, projects, and achievements. Built a fully responsive, high-performance site following modern web design principles and deployed it on Vercel for easy updates.",
    technologies: ["JSX", "TailwindCSS", "React", "Vercel"],
    link: "https://khanak-portfolio.vercel.app/"
  },
  {
    title: "Blogging Platform",
    image: project4,
    description: "Created a comprehensive blogging platform allowing users to write, edit, and publish content. Included rich text editing, comments, and user profiles. Secured backend services for authentication and data management using MySQL. Employed Vue.js for an interactive frontend and Express.js for backend services.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "MySQL"],
  },
  {
    title: "Swiggy Clone",
    image: project5,
    description: "Developed a Swiggy-inspired food delivery platform with restaurant listings, order management, and real-time tracking. Ensured a fast, responsive, and user-friendly platform using Vue.js for frontend and MySQL for scalable data storage.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "MySQL"],
  },
  {
    title: "Video Calling App",
    image: project6,
    description: "Designed and built a portfolio site to demonstrate expertise, showcasing an optimized and engaging user experience. Fully responsive, optimized for performance, and deployed on Vercel.",
    technologies: ["JSX", "TailwindCSS", "React", "Vercel" , "WebRTC" , "Zegocloud"],
  },

];


export const CONTACT = {
  address: "Bangalore, India",
  phoneNo: "+91 8296660515",
  email: "khanakm369@gmail.com",
  
};
