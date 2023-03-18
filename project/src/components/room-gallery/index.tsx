import { Offer } from '../../types/offers';

type PropertyGalleryProps = {
  offer: Offer;
};

function RoomGallery({ offer }: PropertyGalleryProps) {
  const galleryImages = offer.images.slice(0, 6);

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {galleryImages.map((image) => (
          <div className="property__image-wrapper" key={image}>
            <img
              className="property__image"
              src={image}
              alt={offer.title}
              aria-hidden
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomGallery;
