import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing.');
    e.target.reset();
  };
  
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="mb-4">Jenkinson Sea Life</h5>
            <p>Dedicated to marine life education and conservation since 1995.</p>
            <div className="social-icons mt-4">
              <a href="#" className="text-white me-3"><FaFacebookF /></a>
              <a href="#" className="text-white me-3"><FaTwitter /></a>
              <a href="#" className="text-white me-3"><FaInstagram /></a>
              <a href="#" className="text-white"><FaYoutube /></a>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#home" className="text-white">Home</a></li>
              <li className="mb-2"><a href="#about" className="text-white">About Us</a></li>
              <li className="mb-2"><a href="#animals" className="text-white">Marine Life</a></li>
              <li className="mb-2"><a href="#events" className="text-white">Events</a></li>
              <li className="mb-2"><a href="#gallery" className="text-white">Gallery</a></li>
              <li><a href="#contact" className="text-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="mb-4">Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><i className="fas fa-map-marker-alt me-2"></i> 300 Ocean Avenue, Point Pleasant Beach, Singapore</li>
              <li className="mb-2"><i className="fas fa-phone-alt me-2"></i> +65 1234 5678</li>
              <li className="mb-2"><i className="fas fa-envelope me-2"></i> info@jenkinsonsealife.sg</li>
              <li><i className="fas fa-clock me-2"></i> Open Daily: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">Newsletter</h5>
            <p>Subscribe to our newsletter for updates on events and special programs.</p>
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Your Email" required />
                <button className="btn btn-primary" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <hr className="my-4 bg-secondary" />
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">&copy; 2023 Jenkinson Sea Life. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item"><a href="#" className="text-white">Privacy Policy</a></li>
              <li className="list-inline-item"><a href="#" className="text-white">Terms of Service</a></li>
              <li className="list-inline-item"><a href="#" className="text-white">Sitemap</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );

  
}