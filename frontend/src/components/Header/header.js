import "./header.css";
import Navbar from "./navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { setLogin, setUserId, setLogout } from "../../redux/reducers/auth";
import { useDispatch, useSelector } from "react-redux";
import HeaderTop from "./headerTop";
const Header = () => {
  //navigate
  const navigate = useNavigate();
  //useState
  const [toggle, setToggle] = useState(false);
  //useSelector
  //------------- search bar -------------
  const search = () => {};
  //------------- Login -------------
  //------------- Logout -------------
  //----------------------------------
  return (
    <header className="header">
      <HeaderTop />
      <div className="header-middle">
        <Link to="/home" className="header-middle-logo">
          <b>donation</b>
          {/* <i className="bi bi-phone"></i> */}
          <b> ICON</b>
        </Link>
        <Navbar toggle={toggle} setToggle={setToggle} />
        <Link to="/needycase/:id" className="header-middle-needy-wrapper">
          {/* <b className="needy-notificatiion">{user. && user.length}</b>  */}
          {/* <div className="header-middle-search-box">
        </div> */}
          <i className="bi bi-search"></i>
          <i className="bi bi-phone"></i>
        </Link>
      </div>
    </header>
  );
};

export default Header;
// (
//     <header className="header">
//       <div className="header-top">
//         <div
//           onClick={() => {
//             setToggle((prev) => !prev);
//           }}
//           className="header-top-menu"
//         >
//           <i className="bi bi-list"></i>
//         </div>
//         <div className="header-top-links-input">
//           <Link to="/login" className="header-top-link">
//             <i className="bi bi-person"></i>
//             Login
//           </Link>
//           <Link to="/" className="header-top-link">
//             logout
//           </Link>
//         </div>
//       </div>
//       <div className="header-middle">
//         <Link to="/home" className="header-middle-logo">
//           <b></b>
//           <i className="bi bi-heart"></i>
//           <b></b>
//         </Link>
//       </div>
//       <Navbar toggle={toggle} setToggle={setToggle} />
//     </header>
//   );
