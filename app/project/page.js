'use client';
import { useEffect } from "react";
import Image from "next/image";

// Define your project details
const projects = [
  {
    title: "Real-Time Code Editor | Next.js, Prisma, SadCN UI, Radix UI",
    description: "Built a web app for real-time HTML, CSS, and JavaScript editing with dynamic screen size preview. Implemented secure login and user-specific code storage using Prisma. Designed UI with SadCN UI and Radix UI for a responsive and intuitive experience.",
    githubLink: "https://github.com/bhavyabhosale/REALTIME-CODE_EDITOR"
  },
  {
    title: "HeartHealth AI: Predicting Heart Disease with Advanced Analytics",
    description: "Developed predictive models using machine learning to analyze health parameters such as blood pressure, cholesterol, and heart rate to assess heart disease risk. Utilized algorithms like logistic regression and decision trees for accurate predictions.",
    githubLink: "https://github.com/bhavyabhosale/Heart-Disease"
  },
  {
    title: "AI Chatbot",
    description: "Built an advanced AI chatbot using large language models (LLMs), text embeddings, and retrieval-augmented generation (RAG) techniques. Integrated across multiple platforms, including Discord, Telegram, and a web interface using Python, Google Gemma, Faiss, and Streamlit for real-time interactions.",
    githubLink: "https://github.com/bhavyabhosale/AI-AGENT"
  },
  {
    title: "AgriAI: Integrated Agricultural Intelligence Suite",
    description: "Designed machine learning models for crop disease detection, yield prediction, and optimized irrigation management. The solution included a user-friendly interface for farmers, leveraging web technologies for easy access to insights.",
    githubLink: "https://github.com/bhavyabhosale/PLANTAI"
  },
  {
    title: "ELearning Website",
    description: "Built an interactive eLearning platform offering user authentication, course management, and virtual classrooms. The platform was created with HTML, CSS, JavaScript, and Firebase to deliver a seamless and secure learning experience.",
    githubLink: "https://github.com/bhavyabhosale/E_LEARNING"
  },
  {
    title: "Portfolio Website",
    description: "Created a personal portfolio website using React and hosted on Netlify to showcase projects and skills. Designed for optimal user experience with responsive design, interactive elements, and performance optimization. Incorporated sections for project showcases, case studies, and a blog, with backend integration for contact forms.",
    githubLink: "https://github.com/bhavyabhosale/PORTFOLIO-MAIN"
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
                 AI-ML|FSD|GENAI
              </p>
            </span>
          </div>

          {/* Project Showcase */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {projects.map((project, index) => (
              <div key={index} className="bg-[#1e1e1e] border border-gray-600 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                {/* Updated Title with Orange Color */}
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#f39c12]">{project.title}</h2>
                <p className="mt-4 text-sm sm:text-lg text-gray-300">{project.description}</p>

                {/* Buttons for GitHub and Live Demo */}
                <div className="mt-6 flex space-x-4">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-[#f39c12] hover:bg-[#e67e22] text-white font-semibold py-2 px-4 rounded-md transition duration-300">
                    View on GitHub
                  </a>
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-[#61dafb] hover:bg-[#21a1f1] text-white font-semibold py-2 px-4 rounded-md transition duration-300">
                      Live Demo
                    </a>
                  )}
                </div>
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
