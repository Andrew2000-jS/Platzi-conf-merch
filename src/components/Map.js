import React from 'react';
import ReactMapGL, { NavigationControl, Marker } from 'react-map-gl';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { mapKey } from '../utils/key';
import useViewport from '../hooks/useViewport';
import Pin from './Pin';

export default function Map({ data }) {
  const { lat, lon } = data;
  if (!lat && !lon) {
    return null;
  }

  const { mapRef, viewport, handleViewportChange } = useViewport({
    latitude: lat,
    longitude: lon,
  });

  return (
    <>
      <ReactMapGL
        /* eslint-disable react/jsx-props-no-spreading */
        ref={mapRef}
        {...viewport}
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={mapKey}
      >
        <Marker latitude={lat} longitude={lon}>
          <Pin />
        </Marker>
        <NavigationControl />
      </ReactMapGL>
    </>
  );
}
