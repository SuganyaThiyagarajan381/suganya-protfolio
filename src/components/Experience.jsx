// // Skills.jsx - Modern & Professional Design
// import React, { useState, useEffect } from 'react';

// const Skills = () => {
//   const [animated, setAnimated] = useState(false);

//   useEffect(() => {
//     setAnimated(true);
//   }, []);

//   const technicalSkills = [
//     {
//       name: "HTML5",
//       desc: "Semantic markup, SEO-friendly structure, accessibility standards",
//       icon: "🌐",
//       level: 92,
//       color: "#E44D26"
//     },
//     {
//       name: "CSS3",
//       desc: "Flexbox, Grid, Animations, Responsive Design, Tailwind",
//       icon: "🎨",
//       level: 88,
//       color: "#264DE4"
//     },
//     {
//       name: "JavaScript",
//       desc: "ES6+, DOM manipulation, Async/Await, APIs, OOP",
//       icon: "⚡",
//       level: 85,
//       color: "#F7DF1E"
//     },
//     {
//       name: "React JS",
//       desc: "Hooks, Context API, Router, Redux, Component Architecture",
//       icon: "⚛️",
//       level: 80,
//       color: "#61DAFB"
//     },
//     {
//       name: "UI/UX Design",
//       desc: "Figma, Wireframing, Prototyping, User-centered design",
//       icon: "🎯",
//       level: 78,
//       color: "#FF6B6B"
//     },
//     {
//       name: "API Integration",
//       desc: "REST APIs, Axios, Fetch, Google APIs Integration",
//       icon: "🔗",
//       level: 75,
//       color: "#00B894"
//     },
//     {
//       name: "MySQL",
//       desc: "Database design, Queries, Joins, Optimization",
//       icon: "🗄️",
//       level: 70,
//       color: "#4479A1"
//     },
//     {
//       name: "MongoDB",
//       desc: "NoSQL, Mongoose, CRUD operations, Aggregation",
//       icon: "🍃",
//       level: 65,
//       color: "#47A248"
//     }
//   ];

//   const softSkills = [
//     { name: "Quick Learner", icon: "🚀", desc: "Adapts rapidly to new technologies and frameworks" },
//     { name: "Problem Solving", icon: "🧩", desc: "Analytical mindset with creative solutions" },
//     { name: "Team Collaboration", icon: "🤝", desc: "Works effectively in cross-functional teams" },
//     { name: "Time Management", icon: "⏰", desc: "Prioritizes tasks and meets deadlines" },
//     { name: "Communication", icon: "💬", desc: "Clear verbal and written communication" },
//     { name: "Attention to Detail", icon: "🔍", desc: "Pixel-perfect implementation and precision" }
//   ];

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&display=swap');
        
//         .skills-section {
//           padding: 5rem 2rem;
//           background: linear-gradient(135deg, #fefcf8 0%, #fff9f0 100%);
//           font-family: 'Inter', sans-serif;
//           position: relative;
//           overflow: hidden;
//         }
        
//         .skills-section::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           height: 100%;
//           background: radial-gradient(circle at 10% 20%, rgba(217, 161, 59, 0.05), transparent 50%);
//           pointer-events: none;
//         }
        
//         .skills-container-grand {
//           max-width: 1280px;
//           margin: 0 auto;
//         }
        
//         /* Section Header */
//         .section-header {
//           text-align: center;
//           margin-bottom: 3.5rem;
//         }
        
//         .section-subtitle {
//           display: inline-block;
//           background: rgba(217, 161, 59, 0.12);
//           padding: 0.3rem 1rem;
//           border-radius: 30px;
//           font-size: 0.8rem;
//           font-weight: 600;
//           color: #d9a13b;
//           margin-bottom: 1rem;
//           letter-spacing: 0.5px;
//         }
        
//         .section-header h2 {
//           font-size: 2.5rem;
//           font-weight: 800;
//           color: #1e2f3c;
//           margin-bottom: 1rem;
//           position: relative;
//           display: inline-block;
//         }
        
//         .section-header h2::after {
//           content: '';
//           position: absolute;
//           bottom: -10px;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 60px;
//           height: 4px;
//           background: linear-gradient(90deg, #d9a13b, #f3c26b);
//           border-radius: 2px;
//         }
        
//         .section-header p {
//           color: #718096;
//           font-size: 1rem;
//           max-width: 600px;
//           margin: 1.5rem auto 0;
//         }
        
//         /* Skills Grid Layout */
//         .skills-grid-grand {
//           display: grid;
//           grid-template-columns: 1.2fr 0.8fr;
//           gap: 2rem;
//           margin-top: 1rem;
//         }
        
