import { useRef, useState } from 'react';
import cx from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { changeSort } from '../../store/action';
import { SortType } from '../../types/const';

function Sort(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const sortType = useAppSelector((state) => state.sortType);
  const dispatch = useAppDispatch();
  const refOne = useRef<HTMLDivElement>(null);

  useOnClickOutside(refOne, () => setOpen(false));

  return (
    <form className="places__sorting">
      <span className="places__sorting-caption">Sort by</span>
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
            tabIndex={0}
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
