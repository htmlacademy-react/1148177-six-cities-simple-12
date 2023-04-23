import { Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import LoginForm from '../../login-form';
import Layout from '../../components/layout';
import { useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../types/const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

export default function Login() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

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
              <Link className="locations__item-link" to="/">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
