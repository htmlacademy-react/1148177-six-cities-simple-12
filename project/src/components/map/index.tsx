import { useEffect, useRef } from 'react';
import { Icon, Marker } from 'leaflet';
import leaflet from 'leaflet';
import cx from 'classnames';
import 'leaflet/dist/leaflet.css';

import useMap from '../../hooks/useMap';
import { useAppSelector } from '../../hooks';
import { Offer } from '../../types/offers';
import { CURRENT_CUSTOM_ICON, DEFAULT_CUSTOM_ICON } from '../../types/const';

type MapProps = {
  offers: Offer[];
  className: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: DEFAULT_CUSTOM_ICON,
  iconSize: [28, 40],
  iconAnchor: [14, 40],
  style: { color: 'red' },
});

const currentCustomIcon = new Icon({
  iconUrl: CURRENT_CUSTOM_ICON,
  iconSize: [28, 40],
  iconAnchor: [14, 40],
});

function Map({ offers, className }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const selectedCityId = useAppSelector((state) => state.selectedOfferId);
  const cityLocation = offers[0].city.location;
  const map = useMap(mapRef, cityLocation);

  useEffect(() => {
    if (map) {
      map.flyTo(
        [cityLocation.latitude, cityLocation.longitude],
        cityLocation.zoom
      );
    }
  }, [map, cityLocation]);

  useEffect(() => {
    if (map) {
      const markerGroup = leaflet.layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            selectedCityId !== undefined && offer.id === selectedCityId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerGroup);
      });
    }
  }, [map, offers, selectedCityId, cityLocation]);

  return (
    <section
      className={cx('map', { className })}
      ref={mapRef}
      style={{ height: '500px', width: '100%' }}
    />
  );
}

export default Map;
