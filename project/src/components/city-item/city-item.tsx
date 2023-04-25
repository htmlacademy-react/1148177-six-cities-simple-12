import cx from 'classnames';
import { Link } from 'react-router-dom';
import { City } from '../../types/const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCity } from '../../store/app-process/selectors';
import { changeCity } from '../../store/app-process/app-process';

type CityItemProps = {
  city: City;
};

function CityItem({ city }: CityItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(getCity);

  return (
    <li className="locations__item">
      <Link
        className={cx('locations__item-link tabs__item', {
          'tabs__item--active': city === currentCity,
        })}
        to="/"
        onClick={(event) => {
          event.preventDefault();
          dispatch(changeCity(city));
        }}
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default CityItem;
