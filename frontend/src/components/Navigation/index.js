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
   <Link to="/team"> Our Team </Link>
   {/* <Link to="/team"> Our story </Link> */}
   <Link to="/team">Contact us </Link>

  <Link to="/signin"> login <BsPersonCircle/></Link> 
  </div>
  </div>
  </>:""}

{/* 
 {
    stateRole==1? <div className='admin_board'>
             <div onClick={()=>navigate('/dashboard')}> Dashboard </div>
            <div><Link to="/">Users</Link> </div>         
             <div><Link to="/"> Contact</Link> </div>
             <div><Link to="/"> Invitation</Link>  </div>   
        <div> <Link to="/"> Sechedual</Link> </div>




    </div>
  :<h1> hello</h1>
}  */}
</>    )
}

export default Navigation