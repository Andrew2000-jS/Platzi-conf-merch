import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

import useAddress from '../hooks/useAddress';

import '../styles/componets/Success.css';
import Map from '../components/Map';

export default function Succes() {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const { location } = useAddress(buyer[0]?.address);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0]?.name}, Gracias por su compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion</span>
        <div className="Success-map">
          <Map data={location} />
        </div>
      </div>
    </div>
  );
}
