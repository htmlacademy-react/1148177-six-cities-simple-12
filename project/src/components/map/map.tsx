import { useEffect, useRef } from 'react';
import { Icon, Marker } from 'leaflet';
import leaflet from 'leaflet';
import cx from 'classnames';
import 'leaflet/dist/leaflet.css';

import useMap from '../../hooks/useMap';
import { Offer, OfferId } from '../../types/offers';
import { CURRENT_CUSTOM_ICON, DEFAULT_CUSTOM_ICON } from '../../types/const';

type MapProps = {
  offers: Offer[];
  className: string;
  selectedOfferId: OfferId | null;
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

function Map({ offers, className, selectedOfferId }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const cityLocation = offers[0]?.city?.location;
  const map = useMap(mapRef, cityLocation);

  useEffect(() => {
    if (map) {
      const { latitude, longitude, zoom } = cityLocation;
      map.flyTo([latitude, longitude], zoom);
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
            selectedOfferId !== null && offer.id === selectedOfferId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerGroup);
      });

      return () => {
        map.removeLayer(markerGroup);
      };
    }
  }, [map, offers, selectedOfferId, cityLocation]);

  return (
    <section
      className={cx('map', { className })}
      ref={mapRef}
      style={{
        height: '500px',
        width: 'clamp(1200px,100px, 100%) ',
        margin: '0 auto',
        marginBottom: '20px',
      }}
    />
  );
}

export default Map;
