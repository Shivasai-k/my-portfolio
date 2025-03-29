// import React from 'react';

// const Hero = () => {
//   return (
//     <section id="home" className="hero">
//       <div className="container">
//         <div className="hero-content">
//           <h1>Shiva Sai Karampuri</h1>
//           <h2>Full Stack Developer</h2>
//           <p>
//             Motivated Junior Programmer with hands-on experience in Python, Java, and JavaScript, 
//             with ongoing training in MERN stack development.
//           </p>
//           <div className="hero-buttons">
//             <a href="#contact" className="btn">Contact Me</a>
//             <a href="#projects" className="btn btn-outline">View Projects</a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from 'react';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';

const Hero = () => {
//   const resumeUrl = 'https://drive.google.com/file/d/YOUR_RESUME_ID/view?usp=sharing';
const resumeUrl='/Shiva Sai Resume.pdf';

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Hi, I'm</h1>
          <h2>Shiva Sai Karampuri.</h2>
          <h3>I build things for the web.</h3>
          <p>
            I'm a Full Stack Developer specializing in building exceptional digital experiences. 
            Currently focused on building accessible, Web Applications with MERN stack.
          </p>

          <div className="social-links">
            <a href="https://github.com/Shivasai-k" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/shiva-sai-k/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>

          <div className="hero-buttons">
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn">
              <FaFileDownload style={{ marginRight: '8px' }} /> Resume
            </a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
            <a href="#contact" className="btn">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;