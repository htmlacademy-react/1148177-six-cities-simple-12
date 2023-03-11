import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from '../../pages/main';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../types/const';
import Login from '../../pages/login';
import Property from '../../pages/room';
import NotFound from '../not-found';
import PrivateRoute from '../private-route';

type AppProps = {
  offers: number;
};

function App({ offers }: AppProps) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main offers={offers} />} />
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <Login />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Room} element={<Property />} />
          <Route path={AppRoute.NotFound} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
