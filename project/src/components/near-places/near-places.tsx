import { CardType } from '../../types/const';
import { OfferItem } from '../../types/offers';
import OffersList from '../offers-list/offers-list';

type NearPlacesProps = {
  offers: OfferItem[];
};

function NearPlaces({ offers }: NearPlacesProps): JSX.Element {
  const nearPlaces = offers.slice(0, 3);

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">
          Other places in the neighbourhood
        </h2>
        <div className="near-places__list places__list">
          <OffersList offers={nearPlaces} cardType={CardType.NearPlaces} />
        </div>
      </section>
    </div>
  );
}

export default NearPlaces;
