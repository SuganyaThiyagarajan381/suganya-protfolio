// // Hero.jsx - Complete component with inline styles
// import React from 'react';

// const Hero = () => {
//   // Handle contact button click
//   const handleContact = () => {
//     alert("📧 suganyasuganya69811@gmail.com  |  📞 +91 76959 06633\n📍 Thanjavur, India");
//   };

//   // Inline styles object
//   const styles = {
//     // Hero Section
//     hero: {
//       minHeight: '100vh',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       background: '#fefcf8',
//       fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
//       padding: '4rem 2rem',
//     },
//     heroContainer: {
//       maxWidth: '1280px',
//       width: '100%',
//       margin: '0 auto',
//       display: 'flex',
//       flexWrap: 'wrap',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       gap: '2.5rem',
//     },
//     // Left Content
//     heroContent: {
//       flex: '1.2',
//       minWidth: '280px',
//       animation: 'fadeSlideUp 0.6s ease-out forwards',
//     },
//     badge: {
//       display: 'inline-block',
//       background: '#e8e0d5',
//       padding: '0.4rem 1rem',
//       borderRadius: '40px',
//       fontSize: '0.8rem',
//       fontWeight: '600',
//       letterSpacing: '0.3px',
//       color: '#4a3b2c',
//       marginBottom: '1.5rem',
//     },
//     badgeIcon: {
//       marginRight: '6px',
//     },
//     heading1: {
//       fontSize: '3.2rem',
//       fontWeight: '800',
//       lineHeight: '1.2',
//       marginBottom: '1rem',
//       color: '#1e2a3a',
//     },
//     highlight: {
//       background: 'linear-gradient(120deg, #d9a13b, #f3c26b)',
//       backgroundClip: 'text',
//       WebkitBackgroundClip: 'text',
//       color: 'transparent',
//       display: 'inline-block',
//     },
//     subheading: {
//       fontSize: '1.5rem',
//       fontWeight: '600',
//       marginBottom: '1.2rem',
//       color: '#2c3e4e',
//       letterSpacing: '-0.3px',
//     },
//     description: {
//       fontSize: '1rem',
//       lineHeight: '1.6',
//       color: '#2d3e4b',
//       marginBottom: '2rem',
//       maxWidth: '90%',
//       fontWeight: '400',
//     },
//     // Buttons
//     buttonsContainer: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       gap: '1rem',
//       marginTop: '0.5rem',
//     },
//     primaryBtn: {
//       background: '#1e2f3c',
//       color: 'white',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
//       border: '1px solid #2c3e4e',
//       cursor: 'pointer',
//       fontFamily: 'inherit',
//       fontWeight: '600',
//       fontSize: '0.95rem',
//       padding: '0.8rem 1.8rem',
//       borderRadius: '40px',
//       transition: 'all 0.25s ease',
//       display: 'inline-flex',
//       alignItems: 'center',
//       gap: '10px',
//     },
//     outlineBtn: {
//       background: 'transparent',
//       border: '1.5px solid #b9aa97',
//       color: '#3b2c1e',
//       cursor: 'pointer',
//       fontFamily: 'inherit',
//       fontWeight: '600',
//       fontSize: '0.95rem',
//       padding: '0.8rem 1.8rem',
//       borderRadius: '40px',
//       transition: 'all 0.25s ease',
//       display: 'inline-flex',
//       alignItems: 'center',
//       gap: '10px',
//     },
//     btnLink: {
//       textDecoration: 'none',
//     },
//     // Right Image
//     heroImage: {
//       flex: '0.9',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       position: 'relative',
//       animation: 'fadeSlideUp 0.6s ease-out 0.1s forwards',
//     },
//     imageFrame: {
//       background: 'linear-gradient(145deg, #f3ede5, #fff4ea)',
//       borderRadius: '38% 62% 70% 30% / 42% 40% 60% 58%',
//       padding: '0.8rem',
//       boxShadow: '0 30px 35px -18px rgba(0, 0, 0, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.6)',
//       transition: 'transform 0.3s ease',
//     },
//     profileImg: {
//       width: '100%',
//       maxWidth: '360px',
//       height: 'auto',
//       borderRadius: '32% 68% 70% 30% / 36% 38% 62% 64%',
//       objectFit: 'cover',
//       display: 'block',
//       background: '#e9dfd1',
//       boxShadow: '0 20px 30px -12px rgba(0, 0, 0, 0.2)',
//     },
//   };

