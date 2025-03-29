import React from 'react';

const Education = () => {
  const education = [
    {
      institution: "Vaagdevi College of Engineering",
      degree: "Bachelor of Technology in Computer Science",
      year: ""
    },
    {
      institution: "SR Junior College",
      degree: "Senior Secondary (Class XII)",
      year: ""
    },
    {
      institution: "Sri Chaitanya High School",
      degree: "Secondary (Class X)",
      year: ""
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
        </div>
        <div className="education-content">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <h3>{edu.institution}</h3>
              <p>{edu.degree}</p>
              {edu.year && <p>{edu.year}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;