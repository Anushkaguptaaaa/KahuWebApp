import React from 'react';
import Navigation from '../components/Navigation';

const About: React.FC = () => {
  return (
    <div>
      <Navigation />
      <div className="about_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>About Kahu</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="about_img">
                <img src="/images/about_img.jpg" alt="About Kahu" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about_text">
                <h3>Kahu: Cat Breed Detection</h3>
                <p>
                  Welcome to Kahu, your go-to platform for cat breed identification! Our application uses advanced image recognition technology to identify cat breeds from your uploaded photos.
                </p>
                <p>
                  Whether you're a cat lover, a pet owner curious about your feline friend's heritage, or someone who just spotted an interesting cat and wants to know more, Kahu is here to help.
                </p>
                <p>
                  Simply upload a clear photo of a cat, and our AI-powered system will analyze the image and provide you with the most likely breed matches along with information about those breeds.
                </p>
                <p>
                  Kahu is powered by The Cat API, ensuring accurate and reliable breed detection results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
