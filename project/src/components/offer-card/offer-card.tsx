import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { CardType } from '../../types/const';
import { OfferItem } from '../../types/offers';
import { firstLetterUpper } from '../../utils/funcs';
import { selectOffer } from '../../store/app-process/app-process';

type OfferCardProps = {
  offer: OfferItem;
  cardType: CardType;
};

function OfferCard({ offer, cardType }: OfferCardProps): JSX.Element {
  const dispatch = useAppDispatch();

  const { isPremium, previewImage, title, price, rating, type } = offer;

  return (
    <article
      className={`${cardType}__card place-card`}
      onMouseEnter={() => dispatch(selectOffer(offer.id))}
      onMouseLeave={() => dispatch(selectOffer(null))}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt={title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}/`}>{title}</Link>
        </h2>
        <p className="place-card__type">{firstLetterUpper(type)}</p>
      </div>
    </article>
  );
}

export default OfferCard;
