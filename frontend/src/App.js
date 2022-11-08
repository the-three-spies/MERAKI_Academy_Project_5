import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
















function App() {
  return <div className="App">
  
    {/* // nav COMPONENT */}


<Routes>

<Route path="/register" element={<Register/>}></Route>


<Route path="/login" element={<Login/>}></Route>


<Route path="" element></Route>

<Route path="" element></Route>
 
 
 
 
 
 {/* 
 
 
 
 <Route path="" element={<Login/>}></Route>

 <Route path="" element={<Login/>}></Route>

 <Route path="" element={<Login/>}></Route>


// <Route path="" element={<Login/>}></Route> */} ASEEL ROTER









{/* <Route path="" element={<Login/>}></Route>


<Route path="" element={<Login/>}></Route>

<Route path="" element={<Login/>}></Route>


<Route path="" element></Route>  */} WALLA ROUTER

</Routes>


  </div>;
}

export default App;
