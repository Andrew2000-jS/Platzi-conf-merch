import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { handleSumTotal } from '../utils/handlers';

import '../styles/componets/Payment.css';
import SEO from '../components/SEO';

export default function Payment() {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const history = useHistory();

  const paypalOptions = {
    clientId:
      'ATI_9ShR0VPOzjryfsxcPuljGNdcJ18HNHszz_h1JnY8l1s07N353TIOnhDyfTj3Qfy13FQGkJfYB9_E',
    intent: 'capture',
    currency: 'USD',
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };

      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  return (
    <>
      <SEO
        title="Platzi Conf | Payment"
        content="Checkout payment"
        name="Order payment"
      />
      <div className="Payment">
        <div className="Payment-content">
          <h3>Resumen del pedido</h3>
          {cart.map((item) => (
            <div className="Payment-item" key={item.id}>
              <div className="Payment-element">
                <h4>{item.title}</h4>
                <span>$ {item.price}</span>
              </div>
            </div>
          ))}
          <div className="Payment-button">
            <PayPalButton
              paypalOptions={paypalOptions}
              buttonStyles={buttonStyles}
              amount={handleSumTotal(cart)}
              onPaymentStart={() => console.log('start payment')}
              onPaymentSuccess={(data) => handlePaymentSuccess(data)}
              onPaymentError={(error) => console.log(error)}
              onPaymentCancel={(data) => console.log(data)}
            />
          </div>
        </div>
        <div />
      </div>
    </>
  );
}
