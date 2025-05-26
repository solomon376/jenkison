import { useState, useEffect } from 'react';
import { marineAnimals } from './data/animals';
import { events } from './data/events';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import About from './components/About';
import Ticker from './components/Ticker';
import AnimalModal from './components/Modal';
import ScrollToTop from './components/ScrollToTop'; // Add this import
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import './styles/animation.css';

function App() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [filter, setFilter] = useState('all');
  const [visitorCount, setVisitorCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Visitor count
    const count = localStorage.getItem('visitorCount') || Math.floor(Math.random() * 5000) + 5000;
    setVisitorCount(parseInt(count) + 1);
    localStorage.setItem('visitorCount', parseInt(count) + 1);

    // Scroll listener
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredAnimals = filter === 'all' 
    ? marineAnimals 
    : marineAnimals.filter(animal => animal.category === filter);

  return (
    <div className="app">
      <Header visitorCount={visitorCount} scrolled={scrolled} />
      <Hero />
      
      <main>
        <About />
        
        {/* Animals Section */}
        <section id="animals" className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5 section-title">Our Marine Life</h2>
            <div className="text-center mb-5">
              <div className="btn-group filter-buttons">
                <button onClick={() => setFilter('all')} className={`btn btn-outline-primary ${filter === 'all' ? 'active' : ''}`}>All</button>
                <button onClick={() => setFilter('mammals')} className={`btn btn-outline-primary ${filter === 'mammals' ? 'active' : ''}`}>Mammals</button>
                <button onClick={() => setFilter('fish')} className={`btn btn-outline-primary ${filter === 'fish' ? 'active' : ''}`}>Fish</button>
                <button onClick={() => setFilter('reptiles')} className={`btn btn-outline-primary ${filter === 'reptiles' ? 'active' : ''}`}>Reptiles</button>
                <button onClick={() => setFilter('invertebrates')} className={`btn btn-outline-primary ${filter === 'invertebrates' ? 'active' : ''}`}>Invertebrates</button>
              </div>
            </div>
            
            <div className="row">
              {filteredAnimals.map(animal => (
                <div key={animal.id} className="col-md-6 col-lg-4 mb-4">
                  <div className="card h-100 shadow-sm animal-card">
                    <img 
                      src={`/src/assets/images/animals/${animal.image}`}
                      className="card-img-top"
                      alt={animal.name}
                    />
                    <span className="animal-category">{animal.categoryName}</span>
                    <div className="card-body">
                      <h5 className="card-title">{animal.name}</h5>
                      <h6 className="text-muted">{animal.scientificName}</h6>
                      <p className="card-text">{animal.description.substring(0, 100)}...</p>
                      <button 
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => setSelectedAnimal(animal)}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Events events={events} />
        <Gallery />
        <Reviews />
        <Contact />
      </main>

      <Footer />
      <Ticker />
      <ScrollToTop /> {/* Add this component */}
      
      <AnimalModal 
        animal={selectedAnimal} 
        onClose={() => setSelectedAnimal(null)} 
      />
    </div>
  );
}

export default App;