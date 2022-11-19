import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {MdDashboard} from "react-icons/md"
import {BiUser,BiTask,BiChat} from "react-icons/bi"
import {BsXLg,BsCalendar2Check,BsGraphUp} from "react-icons/bs"
import {ImCalendar} from "react-icons/im"
import {IoSettingsOutline} from "react-icons/io5"
import {CiLogin} from "react-icons/ci"
import {GrAdd} from "react-icons/gr"
const Sidebar = () => {
  const [selcet, setselcet] = useState(0);
  const navigate=useNavigate()

  const SidebarData = [
    {
      title: "Dashboard",
      path: "/admin/dashboard",
       icon: <MdDashboard/>,
    },
    {
      title: "Users",
      path: "/admin/users",
       icon: <BiUser/>,
    },
    {
      title: "Needy Cases",
      path: "/admin/needy_case",
      icon:<BiTask />,
    },
    {
      title: "Donation Order",
      path: "/admin/donation_order",
      icon: <BsCalendar2Check/>,
    },
    {
      title: "Analytics",
      path: "/admin/analytics",
      icon: <BsGraphUp />,
    },
    {
      title: "Chat",
      path: "/admin/chat",
      icon: <BiChat/>,
    },
    {
      title: "Events",
      path: "/admin/events",
      icon: <ImCalendar/>,
    },
    
    {
      title: "Add Campaign",
      path: "/admin/support",
      icon: <GrAdd />,
    }, 
    {
      title: "Log Out",
      path: "/",
      icon: <CiLogin/>,
    }, 
  ];

  return (
    <>
          <div className="container_a">
            <div className="image_admin_logo">
<img src="https://res.cloudinary.com/dqsg0zf1r/image/upload/v1668644461/fitrat_Insan12_vpxsjk.png" className="log_admin"></img>
            
          <span className="close"> <BsXLg/> </span> </div>
        <div  className="menuItem_admin">
        {SidebarData.map((e,index) => {
          return (
            <div className={index==selcet?"menu_item_admin active":"menu_item_admin"}
              onClick={() =>{ setselcet(index);
                if(e.title=='Log Out')
                {
                  dispacth(setLogout())
                  navigate(e.path)

                }
                else
                {
                navigate(e.path)
                
              }}
              }>
                <span className="primary">{e.icon}</span>
              <h3>{e.title}</h3>

            </div>
          );
        })}
       </div>
        </div>

    </>
  );

 

};

export default Sidebar;
