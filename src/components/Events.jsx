import { events } from '../data/events';

export default function Events() {
  return (
    <section id="events" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 section-title">Upcoming Events</h2>
        <div className="row">
          {events.map(event => (
            <div key={event.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img 
                  src={`/src/assets/images/events/${event.image}`} 
                  className="card-img-top" 
                  alt={event.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <h6 className="text-muted">{event.time}</h6>
                  <p className="card-text">{event.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className={`badge ${event.badge === 'For Kids' ? 'bg-primary' : 'bg-success'}`}>
                      {event.badge}
                    </span>
                    <button className="btn btn-sm btn-outline-primary">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}