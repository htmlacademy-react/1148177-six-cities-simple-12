import { Link } from 'react-router-dom';
import Logo from '../logo';

function NotFound(): JSX.Element {
  return (
    <div>
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Logo />
              </div>
            </div>
          </div>
        </header>

        <main className="page__main page__main--index page__main--index-empty">
          <div className="cities">
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">404 Not Found </b>
                  <Link
                    to="/"
                    className="locations__item-link tabs__item tabs__item--active"
                    style={{ fontStyle: 'normal' }}
                  >
                    Вернуться на главную
                  </Link>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default NotFound;
