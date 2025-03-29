// import React, { useState } from 'react';
// import '../App.css';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="header">
//       <div className="container">
//         <nav className="navbar">
//           <div className="logo">
//             Shiva<span>Sai</span>
//           </div>
          
//           <div 
//             className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
//             onClick={toggleMenu}
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
          
//           <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
//             <li><a href="#about">About</a></li>
//             <li><a href="#skills">Skills</a></li>
//             <li><a href="#education">Education</a></li>
//             <li><a href="#experience">Experience</a></li>
//             <li><a href="#projects">Projects</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <a href="/" className="logo">ShivaSai</a>
        
        {/* Desktop Navigation */}
        <ul className="nav-links">
          <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
          <li><a href="#experience" onClick={closeMobileMenu}>Experience</a></li>
          <li><a href="#education" onClick={closeMobileMenu}>Education</a></li>
          <li><a href="#projects" onClick={closeMobileMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
        </ul>
        
        {/* Mobile Navigation Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#about" onClick={closeMobileMenu}>About</a></li>
            <li><a href="#experience" onClick={closeMobileMenu}>Experience</a></li>
            <li><a href="#education" onClick={closeMobileMenu}>Education</a></li>
            <li><a href="#projects" onClick={closeMobileMenu}>Projects</a></li>
            <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;