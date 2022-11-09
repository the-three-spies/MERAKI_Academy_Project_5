import "./header.css";
import Navbar from "./navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { setLogin, setUserId, setLogout } from "../../redux/reducers/auth";
import { useDispatch, useSelector } from "react-redux";

const HeaderTop = () => {
  //navigate
  const navigate = useNavigate();
  //useState
  const [toggle, setToggle] = useState(false);
  //useSelector
  //------------- Login -------------
  //------------- Logout -------------
  //------------- return -------------
  return (
    <div className="header-top">
      <div
        onClick={() => {
          setToggle((prev) => !prev);
        }}
        className="header-top-menu"
      >
        <i className="bi bi-list"></i>
      </div>
      <div className="header-top-phone">
        <i className="bi bi-telephone-fill"></i>
        123-456-789
        <i className="bi bi-envelope"></i>
        donation@gmail
      </div>
      <div className="header-top-links-input">
        <Link to="/login" className="header-top-link">
          {/* <i className="bi bi-person"></i> */}
          Login
        </Link>
        <Link to="/" className="header-top-link">
          logout
        </Link>
      </div>
    </div>
  );
};

export default HeaderTop;
