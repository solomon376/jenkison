import { Modal } from 'react-bootstrap';

export default function AnimalModal({ animal, onClose }) {
  if (!animal) return null;

  return (
    <Modal 
      show={!!animal}
      onHide={onClose}
      backdrop="static"       // Prevent closing on outside click
      keyboard={false}        // Prevent closing on Esc key
      size="lg"
    >
      <Modal.Header closeButton className="bg-primary text-white">
        <Modal.Title>{animal.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-6">
            <img 
              src={`/src/assets/images/animals/${animal.image}`}
              className="img-fluid rounded mb-3"
              alt={animal.name}
            />
          </div>
          <div className="col-md-6">
            <h4>{animal.name}</h4>
            <h6 className="text-muted">{animal.scientificName}</h6>
            <p><strong>Category:</strong> {animal.categoryName}</p>
            <p><strong>Size:</strong> {animal.size}</p>
            <p><strong>Weight:</strong> {animal.weight}</p>
            <p><strong>Diet:</strong> {animal.diet}</p>
            <p><strong>Conservation Status:</strong> {animal.conservationStatus}</p>
            <hr />
            <p>{animal.description}</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={onClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}
