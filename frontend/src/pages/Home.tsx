import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UploadForm from '../components/UploadForm';
import BreedResults from '../components/BreedResults';
import { Breed } from '../types/Breed';

const Home: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);

  const openNav = () => {
    setSidebarOpen(true);
  };

  const closeNav = () => {
    setSidebarOpen(false);
  };

  const handleUploadSuccess = (detectedBreeds: Breed[]) => {
    setBreeds(detectedBreeds);
    setLoading(false);
    setError(null);
    setShowResults(true);
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px', minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
      {/* Toggle button */}
      <div 
        onClick={openNav}
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 1000,
          cursor: 'pointer',
          background: 'rgba(0,0,0,0.7)',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          fontSize: '18px'
        }}
      >
        ☰
      </div>

      {/* Sidebar */}
      <div 
        style={{
          height: '100%',
          width: sidebarOpen ? '250px' : '0',
          position: 'fixed',
          zIndex: 1001,
          top: 0,
          left: 0,
          backgroundColor: '#111',
          overflowX: 'hidden',
          transition: '0.5s',
          paddingTop: '60px'
        }}
      >
        <div style={{ padding: '20px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <Link to="/">
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: '#f4e4bc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
                fontSize: '2rem'
              }}>
                🐱
              </div>
            </Link>
          </div>
        </div>
        
        <button 
          onClick={closeNav}
          style={{
            position: 'absolute',
            top: '0',
            right: '25px',
            fontSize: '36px',
            marginLeft: '50px',
            background: 'none',
            border: 'none',
            color: '#818181',
            cursor: 'pointer'
          }}
        >
          ×
        </button>
        
        <div style={{ padding: '0 20px' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <Link 
                to="/" 
                onClick={closeNav}
                style={{
                  padding: '15px 20px',
                  textDecoration: 'none',
                  fontSize: '18px',
                  color: '#f1f1f1',
                  display: 'block',
                  transition: '0.3s',
                  backgroundColor: '#333',
                  borderRadius: '5px'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#555'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#333'}
              >
                Home
              </Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link 
                to="/about" 
                onClick={closeNav}
                style={{
                  padding: '15px 20px',
                  textDecoration: 'none',
                  fontSize: '18px',
                  color: '#818181',
                  display: 'block',
                  transition: '0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#f1f1f1'}
                onMouseOut={(e) => e.currentTarget.style.color = '#818181'}
              >
                About
              </Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link 
                to="/gallery" 
                onClick={closeNav}
                style={{
                  padding: '15px 20px',
                  textDecoration: 'none',
                  fontSize: '18px',
                  color: '#818181',
                  display: 'block',
                  transition: '0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#f1f1f1'}
                onMouseOut={(e) => e.currentTarget.style.color = '#818181'}
              >
                Gallery
              </Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link 
                to="/contact" 
                onClick={closeNav}
                style={{
                  padding: '15px 20px',
                  textDecoration: 'none',
                  fontSize: '18px',
                  color: '#818181',
                  display: 'block',
                  transition: '0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#f1f1f1'}
                onMouseOut={(e) => e.currentTarget.style.color = '#818181'}
              >
                Contact
              </Link>
            </li>
          </ul>
          
          <div style={{ marginTop: '40px' }}>
            <Link 
              to="/login" 
              onClick={closeNav}
              style={{
                display: 'block',
                padding: '12px 20px',
                margin: '10px 0',
                backgroundColor: 'transparent',
                color: 'white',
                textDecoration: 'none',
                border: '2px solid white',
                borderRadius: '25px',
                textAlign: 'center',
                fontSize: '16px',
                fontWeight: 'bold'
              }}
            >
              LOGIN
            </Link>
            <Link 
              to="/signup" 
              onClick={closeNav}
              style={{
                display: 'block',
                padding: '12px 20px',
                margin: '10px 0',
                backgroundColor: 'white',
                color: '#111',
                textDecoration: 'none',
                border: '2px solid white',
                borderRadius: '25px',
                textAlign: 'center',
                fontSize: '16px',
                fontWeight: 'bold'
              }}
            >
              SIGNUP
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div 
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

      {/* Main Content */}
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="row justify-content-center">
          <div className="col-md-10 text-center">
            <h1 style={{ color: '#333', fontSize: '3rem', marginBottom: '30px', marginTop: '50px' }}>
              Welcome to Kahu!
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '800px', margin: '0 auto 40px' }}>
              Cat Breed Detection App - Upload your cat's photo to discover its breed!
            </p>
          </div>
        </div>

        {!showResults ? (
          <UploadForm 
            onUploadSuccess={handleUploadSuccess} 
            onError={handleError} 
          />
        ) : (
          <div>
            <BreedResults 
              breeds={breeds} 
              loading={loading} 
              error={error} 
            />
            <div className="text-center mt-4">
              <button 
                className="btn btn-primary"
                onClick={() => setShowResults(false)}
              >
                Upload Another Photo
              </button>
            </div>
          </div>
        )}

        <div style={{ textAlign: 'center', marginTop: '60px', marginBottom: '40px' }}>
          <h3 style={{ color: '#333', marginBottom: '20px' }}>Navigation</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <Link to="/about" style={{ 
              padding: '10px 20px', 
              backgroundColor: '#333', 
              color: 'white', 
              textDecoration: 'none', 
              borderRadius: '5px' 
            }}>
              About
            </Link>
            <Link to="/gallery" style={{ 
              padding: '10px 20px', 
              backgroundColor: '#333', 
              color: 'white', 
              textDecoration: 'none', 
              borderRadius: '5px' 
            }}>
              Gallery
            </Link>
            <Link to="/contact" style={{ 
              padding: '10px 20px', 
              backgroundColor: '#333', 
              color: 'white', 
              textDecoration: 'none', 
              borderRadius: '5px' 
            }}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;