import React, {useState} from 'react';
export const NotificationsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>NOTIFICATIONS - Notifications - email, push, SMS alerts</h2><p>email</p></div>
};
export default NotificationsView;
