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
import Header from "./components/Header/header"
import Navbar from './components/Header/navbar'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import CardCategory from './components/CardCategory/CardCategory'
import OurTeam from './components/OurTeam/OurTeam'
import FAQs from './components/FAQs/FAQs'










import DonationOrder from "./components/CreateDonation";
import MyDonationList from "./components/DashboardDoner";

import Banner from './components/Banner/Banner'
import About from "./components/About/About";


import Material from "./components/CreateDonation/materrial";
import Money from "./components/CreateDonation/money";











import NavBar from "./components/Navbar/index";
import InterfaceHeader from './components/InterfaceHeader/InterfaceHeader'
import Services from './components/Services/Services'
import OurStory from "./components/OurStory/OurStory";

import NewSoct from "./components/Socket";
import NeedyMonyByUserId from "./components/NeedyByUserid/MonyCase";












function App() {
  return <div className="App">
  
   


<Routes>

{/* <Route path="/register" element={<Register/>}></Route> */}


{/* <Route path="/login" element={<Login/>}></Route> */}


<Route path="" element></Route>

<Route path="" element></Route>
 
 
 
 
<Route path="/AddNeedy/:id" element={<AddNeedy/>}></Route>
<Route path="/categories" element={<AddCategory/>}></Route>
<Route path="/Showcategories" element={<TheCategory/>}></Route>
<Route path="/dashboardneedy" element={<TheNeedy/>}></Route>
<Route path="/NeedyCaseById" element={<NeedyByUserId/>}></Route>
<Route path="/NeedyCaseByCategory/:id" element={<NeedyByCategoy/>}></Route>
<Route path="/header" element={<Navbar/>}></Route>
<Route path="/register"element={<><Register/><Footer/></>}/>
<Route path="/login"element={<><Login/><Footer/></>}/>
<Route path="/home" element={<><Header/><InterfaceHeader/><CardCategory/><Banner/><OurTeam/><Services/><Footer/></>}/>
<Route path="/Contact"element={<><Header/><Banner/><Contact/><Services/><Footer/></>}/>
<Route path="/about"element={<><Header/><About/><Footer/></>}/>
<Route path="/ourTeam"element={<><Header/><OurTeam/><Banner/><Services/><Footer/></>}/>
<Route path="/FAQs"element={<><Header/><FAQs/><Footer/></>}/>


NeedyMonyByUserId
<Route path="/NeedyMonyByUserId"element={<NeedyMonyByUserId/>}/>
<Route path="/NewSoct" element={<NewSoct/>}  ></Route>

<Route path="/ourStory"element={<><Header/><OurStory/><Footer/></>}/>


 {/* 
 <Route path="/" element={<NewSoct/>}  ></Route>

 <Route path="" element={<Login/>}></Route>

 <Route path="" element={<Login/>}></Route>


// <Route path="" element={<Login/>}></Route> */} 




<Route path="/donate" element={<DonationOrder/>}></Route>
<Route path="/mydonation" element={<MyDonationList/>}></Route>
<Route path="/materialdonation/:id" element={<Material/>}></Route>
<Route path="/monydonation/:id" element={<Money/>}></Route>

{/* 
 <Route path="" element={<Login/>}></Route>

<Route path="" element={<Login/>}></Route>


<Route path="" element></Route>  WALLA ROUTER */}

</Routes>


  </div>;
}

export default App;
