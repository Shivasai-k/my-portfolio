// import React from 'react';

// const Experience = () => {
//   const experiences = [
//     {
//       company: "Octanet Software Services",
//       position: "Web Developer Internship",
//       duration: "",
//       responsibilities: [
//         "Designed, developed, and deployed responsive web applications using React.js and HTML5.",
//         "Built projects such as an Amazon clone, a Netflix landing page, a To-do application, and a Weather app, demonstrating and enhancing my frontend skills."
//       ]
//     }
//   ];

//   return (
//     <section id="experience" className="experience">
//       <div className="container">
//         <div className="section-title">
//           <h2>Experience</h2>
//         </div>
//         <div className="experience-list">
//           {experiences.map((exp, index) => (
//             <div key={index} className="experience-item">
//               <h3>{exp.position}</h3>
//               <h4>{exp.company}</h4>
//               {exp.duration && <p className="duration">{exp.duration}</p>}
//               <ul>
//                 {exp.responsibilities.map((resp, i) => (
//                   <li key={i}>{resp}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;


import React, { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
        company: "Numetry Technologies",
        position: "Software Developer Intern",
        duration: "Mar, 2025 - Present",
        responsibilities: [
          "Developed full-stack web applications using the MERN, for seamless frontend-backend integration",
          "Created dynamic projects, implementing user authentication with JWT and building RESTful APIs",
          "Demonstrated and enhanced Full-Stack through practical real-world applications"
        ]
      },
    {
      company: "Octanet Software Services",
      position: "Web Developer Intern",
      duration: "Aug, 2024 - Sep, 2024",
      responsibilities: [
        "Designed, developed, and deployed responsive web applications using React.js and HTML5",
        "Built projects such as an Amazon clone, a Netflix landing page, a To-do application, and a Weather app",
        "Demonstrated and enhanced frontend skills through practical implementation"
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-title">
          <h2>Where I've Worked</h2>
        </div>
        <div className="experience-content">
          <div className="tab-list">
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={`tab-button ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {exp.company}
              </button>
            ))}
          </div>
          <div className="tab-content">
            <h3>{experiences[activeTab].position}</h3>
            <h4>@{experiences[activeTab].company}</h4>
            <p className="duration">{experiences[activeTab].duration}</p>
            <ul>
              {experiences[activeTab].responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;