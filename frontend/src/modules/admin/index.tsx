import React, {useState} from 'react';
export const AdminView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>ADMIN - Admin - venue management, event creation</h2><p>venue mgmt</p></div>
};
export default AdminView;
