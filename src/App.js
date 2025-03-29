// import React from 'react';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import About from './components/About';
// import Skills from './components/Skills';
// import Education from './components/Education';
// import Experience from './components/Experience';
// import Projects from './components/Projects';
// import Certifications from './components/Certifications';
// import Achievements from './components/Achievements';
// import Contact from './components/Contact';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Hero />
//       <About />
//       <Skills />
//       <Education />
//       <Experience />
//       <Projects />
//       <Certifications />
//       <Achievements />
//       <Contact />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;