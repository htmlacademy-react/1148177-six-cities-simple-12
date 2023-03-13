import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Offer, OfferItem } from '../../types/offers';
import { AppRoute } from '../../types/const';
import OfferPage from '../../pages/offer';
import Login from '../../pages/login';
import NotFound from '../../pages/not-found';
import Main from '../../pages/main';


type AppProps = {
  placesCount: number;
  offersList: OfferItem[];
  offer: Offer;
};

function App({ placesCount, offersList, offer }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Main placesCount={placesCount} offers={offersList} />}
          />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route
            path={AppRoute.Room}
            element={<OfferPage offer={offer} offers={offersList} />}
          />
          <Route path={AppRoute.NotFound} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
