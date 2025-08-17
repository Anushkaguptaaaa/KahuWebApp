import React from 'react';
import { BreedResultsProps } from '../types/Breed';

const BreedResults: React.FC<BreedResultsProps> = ({ breeds, loading, error }) => {
  if (loading) {
    return (
      <div className="breed-results">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="loading-spinner"></div>
              <p className="mt-3">Analyzing your cat's photo...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="breed-results">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="error-message">
                <i className="fa fa-exclamation-triangle me-2"></i>
                {error}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (breeds.length === 0) {
    return null;
  }

  return (
    <div className="breed-results" style={{ backgroundColor: '#f8f9fa', padding: '60px 0' }}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 style={{ color: '#333', fontSize: '2.5rem', fontWeight: 'bold' }}>
              Breed Detection Results
            </h2>
            <p className="text-muted">
              Here's what we found about your cat's breed
            </p>
          </div>
        </div>
        
        <div className="row justify-content-center">
          {breeds.map((breed, index) => (
            <div key={breed.id || index} className="col-lg-10 mb-4">
              <div className="breed-card">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    {breed.image?.url ? (
                      <img 
                        src={breed.image.url} 
                        alt={breed.name}
                        className="img-fluid rounded"
                        style={{ maxHeight: '250px', objectFit: 'cover', width: '100%' }}
                      />
                    ) : (
                      <div 
                        className="d-flex align-items-center justify-content-center rounded"
                        style={{ 
                          height: '250px', 
                          backgroundColor: '#e9ecef',
                          color: '#6c757d'
                        }}
                      >
                        <i className="fa fa-cat fa-3x"></i>
                      </div>
                    )}
                  </div>
                  
                  <div className="col-md-8">
                    <div className="breed-info">
                      <h3 className="breed-name">{breed.name}</h3>
                      
                      {breed.origin && (
                        <p className="breed-origin">
                          <i className="fa fa-map-marker me-2"></i>
                          Origin: {breed.origin}
                        </p>
                      )}
                      
                      {breed.temperament && (
                        <div className="mb-3">
                          <strong>Temperament:</strong>
                          <p className="text-muted">{breed.temperament}</p>
                        </div>
                      )}
                      
                      {breed.life_span && (
                        <div className="mb-3">
                          <strong>Life Span:</strong>
                          <span className="text-muted ms-2">{breed.life_span}</span>
                        </div>
                      )}
                      
                      {breed.weight && (
                        <div className="mb-3">
                          <strong>Weight:</strong>
                          <span className="text-muted ms-2">
                            {breed.weight.metric} kg ({breed.weight.imperial} lbs)
                          </span>
                        </div>
                      )}
                      
                      {breed.description && (
                        <div className="breed-description">
                          <strong>Description:</strong>
                          <p className="text-muted mt-2">{breed.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row">
          <div className="col-12 text-center mt-4">
            <button 
              className="btn btn-outline-primary"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <i className="fa fa-upload me-2"></i>
              Upload Another Photo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreedResults;

