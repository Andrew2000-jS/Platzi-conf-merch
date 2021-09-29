import { useState, useEffect } from 'react';
import getLocation from '../services/getLocation';

export default function useAddress(address = 'New York') {
  const [location, setLocation] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getLocation(address).then((response) => {
      setLocation(response[0]);
      setLoading(false);
    });
  }, []);

  return { location, loading };
}
