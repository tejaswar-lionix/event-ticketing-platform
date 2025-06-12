import React, {useState} from 'react';
export const IntegrationsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>INTEGRATIONS - Integrations - payment gateways, email, </h2><p>Stripe</p></div>
};
export default IntegrationsView;
