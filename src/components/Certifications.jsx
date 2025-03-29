import React from 'react';

const Certifications = () => {
  const certifications = [
    "Python Essentials (Cisco Networking Academy)",
    "Java Fundamentals (Oracle Certification)",
    "Node JS (NxtWave Academy)"
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <div className="section-title">
          <h2>Certifications</h2>
        </div>
        <ul className="certifications-list">
          {certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;