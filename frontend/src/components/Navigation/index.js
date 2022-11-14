import React from 'react'
import { useSelector, } from 'react-redux'
import { useNavigate, Link } from "react-router-dom";
import { BsPersonCircle,BsFillEnvelopeFill,BsLightbulbFill,BsLightbulbOffFill} from 'react-icons/bs'
import {RiUserShared2Fill}from 'react-icons/ri'
import {ImClock} from 'react-icons/im'
import "./style.css";

  //===============================================================

const Navigation = () => {
    const {stateRole} = useSelector((state) => {
        return {
            stateRole: state.auth.stateRole,
        };
      });
      const {token} = useSelector((state) => {
        return {
          token: state.auth.token,
        };
      });
      const navigate=useNavigate()
      //===============================================================

  return (
    <>
{!token?<>
    <div className="header2">
    <div><img src="https://res.cloudinary.com/dqsg0zf1r/image/upload/v1668184372/project5/fitrat_iNsan22_x8fcjb.png"></img></div>
    <div className="linkhome">
      <Link to="/home"> Home</Link> 
     <Link to="/about"> Our Story </Link> 
   <Link to="/team">FAQs</Link>
   <Link to="/team">Contact us </Link>
     <Link to="/login"> login <BsPersonCircle/></Link> 

   </div>
  </div>
  </>:""}  

  
  { stateRole==3?<>
    <div className="header2">
    <div><img src="https://res.cloudinary.com/dqsg0zf1r/image/upload/v1668184372/project5/fitrat_iNsan22_x8fcjb.png"></img></div>
    <div className="linkhome">
      <Link to="/home"> Home</Link> 
     <Link to="/donate">  Donat </Link>
   <Link to="/team"> My Donation </Link>
  <Link to="/signin"> log Out <BsPersonCircle/></Link> 
  </div>
  </div>
  </>:""}  

  {/* { isloggedin?  <> <Link to="/home"> Home</Link> 
 <Link to="/addservice"> Booking Service </Link>
<Link to="/dashboard"> My Dashboard</Link> 
 {/* <Link to="/"> My profile</Link>  */}
 {/* <div className="logout" onClick={() => {
    navigate("/signin"); localStorage.removeItem("token"); localStorage.removeItem("statelogin"); setisloggedin(false);settoken("");setstatelogin("")
  }}>log out<RiUserShared2Fill/></div> </>  :"" */} 

  

{/* 
//   stateRole==3?<div className='header'>
//   <div><Link to="/">My in-kind Donation list </Link> </div>         
//              <div><Link to="/"> My money donation list</Link> </div>
//              <div><Link to="/"> Add Donation</Link>  </div> 
//   </div>:"" */}

</>    
)
}

export default Navigation