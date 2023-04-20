import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';

type CityItemProps = {
  city: string;
};

function CityItem({ city }: CityItemProps): JSX.Element {
  const dispatch = useDispatch();
  const currentCity = useAppSelector((state) => state.city);

  const handleChangeCity = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    dispatch(changeCity(city));
  };

  return (
    <li className="locations__item">
      <Link
        className={cx('locations__item-link tabs__item', {
          'tabs__item--active': city === currentCity,
        })}
        onClick={handleChangeCity}
        to="/"
      >
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default CityItem;
