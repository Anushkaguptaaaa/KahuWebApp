import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
    alert('Login functionality will be implemented with backend integration');
  };

  return (
    <div className="main-layout">
      <Navigation />

      {/* Login Section */}
      <div 
        className="login-section"
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/images/catbg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '60px 0'
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-7">
              <div 
                className="login-form"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  padding: '50px 40px',
                  borderRadius: '15px',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div className="text-center mb-4">
                  <img 
                    src="/images/logo.png" 
                    alt="Kahu Logo" 
                    style={{ width: '80px', height: '80px', marginBottom: '20px' }}
                  />
                  <h2 style={{ color: '#333', fontWeight: 'bold' }}>Welcome Back</h2>
                  <p style={{ color: '#666' }}>Sign in to your Kahu account</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label" style={{ color: '#333', fontWeight: '500' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        padding: '12px 15px',
                        borderRadius: '8px',
                        border: '2px solid #e0e0e0',
                        fontSize: '16px'
                      }}
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="password" className="form-label" style={{ color: '#333', fontWeight: '500' }}>
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      style={{
                        padding: '12px 15px',
                        borderRadius: '8px',
                        border: '2px solid #e0e0e0',
                        fontSize: '16px'
                      }}
                      placeholder="Enter your password"
                    />
                  </div>

                  <div className="mb-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="rememberMe"
                      />
                      <label className="form-check-label" htmlFor="rememberMe" style={{ color: '#666' }}>
                        Remember me
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 mb-3"
                    style={{
                      padding: '12px',
                      fontSize: '16px',
                      fontWeight: '600',
                      borderRadius: '8px',
                      backgroundColor: '#007bff',
                      border: 'none'
                    }}
                  >
                    Sign In
                  </button>

                  <div className="text-center">
                    <p style={{ color: '#666' }}>
                      Don't have an account?{' '}
                      <Link 
                        to="/signup" 
                        style={{ 
                          color: '#007bff', 
                          textDecoration: 'none',
                          fontWeight: '500'
                        }}
                      >
                        Sign up here
                      </Link>
                    </p>
                  </div>

                  <div className="text-center mt-3">
                    <Link 
                      to="/" 
                      style={{ 
                        color: '#666', 
                        textDecoration: 'none',
                        fontSize: '14px'
                      }}
                    >
                      ← Back to Home
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

