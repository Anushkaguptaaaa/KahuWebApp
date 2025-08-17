import React from 'react';
import Navigation from '../components/Navigation';

const Contact: React.FC = () => {
  return (
    <div className="main-layout" style={{ paddingTop: '80px' }}>
      <Navigation />

      {/* Contact Header */}
      <div style={{
        background: '#333',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white', marginBottom: '20px' }}>
            Want to get in contact with us?
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'white' }}>
            Hi, I'm Anushka, creator of Kahu. For any queries, you may contact me at:
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              
              {/* Social Media Links */}
              <div style={{ marginBottom: '60px' }}>
                <div className="row justify-content-center">
                  <div className="col-md-4 mb-4">
                    <a 
                      href="https://linkedin.com/in/anushka" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        display: 'block',
                        padding: '30px',
                        backgroundColor: '#0077b5',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '10px',
                        textAlign: 'center',
                        transition: 'transform 0.3s'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <img 
                        src="/images/linkedin.png" 
                        alt="LinkedIn" 
                        style={{ width: '50px', height: '50px', marginBottom: '15px' }}
                      />
                      <h4 style={{ color: 'white', marginBottom: '10px' }}>LinkedIn</h4>
                      <p style={{ margin: 0, fontSize: '0.9rem', color: 'white' }}>Connect professionally</p>
                    </a>
                  </div>
                  
                  <div className="col-md-4 mb-4">
                    <a 
                      href="mailto:anushka@kahu.com" 
                      style={{
                        display: 'block',
                        padding: '30px',
                        backgroundColor: '#ea4335',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '10px',
                        textAlign: 'center',
                        transition: 'transform 0.3s'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <img 
                        src="/images/gmail.png" 
                        alt="Gmail" 
                        style={{ width: '50px', height: '50px', marginBottom: '15px' }}
                      />
                      <h4 style={{ color: 'white', marginBottom: '10px' }}>Email</h4>
                      <p style={{ margin: 0, fontSize: '0.9rem', color: 'white' }}>Send me a message</p>
                    </a>
                  </div>
                  
                  <div className="col-md-4 mb-4">
                    <a 
                      href="https://github.com/anushka" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        display: 'block',
                        padding: '30px',
                        backgroundColor: '#333',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '10px',
                        textAlign: 'center',
                        transition: 'transform 0.3s'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <img 
                        src="/images/git2.png" 
                        alt="GitHub" 
                        style={{ width: '50px', height: '50px', marginBottom: '15px' }}
                      />
                      <h4 style={{ color: 'white', marginBottom: '10px' }}>GitHub</h4>
                      <p style={{ margin: 0, fontSize: '0.9rem', color: 'white' }}>View my projects</p>
                    </a>
                  </div>
                </div>
              </div>

              {/* Additional Contact Info */}
              <div style={{ 
                backgroundColor: 'white', 
                padding: '40px', 
                borderRadius: '10px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <h3 style={{ marginBottom: '30px', color: '#333' }}>Get in Touch</h3>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div style={{ padding: '20px' }}>
                      <div style={{ fontSize: '2rem', color: '#007bff', marginBottom: '15px' }}>📞</div>
                      <h5 style={{ color: '#333' }}>Phone</h5>
                      <p style={{ color: '#666' }}>(+71) 8522369417</p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div style={{ padding: '20px' }}>
                      <div style={{ fontSize: '2rem', color: '#007bff', marginBottom: '15px' }}>✉️</div>
                      <h5 style={{ color: '#333' }}>Email</h5>
                      <p style={{ color: '#666' }}>anushka@kahu.com</p>
                    </div>
                  </div>
                </div>
                
                <div style={{ marginTop: '30px' }}>
                  <h5 style={{ marginBottom: '20px', color: '#333' }}>About Kahu</h5>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    Kahu is my passion project, born from my love for cats and technology. 
                    If you have any questions about the app, suggestions for improvement, 
                    or just want to share your cat's story, I'd love to hear from you!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div style={{
        background: '#333',
        padding: '80px 0',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 style={{ marginBottom: '20px', color: 'white' }}>Ready to Discover Your Cat's Breed?</h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: 'white' }}>
                Upload your cat's photo and let Kahu work its magic!
              </p>
              <a href="/" style={{ 
                backgroundColor: '#007bff', 
                color: 'white',
                padding: '12px 30px',
                fontSize: '18px',
                borderRadius: '5px',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Start Breed Detection
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#252525', color: 'white', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ color: '#fec721' }}>
                  Call Now<br />
                  <span style={{ color: 'white' }}>(+71) 8522369417</span>
                </h3>
              </div>
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ color: '#38c8a8' }}>
                  Free Multipurpose<br />
                  Responsive Landing Page 2024
                </h3>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '#ddd solid 1px', paddingTop: '25px', marginTop: '60px' }}>
            <p style={{ color: '#ddd', fontSize: '18px', margin: 0 }}>
              © 2024 All Rights Reserved. Design by{' '}
              <a href="https://html.design/" style={{ color: '#38c8a8' }}>Free Html Templates</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;