//         /* Technical Skills Section */
//         .tech-skills {
//           background: white;
//           border-radius: 28px;
//           padding: 2rem;
//           box-shadow: 0 20px 35px -12px rgba(0, 0, 0, 0.08);
//           border: 1px solid #f0e6d8;
//           transition: transform 0.3s ease;
//         }
        
//         .tech-skills:hover {
//           transform: translateY(-5px);
//         }
        
//         .skills-title {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           margin-bottom: 1.8rem;
//           padding-bottom: 1rem;
//           border-bottom: 2px solid #f0e6d8;
//         }
        
//         .skills-title span {
//           font-size: 2rem;
//         }
        
//         .skills-title h3 {
//           font-size: 1.4rem;
//           font-weight: 700;
//           color: #1e2f3c;
//           margin: 0;
//         }
        
//         .skill-item {
//           margin-bottom: 1.5rem;
//         }
        
//         .skill-info {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 0.5rem;
//         }
        
//         .skill-name {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           font-weight: 600;
//           color: #2d3e4b;
//         }
        
//         .skill-name span {
//           font-size: 1.2rem;
//         }
        
//         .skill-percentage {
//           color: #d9a13b;
//           font-weight: 700;
//           font-size: 0.85rem;
//         }
        
//         .progress-wrapper {
//           background: #f0e6d8;
//           border-radius: 12px;
//           height: 8px;
//           overflow: hidden;
//         }
        
//         .progress-fill-grand {
//           height: 100%;
//           border-radius: 12px;
//           transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
//           position: relative;
//         }
        
//         /* Soft Skills Section */
//         .soft-skills {
//           background: white;
//           border-radius: 28px;
//           padding: 2rem;
//           box-shadow: 0 20px 35px -12px rgba(0, 0, 0, 0.08);
//           border: 1px solid #f0e6d8;
//           transition: transform 0.3s ease;
//         }
        
//         .soft-skills:hover {
//           transform: translateY(-5px);
//         }
        
//         .soft-skills-grid {
//           display: flex;
//           flex-direction: column;
//           gap: 1.2rem;
//         }
        
//         .soft-skill-card {
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//           padding: 1rem;
//           background: #fefcf8;
//           border-radius: 18px;
//           transition: all 0.3s ease;
//           border: 1px solid transparent;
//         }
        
//         .soft-skill-card:hover {
//           background: #fff8f0;
//           border-color: #f0dcc0;
//           transform: translateX(5px);
//         }
        
//         .soft-skill-icon {
//           width: 50px;
//           height: 50px;
//           background: linear-gradient(135deg, #fff5e8, #fef0e0);
//           border-radius: 16px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 1.5rem;
//         }
        
//         .soft-skill-info {
//           flex: 1;
//         }
        
//         .soft-skill-info h4 {
//           font-size: 1rem;
//           font-weight: 700;
//           color: #1e2f3c;
//           margin: 0 0 5px 0;
//         }
        
//         .soft-skill-info p {
//           font-size: 0.8rem;
//           color: #718096;
//           margin: 0;
//         }
        
//         /* Additional Tools Section */
//         .tools-section {
//           margin-top: 2rem;
//           background: white;
//           border-radius: 28px;
//           padding: 1.5rem 2rem;
//           box-shadow: 0 20px 35px -12px rgba(0, 0, 0, 0.08);
//           border: 1px solid #f0e6d8;
//         }
        
//         .tools-title {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           margin-bottom: 1.5rem;
//         }
        
//         .tools-title span {
//           font-size: 1.5rem;
//         }
        
//         .tools-title h3 {
//           font-size: 1.2rem;
//           font-weight: 700;
//           color: #1e2f3c;
//           margin: 0;
//         }
        
//         .tools-grid {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 1rem;
//         }
        
//         .tool-badge {
//           background: #fefcf8;
//           border: 1px solid #f0e6d8;
//           padding: 0.5rem 1.2rem;
//           border-radius: 40px;
//           font-size: 0.85rem;
//           font-weight: 500;
//           color: #4a5568;
//           transition: all 0.3s ease;
//           display: flex;
//           align-items: center;
//           gap: 6px;
//         }
        
//         .tool-badge:hover {
//           background: #d9a13b;
//           color: white;
//           border-color: #d9a13b;
//           transform: translateY(-2px);
//         }
        
//         /* Responsive */
//         @media (max-width: 900px) {
//           .skills-grid-grand {
//             grid-template-columns: 1fr;
//             gap: 1.5rem;
//           }
          