//   // Hover effects handlers
//   const [primaryHover, setPrimaryHover] = React.useState(false);
//   const [outlineHover, setOutlineHover] = React.useState(false);
//   const [frameHover, setFrameHover] = React.useState(false);

//   return (
//     <>
//       {/* Global styles for animations and responsive design */}
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,600;14..32,700;14..32,800&display=swap');
          
//           * {
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//           }
          
//           @keyframes fadeSlideUp {
//             0% {
//               opacity: 0;
//               transform: translateY(20px);
//             }
//             100% {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }
          
//           /* Responsive styles */
//           @media (max-width: 900px) {
//             .hero-container-responsive {
//               flex-direction: column-reverse !important;
//               text-align: center !important;
//             }
//             .hero-content-responsive {
//               text-align: center !important;
//             }
//             .hero-description-responsive {
//               max-width: 100% !important;
//               margin-left: auto !important;
//               margin-right: auto !important;
//             }
//             .hero-buttons-responsive {
//               justify-content: center !important;
//             }
//             .hero-heading-responsive {
//               font-size: 2.5rem !important;
//             }
//             .hero-subheading-responsive {
//               font-size: 1.3rem !important;
//             }
//             .hero-image-frame-responsive {
//               max-width: 280px !important;
//               margin: 0 auto !important;
//             }
//             .hero-profile-img-responsive {
//               max-width: 280px !important;
//             }
//           }
          
//           @media (max-width: 480px) {
//             .hero-section-responsive {
//               padding: 2rem 1rem !important;
//             }
//             .hero-heading-responsive {
//               font-size: 2rem !important;
//             }
//             .hero-badge-responsive {
//               font-size: 0.7rem !important;
//             }
//             .hero-button-responsive {
//               padding: 0.6rem 1.4rem !important;
//               font-size: 0.85rem !important;
//             }
//           }
//         `}
//       </style>

//       <section className="hero-section-responsive" style={styles.hero}>
//         <div className="hero-container-responsive" style={{...styles.heroContainer, ...(window.innerWidth <= 900 ? {flexDirection: 'column-reverse', textAlign: 'center'} : {})}}>
          
//           {/* Left Side - Content */}
//           <div className="hero-content-responsive" style={styles.heroContent}>
//             <span className="hero-badge-responsive" style={styles.badge}>
//               <i className="fas fa-code" style={styles.badgeIcon}></i> FullStack Developer
//             </span>
            
//             <h1 className="hero-heading-responsive" style={styles.heading1}>
//               Suganya <br />
//               <span style={styles.highlight}>Thiyagarajan</span>
//             </h1>
            
//             <h3 className="hero-subheading-responsive" style={styles.subheading}>
//               Building Clean & Responsive Web Applications
//             </h3>
            
//             <p className="hero-description-responsive" style={styles.description}>
//               Motivated Computer Science graduate with strong foundation in 
//               frontend development and machine learning. Passionate about 
//               creating user-friendly and modern web applications. Hands-on 
//               experience in React, JavaScript, and real-time projects.
//             </p>
            
//             <div className="hero-buttons-responsive" style={styles.buttonsContainer}>
//               <a 
//                 href="/suganresume.pdf" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 style={styles.btnLink}
//               >
//                 <button 
//                   className="hero-button-responsive"
//                   style={{
//                     ...styles.primaryBtn,
//                     background: primaryHover ? '#10232e' : '#1e2f3c',
//                     transform: primaryHover ? 'translateY(-3px)' : 'translateY(0)',
//                     boxShadow: primaryHover ? '0 12px 20px -10px rgba(0, 0, 0, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.05)'
//                   }}
//                   onMouseEnter={() => setPrimaryHover(true)}
//                   onMouseLeave={() => setPrimaryHover(false)}
//                 >
//                   <i className="fas fa-file-alt"></i> Resume
//                 </button>
//               </a>
              
//               <button 
//                 className="hero-button-responsive"
//                 style={{
//                   ...styles.outlineBtn,
//                   background: outlineHover ? '#f1ede8' : 'transparent',
//                   borderColor: outlineHover ? '#8b765c' : '#b9aa97',
//                   transform: outlineHover ? 'translateY(-2px)' : 'translateY(0)'
//                 }}
//                 onMouseEnter={() => setOutlineHover(true)}
//                 onMouseLeave={() => setOutlineHover(false)}
//                 onClick={handleContact}
//               >
//                 <i className="fas fa-paper-plane"></i> Contact
//               </button>
//             </div>
//           </div>

