import { Helmet } from 'react-helmet-async';

import { CardType } from '../../types/const';
import { OfferItem } from '../../types/offers';
import { emptyClass } from '../../utils/funcs';

import Layout from '../../components/layout';
import MainEmpty from '../../components/main-empty';
import OffersList from '../../components/offers-list';
import Sort from '../../components/sort';
import Tabs from '../../components/tabs';

type MainProps = {
  placesCount: number;
  offers: OfferItem[];
};

function Main({ placesCount, offers }: MainProps) {
  return (
    <Layout className="page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>

      <main className={emptyClass(offers)}>
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <div className="cities">
          {offers.length !== 0 ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {placesCount} places to stay in Amsterdam
                </b>
                <Sort />
                <div className="cities__places-list places__list tabs__content">
                  <OffersList offers={offers} cardType={CardType.Cities} />
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map" />
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
