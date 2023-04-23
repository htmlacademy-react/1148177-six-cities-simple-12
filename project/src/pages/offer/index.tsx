import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { firstLetterUpper, getRating } from '../../utils/funcs';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Map from '../../components/map';
import Layout from '../../components/layout';
import Loading from '../../components/loading';
import NearPlaces from '../../components/near-places';
import RoomGallery from '../../components/room-gallery';
import InsideGoods from '../../components/inside-goods';
import PropertyHost from '../../components/property-host';
import ReviewsList from '../../components/reviews-list';
import NotFound from '../not-found';
import {
  getNearOffers,
  getOffer,
  getOfferPropertyStatus,
  getReviews,
} from '../../store/offer-data/selectors';
import {
  fetchNearOffersAction,
  fetchOfferAction,
  fetchReviewAction,
} from '../../store/offer-data/api-actions';

function OfferPage() {
  const { id: paramId } = useParams();
  const offerId = Number(paramId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOfferAction(offerId));
    dispatch(fetchNearOffersAction(offerId));
    dispatch(fetchReviewAction(offerId));
  }, [dispatch, offerId]);

  const offer = useAppSelector(getOffer);
  const reviews = useAppSelector(getReviews);
  const nearOffers = useAppSelector(getNearOffers);
  const offerPropertyStatus = useAppSelector(getOfferPropertyStatus);

  if (offerPropertyStatus.isLoading) {
    return <Loading />;
  }

  if (!offer) {
    return <NotFound />;
  }

  return (
    <Layout>
      <Helmet>
        <title>{offer.title}</title>
      </Helmet>

      <main className="page__main page__main--property">
        <section className="property">
          <RoomGallery offer={offer} />
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{offer.title}</h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${getRating(offer.rating)}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {offer.rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {firstLetterUpper(offer.type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <InsideGoods offer={offer} />
              <PropertyHost host={offer.host} description={offer.description} />
              <section className="property__reviews reviews">
                <ReviewsList offerId={offerId} reviews={reviews} />
              </section>
            </div>
          </div>
          <Map
            className="property__map"
            offers={[...nearOffers, offer]}
            selectedOfferId={offer.id}
          />
        </section>
        <NearPlaces offers={nearOffers} />
      </main>
    </Layout>
  );
}

export default OfferPage;
