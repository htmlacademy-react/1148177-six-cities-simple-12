import cx from 'classnames';
import { useEffect, useRef } from 'react';
import { Icon, Marker } from 'leaflet';

import 'leaflet/dist/leaflet.css';
import { Offer, OfferCityLocation } from '../../types/offers';
import useMap from '../../hooks/useMap';

type MapProps = {
  offerCityLocation: OfferCityLocation;
  offers: Offer[];
  selectedOffer: number | null;
  className: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: './img/pin.svg',
  iconSize: [28, 40],
  iconAnchor: [14, 40],
  style: { color: 'red' },
});

const currentCustomIcon = new Icon({
  iconUrl: './img/pin-active.svg',
  iconSize: [28, 40],
  iconAnchor: [14, 40],
});

function Map({
  offerCityLocation,
  offers,
  selectedOffer,
  className,
}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, offerCityLocation);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.id === selectedOffer
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  return (
    <section
      className={cx('map', { className })}
      ref={mapRef}
      style={{ height: '500px', width: '100%' }}
    />
  );
}

export default Map;
