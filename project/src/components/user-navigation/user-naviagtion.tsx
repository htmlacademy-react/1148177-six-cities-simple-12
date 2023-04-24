import { useAppSelector } from '../../hooks';
import { getIsAuthorized } from '../../store/user-process/selectors';
import UserUnauthorized from '../user-unauthorized/user-unauthorized';
import UserAuthorized from '../user-authorized/user-authorized';

function UserNavigation(): JSX.Element {
  const isAuth = useAppSelector(getIsAuthorized);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {isAuth ? <UserAuthorized /> : <UserUnauthorized />}
      </ul>
    </nav>
  );
}

export default UserNavigation;
