import React from 'react';
import CartContainer from '../components/CartContainer';
import PaymentContainer from '../components/PaymentContainer'

function HomePage() {
  return (
    <div className='body-container'>
      <CartContainer />
      <PaymentContainer />
    </div>
  );
}

export default HomePage;