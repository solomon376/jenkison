import { galleryImages } from '../data/gallery';

export default function Gallery() {
  return (
    <section id="gallery" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 section-title">Photo Gallery</h2>
        <div className="row gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3 mb-4">
              <a 
                href={`/src/assets/images/gallery/${image.full}`} 
                data-lightbox="gallery" 
                data-title={image.title}
              >
                <img 
                  src={`/src/assets/images/gallery/${image.thumb}`} 
                  className="img-fluid rounded" 
                  alt={image.title}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}