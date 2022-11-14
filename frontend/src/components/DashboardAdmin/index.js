import React from 'react'
import "./style.css";
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';
import Sidebar from './Sidebar';
import MainDashboard from './MainDashboard';
const AdminPanel = () => {
  return (
    <>
    <div className='admin_panal'>
      <div className='container_panel'>
<Sidebar/>
<MainDashboard/>

      </div>
      </div>
<Outlet></Outlet>
    </>
  )
}

export default AdminPanel