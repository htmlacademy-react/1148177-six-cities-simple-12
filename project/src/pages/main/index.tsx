import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { CardType } from '../../types/const';
import { emptyClass, getOffers } from '../../utils/funcs';

import Map from '../../components/map';
import Sort from '../../components/sort';
import Layout from '../../components/layout';
import MainEmpty from '../../components/main-empty';
import OffersList from '../../components/offers-list';
import CitiesList from '../../components/cities-list';

function Main() {
  const city = useAppSelector((state) => state.city);
  const offersState = useAppSelector((state) => state.offersList);
  const sortType = useAppSelector((state) => state.sortType);
  const offers = getOffers(offersState, city, sortType);

  return (
    <Layout className="page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>

      <main className={emptyClass(offers)}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        <div className="cities">
          {offers.length !== 0 ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {offers.length} places to stay in {city}
                </b>
                <Sort />
                <div className="cities__places-list places__list tabs__content">
                  <OffersList offers={offers} cardType={CardType.Cities} />
                </div>
              </section>
              <div className="cities__right-section">
                <div className="cities__right-section">
                  <Map className="cities__map" offers={offers} />
                </div>
              </div>
            </div>
          ) : (
            <MainEmpty />
          )}
        </div>
      </main>
    </Layout>
  );
}

export default Main;
