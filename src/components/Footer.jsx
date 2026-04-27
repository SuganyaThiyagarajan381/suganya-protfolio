import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: "GitHub", icon: "🐙", url: "#", color: "#333" },
    { name: "LinkedIn", icon: "🔗", url: "#", color: "#0077b5" },
    { name: "Twitter", icon: "🐦", url: "#", color: "#1DA1F2" },
    { name: "Email", icon: "📧", url: "#", color: "#d9a13b" }
  ];

  const quickLinks = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" }
  ];

  return (
    <footer style={{
      background: '#ffffff',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      borderTop: '1px solid #e9ecef',
      padding: '60px 24px 30px',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '48px',
          marginBottom: '48px'
        }}>
          
          {/* Brand Section */}
          <div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#1a1a1a',
              marginBottom: '16px',
              letterSpacing: '-0.5px'
            }}>
              Suganya<span style={{ color: '#d9a13b' }}>.</span>
            </h3>
            <p style={{
              color: '#6c757d',
              fontSize: '14px',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              Building clean, responsive, and user-friendly web applications with modern technologies.
            </p>
            <div style={{
              display: 'flex',
              gap: '12px'
            }}>
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  style={{
                    width: '36px',
                    height: '36px',
                    background: '#f8f9fa',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    textDecoration: 'none',
                    color: '#1a1a1a',
                    border: '1px solid #e9ecef',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = social.color;
                    e.currentTarget.style.borderColor = social.color;
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#f8f9fa';
                    e.currentTarget.style.borderColor = '#e9ecef';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.color = '#1a1a1a';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#1a1a1a',
              marginBottom: '20px',
              letterSpacing: '0.5px'
            }}>
              Quick Links
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {quickLinks.map((link, idx) => (
                <li key={idx} style={{ marginBottom: '12px' }}>
                  <a
                    href={link.link}
                    style={{
                      color: '#6c757d',
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'all 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#d9a13b';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#6c757d';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span>→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#1a1a1a',
              marginBottom: '20px',
              letterSpacing: '0.5px'
            }}>
              Get In Touch
            </h4>
            <div style={{ marginBottom: '16px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '12px'
              }}>
                <span style={{ fontSize: '16px' }}>📧</span>
                <span style={{
                  color: '#6c757d',
                  fontSize: '14px'
                }}>suganyasuganya69811@gmail.com</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '12px'
              }}>
                <span style={{ fontSize: '16px' }}>📞</span>
                <span style={{
                  color: '#6c757d',
                  fontSize: '14px'
                }}>+91 76959 06633</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <span style={{ fontSize: '16px' }}>📍</span>
                <span style={{
                  color: '#6c757d',
                  fontSize: '14px'
                }}>Thanjavur, India</span>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#1a1a1a',
              marginBottom: '20px',
              letterSpacing: '0.5px'
            }}>
              Work With Me
            </h4>
            <p style={{
              color: '#6c757d',
              fontSize: '14px',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              Available for freelance projects and full-time opportunities.
            </p>
            <div style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap'
            }}>
              <span style={{
                display: 'inline-block',
                background: '#d9a13b',
                padding: '8px 20px',
                borderRadius: '50px',
                color: '#ffffff',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#c48a1f';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(217, 161, 59, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#d9a13b';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                Hire Me
              </span>
              <span style={{
                display: 'inline-block',
                background: 'transparent',
                padding: '8px 20px',
                borderRadius: '50px',
                color: '#d9a13b',
                fontSize: '13px',
                fontWeight: '600',
                border: '1px solid #d9a13b',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#d9a13b';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#d9a13b';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                Resume
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #e9ecef',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <p style={{
            color: '#6c757d',
            fontSize: '13px',
            margin: 0
          }}>
            © {currentYear} Suganya Thiyagarajan. All rights reserved.
          </p>
          <div style={{
            display: 'flex',
            gap: '24px'
          }}>
            <span style={{
              color: '#6c757d',
              fontSize: '12px',
              cursor: 'pointer',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#d9a13b'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#6c757d'}>
              Privacy Policy
            </span>
            <span style={{
              color: '#6c757d',
              fontSize: '12px',
              cursor: 'pointer',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#d9a13b'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#6c757d'}>
              Terms & Conditions
            </span>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '45px',
            height: '45px',
            background: '#1a1a1a',
            border: 'none',
            borderRadius: '50%',
            color: '#ffffff',
            fontSize: '20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            zIndex: 1000
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#d9a13b';
            e.currentTarget.style.transform = 'translateY(-5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#1a1a1a';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;