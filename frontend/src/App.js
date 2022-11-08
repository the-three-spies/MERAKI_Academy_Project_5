import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import CreateCase from './components/CreateCase'
import AddCategory from "./components/Category/addCategoy";
import TheCategory from "./components/Category/showCategory";
import TheNeedy from "./components/DashboardNeedy";
import NeedyByUserId from "./components/NeedyByUserid";
import NeedyByCategoy from "./components/DashboardNeedy/GetNeedyByCategoryId";
import AddNeedy from "./components/CreateCase";








function App() {
  return <div className="App">
  
    {/* // nav COMPONENT */}


<Routes>

<Route path="/register" element={<Register/>}></Route>


<Route path="/login" element={<Login/>}></Route>


<Route path="" element></Route>

<Route path="" element></Route>
 
 
 
 
 
<Route path="/AddNeedy/:id" element={<AddNeedy/>}></Route>
<Route path="/categories" element={<AddCategory/>}></Route>
<Route path="/Showcategories" element={<TheCategory/>}></Route>
<Route path="/dashboardneedy" element={<TheNeedy/>}></Route>
<Route path="/NeedyCaseById" element={<NeedyByUserId/>}></Route>
<Route path="/NeedyCaseByCategory/:id" element={<NeedyByCategoy/>}></Route>
 {/* 
 <Route path="" element={<Login/>}></Route>

 <Route path="" element={<Login/>}></Route>

 <Route path="" element={<Login/>}></Route>


// <Route path="" element={<Login/>}></Route> */} 




{/* <Route path="" element={<Login/>}></Route>


<Route path="" element={<Login/>}></Route>

<Route path="" element={<Login/>}></Route>


<Route path="" element></Route>  */} WALLA ROUTER

</Routes>


  </div>;
}

export default App;
