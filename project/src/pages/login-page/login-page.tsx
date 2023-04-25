import { Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import LoginForm from '../../login-form/login-form';
import Layout from '../../components/layout/layout';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus, City } from '../../types/const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getRandom } from '../../utils/funcs';
import { changeCity } from '../../store/app-process/app-process';

function LoginPage() {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const randomIndex = getRandom(Object.keys(City).length);
  const randomCity = Object.values(City)[randomIndex];

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <Layout className="page--gray page--login">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm />
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to="/"
                onClick={() => dispatch(changeCity(City[randomCity]))}
              >
                <span>{City[randomCity]}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}

export default LoginPage;
