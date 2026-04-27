

// import React, { useState, useEffect } from 'react';

// const About = () => {
//   const [activeTab, setActiveTab] = useState('objective');
//   const [animated, setAnimated] = useState(false);

//   useEffect(() => {
//     setAnimated(true);
//   }, []);

//   // Your Career Objective from resume
//   const careerObjective = `Enthusiastic and detail-oriented Computer Science graduate with hands-on experience in web and application development. Skilled in building responsive websites and developing real-time projects through internships and portfolio work. Strong foundation in frontend technologies and problem-solving, with a passion for creating user-friendly digital solutions. Seeking an entry-level Software Developer role in a growth-oriented organization where I can contribute and enhance my technical skills.`;

//   // Education data
//   const educationData = [
//     {
//       year: "2022-2025",
//       degree: "Bachelor of Science in Computer Science",
//       institution: "Periyar Maniammai Institute of Science and Technology, Thanjavur",
//       score: "CGPA: 7.46"
//     },
//     {
//       year: "2021-2022",
//       degree: "Higher Secondary Certificate (HSC)",
//       institution: "Girls Government Higher Secondary School",
//       score: "Score: 58%"
//     },
//     {
//       year: "2019-2020",
//       degree: "Secondary School Leaving Certificate (SSLC)",
//       institution: "Rajah's Higher Secondary School",
//       score: "Score: 54%"
//     }
//   ];

//   // Technical Skills
//   const frontendSkills = [
//     { name: "React JS", icon: "⚛️", level: 85, color: "#61DAFB" },
//     { name: "JavaScript", icon: "🟨", level: 85, color: "#F7DF1E" },
//     { name: "HTML5", icon: "🌐", level: 90, color: "#E44D26" },
//     { name: "CSS3", icon: "🎨", level: 88, color: "#264DE4" }
//   ];

//   const backendSkills = [
//     { name: "Python", icon: "🐍", level: 75, color: "#3776AB" },
//     { name: "MySQL", icon: "🗄️", level: 72, color: "#4479A1" },
//     { name: "MongoDB", icon: "🍃", level: 65, color: "#47A248" }
//   ];

//   const toolsSkills = [
//     { name: "Git/GitHub", icon: "📝", level: 80, color: "#F05032" },
//     { name: "VS Code", icon: "💻", level: 88, color: "#007ACC" },
//     { name: "API Integration", icon: "🔗", level: 78, color: "#00B894" }
//   ];

//   // Soft Skills
//   const softSkills = [
//     { name: "Quick Learner", icon: "🚀", desc: "Adapts rapidly to new technologies" },
//     { name: "Problem Solving", icon: "🧩", desc: "Analytical and solution-oriented" },
//     { name: "Team Collaboration", icon: "🤝", desc: "Works effectively in teams" },
//     { name: "Time Management", icon: "⏰", desc: "Prioritizes tasks efficiently" },
//     { name: "Communication", icon: "💬", desc: "Clear and effective communicator" },
//     { name: "Dedication", icon: "🎯", desc: "Committed to project success" }
//   ];

//   return (
//     <section style={{
//       background: '#ffffff',
//       fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
//       padding: '5rem 2rem'
//     }}>
//       <div style={{
//         maxWidth: '1280px',
//         margin: '0 auto'
//       }}>
//         {/* Career Objective Card */}
//         <div style={{
//           background: 'linear-gradient(135deg, #fff9f0, #fff5e8)',
//           borderRadius: '24px',
//           padding: '2rem',
//           marginBottom: '3rem',
//           border: '1px solid #f0e0c8',
//           boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
//         }}>
//           <div style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '10px',
//             marginBottom: '1rem'
//           }}>
//             <span style={{ fontSize: "2rem" }}>🎯</span>
//             <h2 style={{
//               color: '#d9a13b',
//               fontSize: '1.6rem',
//               fontWeight: '700',
//               margin: 0
//             }}>Career Objective</h2>
//           </div>
//           <p style={{
//             color: '#4a5568',
//             lineHeight: '1.8',
//             fontSize: '1rem',
//             textAlign: 'justify',
//             margin: 0
//           }}>{careerObjective}</p>
//         </div>