//           {/* Right Side - Profile Image */}
//           <div style={styles.heroImage}>
//             <div 
//               className="proimage.png"
//               style={{
//                 ...styles.imageFrame,
//                 transform: frameHover ? 'scale(1.01)' : 'scale(1)'
//               }}
//               onMouseEnter={() => setFrameHover(true)}
//               onMouseLeave={() => setFrameHover(false)}
//             >
//               <img 
//                 className="hero-profile-img-responsive"
//                 style={styles.profileImg}
//                 src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f2e8da'/%3E%3Ccircle cx='200' cy='160' r='70' fill='%23d9b48b'/%3E%3Cpath d='M120 270 Q200 320 280 270' stroke='%23806040' stroke-width='12' fill='none' stroke-linecap='round'/%3E%3Ccircle cx='165' cy='145' r='8' fill='%233d2b1a'/%3E%3Ccircle cx='235' cy='145' r='8' fill='%233d2b1a'/%3E%3Crect x='180' y='200' width='40' height='30' fill='%23946040'/%3E%3Cpath d='M130 210 L170 200' stroke='%23945e3a' stroke-width='6' stroke-linecap='round' /%3E%3Cpath d='M230 200 L270 210' stroke='%23945e3a' stroke-width='6' stroke-linecap='round' /%3E%3Crect x='140' y='270' width='120' height='60' fill='%236b4c3a' /%3E%3Cpath d='M160 330 L160 370 L240 370 L240 330' fill='%233d2e24'/%3E%3C/svg%3E"
//                 alt="Suganya Thiyagarajan - Developer Portrait"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Hero;
// Hero.jsx - With proimage.png on the right side
import React, { useState, useEffect } from 'react';

