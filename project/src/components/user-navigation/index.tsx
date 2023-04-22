import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../types/const';
import UserAuthorized from '../user-authorized';
import UserUnauthorized from '../user-authorized/user-unauthorized';

export default function UserNavigation(): JSX.Element {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authorizationStatus === AuthorizationStatus.Auth ? (
          <UserAuthorized />
        ) : (
          <UserUnauthorized />
        )}
      </ul>
    </nav>
  );
}
