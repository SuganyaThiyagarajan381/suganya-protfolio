import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      number: "01",
      title: "User Login & Dashboard System",
      description: "Developed a secure login and dashboard system with interactive user features and responsive layout.",
      technologies: [
        { name: "React JS", icon: "⚛️", color: "#61DAFB" },
        { name: "JavaScript", icon: "🟨", color: "#F7DF1E" },
        { name: "HTML5", icon: "🌐", color: "#E44D26" },
        { name: "CSS3", icon: "🎨", color: "#264DE4" }
      ],
      features: [
        "User authentication UI",
        "Form validation",
        "Dashboard interface",
        "Responsive design",
        "Smooth user interaction"
      ],
      icon: "🔐",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      number: "02",
      title: "Portfolio Website & Mini Applications",
      description: "Designed and developed a personal portfolio website showcasing projects, skills, and modern frontend applications.",
      technologies: [
        { name: "React JS", icon: "⚛️", color: "#61DAFB" },
        { name: "JavaScript", icon: "🟨", color: "#F7DF1E" },
        { name: "HTML5", icon: "🌐", color: "#E44D26" },
        { name: "CSS3", icon: "🎨", color: "#264DE4" }
      ],
      features: [
        "Personal portfolio design",
        "Responsive sections",
        "Project showcase",
        "Mini web applications",
        "Clean modern UI"
      ],
      icon: "🖥️",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      number: "03",
      title: "Spam Detection Using Machine Learning",
      description: "Built an intelligent spam detection platform using machine learning and NLP techniques for real-time message filtering.",
      technologies: [
        { name: "React JS", icon: "⚛️", color: "#61DAFB" },
        { name: "Python", icon: "🐍", color: "#3776AB" },
        { name: "Machine Learning", icon: "🤖", color: "#00B894" },
        { name: "NLP", icon: "📝", color: "#9B59B6" },
        { name: "MySQL", icon: "🗄️", color: "#4479A1" }
      ],
      features: [
        "Spam message detection",
        "Real-time filtering",
        "NLP text analysis",
        "Database integration",
        "Improved system efficiency"
      ],
      icon: "🛡️",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
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

        {/* SECTION HEADER */}
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
            Proj<span style={{
              background: 'linear-gradient(135deg, #d9a13b, #f3c26b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>ects</span>
          </h1>
          <p style={{
            color: '#6c757d',
            fontSize: '18px',
            maxWidth: '600px',
            margin: '0 auto 24px auto',
            lineHeight: '1.6'
          }}>
            A collection of real-world applications and problem-solving projects built using modern technologies.
          </p>
          <div style={{
            width: '80px',
            height: '3px',
            background: 'linear-gradient(90deg, #d9a13b, #f3c26b)',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>

        {/* PROJECT GRID LAYOUT */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '32px'
        }}>
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                border: '1px solid #e9ecef',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.12)';
                e.currentTarget.style.borderColor = '#d9a13b';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#e9ecef';
              }}
            >
              {/* Project Number Badge */}
              <div style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: project.gradient,
                width: '48px',
                height: '48px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: '700',
                color: '#ffffff',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                zIndex: 1
              }}>
                {project.number}
              </div>

              {/* Card Content */}
              <div style={{
                padding: '32px'
              }}>
                {/* Project Icon */}
                <div style={{
                  fontSize: '48px',
                  marginBottom: '20px'
                }}>
                  {project.icon}
                </div>

                {/* Project Title */}
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#1a1a1a',
                  marginBottom: '12px',
                  lineHeight: '1.3'
                }}>
                  {project.title}
                </h3>

                {/* Project Description */}
                <p style={{
                  color: '#6c757d',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  {project.description}
                </p>

                {/* Technology Stack Pills */}
                <div style={{
                  marginBottom: '20px'
                }}>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#d9a13b',
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Technology Stack
                  </div>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px'
                  }}>
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          background: '#f8f9fa',
                          padding: '6px 14px',
                          borderRadius: '50px',
                          fontSize: '12px',
                          fontWeight: '500',
                          color: '#1a1a1a',
                          border: `1px solid ${tech.color}30`,
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = tech.color;
                          e.currentTarget.style.color = '#ffffff';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#f8f9fa';
                          e.currentTarget.style.color = '#1a1a1a';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        <span style={{ fontSize: '12px' }}>{tech.icon}</span>
                        <span>{tech.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features List */}
                <div>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#d9a13b',
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Key Features
                  </div>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px'
                  }}>
                    {project.features.map((feature, idx) => (
                      <span
                        key={idx}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '12px',
                          color: '#495057',
                          padding: '4px 0'
                        }}
                      >
                        <span style={{
                          width: '4px',
                          height: '4px',
                          background: '#d9a13b',
                          borderRadius: '50%'
                        }}></span>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Keyframes */}
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
          .projects-section {
            padding: 60px 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;