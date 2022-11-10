import "./header.css";
import Navbar from "./navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { setLogin, setUserId, setLogout } from "../../redux/reducers/auth";
import { useDispatch, useSelector } from "react-redux";
import HeaderTop from "./headerTop";
const Header = () => {
  //------------------------------------- here will make navbar and logo
  //navigate
  const navigate = useNavigate();
  //useState
  const [toggle, setToggle] = useState(false);
  //useSelector
  //------------- search bar -------------
  const search = () => {};
  //------------- return -------------
  return ( //1.header //2.navbar //3.change the nav to list menu for resopnsive desigin
    <header className="header">
      <div className="logo">
      <img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDg6PYnf1y2G8hfjkGRQBiLsCEQE7zsd_i7Q&usqp=CAU'  alt="img" className="logo-img"/>
      <div className="logo-text">
        <b>Nawa</b>
        <b>Given</b>
        <b>Donation</b>
      </div>
      </div>
      <nav style={{clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }} className="navbar">
        <ul className="navbar-links">
          <li onClick={()=>{setToggle(false)}} className="navbar-link">Category</li> 
          <li onClick={()=>{setToggle(false)}} className="navbar-link">Contact Us</li>
          <li onClick={()=>{setToggle(false)}} className="navbar-link">About Us</li>
          <li onClick={()=>{setToggle(false)}} className="navbar-link">Our Story</li>
          <li onClick={()=>{setToggle(false)}} className="navbar-link">FAQs</li>
        </ul>
      </nav>
      <div onClick={()=> setToggle(prev=>!prev)} className="header-menu">
        {toggle ?<i className="bi bi-x-lg"></i>: <i className="bi bi-list"></i>}
      </div>
    </header>
  );
};

export default Header;
/**
 * this an explaination how i work on header .. especially navbar in media query 
 * here in list
 * 1. 
 * if the toggle false make it true , else make the toggle the oppsite.. false
 * 2. while the nav become true thats mean the nav(menu) will open +the inside elememt will appear
 * and by using clip-path that's gonna work   link:(https://bennettfeely.com/clippy/)
 * inline style ..> nav bar then put the polygon(0 0, 100% 0, 100% 100%, 0 100%)
 * now need to make the element column style ..> navbar-links
 * 3.style in the css
 * 4. in step two we apear the element now need to hide it after clicking on any element <li onClick={()=>{setToggle(false)}} className="navbar-link">Category</li> this wil close the menu after clicking on any element 
 */