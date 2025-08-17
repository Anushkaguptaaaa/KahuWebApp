import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const openNav = () => {
    setSidebarOpen(true);
  };

  const closeNav = () => {
    setSidebarOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <>
      {/* Header */}
      <header>
        <div className="header"></div>
      </header>

      {/* Toggle button */}
      <span className="toggle_side_bar" onClick={openNav}>
        <i className="fa fa-bars"></i>
      </span>

      {/* Sidebar */}
      <div 
        id="side_bar" 
        className={`sidenav ${sidebarOpen ? 'open' : ''}`}
        style={{ width: sidebarOpen ? '250px' : '0' }}
      >
        <div className="side_bar_logo">
          <div className="logo">
            <Link to="/">
              <img src="/images/logo.png" alt="Kahu Logo" />
            </Link>
          </div>
        </div>
        <button 
          className="closebtn"
          onClick={closeNav}
          style={{
            background: 'none',
            border: 'none',
            color: '#818181',
            fontSize: '36px',
            position: 'absolute',
            top: '0',
            right: '25px',
            marginLeft: '50px',
            cursor: 'pointer'
          }}
        >
          ×
        </button>
        <div className="scoll_to_id_menu">
          <nav className="nav">
            <div className="padded">
              <ul>
                <li className={isActive('/')}>
                  <Link className="nav-section1" to="/" onClick={closeNav}>
                    Home
                  </Link>
                </li>
                <li className={isActive('/about')}>
                  <Link className="nav-section2" to="/about" onClick={closeNav}>
                    About
                  </Link>
                </li>
                <li className={isActive('/gallery')}>
                  <Link className="nav-section2" to="/gallery" onClick={closeNav}>
                    Gallery
                  </Link>
                </li>
                <li className={isActive('/contact')}>
                  <Link className="nav-section2" to="/contact" onClick={closeNav}>
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="top_btn">
                <Link className="read_more" to="/login" onClick={closeNav}>
                  Login
                </Link>
                <Link className="read_more paoo" to="/signup" onClick={closeNav}>
                  Signup
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div 
          className="sidebar-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 998
          }}
          onClick={closeNav}
        />
      )}
    </>
  );
};

export default Navigation;