const Hero = () => {
  // Handle contact button click
  const handleContact = () => {
    alert("📧 suganyasuganya69811@gmail.com  |  📞 +91 76959 06633\n📍 Thanjavur, India");
  };

  // Hover effects handlers
  const [primaryHover, setPrimaryHover] = useState(false);
  const [outlineHover, setOutlineHover] = useState(false);
  const [frameHover, setFrameHover] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Inline styles object
  const styles = {
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#fefcf8',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      padding: '4rem 2rem',
    },
    heroContainer: {
      maxWidth: '1280px',
      width: '100%',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '2.5rem',
      flexDirection: windowWidth <= 900 ? 'column-reverse' : 'row',
      textAlign: windowWidth <= 900 ? 'center' : 'left',
    },
    heroContent: {
      flex: '1.2',
      minWidth: '280px',
    },
    badge: {
      display: 'inline-block',
      background: '#e8e0d5',
      padding: '0.4rem 1rem',
      borderRadius: '40px',
      fontSize: '0.8rem',
      fontWeight: '600',
      letterSpacing: '0.3px',
      color: '#4a3b2c',
      marginBottom: '1.5rem',
    },
    badgeIcon: {
      marginRight: '6px',
    },
    heading1: {
      fontSize: windowWidth <= 900 ? '2.5rem' : '3.2rem',
      fontWeight: '800',
      lineHeight: '1.2',
      marginBottom: '1rem',
      color: '#1e2a3a',
    },
    highlight: {
      background: 'linear-gradient(120deg, #d9a13b, #f3c26b)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      display: 'inline-block',
    },
    subheading: {
      fontSize: windowWidth <= 900 ? '1.3rem' : '1.5rem',
      fontWeight: '600',
      marginBottom: '1.2rem',
      color: '#2c3e4e',
      letterSpacing: '-0.3px',
    },
    description: {
      fontSize: '1rem',
      lineHeight: '1.6',
      color: '#2d3e4b',
      marginBottom: '2rem',
      maxWidth: windowWidth <= 900 ? '100%' : '90%',
      marginLeft: windowWidth <= 900 ? 'auto' : '0',
      marginRight: windowWidth <= 900 ? 'auto' : '0',
      fontWeight: '400',
    },
    buttonsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      marginTop: '0.5rem',
      justifyContent: windowWidth <= 900 ? 'center' : 'flex-start',
    },
    primaryBtn: {
      background: '#1e2f3c',
      color: 'white',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
      border: '1px solid #2c3e4e',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: '600',
      fontSize: windowWidth <= 480 ? '0.85rem' : '0.95rem',
      padding: windowWidth <= 480 ? '0.6rem 1.4rem' : '0.8rem 1.8rem',
      borderRadius: '40px',
      transition: 'all 0.25s ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
    },
    outlineBtn: {
      background: 'transparent',
      border: '1.5px solid #b9aa97',
      color: '#3b2c1e',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: '600',
      fontSize: windowWidth <= 480 ? '0.85rem' : '0.95rem',
      padding: windowWidth <= 480 ? '0.6rem 1.4rem' : '0.8rem 1.8rem',
      borderRadius: '40px',
      transition: 'all 0.25s ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
    },
    btnLink: {
      textDecoration: 'none',
    },
    heroImage: {
      flex: '0.9',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    imageFrame: {
      background: 'linear-gradient(145deg, #f3ede5, #fff4ea)',
      borderRadius: '38% 62% 70% 30% / 42% 40% 60% 58%',
      padding: '0.8rem',
      boxShadow: '0 30px 35px -18px rgba(0, 0, 0, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.6)',
      transition: 'transform 0.3s ease',
      maxWidth: windowWidth <= 900 ? '280px' : '100%',
      margin: '0 auto',
    },
    profileImg: {
      width: '100%',
      maxWidth: windowWidth <= 900 ? '280px' : '360px',
      height: 'auto',
      borderRadius: '32% 68% 70% 30% / 36% 38% 62% 64%',
      objectFit: 'cover',
      display: 'block',
      background: '#e9dfd1',
      boxShadow: '0 20px 30px -12px rgba(0, 0, 0, 0.2)',
    },
  };

  // Fix image path - try multiple possible locations
  const getImagePath = () => {
    // Try different possible paths
    const possiblePaths = [
      '/src/assets/images/proimage.png',
      '/assets/images/proimage.png',
      'src/assets/images/proimage.png',
      'assets/images/proimage.png',
      './assets/images/proimage.png',
      '/proimage.png'
    ];
    
    // Return the most likely correct path based on your folder structure
    // Since your image is in src/assets/images/, use:
    return '/src/assets/images/proimage.png';
  };

  return (
    <section style={styles.hero}>
      <div style={styles.heroContainer}>
        {/* Left Side - Content */}
        <div style={styles.heroContent}>
          <span style={styles.badge}>
            <i className="fas fa-code" style={styles.badgeIcon}></i> FullStack Developer
          </span>
          
          <h1 style={styles.heading1}>
            Suganya <br />
            <span style={styles.highlight}>Thiyagarajan</span>
          </h1>
          
          <h3 style={styles.subheading}>
            Building Clean & Responsive Web Applications
          </h3>
          
          <p style={styles.description}>
            Motivated Computer Science graduate with strong foundation in 
            frontend development and machine learning. Passionate about 
            creating user-friendly and modern web applications. Hands-on 
            experience in React, JavaScript, and real-time projects.
          </p>
          
          <div style={styles.buttonsContainer}>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.btnLink}
            >
              <button 
                style={{
                  ...styles.primaryBtn,
                  background: primaryHover ? '#10232e' : '#1e2f3c',
                  transform: primaryHover ? 'translateY(-3px)' : 'translateY(0)',
                  boxShadow: primaryHover ? '0 12px 20px -10px rgba(0, 0, 0, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.05)'
                }}
                onMouseEnter={() => setPrimaryHover(true)}
                onMouseLeave={() => setPrimaryHover(false)}
              >
                <i className="fas fa-file-alt"></i> Resume
              </button>
            </a>
            
            <button 
              style={{
                ...styles.outlineBtn,
                background: outlineHover ? '#f1ede8' : 'transparent',
                borderColor: outlineHover ? '#8b765c' : '#b9aa97',
                transform: outlineHover ? 'translateY(-2px)' : 'translateY(0)'
              }}
              onMouseEnter={() => setOutlineHover(true)}
              onMouseLeave={() => setOutlineHover(false)}
              onClick={handleContact}
            >
              <i className="fas fa-paper-plane"></i> Contact
            </button>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div style={styles.heroImage}>
          <div 
            style={{
              ...styles.imageFrame,
              transform: frameHover ? 'scale(1.01)' : 'scale(1)'
            }}
            onMouseEnter={() => setFrameHover(true)}
            onMouseLeave={() => setFrameHover(false)}
          >
            <img 
              style={styles.profileImg}
              src={getImagePath()}
              alt="Suganya Thiyagarajan"
              onError={(e) => {
                // If image fails to load, try alternative path
                e.target.src = '/assets/images/proimage.png';
                console.error('Image failed to load. Make sure proimage.png exists in src/assets/images/ folder');
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;