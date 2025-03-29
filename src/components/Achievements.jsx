import React from 'react';

const Achievements = () => {
  const achievements = [
    "Participated in a Coding Contest organized by our college and stood 2nd out of 250 Participants.",
    "Achieved recognition for consistent learning over 16 weeks and clearing Round 1 of the Grand Finale in the Python Code Rush conducted by NXT Wave Academy."
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <div className="section-title">
          <h2>Achievements</h2>
        </div>
        <ul className="achievements-list">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;