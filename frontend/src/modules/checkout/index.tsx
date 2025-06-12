import React, {useState} from 'react';
export const CheckoutView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>CHECKOUT - Checkout - cart, payment, fees, taxes</h2><p>cart</p></div>
};
export default CheckoutView;
