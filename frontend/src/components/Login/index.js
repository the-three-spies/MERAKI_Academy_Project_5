import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { setLogin, setLogout, setUserId } from "../../redux/reducers/auth";

//===============================================================

const Login = () => {
  const auth = useSelector((state) => {
    return {
      auth: state.auth.isLoggedIn,
    };
  });
  const userId = useSelector((state) => {
    return {
      userId: state.auth.userId,
    };
  });
  const token = useSelector((state) => {
    return {
      token: state.auth.token,
    };
  });
  const dispatch = useDispatch();

  const navgate = new useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMesage] = useState("");

  const loginUser = (b) => {
    console.log("poi");

    axios
      .post(`http://localhost:5000/login/`, {
        email,
        password,
      })
      .then((result) => {
        console.log("m", result.data.role);
        let roleNavigate = result.data.role;
        dispatch(setLogin(result.data.token));
        dispatch(setUserId(result.data.userId));
        setMesage(result.data.message);

        console.log("auth", auth);
        console.log("id", userId);
        console.log("aut", token);
        // console.log( "mnmn", token)

        // {
        //   navgate("/Category");
        // }
        console.log(roleNavigate);
        if (roleNavigate == 1) {
          console.log("admin");
          // navgate("/");
          {
          }
        } else if (roleNavigate == 2) {
          console.log("needy");

          //  navgate("/")
        } else if (roleNavigate == 3) {
          console.log("doner");

          // navgate("/")
        }
      })
      .catch((err) => {
        console.log("err",err)
        setMesage(err.response.data.message);
        throw err;
      });
  };

  return (
    <div className="mainloginDev">
      <div className="imgregester loginimg">
        <img
          className=""
          src="./assets/images/doctor-2027768__340.webp"
          alt="pic"
        ></img>
      </div>
      <div className="container">
        <h1>Login</h1>
        <p>Please enter your correct email and password.</p>
        <hr></hr>
        <label>
          <b>Email</b>
        </label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          placeholder="Enter Email"
          name="email"
          required
        ></input>

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Enter Password"
          name="psw"
          id="psw"
          required
        ></input>

        <hr></hr>
        <p>{message}</p>

        <button onClick={loginUser} className="registerbtn">
          Login
        </button>
      </div>
    </div>
  );
};
export default Login;
