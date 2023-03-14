import { Reviews } from '../../types/reviews';
import { formatDate } from '../../utils/funcs';

type PropertyReviewsProps = {
  reviews: Reviews[];
};

function PropertyReviews({ reviews }: PropertyReviewsProps): JSX.Element {
  return (
    <>
      {reviews.map((review) => (
        <>
          <h2 className="reviews__title">
            Reviews &middot;{' '}
            <span className="reviews__amount">{review.id}</span>
          </h2>
          <ul className="reviews__list">
            <li className="reviews__item">
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img
                    className="reviews__avatar user__avatar"
                    src={review.user.avatarUrl}
                    width="54"
                    height="54"
                    alt={review.user.name}
                  />
                </div>
                <span className="reviews__user-name">{review.user.name}</span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span style={{ width: `${review.rating * 20}%` }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <p className="reviews__text">{review.comment}</p>
                <time className="reviews__time" dateTime="2019-04-24">
                  {formatDate(review.date)}
                </time>
              </div>
            </li>
          </ul>
        </>
      ))}
    </>
  );
}

export default PropertyReviews;
