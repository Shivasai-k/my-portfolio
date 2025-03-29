import React from 'react';

const Skills = () => {
  const skills = {
    "Programming Languages": ["C", "Python", "Java", "JavaScript"],
    "Frontend Technologies": ["HTML5", "CSS3", "Bootstrap", "ReactJS"],
    "Backend Technologies": ["NodeJS"],
    "Databases": ["MySQL", "MongoDB"],
    "Version Control": ["Git", "GitHub"],
    "Soft Skills": ["Critical thinking", "Data-driven decision making", "Project ownership"]
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        <div className="skills-container">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <ul>
                {items.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;