import cx from 'classnames';
import { useRef, useState } from 'react';
import { SortType } from '../../types/const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { getSortType } from '../../store/app-process/selectors';
import { changeSort } from '../../store/app-process/app-process';

function Sort(): JSX.Element {
  const [open, setOpen] = useState(false);
  const sortType = useAppSelector(getSortType);
  const dispatch = useAppDispatch();
  const refOne = useRef<HTMLDivElement>(null);

  useOnClickOutside(refOne, () => setOpen(false));

  return (
    <form className="places__sorting">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setOpen(!open)}
        ref={refOne}
      >
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={cx('places__options places__options--custom', {
          'places__options--opened': open,
        })}
      >
        {Object.entries(SortType).map(([, value]) => (
          <li
            key={value}
            className={cx('places__option', {
              'places__option--active': value === sortType,
            })}
            onClick={() => {
              setOpen(false);
              dispatch(changeSort(value));
            }}
          >
            {value}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sort;
