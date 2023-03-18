import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../types/const';
import Layout from '../../components/layout';

function NotFound(): JSX.Element {
  return (
    <Layout className="page--gray page--main">
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>
      <main className="page__main page__main--index page__main--index-empty">
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">404 Not Found </b>
                <Link
                  to={AppRoute.Main}
                  className="locations__item-link tabs__item tabs__item--active"
                  style={{ fontStyle: 'normal' }}
                >
                  Go back to the main page
                </Link>
              </div>
            </section>
            <div className="cities__right-section" />
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default NotFound;
