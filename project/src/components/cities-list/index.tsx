import { City } from '../../types/const';
import CityItem from '../city-item';

function CitiesList(): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.entries(City).map(([_, city]) => (
            <CityItem key={city} city={city} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
