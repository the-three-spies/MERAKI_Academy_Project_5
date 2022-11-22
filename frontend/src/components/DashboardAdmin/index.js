import React from 'react'
import Header from './header';
import Maindashboard from './Maindash';
import RightSide from './right';
import Sidebar from './Sidebar';
import { useState,useContext } from 'react';
import "./needy.css";
import "./style.css"
import { MyContext } from '../../App';
const AdminPanel = () => {
   const {theme}=useContext(MyContext)

  return (
    <>
  
    <div className='admin_panal'>
      <div className='container_panel_a'>
      {/* <div className={ theme === "light"? 'container_panel_a ' :'container_panel_a  dark-them'}> */}
        <Sidebar/>
        <Maindashboard/>
        <RightSide/>
      </div>
      </div>
    </>
  )
}

export default AdminPanel