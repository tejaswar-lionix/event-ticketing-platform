import React, {useState} from 'react';
export const ApiView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>API - API - REST for venues, events, seating</h2><p>POST venue</p></div>
};
export default ApiView;
