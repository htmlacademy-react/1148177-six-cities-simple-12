import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-router';
import NotFound from '../../pages/not-found';
import { AppRoute } from '../../types/const';
import OfferPage from '../../pages/offer';
import Login from '../../pages/login';
import Main from '../../pages/main';


function App(): JSX.Element {
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route index element={<Main />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Offer} element={<OfferPage />} />
          <Route path={AppRoute.NotFound} element={<NotFound />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
