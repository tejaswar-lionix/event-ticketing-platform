import React, {useState} from 'react';
export const EventsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>EVENTS - Events - performances, tours, dates</h2><p>performances</p></div>
};
export default EventsView;
