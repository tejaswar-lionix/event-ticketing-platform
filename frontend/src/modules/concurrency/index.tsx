import React, {useState} from 'react';
export const ConcurrencyView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>CONCURRENCY - Concurrency - seat-locking, distributed </h2><p>seat-lock</p></div>
};
export default ConcurrencyView;