//         {/* Tabs */}
//         <div style={{
//           display: 'flex',
//           gap: '0.8rem',
//           flexWrap: 'wrap',
//           marginBottom: '2rem',
//           borderBottom: '2px solid #f0e6d8',
//           paddingBottom: '0.5rem'
//         }}>
//           <button 
//             onClick={() => setActiveTab("objective")}
//             style={{
//               background: activeTab === "objective" ? '#fff0e0' : 'transparent',
//               border: 'none',
//               padding: '0.7rem 1.8rem',
//               fontSize: '0.95rem',
//               fontWeight: '600',
//               cursor: 'pointer',
//               color: activeTab === "objective" ? '#d9a13b' : '#718096',
//               borderRadius: '40px',
//               transition: 'all 0.3s ease'
//             }}
//           >
//             📋 Overview
//           </button>
//           <button 
//             onClick={() => setActiveTab("education")}
//             style={{
//               background: activeTab === "education" ? '#fff0e0' : 'transparent',
//               border: 'none',
//               padding: '0.7rem 1.8rem',
//               fontSize: '0.95rem',
//               fontWeight: '600',
//               cursor: 'pointer',
//               color: activeTab === "education" ? '#d9a13b' : '#718096',
//               borderRadius: '40px',
//               transition: 'all 0.3s ease'
//             }}
//           >
//             🎓 Education
//           </button>
//           <button 
//             onClick={() => setActiveTab("skills")}
//             style={{
//               background: activeTab === "skills" ? '#fff0e0' : 'transparent',
//               border: 'none',
//               padding: '0.7rem 1.8rem',
//               fontSize: '0.95rem',
//               fontWeight: '600',
//               cursor: 'pointer',
//               color: activeTab === "skills" ? '#d9a13b' : '#718096',
//               borderRadius: '40px',
//               transition: 'all 0.3s ease'
//             }}
//           >
//             ⚡ Skills
//           </button>
//         </div>

