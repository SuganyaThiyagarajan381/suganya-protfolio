// Navbar.jsx - Complete component based on your resume
import React from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMenuOpen(false);
  };

  const styles = {
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.8rem 5%',
      background: 'rgba(255, 252, 248, 0.96)',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 2px 20px rgba(0, 0, 0, 0.06)',
      zIndex: 1000,
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    },
    headerLeft: {
      display: 'flex',
      flexDirection: 'column',
    },
    logoName: {
      fontSize: '1.2rem',
      fontWeight: '700',
      color: '#1e2f3c',
      margin: 0,
      letterSpacing: '-0.3px',
    },
    logoTitle: {
      fontSize: '0.7rem',
      color: '#d9a13b',
      fontWeight: '500',
      margin: '3px 0 0 0',
      letterSpacing: '0.3px',
    },
    experienceBadge: {
      fontSize: '0.65rem',
      color: '#7a6a5a',
      marginTop: '2px',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
    },
    nav: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
    },
    navLink: {
      textDecoration: 'none',
      color: '#4a5568',
      fontWeight: '500',
      fontSize: '0.95rem',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      fontFamily: 'inherit',
      padding: '0.5rem 0',
      position: 'relative',
    },
    contactBtn: {
      background: 'linear-gradient(135deg, #d9a13b, #c4892a)',
      color: 'white',
      border: 'none',
      padding: '0.5rem 1.5rem',
      borderRadius: '40px',
      fontWeight: '600',
      fontSize: '0.9rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    menuIcon: {
      display: 'none',
      fontSize: '1.8rem',
      cursor: 'pointer',
      color: '#1e2f3c',
      background: 'none',
      border: 'none',
    },
    mobileNav: {
      position: 'fixed',
      top: '70px',
      left: 0,
      right: 0,
      background: 'rgba(255, 252, 248, 0.98)',
      backdropFilter: 'blur(10px)',
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'center',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      transform: isMenuOpen ? 'translateY(0)' : 'translateY(-120%)',
      transition: 'transform 0.3s ease',
      zIndex: 999,
    },
    mobileNavLink: {
      textDecoration: 'none',
      color: '#4a5568',
      fontWeight: '500',
      fontSize: '1.1rem',
      padding: '0.5rem',
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      fontFamily: 'inherit',
      width: '100%',
      textAlign: 'center',
    },
    mobileContactBtn: {
      background: 'linear-gradient(135deg, #d9a13b, #c4892a)',
      color: 'white',
      border: 'none',
      padding: '0.7rem 2rem',
      borderRadius: '40px',
      fontWeight: '600',
      fontSize: '1rem',
      cursor: 'pointer',
      marginTop: '0.5rem',
      width: '80%',
    },
  };

  const [hoverStates, setHoverStates] = React.useState({
    home: false,
    experience: false,
    projects: false,
    contact: false,
  });

  const handleHover = (key, value) => {
    setHoverStates(prev => ({ ...prev, [key]: value }));
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700&display=swap');
          
          @media (max-width: 768px) {
            .desktop-nav {
              display: none !important;
            }
            .mobile-menu-btn {
              display: block !important;
            }
          }
          
          @media (min-width: 769px) {
            .mobile-nav-container {
              display: none !important;
            }
          }
          
          .nav-link-underline::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: #d9a13b;
            transition: width 0.3s ease;
          }
          
          .nav-link-underline:hover::after {
            width: 100%;
          }
        `}
      </style>

      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <h2 style={styles.logoName}>Suganya Thiyagarajan</h2>
          <p style={styles.logoTitle}>Frontend Developer | React JS</p>
          <div style={styles.experienceBadge}>
            <span>⭐</span> 
            <span>1+ years experience • Frontend Developer Intern • Web Developer</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={styles.nav}>
          <button
            onClick={(e) => handleSmoothScroll(e, 'home')}
            className="nav-link-underline"
            style={{
              ...styles.navLink,
              color: hoverStates.home ? '#d9a13b' : '#4a5568',
            }}
            onMouseEnter={() => handleHover('home', true)}
            onMouseLeave={() => handleHover('home', false)}
          >
            Home
          </button>
          
          <button
            onClick={(e) => handleSmoothScroll(e, 'experience')}
            className="nav-link-underline"
            style={{
              ...styles.navLink,
              color: hoverStates.experience ? '#d9a13b' : '#4a5568',
            }}
            onMouseEnter={() => handleHover('experience', true)}
            onMouseLeave={() => handleHover('experience', false)}
          >
            Experience
          </button>
          
          <button
            onClick={(e) => handleSmoothScroll(e, 'projects')}
            className="nav-link-underline"
            style={{
              ...styles.navLink,
              color: hoverStates.projects ? '#d9a13b' : '#4a5568',
            }}
            onMouseEnter={() => handleHover('projects', true)}
            onMouseLeave={() => handleHover('projects', false)}
          >
            Projects
          </button>

          <button
            onClick={(e) => handleSmoothScroll(e, 'contact')}
            style={{
              ...styles.contactBtn,
              transform: hoverStates.contact ? 'translateY(-2px) scale(1.02)' : 'translateY(0)',
              boxShadow: hoverStates.contact ? '0 5px 15px rgba(217, 161, 59, 0.3)' : 'none',
            }}
            onMouseEnter={() => handleHover('contact', true)}
            onMouseLeave={() => handleHover('contact', false)}
          >
            📧 Contact Me
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          style={styles.menuIcon}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </header>

      {/* Mobile Navigation Menu */}
      <div className="mobile-nav-container" style={styles.mobileNav}>
        <button
          onClick={(e) => handleSmoothScroll(e, 'home')}
          style={styles.mobileNavLink}
        >
          🏠 Home
        </button>
        <button
          onClick={(e) => handleSmoothScroll(e, 'experience')}
          style={styles.mobileNavLink}
        >
          💼 Experience
        </button>
        <button
          onClick={(e) => handleSmoothScroll(e, 'projects')}
          style={styles.mobileNavLink}
        >
          🚀Skills 
        </button>
        <button
          onClick={(e) => handleSmoothScroll(e, 'contact')}
          style={styles.mobileContactBtn}
        >
          📞 Contact Me
        </button>
      </div>
    </>
  );
};

export default Navbar;