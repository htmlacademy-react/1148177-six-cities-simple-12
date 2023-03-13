import { Helmet } from 'react-helmet-async';
import { firstLetterUpper } from '../../utils/funcs';
import { Offer, OfferItem } from '../../types/offers';
import { CardType } from '../../types/const';
import Layout from '../../components/layout';
import Reviews from '../../components/reviews';
import OffersList from '../../components/offers-list';
import InsideGoods from '../../components/inside-goods';
import RoomGallery from '../../components/room-gallery';

type OfferProps = {
  offer: Offer;
  offers: OfferItem[];
};

function OfferPage({ offer, offers }: OfferProps) {
  const nearPlaces = offers.slice(0, 3);

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
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src="img/avatar-angelina.jpg"
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{offer.host.name}</span>
                  <span className="property__user-status">
                    {offer.host.isPro && 'Pro'}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    A quiet cozy and picturesque that hides behind a a river by
                    the unique lightness of Amsterdam. The building is green and
                    from 18th century.
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand
                    Square and National Opera, but where the bustle of the city
                    comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot; <span className="reviews__amount">1</span>
                </h2>
                <ul className="reviews__list">
                  <li className="reviews__item">
                    <div className="reviews__user user">
                      <div className="reviews__avatar-wrapper user__avatar-wrapper">
                        <img
                          className="reviews__avatar user__avatar"
                          src="img/avatar-max.jpg"
                          width="54"
                          height="54"
                          alt="Reviews avatar"
                        />
                      </div>
                      <span className="reviews__user-name">Max</span>
                    </div>
                    <div className="reviews__info">
                      <div className="reviews__rating rating">
                        <div className="reviews__stars rating__stars">
                          <span style={{ width: '80%' }}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <p className="reviews__text">
                        A quiet cozy and picturesque that hides behind a a river
                        by the unique lightness of Amsterdam. The building is
                        green and from 18th century.
                      </p>
                      <time className="reviews__time" dateTime="2019-04-24">
                        April 2019
                      </time>
                    </div>
                  </li>
                </ul>
                <Reviews />
              </section>
            </div>
          </div>
          <section className="property__map map" />
        </section>
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
      </main>
    </Layout>
  );
}

export default OfferPage;
