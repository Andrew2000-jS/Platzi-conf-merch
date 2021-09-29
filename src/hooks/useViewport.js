import { useState, useCallback, useRef } from 'react';

export default function useViewport({ latitude, longitude }) {
  const mapRef = useRef();
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '50vh',
    latitude,
    longitude,
    zoom: 8,
  });

  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  return {
    mapRef,
    viewport,
    handleViewportChange,
  };
}
