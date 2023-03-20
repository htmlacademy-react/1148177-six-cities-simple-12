import { CardType } from '../../types/const';
import { Offer } from '../../types/offers';
import OfferCard from '../offer-card';

type OffersListProps = {
  offers: Offer[];
  cardType: CardType;
  onHover?: (id: number | null) => void;
};

function OffersList({
  offers,
  cardType,
  onHover,
}: OffersListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          cardType={cardType}
          onHover={onHover}
        />
      ))}
    </>
  );
}

export default OffersList;
