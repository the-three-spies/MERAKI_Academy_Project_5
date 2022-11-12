import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./style.css"
import {
  setNeedyCase,
  addNeedyCase,
  updateNeedyCase,
  deleteNeedyCase,
  updateActive
} from "../../redux/reducers/Needy";
//---------------- The Needy ----------------
const NeedyByUserId = () => {
  const dispatch = useDispatch();
  const [description, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const[things,setThings]=useState([])
  const[mony,setMony]=useState([])

  //useSelector
  const { reduxaddnewneddy } = useSelector((state) => {
    return {
      reduxaddnewneddy: state.needy.needy,
    };
  });
  const { token } = useSelector((state) => {
    return {
      token: state.auth.token,
    };
  });
  //---------------- Set The Needy ----------------

const convertCaseUnactive=(id)=>{

axios.put(`http://localhost:5000/needycase/unactive/${id}`)
.then((then)=>{
  dispatch(updateActive(id))
console.log("hind")
})
.catch((err)=>{

})


}

  const deleteCase =(id)=>{

    axios.delete(`http://localhost:5000/needycase/${id}`)
    .then((then)=>{
    const arrayMony= mony.filter((elem)=>{
        return(elem.id!=id)
      })
    setMony(arrayMony)
    })
    .catch((err)=>{
    
    })

  }


  const deleteTingsCase =(id)=>{

    axios.delete(`http://localhost:5000/needycase/${id}`)
    .then((then)=>{
    const arrayTings= mony.filter((elem)=>{
        return(elem.id!=id)
      })
    setThings(arrayTings)
    })
    .catch((err)=>{
    
    })

  }

  const gitMoneyCaseToUser=()=>{
  
    axios
      .get("http://localhost:5000/needycase/monyCase", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result)=>{
        setMony(result.data.cases)
        console.log(result)
      })
      .catch((err)=>{

        console.log(err)
      })
  }
  const gitThingsCaseToUser=()=>{


    axios
      .get("http://localhost:5000/needycase/thingCase", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result)=>{
        setThings(result.data.cases)
        console.log(result)
      })
      .catch((err)=>{

        console.log(err)
      })

  }   
     

const diplayMoneyCaseToUser=()=>{
//   axios
//       .get("http://localhost:5000/needycase/myCase", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((result) => {
//         console.log("set result", result.data.cases);
//         // result.data.cases.title==mony?setMony.push(result.data.cases):setThings.push(result.data.cases)
//        dispatch(setNeedyCase(result.data.cases));
//         result.data.cases&&  result.data.cases.map((elm,i)=>{
// if(elm.title==="money"){
//  mony.push(elm)
// }else{
//   things.push(elm)
//   console.log("result.data.cases",result.data.cases[0].title)
// }
// })
        
//         console.log("mony",mony)
//         console.log("things",things)
      
//         console.log("get", reduxaddnewneddy);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

}
const diplayTingsCaseToUser=()=>{
  
}


  useEffect(() => {
    gitMoneyCaseToUser()
    gitThingsCaseToUser()
    diplayMoneyCaseToUser()
  }, []);
  const navigate = useNavigate();
  //---------------- return ----------------
  return (
    <div className="mainMonyDispayCatigory">
      <div className="secandMmainMonyDispayCatigory">

      {things&& things?.map((element, i) => {
        return (
          <div className="firstthings">
            <div>
           <img className="imgCategory" src="./assets/images/pic4.png"></img>
           </div>
           <div>
            <p>{element.title}</p>
            <p>{element.description}</p>
            
            <p>{element. statusdonation}</p>
            <p>{element.address}</p>
            <button onClick={()=>{deleteTingsCase(element.id)}} >Delete</button>
            </div>
          </div>
        );
      })}
      </div>
       <div  className="secandMmainMonyDispayCatigory">
      {mony&&mony.map((element, i) => {
        return (
          <div className="firstmone">
            <div >

             <img className="imgCategory"  src="./assets/images/pic5.png" alt="thinhimg"></img>
             </div>
             <div>
            <p>{element.title}</p>
            <p>{element.description}</p>
            <p>{element.amount}</p>
            <p>{element.rest}</p>
           
            <p>{element.donation_amount}</p>
            <p>{element.statusdonation}</p>
            <button onClick={()=>{deleteCase(element.id)}}>Delete</button>
            {/* <button onClick={()=>{convertCaseUnactive(element.id)}} >It was received</button> */}
          </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default NeedyByUserId;
