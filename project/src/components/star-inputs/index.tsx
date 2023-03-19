import React, { ChangeEvent } from 'react';
import { RATING_TYPES } from '../../types/const';

type StarInputsProps = {
  value: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
};

function StarInputs({ value, onChange }: StarInputsProps): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      {RATING_TYPES.map((type, i) => {
        const ratingValue = RATING_TYPES.length - i;

        return (
          <React.Fragment key={ratingValue}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={ratingValue}
              id={`${ratingValue}-stars`}
              type="radio"
              onChange={onChange}
              checked={+value === ratingValue}
            />
            <label
              htmlFor={`${ratingValue}-stars`}
              className="reviews__rating-label form__rating-label"
              title={type}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default StarInputs;
