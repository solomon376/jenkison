export default function AnimalCard({ animal, onClick }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm animal-card">
        <img
          src={`/src/assets/images/animals/${animal.image}`}
          className="card-img-top"
          alt={animal.name}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <span className="animal-category">{animal.categoryName}</span>
        <div className="card-body">
          <h5 className="card-title">{animal.name}</h5>
          <h6 className="text-muted">{animal.scientificName}</h6>
          <p className="card-text">{animal.description.substring(0, 100)}...</p>
          <button 
            className="btn btn-sm btn-outline-primary animal-details"
            onClick={() => onClick(animal)}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}