import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const styles = {
    contact: {
      padding: '5rem 2rem',
      background: 'linear-gradient(135deg, #fefcf8 0%, #f8f5f0 100%)',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#1e2a3a',
      marginBottom: '1rem',
      position: 'relative',
      display: 'inline-block',
    },
    titleUnderline: {
      width: '60px',
      height: '4px',
      background: 'linear-gradient(90deg, #d9a13b, #f3c26b)',
      margin: '0.5rem auto 0',
      borderRadius: '2px',
    },
    subtitle: {
      color: '#2d3e4b',
      fontSize: '1.1rem',
      marginTop: '1rem',
    },
    content: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '3rem',
    },
    contactInfo: {
      background: 'white',
      padding: '2rem',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
    },
    infoTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#1e2a3a',
      marginBottom: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    infoItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1.5rem',
      padding: '1rem',
      borderRadius: '12px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    infoIcon: {
      width: '45px',
      height: '45px',
      background: 'linear-gradient(135deg, #f3ede5, #fff4ea)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.2rem',
      color: '#d9a13b',
    },
    infoText: {
      flex: 1,
    },
    infoLabel: {
      fontSize: '0.85rem',
      color: '#8b7355',
      marginBottom: '0.25rem',
    },
    infoValue: {
      fontSize: '1rem',
      fontWeight: '500',
      color: '#1e2a3a',
    },
    socialLinks: {
      display: 'flex',
      gap: '1rem',
      marginTop: '2rem',
      justifyContent: 'center',
    },
    socialLink: {
      width: '40px',
      height: '40px',
      background: '#f3ede5',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#1e2a3a',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    form: {
      background: 'white',
      padding: '2rem',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
    },
    formTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#1e2a3a',
      marginBottom: '1.5rem',
    },
    formGroup: {
      marginBottom: '1.5rem',
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      color: '#2d3e4b',
      fontWeight: '500',
      fontSize: '0.9rem',
    },
    input: {
      width: '100%',
      padding: '0.8rem 1rem',
      border: '1px solid #e0d6cc',
      borderRadius: '12px',
      fontSize: '1rem',
      fontFamily: 'inherit',
      transition: 'all 0.3s ease',
      outline: 'none',
    },
    textarea: {
      width: '100%',
      padding: '0.8rem 1rem',
      border: '1px solid #e0d6cc',
      borderRadius: '12px',
      fontSize: '1rem',
      fontFamily: 'inherit',
      resize: 'vertical',
      minHeight: '120px',
      transition: 'all 0.3s ease',
      outline: 'none',
    },
    submitBtn: {
      width: '100%',
      padding: '1rem',
      background: '#1e2f3c',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontFamily: 'inherit',
    },
    successMessage: {
      background: '#d4edda',
      color: '#155724',
      padding: '1rem',
      borderRadius: '12px',
      marginBottom: '1rem',
      textAlign: 'center',
      animation: 'slideDown 0.3s ease',
    },
  };

  // Add animation keyframes
  const animationStyle = `
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  return (
    <>
      <style>{animationStyle}</style>
      <section id="contact" style={styles.contact}>
        <div style={styles.container}>
          <div style={styles.header}>
            <h2 style={styles.title}>Get In Touch</h2>
            <div style={styles.titleUnderline}></div>
            <p style={styles.subtitle}>Let's work together! Feel free to reach out.</p>
          </div>

          <div style={styles.content}>
            {/* Contact Information */}
            <div style={styles.contactInfo}>
              <h3 style={styles.infoTitle}>
                <span>📬</span> Contact Info
              </h3>
              
              <div 
                style={styles.infoItem}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
              >
                <div style={styles.infoIcon}>📧</div>
                <div style={styles.infoText}>
                  <div style={styles.infoLabel}>Email</div>
                  <div style={styles.infoValue}>suganyasuganya69811@gmail.com</div>
                </div>
              </div>

              <div 
                style={styles.infoItem}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
              >
                <div style={styles.infoIcon}>📞</div>
                <div style={styles.infoText}>
                  <div style={styles.infoLabel}>Phone</div>
                  <div style={styles.infoValue}>+91 76959 06633</div>
                </div>
              </div>

              <div 
                style={styles.infoItem}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
              >
                <div style={styles.infoIcon}>📍</div>
                <div style={styles.infoText}>
                  <div style={styles.infoLabel}>Location</div>
                  <div style={styles.infoValue}>Thanjavur, India</div>
                </div>
              </div>

              <div style={styles.socialLinks}>
                <a 
                  href="#" 
                  style={styles.socialLink}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#d9a13b';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#f3ede5';
                    e.currentTarget.style.color = '#1e2a3a';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <i className="fab fa-github"></i>
                </a>
                <a 
                  href="#" 
                  style={styles.socialLink}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#d9a13b';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#f3ede5';
                    e.currentTarget.style.color = '#1e2a3a';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a 
                  href="#" 
                  style={styles.socialLink}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#d9a13b';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#f3ede5';
                    e.currentTarget.style.color = '#1e2a3a';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div style={styles.form}>
              <h3 style={styles.formTitle}>Send a Message</h3>
              
              {isSubmitted && (
                <div style={styles.successMessage}>
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={styles.input}
                    onFocus={(e) => e.target.style.borderColor = '#d9a13b'}
                    onBlur={(e) => e.target.style.borderColor = '#e0d6cc'}
                    placeholder="John Doe"
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={styles.input}
                    onFocus={(e) => e.target.style.borderColor = '#d9a13b'}
                    onBlur={(e) => e.target.style.borderColor = '#e0d6cc'}
                    placeholder="john@example.com"
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={styles.textarea}
                    onFocus={(e) => e.target.style.borderColor = '#d9a13b'}
                    onBlur={(e) => e.target.style.borderColor = '#e0d6cc'}
                    placeholder="Your message here..."
                  />
                </div>

                <button 
                  type="submit" 
                  style={styles.submitBtn}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#10232e';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = '#1e2f3c';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Send Message ✨
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;