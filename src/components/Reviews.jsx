import { useState } from 'react';
import { reviews } from '../data/reviews';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export default function Reviews() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your review!');
    setRating(0);
    e.target.reset();
  };

  return (
    <section id="reviews" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 section-title">Visitor Reviews</h2>
        <div className="row">
          {reviews.map((review, index) => (
            <div key={index} className="col-lg-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex mb-3">
                    <div className="flex-shrink-0">
                      <img src={`/src/assets/images/reviews/${review.image}`} className="rounded-circle" width="50" alt="User" />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mb-0">{review.name}</h5>
                      <div className="text-warning">
                        {[...Array(5)].map((_, i) => (
                          i < Math.floor(review.rating) ? 
                            <FaStar key={i} /> : 
                            i === Math.floor(review.rating) && review.rating % 1 !== 0 ? 
                              <FaStarHalfAlt key={i} /> : 
                              <FaRegStar key={i} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="card-text">"{review.text}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <h4 className="text-center mb-4">Share Your Experience</h4>
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="col-md-6">
              <input type="email" className="form-control" placeholder="Your Email" required />
            </div>
            <div className="col-12">
              <div className="rating mb-3">
                <span>Your Rating:</span>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <label key={i}>
                      <input 
                        type="radio" 
                        name="rating" 
                        value={i+1} 
                        onClick={() => setRating(i+1)}
                        style={{ display: 'none' }}
                      />
                      {i + 1 <= (hover || rating) ? 
                        <FaStar 
                          className="star" 
                          onMouseEnter={() => setHover(i+1)}
                          onMouseLeave={() => setHover(0)}
                        /> : 
                        <FaRegStar 
                          className="star" 
                          onMouseEnter={() => setHover(i+1)}
                          onMouseLeave={() => setHover(0)}
                        />
                      }
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-12">
              <textarea className="form-control" rows="4" placeholder="Your Review" required></textarea>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-primary">Submit Review</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}