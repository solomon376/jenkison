export default function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 section-title">About Jenkinson Sea Life</h2>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img 
              src="/src/assets/images/aquarium.jpg" 
              alt="Jenkinson Sea Life Facility" 
              className="img-fluid rounded shadow"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <p className="lead">Jenkinson Sea Life is a privately owned facility located on the boardwalk in Point Pleasant Beach, Singapore.</p>
            <p>We are dedicated to educating the public on all aspects of marine life and conservation. Each exhibit is designed to promote awareness of the animals, their habitats and conservation.</p>
            <p>We strive to provide our guests with a unique and memorable experience through creative exhibits as well as innovative educational and outreach programs.</p>
            
            <div className="mt-4">
              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-clock me-3 text-primary fs-4"></i>
                <div>
                  <h5 className="mb-0">Opening Hours</h5>
                  <p className="mb-0">Monday-Sunday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              
              <div className="d-flex align-items-center mb-3">
                <i className="fas fa-map-marker-alt me-3 text-primary fs-4"></i>
                <div>
                  <h5 className="mb-0">Location</h5>
                  <p className="mb-0">300 Ocean Avenue, Point Pleasant Beach, Singapore</p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <i className="fas fa-star me-3 text-primary fs-4"></i>
                <div>
                  <h5 className="mb-0">Our Mission</h5>
                  <p className="mb-0">To inspire conservation of the ocean through education, research, and direct action.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional About Sections */}
        <div className="row mt-5">
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <i className="fas fa-water text-primary fs-1 mb-3"></i>
                <h4>Conservation</h4>
                <p>We actively participate in 12 marine conservation projects worldwide, protecting endangered species and habitats.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <i className="fas fa-graduation-cap text-primary fs-1 mb-3"></i>
                <h4>Education</h4>
                <p>Over 50,000 students participate in our educational programs annually, learning about marine ecosystems.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <i className="fas fa-flask text-primary fs-1 mb-3"></i>
                <h4>Research</h4>
                <p>Our team publishes 15+ scientific papers each year, contributing to marine biology knowledge.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}