//         {/* Overview Tab */}
//         {activeTab === "objective" && (
//           <div>
//             <div style={{
//               background: '#faf9f8',
//               borderRadius: '24px',
//               padding: '2rem',
//               marginBottom: '2rem',
//               border: '1px solid #ede8e0'
//             }}>
//               <h3 style={{
//                 color: '#d9a13b',
//                 marginBottom: '1rem',
//                 fontSize: '1.3rem'
//               }}>👋 About Me</h3>
//               <p style={{
//                 color: '#4a5568',
//                 lineHeight: '1.7',
//                 marginBottom: '1.5rem'
//               }}>{careerObjective}</p>
//               <div style={{
//                 display: 'flex',
//                 flexWrap: 'wrap',
//                 gap: '0.8rem'
//               }}>
//                 <span style={{
//                   background: 'rgba(217, 161, 59, 0.1)',
//                   padding: '0.3rem 1rem',
//                   borderRadius: '30px',
//                   color: '#d9a13b',
//                   fontSize: '0.85rem'
//                 }}>📍 Thanjavur, India</span>
//                 <span style={{
//                   background: 'rgba(217, 161, 59, 0.1)',
//                   padding: '0.3rem 1rem',
//                   borderRadius: '30px',
//                   color: '#d9a13b',
//                   fontSize: '0.85rem'
//                 }}>🎓 B.Sc Computer Science</span>
//                 <span style={{
//                   background: 'rgba(217, 161, 59, 0.1)',
//                   padding: '0.3rem 1rem',
//                   borderRadius: '30px',
//                   color: '#d9a13b',
//                   fontSize: '0.85rem'
//                 }}>💻 Frontend Developer</span>
//               </div>
//             </div>
//             <div style={{
//               display: 'flex',
//               justifyContent: 'space-around',
//               flexWrap: 'wrap',
//               gap: '2rem',
//               marginTop: '3rem',
//               paddingTop: '2rem',
//               borderTop: '1px solid #ede8e0'
//             }}>
//               <div style={{ textAlign: 'center' }}>
//                 <div style={{
//                   fontSize: '2rem',
//                   fontWeight: '800',
//                   color: '#d9a13b'
//                 }}>3+</div>
//                 <div style={{
//                   color: '#94a3b8',
//                   fontSize: '0.8rem',
//                   marginTop: '0.3rem'
//                 }}>Technologies</div>
//               </div>
//               <div style={{ textAlign: 'center' }}>
//                 <div style={{
//                   fontSize: '2rem',
//                   fontWeight: '800',
//                   color: '#d9a13b'
//                 }}>10+</div>
//                 <div style={{
//                   color: '#94a3b8',
//                   fontSize: '0.8rem',
//                   marginTop: '0.3rem'
//                 }}>Projects</div>
//               </div>
//               <div style={{ textAlign: 'center' }}>
//                 <div style={{
//                   fontSize: '2rem',
//                   fontWeight: '800',
//                   color: '#d9a13b'
//                 }}>6+</div>
//                 <div style={{
//                   color: '#94a3b8',
//                   fontSize: '0.8rem',
//                   marginTop: '0.3rem'
//                 }}>Soft Skills</div>
//               </div>
//               <div style={{ textAlign: 'center' }}>
//                 <div style={{
//                   fontSize: '2rem',
//                   fontWeight: '800',
//                   color: '#d9a13b'
//                 }}>2025</div>
//                 <div style={{
//                   color: '#94a3b8',
//                   fontSize: '0.8rem',
//                   marginTop: '0.3rem'
//                 }}>Graduation</div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Education Tab */}
//         {activeTab === "education" && (
//           <div style={{
//             position: 'relative',
//             paddingLeft: '2rem'
//           }}>
//             <div style={{
//               position: 'absolute',
//               left: 0,
//               top: 0,
//               bottom: 0,
//               width: '3px',
//               background: 'linear-gradient(to bottom, #d9a13b, #f3c26b)',
//               borderRadius: '3px'
//             }}></div>
//             {educationData.map((item, index) => (
//               <div key={index} style={{
//                 position: 'relative',
//                 marginBottom: '2.5rem',
//                 paddingLeft: '2rem'
//               }}>
//                 <div style={{
//                   position: 'absolute',
//                   left: '-2.2rem',
//                   top: 0,
//                   width: '14px',
//                   height: '14px',
//                   background: '#d9a13b',
//                   borderRadius: '50%',
//                   border: '3px solid white',
//                   boxShadow: '0 0 0 2px #d9a13b'
//                 }}></div>
//                 <div style={{
//                   fontSize: '0.75rem',
//                   color: '#d9a13b',
//                   fontWeight: '700',
//                   marginBottom: '0.3rem',
//                   letterSpacing: '0.5px'
//                 }}>{item.year}</div>
//                 <div style={{
//                   fontSize: '1.2rem',
//                   fontWeight: '700',
//                   color: '#1a2a3a',
//                   marginBottom: '0.2rem'
//                 }}>{item.degree}</div>
//                 <div style={{
//                   color: '#d9a13b',
//                   fontSize: '0.9rem',
//                   fontWeight: '500',
//                   marginBottom: '0.5rem'
//                 }}>{item.institution}</div>
//                 <div style={{
//                   color: '#d9a13b',
//                   fontSize: '0.8rem',
//                   marginBottom: '0.5rem'
//                 }}>{item.score}</div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Skills Tab */}
//         {activeTab === "skills" && (
//           <div>
//             {/* Frontend Skills */}
//             <div style={{ marginBottom: '2.5rem' }}>
//               <div style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '0.8rem',
//                 marginBottom: '1.5rem',
//                 paddingBottom: '0.5rem',
//                 borderBottom: '2px solid #f0e6d8'
//               }}>
//                 <span style={{ fontSize: '1.5rem' }}>🎨</span>
//                 <h3 style={{
//                   fontSize: '1.3rem',
//                   fontWeight: '700',
//                   color: '#1a2a3a',
//                   margin: 0
//                 }}>Frontend Development</h3>
//               </div>
//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
//                 gap: '1.2rem'
//               }}>
//                 {frontendSkills.map((skill, idx) => (
//                   <div key={idx} style={{
//                     background: 'linear-gradient(135deg, #faf9f8, #ffffff)',
//                     borderRadius: '16px',
//                     padding: '1.2rem',
//                     transition: 'all 0.3s ease',
//                     border: '1px solid #ede8e0'
//                   }}>
//                     <div style={{
//                       display: 'flex',
//                       justifyContent: 'space-between',
//                       alignItems: 'center',
//                       marginBottom: '0.8rem'
//                     }}>
//                       <div style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '0.6rem'
//                       }}>
//                         <span style={{ fontSize: '1.3rem' }}>{skill.icon}</span>
//                         <span style={{
//                           fontSize: '1rem',
//                           fontWeight: '600',
//                           color: '#1a2a3a'
//                         }}>{skill.name}</span>
//                       </div>
//                       <span style={{
//                         color: '#d9a13b',
//                         fontWeight: '700',
//                         fontSize: '0.85rem',
//                         background: 'rgba(217, 161, 59, 0.1)',
//                         padding: '0.2rem 0.5rem',
//                         borderRadius: '20px'
//                       }}>{skill.level}%</span>
//                     </div>
//                     <div style={{
//                       background: '#e2e8f0',
//                       height: '6px',
//                       borderRadius: '10px',
//                       overflow: 'hidden'
//                     }}>
//                       <div style={{
//                         width: animated ? `${skill.level}%` : '0%',
//                         height: '100%',
//                         borderRadius: '10px',
//                         background: skill.color,
//                         transition: 'width 1s ease'
//                       }}></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Backend Skills */}
//             <div style={{ marginBottom: '2.5rem' }}>
//               <div style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '0.8rem',
//                 marginBottom: '1.5rem',
//                 paddingBottom: '0.5rem',
//                 borderBottom: '2px solid #f0e6d8'
//               }}>
//                 <span style={{ fontSize: '1.5rem' }}>⚙️</span>
//                 <h3 style={{
//                   fontSize: '1.3rem',
//                   fontWeight: '700',
//                   color: '#1a2a3a',
//                   margin: 0
//                 }}>Backend & Database</h3>
//               </div>
//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
//                 gap: '1.2rem'
//               }}>
//                 {backendSkills.map((skill, idx) => (
//                   <div key={idx} style={{
//                     background: 'linear-gradient(135deg, #faf9f8, #ffffff)',
//                     borderRadius: '16px',
//                     padding: '1.2rem',
//                     transition: 'all 0.3s ease',
//                     border: '1px solid #ede8e0'
//                   }}>
//                     <div style={{
//                       display: 'flex',
//                       justifyContent: 'space-between',
//                       alignItems: 'center',
//                       marginBottom: '0.8rem'
//                     }}>
//                       <div style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '0.6rem'
//                       }}>
//                         <span style={{ fontSize: '1.3rem' }}>{skill.icon}</span>
//                         <span style={{
//                           fontSize: '1rem',
//                           fontWeight: '600',
//                           color: '#1a2a3a'
//                         }}>{skill.name}</span>
//                       </div>
//                       <span style={{
//                         color: '#d9a13b',
//                         fontWeight: '700',
//                         fontSize: '0.85rem',
//                         background: 'rgba(217, 161, 59, 0.1)',
//                         padding: '0.2rem 0.5rem',
//                         borderRadius: '20px'
//                       }}>{skill.level}%</span>
//                     </div>
//                     <div style={{
//                       background: '#e2e8f0',
//                       height: '6px',
//                       borderRadius: '10px',
//                       overflow: 'hidden'
//                     }}>
//                       <div style={{
//                         width: animated ? `${skill.level}%` : '0%',
//                         height: '100%',
//                         borderRadius: '10px',
//                         background: skill.color,
//                         transition: 'width 1s ease'
//                       }}></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Tools Skills */}
//             <div style={{ marginBottom: '2.5rem' }}>
//               <div style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '0.8rem',
//                 marginBottom: '1.5rem',
//                 paddingBottom: '0.5rem',
//                 borderBottom: '2px solid #f0e6d8'
//               }}>
//                 <span style={{ fontSize: '1.5rem' }}>🛠️</span>
//                 <h3 style={{
//                   fontSize: '1.3rem',
//                   fontWeight: '700',
//                   color: '#1a2a3a',
//                   margin: 0
//                 }}>Tools & Technologies</h3>
//               </div>
//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
//                 gap: '1.2rem'
//               }}>
//                 {toolsSkills.map((skill, idx) => (
//                   <div key={idx} style={{
//                     background: 'linear-gradient(135deg, #faf9f8, #ffffff)',
//                     borderRadius: '16px',
//                     padding: '1.2rem',
//                     transition: 'all 0.3s ease',
//                     border: '1px solid #ede8e0'
//                   }}>
//                     <div style={{
//                       display: 'flex',
//                       justifyContent: 'space-between',
//                       alignItems: 'center',
//                       marginBottom: '0.8rem'
//                     }}>
//                       <div style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '0.6rem'
//                       }}>
//                         <span style={{ fontSize: '1.3rem' }}>{skill.icon}</span>
//                         <span style={{
//                           fontSize: '1rem',
//                           fontWeight: '600',
//                           color: '#1a2a3a'
//                         }}>{skill.name}</span>
//                       </div>
//                       <span style={{
//                         color: '#d9a13b',
//                         fontWeight: '700',
//                         fontSize: '0.85rem',
//                         background: 'rgba(217, 161, 59, 0.1)',
//                         padding: '0.2rem 0.5rem',
//                         borderRadius: '20px'
//                       }}>{skill.level}%</span>
//                     </div>
//                     <div style={{
//                       background: '#e2e8f0',
//                       height: '6px',
//                       borderRadius: '10px',
//                       overflow: 'hidden'
//                     }}>
//                       <div style={{
//                         width: animated ? `${skill.level}%` : '0%',
//                         height: '100%',
//                         borderRadius: '10px',
//                         background: skill.color,
//                         transition: 'width 1s ease'
//                       }}></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Soft Skills */}
//             <div style={{ marginBottom: '2.5rem' }}>
//               <div style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '0.8rem',
//                 marginBottom: '1.5rem',
//                 paddingBottom: '0.5rem',
//                 borderBottom: '2px solid #f0e6d8'
//               }}>
//                 <span style={{ fontSize: '1.5rem' }}>🌟</span>
//                 <h3 style={{
//                   fontSize: '1.3rem',
//                   fontWeight: '700',
//                   color: '#1a2a3a',
//                   margin: 0
//                 }}>Soft Skills</h3>
//               </div>
//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
//                 gap: '1.2rem'
//               }}>
//                 {softSkills.map((skill, idx) => (
//                   <div key={idx} style={{
//                     background: 'linear-gradient(135deg, #faf9f8, #ffffff)',
//                     borderRadius: '16px',
//                     padding: '1.2rem',
//                     transition: 'all 0.3s ease',
//                     border: '1px solid #ede8e0',
//                     textAlign: 'center'
//                   }}>
//                     <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{skill.icon}</div>
//                     <div style={{
//                       fontSize: '1rem',
//                       fontWeight: '700',
//                       color: '#1a2a3a',
//                       marginBottom: '0.3rem'
//                     }}>{skill.name}</div>
//                     <div style={{
//                       fontSize: '0.8rem',
//                       color: '#718096',
//                       lineHeight: '1.4'
//                     }}>{skill.desc}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default About;
import React, { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Education Data
  const educationData = [
    {
      year: "2022 - 2025",
      degree: "B.Sc Computer Science",
      institution: "Periyar Maniammai Institute of Science and Technology, Thanjavur",
      score: "CGPA: 7.46",
      icon: "🎓"
    },
    {
      year: "2021 - 2022",
      degree: "Higher Secondary Certificate",
      institution: "Girls Government Higher Secondary School",
      score: "58%",
      icon: "📚"
    },
    {
      year: "2019 - 2020",
      degree: "SSLC",
      institution: "Rajah's Higher Secondary School",
      score: "54%",
      icon: "📖"
    }
  ];

  // Skills Categories Data
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      color: "#61DAFB",
      bgColor: "#EBF8FF",
      skills: [
        { name: "React JS", icon: "⚛️" },
        { name: "JavaScript", icon: "🟨" },
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "Responsive Design", icon: "📱" }
      ]
    },
    {
      title: "Backend & Database",
      icon: "⚙️",
      color: "#00B894",
      bgColor: "#E8F8F5",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "Node JS", icon: "🟢" },
        { name: "MySQL", icon: "🗄️" },
        { name: "MongoDB", icon: "🍃" },
        { name: "REST API", icon: "🔗" }
      ]
    },
    {
      title: "Tools & Workflow",
      icon: "🛠️",
      color: "#F05032",
      bgColor: "#FEF3F0",
      skills: [
        { name: "GitHub", icon: "🐙" },
        { name: "Git", icon: "📝" },
        { name: "VS Code", icon: "💻" },
        { name: "Deployment", icon: "🚀" },
        { name: "Debugging", icon: "🎯" }
      ]
    },
    {
      title: "Professional Strengths",
      icon: "💪",
      color: "#d9a13b",
      bgColor: "#FFF8F0",
      skills: [
        { name: "Problem Solving", icon: "🧠" },
        { name: "Quick Learner", icon: "⚡" },
        { name: "Team Work", icon: "🤝" },
        { name: "Communication", icon: "💬" },
        { name: "Time Management", icon: "⏰" }
      ]
    }
  ];

  return (
    <section style={{
      background: '#ffffff',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      padding: '100px 24px',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>

        {/* SECTION 1: HERO HEADER */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px',
          animation: 'fadeInUp 0.6s ease-out'
        }}>
          <h1 style={{
            fontSize: '56px',
            fontWeight: '700',
            color: '#1a1a1a',
            marginBottom: '16px',
            letterSpacing: '-1.5px'
          }}>
            About <span style={{
              background: 'linear-gradient(135deg, #d9a13b, #f3c26b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Me</span>
          </h1>
          <p style={{
            color: '#6c757d',
            fontSize: '18px',
            maxWidth: '550px',
            margin: '0 auto 24px auto',
            lineHeight: '1.6'
          }}>
            Passionate Computer Science graduate focused on building clean and scalable digital products.
          </p>
          <div style={{
            width: '80px',
            height: '3px',
            background: 'linear-gradient(90deg, #d9a13b, #f3c26b)',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>

        {/* SECTION 2: PROFILE CARD - Glassmorphism */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: '28px',
          padding: '48px',
          marginBottom: '60px',
          border: '1px solid rgba(217, 161, 59, 0.2)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.1)';
          e.currentTarget.style.borderColor = 'rgba(217, 161, 59, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.05)';
          e.currentTarget.style.borderColor = 'rgba(217, 161, 59, 0.2)';
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
            flexWrap: 'wrap'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              background: 'linear-gradient(135deg, #d9a13b, #f3c26b)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 10px 20px rgba(217, 161, 59, 0.2)'
            }}>
              <span style={{ fontSize: "32px" }}>🎯</span>
            </div>
            <h2 style={{
              color: '#1a1a1a',
              fontSize: '28px',
              fontWeight: '600',
              margin: 0
            }}>Career Objective</h2>
          </div>
          <p style={{
            color: '#495057',
            lineHeight: '1.8',
            fontSize: '16px',
            marginBottom: '32px'
          }}>
            Enthusiastic and detail-oriented Computer Science graduate with hands-on experience in web 
            and application development. Skilled in building responsive websites and developing real-time 
            projects through internships and portfolio work. Strong foundation in frontend technologies 
            and problem-solving, with a passion for creating user-friendly digital solutions. Seeking an 
            entry-level Software Developer role in a growth-oriented organization where I can contribute 
            and enhance my technical skills.
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            {['Frontend Developer', 'React JS Developer', 'Problem Solver'].map((badge, idx) => (
              <span key={idx} style={{
                background: 'linear-gradient(135deg, #f8f9fa, #ffffff)',
                padding: '8px 20px',
                borderRadius: '50px',
                color: '#d9a13b',
                fontSize: '14px',
                fontWeight: '500',
                border: '1px solid #e9ecef',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #d9a13b, #f3c26b)';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #f8f9fa, #ffffff)';
                e.currentTarget.style.color = '#d9a13b';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* SECTION 3: TAB NAVIGATION */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          marginBottom: '48px',
          borderBottom: '2px solid #f0f0f0',
          paddingBottom: '16px',
          flexWrap: 'wrap'
        }}>
          {[
            { id: 'overview', label: 'Overview', icon: '👤' },
            { id: 'education', label: 'Education', icon: '🎓' },
            { id: 'skills', label: 'Skills', icon: '⚡' }
          ].map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: activeTab === tab.id ? '#1a1a1a' : 'transparent',
                border: 'none',
                padding: '12px 32px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                color: activeTab === tab.id ? '#ffffff' : '#6c757d',
                borderRadius: '50px',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: activeTab === tab.id ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none'
              }}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* OVERVIEW TAB - 2 Column Layout */}
        {activeTab === "overview" && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}>
            {/* Left Side - About Paragraph */}
            <div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#1a1a1a',
                marginBottom: '16px'
              }}>Professional Journey</h3>
              <p style={{
                color: '#495057',
                lineHeight: '1.8',
                fontSize: '15px',
                marginBottom: '0'
              }}>
                I'm a passionate Computer Science graduate dedicated to creating innovative web solutions. 
                With strong expertise in modern frontend technologies, I focus on building responsive, 
                user-centric applications that deliver exceptional experiences. My journey includes developing 
                real-time projects and continuously expanding my technical toolkit to stay ahead in the 
                fast-evolving tech landscape.
              </p>
            </div>

            {/* Right Side - Statistic Cards */}
            <div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '20px',
                marginBottom: '0'
              }}>
                {[
                  { number: '5+', label: 'Projects Completed', icon: '🚀' },
                  { number: '2025', label: 'Graduate', icon: '🎓' },
                  { number: '6+', label: 'Core Skills', icon: '⚡' },
                  { number: 'Fast', label: 'Learner', icon: '🧠' }
                ].map((stat, idx) => (
                  <div key={idx} style={{
                    background: '#ffffff',
                    border: '1px solid #e9ecef',
                    borderRadius: '20px',
                    padding: '24px 16px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.08)';
                    e.currentTarget.style.borderColor = '#d9a13b';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = '#e9ecef';
                  }}>
                    <div style={{ fontSize: '32px', marginBottom: '12px' }}>{stat.icon}</div>
                    <div style={{ fontSize: '28px', fontWeight: '700', color: '#d9a13b', marginBottom: '4px' }}>{stat.number}</div>
                    <div style={{ fontSize: '13px', color: '#6c757d', fontWeight: '500' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* EDUCATION TAB - Vertical Timeline */}
        {activeTab === "education" && (
          <div style={{
            position: 'relative',
            paddingLeft: '40px'
          }}>
            {/* Timeline Line */}
            <div style={{
              position: 'absolute',
              left: '20px',
              top: '0',
              bottom: '0',
              width: '2px',
              background: 'linear-gradient(180deg, #d9a13b 0%, #e9ecef 100%)'
            }}></div>
            
            {educationData.map((item, index) => (
              <div key={index} style={{
                position: 'relative',
                marginBottom: '40px',
                paddingLeft: '40px'
              }}>
                {/* Timeline Dot */}
                <div style={{
                  position: 'absolute',
                  left: '-32px',
                  top: '0',
                  width: '16px',
                  height: '16px',
                  background: '#d9a13b',
                  borderRadius: '50%',
                  border: '3px solid #ffffff',
                  boxShadow: '0 0 0 2px #e9ecef',
                  transition: 'all 0.3s ease'
                }}></div>
                
                {/* Education Card */}
                <div style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: '32px',
                  border: '1px solid #e9ecef',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(10px)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.borderColor = '#d9a13b';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#e9ecef';
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '12px',
                    marginBottom: '16px'
                  }}>
                    <span style={{
                      fontSize: '13px',
                      color: '#d9a13b',
                      fontWeight: '600',
                      letterSpacing: '0.5px'
                    }}>{item.year}</span>
                    <span style={{ fontSize: '28px' }}>{item.icon}</span>
                  </div>
                  <h3 style={{
                    fontSize: '22px',
                    fontWeight: '600',
                    color: '#1a1a1a',
                    marginBottom: '8px'
                  }}>{item.degree}</h3>
                  <p style={{
                    color: '#6c757d',
                    fontSize: '14px',
                    marginBottom: '12px',
                    lineHeight: '1.5'
                  }}>{item.institution}</p>
                  <span style={{
                    display: 'inline-block',
                    background: '#f8f9fa',
                    padding: '6px 16px',
                    borderRadius: '12px',
                    color: '#d9a13b',
                    fontSize: '13px',
                    fontWeight: '500'
                  }}>{item.score}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SKILLS TAB - Premium Large Cards */}
        {activeTab === "skills" && (
          <div>
            <div style={{
              textAlign: 'center',
              marginBottom: '48px'
            }}>
              <h2 style={{
                fontSize: '36px',
                fontWeight: '700',
                color: '#1a1a1a',
                marginBottom: '12px'
              }}>
                Skills & <span style={{ color: '#d9a13b' }}>Expertise</span>
              </h2>
              <p style={{
                color: '#6c757d',
                fontSize: '16px',
                maxWidth: '550px',
                margin: '0 auto'
              }}>
                Technologies and strengths used to build scalable modern applications.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '28px'
            }}>
              {skillCategories.map((category, idx) => (
                <div key={idx} style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '28px',
                  border: '1px solid #e9ecef',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = category.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#e9ecef';
                }}>
                  {/* Top Border Color */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: category.color
                  }}></div>
                  
                  {/* Card Header */}
                  <div style={{
                    textAlign: 'center',
                    marginBottom: '24px'
                  }}>
                    <div style={{
                      fontSize: '48px',
                      marginBottom: '12px'
                    }}>{category.icon}</div>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: '700',
                      color: '#1a1a1a',
                      margin: 0
                    }}>{category.title}</h3>
                  </div>

                  {/* Premium Pill Badges */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px',
                    justifyContent: 'center'
                  }}>
                    {category.skills.map((skill, skillIdx) => (
                      <span key={skillIdx} style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: category.bgColor,
                        padding: '8px 16px',
                        borderRadius: '40px',
                        fontSize: '13px',
                        fontWeight: '500',
                        color: '#1a1a1a',
                        border: `1px solid ${category.color}30`,
                        transition: 'all 0.2s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = category.color;
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.borderColor = category.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = category.bgColor;
                        e.currentTarget.style.color = '#1a1a1a';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderColor = `${category.color}30`;
                      }}>
                        <span style={{ fontSize: '14px' }}>{skill.icon}</span>
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Add animation keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .about-section {
            padding: 60px 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;