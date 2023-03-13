import { CardType } from '../../types/const';
import { OfferItem } from '../../types/offers';
import OfferCard from '../offer-card';

type OffersListProps = {
  offers: OfferItem[];
  cardType: CardType;
};

function OffersList({ offers, cardType }: OffersListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} cardType={cardType} />
      ))}
    </>
  );
}

export default OffersList;
