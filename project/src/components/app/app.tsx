import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Offer } from '../../types/offers';
import { Review } from '../../types/reviews';
import { AppRoute } from '../../types/const';

import OfferPage from '../../pages/offer';
import Login from '../../pages/login';
import NotFound from '../../pages/not-found';
import Main from '../../pages/main';

type AppProps = {
  offersList: Offer[];
  reviewsList: Review[];
};

function App({ offersList, reviewsList }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<Main />}
          />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage reviews={reviewsList} />}
          />
          <Route path={AppRoute.NotFound} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
