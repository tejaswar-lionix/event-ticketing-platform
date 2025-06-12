import React, {useState} from 'react';
export const FrontendView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>FRONTEND - Frontend - seat-map rendering, 1000s con</h2><p>seat-map</p></div>
};
export default FrontendView;
