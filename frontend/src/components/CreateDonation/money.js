import React from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addDonationOrder } from "../../redux/reducers/doner";
import axios from 'axios';
import { useState,useEffect } from 'react';
const Money = () => {
  const [needCase, setneedCase] = useState([]);
  const [amount, setamount] = useState(0)
  const [case_id, setcase_id] = useState(null);
  const [description, setdescription] = useState("")
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();
  const {token} = useSelector((state) => {
    return {
      token: state.auth.token,
    };
  });
  const {cateagory}=useSelector((state) => {
    return {
      cateagory: state.donation.cateagory,
    };
  });
      //===============================================================

  const getallNeedCase = async (id) => {
    try {
      const result = await axios.get(
        `http://localhost:5000/needycase/needyCategory/${id}`
      );

      if (result.data.success) {
        setneedCase(result.data.cases);
    
      } else {
        throw Error;
      }
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };
      //===============================================================

  const handelDonate = async () => {
    let information = {
      amount,
      description,
      address:null,
      case_id,
      deleveryDate:null,
      imgePathDoner:null,
      category_id:cateagory.id
    };
    try {
      const result = await axios.post(
        `http://localhost:5000/dontes`,information,
    
        {
          headers: { authorization: "Bearer " + token },
        }
      );
  

      if (result.data.success) {
        setStatus(true);
        setMessage("thank you form our heart , the process of donation done");
        dispatch(addDonationOrder(result.data.result))
      } else {
        throw Error;
      }
    } catch (error) {
      if (!error.response.data.success) {
        setStatus(false);
        setMessage(error.response.data.message);
      }
    }
  };
  useEffect(() => {
  getallNeedCase(cateagory.id)
  
    
  }, [])
  
  return (
    <>
    <h1>Money form Donation</h1>
<h2>
 {cateagory.title}
</h2>
   {needCase && needCase.map((need, i) => {
        return (
          <div>
            <p>case :{need.description}</p>
            <img src=""></img>
            <span>amount required:{need.amount}</span>
            <span>amount donation:{need.donation_amount}</span>
            <span>Remaining amount:{need.rest}</span>
            <button
              onClick={() => {
                setcase_id(need.id);
              }}
            > choose Case
            </button> </div> )})}

    <div> <input type="number" placeholder="input you mony would you donation" min="0" max="50"  onChange={(e)=>{setamount(e.target.value)}}/>
    <input type="text" placeholder="input you message about your donation"onChange={(e)=>{setdescription(e.target.value)}}/> 
    <button onClick={handelDonate}> Donate Now</button>
    </div>
    {status
        ? message && <div className="SuccessMessage">{message}</div>
        : message && <div className="ErrorMessage">{message}</div>}

            </>
  )

}

export default Money