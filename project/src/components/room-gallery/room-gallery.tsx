import { Offer } from '../../types/offers';
import { galleryImages } from '../../utils/funcs';

type PropertyGalleryProps = {
  offer: Offer;
};

function RoomGallery({ offer }: PropertyGalleryProps) {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {galleryImages(offer).map((image) => (
          <div className="property__image-wrapper" key={image}>
            <img className="property__image" src={image} alt={offer.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomGallery;
