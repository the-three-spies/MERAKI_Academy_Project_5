import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import jwt_decode from "jwt-decode"
//const bcrypt = require("bcrypt");
//const jwt = require("jsonwebtoken");

import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { setLogin, setLogout, setUserId } from "../../redux/reducers/auth";

//===============================================================

const Login = () => {


  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [city, setCity] = useState("");
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  const [roles, setRoles] = useState("");
  const [massage, setMessage] = useState("");
  const [statusGO, setStatusGO] = useState(true);
  const[status,setStatus]=useState(true)
  const[role_id,srtRolrId]=useState(0)
const [googleToken,setGoogleToken]=useState("")

  const {auth ,userId,token }= useSelector((state) => {
    return {
      auth: state.auth.isLoggedIn,
      userId: state.auth.userId,
      token: state.auth.token,
    };
  });


    const google = window.google
  function  handleCallbackResponse(response){
    console.log("googleToken",response.credential)
    var decoded = jwt_decode(response.credential);
setGoogleToken(decoded)
console.log("userInfo", decoded.email);
console.log("userInfo", decoded);

setStatusGO(false)







  }

const AddNewUse=()=>{
  console.log("emmmmmmmm",googleToken.email)
  console.log(googleToken,googleToken.email)
axios.post(`http://localhost:5000/register`, {
        firstName:googleToken.given_name
        ,
        lastName:googleToken.family_name,
        // age:decoded.email,
        city,
        email:googleToken.email,
        password,
      role_id,
      })
    .then((result)=>{
      console.log("hind")
      console.log(result)
      console.log(result.data.success)
//console.log("result",result.data.result)
if (result.data.success) {
    setStatus(true);
    setMessage("The user has been created successfully");
    

    axios
    .post(`http://localhost:5000/login/`, {
      email:googleToken.email,
      password,
    })
    .then((result) => {
      console.log("m", result.data.role);
      let roleNavigate = result.data.role;
      dispatch(setLogin(result.data.token));
      dispatch(setUserId(result.data.userId));


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

         navgate("/home")
      } else if (roleNavigate == 3) {
        console.log("doner");

        // navgate("/")
      }
    })

  } 

    })
    .catch((err)=>{
       // console.log(err.response.data)
        setStatus(false);
        if (err.response && err.response.data) {
          return setMessage(err.response.data.massage);
       }
       setMessage("Error happened while register, please try again");
      
    })


}

const getAllRoles=()=>{
  axios.get(`http://localhost:5000/roles`).
  then((result)=>{
//console.log("result",result.data.result)

setRoles(result.data.result)
  })
  .catch((err)=>{

  })
}


useEffect(()=>{
  getAllRoles()

google?.accounts.id.initialize({
    client_id:"749189994493-dks574gt6fsuoi1hh45skrrjn64jqith.apps.googleusercontent.com",
    callback:handleCallbackResponse
});
google?.accounts.id.renderButton(

    document.getElementById("sinInDiv"),
    {theme:"outline",size:"large"}
)


},[])

  
  // const userId = useSelector((state) => {
  //   return {
  //     userId: state.auth.userId,
  //   };
  // });
  // const token = useSelector((state) => {
  //   return {
  //     token: state.auth.token,
  //   };
  // });
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

            navgate("/Showcategories")
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
      <div className="imgregester imglogin">
        <img
          className=""
          src="./assets/images/login1.png"
          alt="pic"
        ></img>
      </div>
{statusGO?
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
        <button id="sinInDiv"></button>
      </div>:<div>
        {/* REGERTER AFTER COME FROM GOGLE */}

        <div className="Form">
        {true ? (
          <>
            <p className="Title">Register:</p>
           
              <br />
            
              
              <br />
              <input
                type="number"
                placeholder="Age"
                onChange={(e) => setAge(e.target.value)}
              />
              <br />
              <input
                type="text"
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
              />
              <br />
{/*  */}
<br />

<select


            onChange={(e) => {
                srtRolrId(e.target.value);
            }}
          >
            <option disabled selected value> -- select a User Type -- </option>
            { roles.length>0&&  roles.map((elem, i) => {
              return (
                <option
                  value={elem.id}

                  // textContent={elem.specialty}
                >
                  {elem.role}
                </option>
              );
            })}
          </select>          <br />
{/*  */}
            
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <button  className="registerbtn" onClick={AddNewUse}>Register</button>
              <br />
           
            {status
              ? massage && <div className="SuccessMessage">{massage}</div>
              : massage && <div className="ErrorMessage">{massage}</div>}
          </>
        ) : (
          <p>Logout First</p>
        )}
      </div>


        {/* REGERTER AFTER COME FROM GOGLE */}
        </div>}
    </div>
  );
};
export default Login;
