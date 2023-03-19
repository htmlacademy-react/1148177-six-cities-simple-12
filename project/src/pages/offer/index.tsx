import { Helmet } from 'react-helmet-async';
import { firstLetterUpper } from '../../utils/funcs';
import { OfferItem } from '../../types/offers';
import { Reviews } from '../../types/reviews';
import Layout from '../../components/layout';
import ReviewForm from '../../components/review-form';
import InsideGoods from '../../components/inside-goods';
import RoomGallery from '../../components/room-gallery';
import NearPlaces from '../../components/near-places';
import PropertyHost from '../../components/property-host';
import PropertyReviews from '../../components/property-reviews';
import { useParams } from 'react-router-dom';
import NotFound from '../not-found';
import Map from '../../components/map';
import { useState } from 'react';

type OfferProps = {
  offers: OfferItem[];
  reviews: Reviews[];
};

function OfferPage({ offers, reviews }: OfferProps) {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const firstThreeOffers = offers.slice(0, 3);

  const { id } = useParams();
  const offer = offers.find((o) => o.id === Number(id));

  if (!offer) {
    return <NotFound />;
  }

  return (
    <Layout>
      <Helmet>
        <title>{offer?.title}</title>
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
                  <span style={{ width: `${offer.rating * 20}%` }} />
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
                <PropertyReviews reviews={reviews} />
                <ReviewForm />
              </section>
            </div>
          </div>

          <Map
            className="property__map"
            offerCityLocation={offer.city.location}
            selectedOffer={activeCard}
            offers={firstThreeOffers}
          />
        </section>
        <NearPlaces offers={offers} onHover={(id) => setActiveCard(id)} />
      </main>
    </Layout>
  );
}

export default OfferPage;
