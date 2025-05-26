export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 section-title">Contact Us</h2>
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h4 className="card-title mb-4">Get in Touch</h4>
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fas fa-map-marker-alt me-3 text-primary"></i>
                    <p className="mb-0">300 Ocean Avenue, Point Pleasant Beach, Singapore</p>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <i className="fas fa-phone-alt me-3 text-primary"></i>
                    <p className="mb-0">+65 1234 5678</p>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <i className="fas fa-envelope me-3 text-primary"></i>
                    <p className="mb-0">info@jenkinsonsealife.sg</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fas fa-clock me-3 text-primary"></i>
                    <p className="mb-0">Open Daily: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="map-container">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.792156675721!2d103.85321431475399!3d1.3009999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19a936a8e6c5%3A0x3d5c1a5a3b5b5b5b!2sPoint%20Pleasant%20Beach!5e0!3m2!1sen!2ssg!4v1620000000000!5m2!1sen!2ssg" 
                    width="100%" 
                    height="250" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h4 className="card-title mb-4">Send Us a Message</h4>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Your Name" required />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Your Email" required />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Subject" />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}