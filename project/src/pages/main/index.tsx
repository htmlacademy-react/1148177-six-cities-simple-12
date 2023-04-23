import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CardType } from '../../types/const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { emptyClass, getCurrentOffers } from '../../utils/funcs';

import Map from '../../components/map';
import Sort from '../../components/sort';
import Layout from '../../components/layout';
import MainEmpty from '../../components/main-empty';
import CitiesList from '../../components/cities-list';
import OffersList from '../../components/offers-list';

import { fetchOffersAction } from '../../store/offers-data/api-actions';
import {
  getCity,
  getSelectedOfferId,
  getSortType,
} from '../../store/app-process/selectors';
import { getOffersStatus, getOffers } from '../../store/offers-data/selectors';

import Loading from '../loading';

function Main() {
  const offers = useAppSelector(getOffers);
  const location = useAppSelector(getCity);
  const sortType = useAppSelector(getSortType);
  const selectedOfferId = useAppSelector(getSelectedOfferId);
  const currentOffers = getCurrentOffers(offers, location, sortType);
  const status = useAppSelector(getOffersStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!offers.length) {
      dispatch(fetchOffersAction());
    }
  }, [dispatch, offers]);

  if (status.isLoading) {
    return <Loading />;
  }

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
                  {currentOffers.length} places to stay in {location}
                </b>
                <Sort />
                <div className="cities__places-list places__list tabs__content">
                  <OffersList offers={offers} cardType={CardType.Cities} />
                </div>
              </section>
              <div className="cities__right-section">
                <div className="cities__right-section">
                  <Map
                    className="cities__map"
                    offers={currentOffers}
                    selectedOfferId={selectedOfferId}
                  />
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
