import React from 'react';
import Navigation from '../components/Navigation';

const Gallery: React.FC = () => {
  const catBreeds = [
    {
      id: 1,
      name: 'Bengal Cat',
      image: '/images/bengal.jpg',
      description: 'Descendants of the Wild Asian Leopard Cat, Bengal Cats are one of the most intelligent and elegant domestic cat breeds in India. They are known to be very talkative and expressive. They also need a LOT of exercise, so keep up with their energy levels—build a play-area for them, take them out for walks, and get interactive cat toys!',
      climate: 'Suitable for Indian climate',
      lifeExpectancy: '10 - 16 years',
      wikiLink: 'https://en.wikipedia.org/wiki/Bengal_cat'
    },
    {
      id: 2,
      name: 'Bombay Cat',
      image: '/images/bombay.jpg',
      description: 'Bombay Cats are one of the most affectionate and smart small cat breeds—it\'s adorable to see how confidently they demand pets! With their sleek black coats and striking eyes, they are beautiful, like mini Black Panthers. They require minimum grooming and happily adapt to homes of any size. It\'s super easy to train them too, with a few yummy cat treats!',
      climate: 'Suitable for Indian climate',
      lifeExpectancy: '9-13 years',
      wikiLink: 'https://en.wikipedia.org/wiki/Bombay_cat'
    },
    {
      id: 3,
      name: 'Maine Coon',
      image: '/images/mainecoon.jpg',
      description: 'Maine Coons are gentle giants known for their friendly and sociable nature. They are one of the largest domestic cat breeds and are excellent with children and other pets. Their thick, water-repellent fur and tufted ears make them well-adapted to cold climates.',
      climate: 'Better suited for cooler climates',
      lifeExpectancy: '12 - 15 years',
      wikiLink: 'https://en.wikipedia.org/wiki/Maine_Coon'
    },
    {
      id: 4,
      name: 'Siamese Cat',
      image: '/images/saimese.jpg',
      description: 'Siamese cats are known for their striking blue eyes, short coat, and distinctive color points. They are very vocal and social cats that form strong bonds with their owners. They are intelligent and can be trained to perform tricks.',
      climate: 'Suitable for warm climates',
      lifeExpectancy: '12 - 20 years',
      wikiLink: 'https://en.wikipedia.org/wiki/Siamese_cat'
    },
    {
      id: 5,
      name: 'Himalayan Cat',
      image: '/images/himalyan.jpg',
      description: 'Himalayan cats are a cross between Persian and Siamese cats, combining the best traits of both breeds. They have the long, luxurious coat of a Persian with the color points of a Siamese. They are calm, gentle, and make excellent indoor companions.',
      climate: 'Better suited for cooler climates',
      lifeExpectancy: '9 - 15 years',
      wikiLink: 'https://en.wikipedia.org/wiki/Himalayan_cat'
    },
    {
      id: 6,
      name: 'Persian Cat',
      image: '/images/persian.jpg',
      description: 'Persian cats are known for their long, flowing coats and flat faces. They are calm, gentle, and prefer a quiet environment. They require daily grooming to maintain their beautiful coat and are best suited as indoor pets.',
      climate: 'Better suited for cooler climates',
      lifeExpectancy: '10 - 17 years',
      wikiLink: 'https://en.wikipedia.org/wiki/Persian_cat'
    },
    {
      id: 7,
      name: 'Abyssinian Cat',
      image: '/images/Abyssinian.jpg',
      description: 'Abyssinian cats are one of the oldest known cat breeds, with a distinctive ticked tabby coat. They are active, playful, and highly intelligent. They love to climb and explore, making them excellent companions for active families.',
      climate: 'Suitable for warm climates',
      lifeExpectancy: '9 - 15 years',
      wikiLink: 'https://en.wikipedia.org/wiki/Abyssinian_cat'
    },
    {
      id: 8,
      name: 'Indian Street Cat',
      image: '/images/indie.jpg',
      description: 'Indian street cats, also known as Indian domestic cats, are hardy and adaptable cats that have evolved to thrive in India\'s diverse climate. They are intelligent, independent, and make loyal companions. They come in various colors and patterns.',
      climate: 'Perfectly adapted to Indian climate',
      lifeExpectancy: '12 - 18 years',
      wikiLink: '#'
    }
  ];

  return (
    <div className="main-layout" style={{ paddingTop: '80px' }}>
      <Navigation />

      {/* Gallery Header */}
      <div style={{
        background: '#333',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'white', marginBottom: '20px' }}>
            Gallery of Fame: Most Popular Indian Cat Breeds
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'white' }}>
            Discover the most beloved cat breeds in India
          </p>
        </div>
      </div>

      {/* Gallery Content */}
      <div style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          {catBreeds.map((breed, index) => (
            <div key={breed.id} className="row mb-5" style={{ marginBottom: '50px' }}>
              <div className="col-12">
                <div style={{
                  padding: '30px',
                  backgroundColor: 'white',
                  color: '#333',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                  borderRadius: '10px',
                  marginBottom: '30px'
                }}>
                  <div className="row">
                    <div className="col-md-4">
                      <h4 style={{ marginBottom: '20px', fontSize: '1.8rem', color: '#333' }}>
                        <a 
                          href={breed.wikiLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ color: '#007bff', textDecoration: 'none' }}
                        >
                          {index + 1}. {breed.name}
                        </a>
                      </h4>
                      <img 
                        src={breed.image} 
                        alt={breed.name}
                        style={{
                          width: '100%',
                          height: '250px',
                          objectFit: 'cover',
                          borderRadius: '8px',
                          marginBottom: '20px'
                        }}
                      />
                    </div>
                    <div className="col-md-8">
                      <p style={{
                        marginBottom: '20px',
                        lineHeight: '1.6',
                        fontSize: '1rem',
                        color: '#555'
                      }}>
                        {breed.description}
                      </p>
                      <p style={{
                        marginBottom: '10px',
                        fontWeight: 'bold',
                        color: '#4CAF50',
                        fontSize: '1rem'
                      }}>
                        ✓ {breed.climate}
                      </p>
                      <p style={{
                        marginBottom: '20px',
                        fontWeight: 'bold',
                        color: '#2196F3',
                        fontSize: '1rem'
                      }}>
                        🕐 Life expectancy: {breed.lifeExpectancy}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div style={{ padding: '60px 0', backgroundColor: '#333', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 style={{ marginBottom: '20px', color: 'white' }}>Want to Identify Your Cat's Breed?</h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: 'white' }}>
                Upload a photo of your cat and let our AI-powered system identify its breed!
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
                Upload Cat Photo
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

export default Gallery;