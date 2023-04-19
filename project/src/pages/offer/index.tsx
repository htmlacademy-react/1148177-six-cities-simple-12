import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

import { firstLetterUpper } from '../../utils/funcs';
import { useAppDispatch, useAppSelector } from '../../hooks';

import Layout from '../../components/layout';
import ReviewForm from '../../components/review-form';
import InsideGoods from '../../components/inside-goods';
import RoomGallery from '../../components/room-gallery';
import NearPlaces from '../../components/near-places';
import PropertyHost from '../../components/property-host';
import ReviewsList from '../../components/reviews-list';
import Map from '../../components/map';
import NotFound from '../not-found';

import {
  fetchNearOffersAction,
  fetchOfferByIdAction,
  fetchReviewAction,
} from '../../store/api-actions';
import Loading from '../loading';

function OfferPage() {
  const { id: paramId } = useParams();
  const offerId = Number(paramId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(fetchOfferByIdAction(offerId));
      dispatch(fetchNearOffersAction(offerId));
      dispatch(fetchReviewAction(offerId));
    }
    return () => {
      isMounted = false;
    };
  }, [dispatch, offerId]);

  const offerById = useAppSelector((state) => state.offerById);
  const reviews = useAppSelector((state) => state.reviews);
  const nearOffers = useAppSelector((state) => state.nearOffers);
  const isDataLoading = useAppSelector((state) => state.isDataLoading);

  if (isDataLoading) {
    return <Loading />;
  }

  if (!offerById) {
    return <NotFound />;
  }

  return (
    <Layout>
      <Helmet>
        <title>{offerById.title}</title>
      </Helmet>

      <main className="page__main page__main--property">
        <section className="property">
          <RoomGallery offer={offerById} />
          <div className="property__container container">
            <div className="property__wrapper">
              {offerById.isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{offerById.title}</h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${offerById.rating * 20}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {offerById.rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {firstLetterUpper(offerById.type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offerById.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offerById.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offerById.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <InsideGoods offer={offerById} />
              <PropertyHost
                host={offerById.host}
                description={offerById.description}
              />
              <section className="property__reviews reviews">
                <ReviewsList reviews={reviews} />
                <ReviewForm />
              </section>
            </div>
          </div>

          <Map className="property__map" offers={nearOffers} />
        </section>
        <NearPlaces offers={nearOffers} />
      </main>
    </Layout>
  );
}

export default OfferPage;
