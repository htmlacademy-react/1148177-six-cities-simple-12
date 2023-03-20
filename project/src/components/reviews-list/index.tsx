import { Review } from '../../types/reviews';
import ReviewItem from '../review-item';

type ReviewsListProps = {
  reviews: Review[];
};

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">{reviews.length}</span>
      </h2>

      <ul className="reviews__list">
        {reviews.map((review) => (
          <li className="reviews__item" key={review.id}>
            <ReviewItem review={review} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ReviewsList;
