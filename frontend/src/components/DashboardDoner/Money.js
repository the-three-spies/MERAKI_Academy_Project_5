import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { deleteMoneyoderr, setDonationMoney} from "../../redux/reducers/doner";
import axios from "axios";
 
 //===============================================================
const MoneyDonationList = () => {
  const dispatch = useDispatch();
  const { moneyDonation} = useSelector((state) => {
    return {
      moneyDonation: state.donation.moneyDonation,
    };
  });
  const {token} = useSelector((state) => {
    return {
      token: state.auth.token,
    };
  });
    const [Message, setMessage] = useState("");
       //==================================================================
    const getmyMoneyonation = async () => {
      try {
        const result = await axios.get("http://localhost:5000/dontes/myDonition/money", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (result.data.success) {
          dispatch(setDonationMoney(result.data.cases))
          setMessage("");
        } else throw Error;
      } catch (error) {
        if (error.response && error.response.data)  {
          return setMessage(error.response.data.message);
        }
        setMessage("Error happened while Get Data, please try again");
      }
    };
        //===============================================================
 const handeldeleted = async (id) => {
  try {
    const result = await axios.delete(`http://localhost:5000/dontes/${id}`)
    if (result.data.success) {
     dispatch(deleteMoneyoderr(id));
      setMessage("");
    } else throw Error;
  } catch (error) {
    if (error.response && error.response.data)  {
      return setMessage(error.response.data.message);
    }
    setMessage("Error happened while Get Data, please try again");
  }
};
   //===============================================================
    useEffect(() => {
      getmyMoneyonation();
          }, [])
            
    
//===============================================================
  return (
    <>
    <div>Donation</div>
    
    {moneyDonation &&
     moneyDonation.map((donate, i) => {
        return (
          <div>
            <p>Donation Category:{donate.title}</p>
          <p> Description: {donate.description}</p>
          <p>Amount donation:{donate.amount}</p>
          <button onClick={()=>{handeldeleted(donate.id)}}> Remove from my list</button>
          </div>
        );
      })}
      </>
  )
}

export default MoneyDonationList