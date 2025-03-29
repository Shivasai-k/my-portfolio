// import React from 'react';

// const Projects = () => {
//   const projects = [
//     {
//       title: "Wikipedia Search Application",
//       description: "A custom Wikipedia search application that provides a simplified way for users to access and view relevant information. Effortlessly access information with asynchronous fetch GET HTTP API calls and the option to open the desired result in a new tab for further exploration.",
//       technologies: ["HTML", "CSS", "JS", "REST API Calls", "Bootstrap"],
//       link: "appwikipsearch.ccbp.tech"
//     },
//     {
//       title: "Expense Tracker Full-Stack Application",
//       description: "This is a full-stack Expense Tracker application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to efficiently manage and visualize their expenses. The app enables users to add, filter, and remove expenses. All expense data is stored in a MongoDB database, ensuring persistence across sessions.",
//       technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
//       link: ""
//     }
//   ];

//   return (
//     <section id="projects" className="projects">
//       <div className="container">
//         <div className="section-title">
//           <h2>Projects</h2>
//         </div>
//         <div className="projects-grid">
//           {projects.map((project, index) => (
//             <div key={index} className="project-card">
//               <h3>{project.title}</h3>
//               <p>{project.description}</p>
//               <div className="technologies">
//                 {project.technologies.map((tech, i) => (
//                   <span key={i} className="tech-tag">{tech}</span>
//                 ))}
//               </div>
//               {project.link && (
//                 <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer" className="project-link">
//                   View Project
//                 </a>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Wikipedia Search Application",
      description: "A custom Wikipedia search application that provides a simplified way for users to access and view relevant information with API calls.",
      technologies: ["HTML", "CSS", "JavaScript", "REST API", "Bootstrap"],
      githubLink: "https://github.com/Shivasai-k",
      liveLink: "https://appwikipsearch.ccbp.tech"
    },
    {
      title: "Expense Tracker",
      description: "Full-stack Expense Tracker application built using MERN stack that allows users to efficiently manage and visualize their expenses.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/Shivasai-k",
      liveLink: ""
    },
    {
      title: "News Now App",
      description: "A news aggregation application that fetches and displays the latest news articles from various sources with category filtering.",
      technologies: ["React", "News API", "Bootstrap", "Axios"],
      githubLink: "https://github.com/Shivasai-k/news-now-app",
      liveLink: ""
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2>Some of my Builts</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="folder">
                  <FaGithub />
                </div>
                <div className="project-links">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;