'use client';
import { useEffect } from "react";

// Define your education and experience details
const education = [
  {
    institution: "Global Academy of Technology, Bangalore, India",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    duration: "2021 – 2025",
    details: "Current CGPA: 9.45/10"
  },
  {
    institution: "KLE Prerana PU College, Hubli, India",
    degree: "PUC",
    duration: "2019 – 2021",
    details: "Percentage: 95.83%"
  },
  {
    institution: "KLE CBSE English Medium School, Nipani, India",
    degree: "10th",
    duration: "2019",
    details: "Percentage: 88.8%"
  }
];

const experience = [
  {
    role: "Student Placement Coordinator",
    company: "Global Academy Of Technology",
    duration: "Aug 2023 – Present",
    location: "Bengaluru, Karnataka, India",
    details: "Organized and managed student placements, facilitating interactions between students and industry professionals. Led placement-related activities, enhancing student employment outcomes and institutional reputation."
  },
  {
    role: "Salesforce Developer Intern",
    company: "Salesforce India",
    duration: "Jul 2024 – Sep 2024",
    location: "",
    details: "Completed a Salesforce-supported virtual internship program focused on Apex development, Lightning Web Components (LWC), and process automation, with hands-on experience using Salesforce tools. Earned Super Badges in Apex Specialist, Process Automation Specialist, and Developer Super Set."
  },
  {
    role: "Data Science Specialist Intern",
    company: "Main Flow Services and Technologies",
    duration: "Jul 2024 – Sep 2024",
    location: "India",
    details: "Developed and optimized machine learning models using TensorFlow, PyTorch, and Scikit-learn. Improved model interpretability and visualized data insights using Seaborn and Matplotlib."
  },
  {
    role: "Java Programmer Intern",
    company: "CodeAlpha",
    duration: "Oct 2023 – Jan 2024",
    location: "",
    details: "Completed a 12-week internship gaining extensive hands-on experience in Java programming. Developed a portfolio of projects demonstrating skills in OOP, data structures, and algorithm implementation."
  },
  {
    role: "Web Developer Intern",
    company: "TechnoHacks EduTech",
    duration: "Oct 2023 – Nov 2023",
    location: "India",
    details: "Built responsive web applications using HTML, CSS, JavaScript, and React. Integrated back-end APIs with Node.js, Express.js, and MongoDB, focusing on performance optimization and cross-browser compatibility."
  },
  {
    role: "Machine Learning Intern",
    company: "Microsoft and Knowledge Solutions",
    duration: "Jan 2023 – Mar 2023",
    location: "India",
    details: "Completed a 6-week internship focused on Python, logistic regression, and k-means clustering. Gained experience in data preprocessing and model evaluation."
  },
  {
    role: "C Developer Intern",
    company: "SpreadTech Solutions",
    duration: "Oct 2023 – Nov 2023",
    location: "",
    details: "Completed a 4-week internship gaining practical skills in C# and C programming. Designed, developed, and debugged applications, optimizing code through real-world applications."
  }
];

export default function Home() {
  useEffect(() => {
    const scriptParticles = document.createElement('script');
    scriptParticles.src = "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js";

    scriptParticles.onload = () => {
      particlesJS("particles-js", {
        "particles": {
          "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
          "color": { "value": "#61dafb" },
          "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
          "opacity": { "value": 0.5, "random": true },
          "size": { "value": 4, "random": true },
          "line_linked": { "enable": true, "distance": 150, "color": "#61dafb", "opacity": 0.4, "width": 1 },
          "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
        },
        "retina_detect": true
      });
    };

    document.body.appendChild(scriptParticles);
  }, []);

  return (
    <>
      <div id="particles-js" className="fixed inset-0 z-0 h-full"></div> 

      <div className="z-10 flex flex-col items-end justify-center w-full h-full mt-5 px-6 md:px-24">
        <div className="flex flex-col text-white items-start w-full md:w-[60%]">
          <div className="flex flex-row items-start pt-20">
            <span className="text-9xl font-bold text-[#ffffff]">B</span>
            <span className="relative text-6xl font-bold mt-2 pt-2 text-[#ffffff]">
              havya Bhosale
              <br />
              <p className="absolute animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-3xl md:text-5xl font-bold text-[#f39c12]">
                 AI-ML | FSD | GENAI
              </p>
            </span>
          </div>

          {/* Objective Section */}
          <div className="mt-4 text-lg text-white">
            <p className="italic">
              "A highly motivated software engineer with hands-on experience in various programming languages, frameworks,
              and technologies. Seeking to contribute to innovative projects at a forward-thinking organization by leveraging
              my skills in software development, AI/ML, and FSD to drive impactful solutions and enhance user experiences."
            </p>
          </div>

          {/* Education Section */}
          <h2 className="text-3xl font-semibold mt-16 text-[#f39c12]">Education</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-[#1e1e1e] border border-gray-600 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <h3 className="text-2xl font-semibold text-[#f39c12]">{edu.institution}</h3>
                <p className="mt-2 text-white">{edu.degree}</p>
                <p className="mt-1 text-white">{edu.duration}</p>
                <p className="mt-2 text-gray-300">{edu.details}</p>
              </div>
            ))}
          </div>

          {/* Experience Section */}
          <h2 className="text-3xl font-semibold mt-16 text-[#f39c12]">Experience</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-[#1e1e1e] border border-gray-600 p-6 rounded-lg shadow-lg transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <h3 className="text-2xl font-semibold text-[#f39c12]">{exp.role}</h3>
                <p className="mt-2 text-white">{exp.company}</p>
                <p className="mt-1 text-white">{exp.duration}</p>
                <p className="mt-2 text-gray-300">{exp.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: 1fr;
        }

        @media (min-width: 768px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </>
  );
}
