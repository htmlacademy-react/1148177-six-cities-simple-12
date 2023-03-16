import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Offer, OfferItem } from '../../types/offers';
import { Reviews } from '../../types/reviews';
import { AppRoute } from '../../types/const';

import OfferPage from '../../pages/offer';
import Login from '../../pages/login';
import NotFound from '../../pages/not-found';
import Main from '../../pages/main';

type AppProps = {
  placesCount: number;
  offer: Offer;
  offersList: OfferItem[];
  reviewsList: Reviews[];
};

function App({
  placesCount,
  offer,
  offersList,
  reviewsList,
}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<Main placesCount={placesCount} offers={offersList} />}
          />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route
            path={AppRoute.Offer}
            element={
              <OfferPage
                offer={offer}
                offers={offersList}
                reviews={reviewsList}
              />
            }
          />
          <Route path={AppRoute.NotFound} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