//           .section-header h2 {
//             font-size: 2rem;
//           }
          
//           .skills-section {
//             padding: 3rem 1rem;
//           }
          
//           .tech-skills, .soft-skills, .tools-section {
//             padding: 1.3rem;
//           }
//         }
        
//         @media (max-width: 480px) {
//           .soft-skill-card {
//             flex-direction: column;
//             text-align: center;
//           }
          
//           .tools-grid {
//             justify-content: center;
//           }
//         }
//       `}</style>

//       <section className="skills-section" id="skills">
//         <div className="skills-container-grand">
//           {/* Section Header */}
//           <div className="section-header">
//             <span className="section-subtitle">⚡ What I Bring to the Table</span>
//             <h2>Technical & Professional Skills</h2>
//             <p>A comprehensive overview of my technical expertise and professional capabilities</p>
//           </div>

//           {/* Main Skills Grid */}
//           <div className="skills-grid-grand">
//             {/* Technical Skills */}
//             <div className="tech-skills">
//               <div className="skills-title">
//                 <span>💻</span>
//                 <h3>Technical Expertise</h3>
//               </div>
//               {technicalSkills.map((skill, index) => (
//                 <div className="skill-item" key={index}>
//                   <div className="skill-info">
//                     <div className="skill-name">
//                       <span>{skill.icon}</span>
//                       <span>{skill.name}</span>
//                     </div>
//                     <span className="skill-percentage">{skill.level}%</span>
//                   </div>
//                   <div className="progress-wrapper">
//                     <div 
//                       className="progress-fill-grand" 
//                       style={{ 
//                         width: animated ? `${skill.level}%` : '0%', 
//                         background: skill.color 
//                       }}
//                     ></div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Soft Skills */}
//             <div className="soft-skills">
//               <div className="skills-title">
//                 <span>🌟</span>
//                 <h3>Professional Attributes</h3>
//               </div>
//               <div className="soft-skills-grid">
//                 {softSkills.map((skill, index) => (
//                   <div className="soft-skill-card" key={index}>
//                     <div className="soft-skill-icon">{skill.icon}</div>
//                     <div className="soft-skill-info">
//                       <h4>{skill.name}</h4>
//                       <p>{skill.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Tools & Technologies */}
//           <div className="tools-section">
//             <div className="tools-title">
//               <span>🛠️</span>
//               <h3>Tools & Technologies I Work With</h3>
//             </div>
//             <div className="tools-grid">
//               <span className="tool-badge">🎨 VS Code</span>
//               <span className="tool-badge">📦 Git & GitHub</span>
//               <span className="tool-badge">🎯 Figma</span>
//               <span className="tool-badge">🖌️ Canva</span>
//               <span className="tool-badge">📱 Postman</span>
//               <span className="tool-badge">🔧 Chrome DevTools</span>
//               <span className="tool-badge">⚡ Vite</span>
//               <span className="tool-badge">📊 npm / Yarn</span>
//               <span className="tool-badge">🎨 Tailwind CSS</span>
//               <span className="tool-badge">📝 Bootstrap</span>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Skills;
// Experience.jsx - Modern Professional Experience Component
import React, { useState, useEffect } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('professional');
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  // Professional Experience from your resume
  const professionalExperience = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Refinement Software Solutions, Coimbatore",
      duration: "June 2024 – July 2024",
      icon: "💼",
      color: "#E44D26",
      achievements: [
        "Developed responsive web pages using HTML, CSS, and JavaScript",
        "Gained hands-on experience in front-end development and UI/UX with clean coding practices",
        "Collaborated with senior developers to implement modern web solutions"
      ]
    },
    {
      id: 2,
      title: "Web Developer (Portfolio Experience)",
      company: "Tech Vaseegarah",
      duration: "October 2025 – March 2026",
      icon: "🌐",
      color: "#61DAFB",
      achievements: [
        "Developed responsive websites using HTML, CSS, JavaScript, and React JS",
        "Built portfolio projects with modern UI/UX design",
        "Integrated Google APIs into websites to enhance functionality",
        "Improved website performance and user experience"
      ]
    },
    {
      id: 3,
      title: "App Developer (Trainee / Contributor)",
      company: "Fynovo App",
      duration: "2025",
      icon: "📱",
      color: "#00B894",
      achievements: [
        "Contributed to mobile application development by working on selected features",
        "Assisted in building and testing application modules",
        "Collaborated with team members to debug and improve performance",
        "Gained practical exposure to real-time development workflow"
      ]
    },
    {
      id: 4,
      title: "Frontend Trainer",
      company: "CSC Computer Education, Thanjavur",
      duration: "May 2025 - July 2025",
      icon: "🎓",
      color: "#d9a13b",
      achievements: [
        "Taught HTML, CSS, and JavaScript fundamentals",
        "Conducted hands-on sessions to improve practical skills",
        "Worked as a Lab Assistant, responsible for assisting lab operations",
        "Troubleshot basic coding errors for students"
      ]
    }
  ];

  // Internships & Training
  const certifications = [
    {
      name: "Full Stack Developer Course",
      issuer: "Certified Training Program",
      year: "2024",
      icon: "📜"
    },
    {
      name: "Frontend Development Certification",
      issuer: "Refinement Software Solutions",
      year: "2024",
      icon: "🏆"
    },
    {
      name: "React JS Workshop",
      issuer: "Tech Vaseegarah",
      year: "2025",
      icon: "⚛️"
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&display=swap');
        
        .experience-section {
          padding: 5rem 2rem;
          background: linear-gradient(135deg, #fefcf8 0%, #fff9f0 100%);
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
        }
        
        .experience-container {
          max-width: 1280px;
          margin: 0 auto;
        }
        
        /* Section Header */
        .exp-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        
        .exp-badge {
          display: inline-block;
          background: rgba(217, 161, 59, 0.12);
          padding: 0.3rem 1rem;
          border-radius: 30px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #d9a13b;
          margin-bottom: 1rem;
          letter-spacing: 0.5px;
        }
        
        .exp-header h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1e2f3c;
          margin-bottom: 1rem;
          position: relative;
          display: inline-block;
        }
        
        .exp-header h2::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #d9a13b, #f3c26b);
          border-radius: 2px;
        }
        
        .exp-header p {
          color: #718096;
          font-size: 1rem;
          max-width: 600px;
          margin: 1.5rem auto 0;
        }
        
        /* Stats Row */
        .stats-row-exp {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        
        .stat-card-exp {
          background: white;
          padding: 1.2rem 2rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          border: 1px solid #f0e6d8;
          min-width: 150px;
          transition: transform 0.3s ease;
        }
        
        .stat-card-exp:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .stat-number-exp {
          font-size: 2.2rem;
          font-weight: 800;
          color: #d9a13b;
        }
        
        .stat-label-exp {
          color: #4a5568;
          font-size: 0.85rem;
          margin-top: 0.3rem;
        }
        
        /* Tab Buttons */
        .tab-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        
        .tab-btn-exp {
          background: transparent;
          border: none;
          padding: 0.8rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          color: #718096;
          transition: all 0.3s ease;
          border-radius: 40px;
          font-family: 'Inter', sans-serif;
        }
        
        .tab-btn-exp:hover {
          color: #d9a13b;
          background: #fff5e8;
        }
        
        .tab-btn-exp.active {
          color: #d9a13b;
          background: #fff0e0;
          box-shadow: 0 2px 8px rgba(217, 161, 59, 0.15);
        }
        
        /* Timeline */
        .timeline-exp {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }
        
        .timeline-exp::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 100%;
          background: linear-gradient(to bottom, #d9a13b, #f3c26b, #d9a13b);
        }
        
        .timeline-item-exp {
          display: flex;
          justify-content: space-between;
          margin-bottom: 2.5rem;
          position: relative;
        }
        
        .timeline-item-exp:nth-child(odd) {
          flex-direction: row;
        }
        
        .timeline-item-exp:nth-child(even) {
          flex-direction: row-reverse;
        }
        
        .timeline-content {
          width: 45%;
          background: white;
          border-radius: 20px;
          padding: 1.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
          border: 1px solid #f0e6d8;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .timeline-content:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          border-color: #d9a13b;
        }
        
        .timeline-dot-exp {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 16px;
          height: 16px;
          background: #d9a13b;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 0 0 3px #f3c26b;
          top: 20px;
        }
        
        .exp-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
        
        .exp-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1e2f3c;
          margin-bottom: 0.3rem;
        }
        
        .exp-company {
          color: #d9a13b;
          font-weight: 600;
          font-size: 0.85rem;
          margin-bottom: 0.5rem;
        }
        
        .exp-duration {
          display: inline-block;
          background: #fefcf8;
          padding: 0.2rem 0.8rem;
          border-radius: 20px;
          font-size: 0.7rem;
          color: #718096;
          margin-bottom: 1rem;
        }
        
        .exp-achievements {
          list-style: none;
          padding-left: 0;
        }
        
        .exp-achievements li {
          color: #4a5568;
          font-size: 0.85rem;
          margin-bottom: 0.5rem;
          padding-left: 1.2rem;
          position: relative;
        }
        
        .exp-achievements li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: #d9a13b;
        }
        
        /* Certifications Grid */
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto;
        }
        
        .cert-card {
          background: white;
          border-radius: 20px;
          padding: 1.5rem;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          border: 1px solid #f0e6d8;
          transition: all 0.3s ease;
        }
        
        .cert-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          border-color: #d9a13b;
        }
        
        .cert-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        
        .cert-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1e2f3c;
          margin-bottom: 0.3rem;
        }
        
        .cert-issuer {
          color: #d9a13b;
          font-size: 0.85rem;
          margin-bottom: 0.5rem;
        }
        
        .cert-year {
          color: #718096;
          font-size: 0.8rem;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .experience-section {
            padding: 3rem 1rem;
          }
          
          .exp-header h2 {
            font-size: 2rem;
          }
          
          .timeline-exp::before {
            left: 20px;
          }
          
          .timeline-item-exp,
          .timeline-item-exp:nth-child(odd),
          .timeline-item-exp:nth-child(even) {
            flex-direction: column;
            align-items: flex-start;
            padding-left: 40px;
          }
          
          .timeline-content {
            width: 100%;
            margin-bottom: 1rem;
          }
          
          .timeline-dot-exp {
            left: 12px;
            transform: translateX(0);
          }
          
          .stats-row-exp {
            gap: 1rem;
          }
          
          .stat-card-exp {
            padding: 0.8rem 1.2rem;
            min-width: 100px;
          }
          
          .stat-number-exp {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <section className="experience-section" id="experience">
        <div className="experience-container">
          {/* Section Header */}
          <div className="exp-header">
            <span className="exp-badge">💼 My Journey So Far</span>
            <h2>Professional Experience</h2>
            <p>A timeline of my professional growth and achievements</p>
          </div>

          {/* Stats Row */}
          <div className="stats-row-exp">
            <div className="stat-card-exp">
              <div className="stat-number-exp">4+</div>
              <div className="stat-label-exp">Professional Roles</div>
            </div>
            <div className="stat-card-exp">
              <div className="stat-number-exp">1+</div>
              <div className="stat-label-exp">Years Experience</div>
            </div>
            <div className="stat-card-exp">
              <div className="stat-number-exp">3+</div>
              <div className="stat-label-exp">Companies Worked</div>
            </div>
            <div className="stat-card-exp">
              <div className="stat-number-exp">50+</div>
              <div className="stat-label-exp">Students Trained</div>
            </div>
          </div>

          {/* Tab Buttons */}
          <div className="tab-buttons">
            <button className={`tab-btn-exp ${activeTab === 'professional' ? 'active' : ''}`} onClick={() => setActiveTab('professional')}>
              💼 Work Experience
            </button>
            <button className={`tab-btn-exp ${activeTab === 'certifications' ? 'active' : ''}`} onClick={() => setActiveTab('certifications')}>
              🏆 Certifications
            </button>
          </div>

          {/* Professional Experience Timeline */}
          {activeTab === 'professional' && (
            <div className="timeline-exp">
              {professionalExperience.map((exp, index) => (
                <div className="timeline-item-exp" key={exp.id}>
                  <div className="timeline-content">
                    <div className="exp-icon">{exp.icon}</div>
                    <h3 className="exp-title">{exp.title}</h3>
                    <div className="exp-company">{exp.company}</div>
                    <span className="exp-duration">{exp.duration}</span>
                    <ul className="exp-achievements">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="timeline-dot-exp"></div>
                </div>
              ))}
            </div>
          )}

          {/* Certifications Section */}
          {activeTab === 'certifications' && (
            <div className="cert-grid">
              {certifications.map((cert, index) => (
                <div className="cert-card" key={index}>
                  <div className="cert-icon">{cert.icon}</div>
                  <h3 className="cert-name">{cert.name}</h3>
                  <div className="cert-issuer">{cert.issuer}</div>
                  <div className="cert-year">{cert.year}</div>
                </div>
              ))}
              {/* Additional Certificate */}
              <div className="cert-card">
                <div className="cert-icon">🎯</div>
                <h3 className="cert-name">Spam Detection Using ML</h3>
                <div className="cert-issuer">Final Year Project</div>
                <div className="cert-year">2025</div>
              </div>
              <div className="cert-card">
                <div className="cert-icon">📱</div>
                <h3 className="cert-name">App Development Training</h3>
                <div className="cert-issuer">Fynovo App</div>
                <div className="cert-year">2025</div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Experience;