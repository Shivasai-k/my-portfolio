// import React from 'react';

// const About = () => {
//   return (
//     <section id="about" className="about">
//       <div className="container">
//         <div className="section-title">
//           <h2>About Me</h2>
//         </div>
//         <div className="about-content">
//           <div className="about-text">
//             <p>
//               Passionate about problem-solving and continuous learning, with a strong ability to learn from bugs and errors. 
//               Seeking a full-time opportunity to leverage my technical skills and enthusiasm for IT to contribute effectively 
//               to a dynamic development team.
//             </p>
//             <div className="contact-info">
//               <p><strong>Email:</strong> shivasai.karampuri@gmail.com</p>
//               <p><strong>Phone:</strong> +91-8919714795</p>
//               <p><strong>LinkedIn:</strong> linkedin.com/in/shiva-sai-k/</p>
//               <p><strong>GitHub:</strong> github.com/Shivasai-k</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from 'react';

const About = () => {
  const skills = {
    "Frontend": ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap"],
    "Backend": ["Node.js", "Express"],
    "Programming Languages": ["Python", "Java", "C"],
    "Databases": ["MongoDB", "MySQL"],
    "Tools": ["Git", "GitHub"]
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Shiva, a Full Stack Developer based in India. I enjoy creating
              things that live on the internet, whether that be websites, applications,
              or anything in between.
            </p>
            <p>
              I'm a motivated Junior Programmer with hands-on experience in Python, Java,
              and JavaScript, with ongoing training in MERN stack development. Passionate
              about problem-solving and continuous learning.
            </p>
            <p>
              Here are the technologies I've been working with:
            </p>
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
      </div>
    </section>
  );
};

export default About;