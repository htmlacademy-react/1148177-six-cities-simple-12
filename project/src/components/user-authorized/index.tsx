import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

function UserAuthorized(): JSX.Element {
  const userData = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();

  return (
    <>
      <li className="header__nav-item user">
        <div className="header__nav-profile">
          <div className="header__avatar-wrapper user__avatar-wrapper">
            <img
              src={userData?.avatarUrl}
              width="20"
              height="20"
              alt={userData?.name}
            />
          </div>
          <span className="header__user-name user__name">
            {userData?.email}
          </span>
        </div>
      </li>
      <li className="header__nav-item">
        <Link
          to="#/"
          className="header__nav-link"
          onClick={(event: MouseEvent) => {
            event.preventDefault();
            dispatch(logoutAction());
          }}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </>
  );
}

export default UserAuthorized;
