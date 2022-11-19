import React from 'react'
import Maindashboard from './Maindash';
import Sidebar from './Sidebar';
import "./style.css";
const AdminPanel = () => {
  return (
    <>
    <div className='admin_panal'>
      <div className='container_panel'>
        <Sidebar/>
        <Maindashboard/>
        
      </div>
      </div>
    </>
  )
}

export default AdminPanel