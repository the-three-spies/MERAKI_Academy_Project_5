import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { setDonationOrder,deleteDonationOrder, updatDonationOrder } from "../../redux/reducers/doner";
import axios from "axios";
const MyDonationList = () => {
  const dispatch = useDispatch();
  const { donation } = useSelector((state) => {
    return {
      donation: state.donation.donation,
    };
  });
const [Message, setMessage] = useState("")
const [newdate, setnewdate] = useState("")
const [idupdate, setidupdate] = useState("")
const [deleverydate, setDeleverydate] = useState("")
const {token} = useSelector((state) => {
  return {
    token: state.auth.token,
  };
});
 //===============================================================
 const getmydonation = async () => {
    try {
      const result = await axios.get("http://localhost:5000/dontes/myDonition", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (result.data.success) {
      dispatch(setDonationOrder(result.data.result));
      console.log(result.data.result)
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
  console.log(id)
  try {
    const result = await axios.delete(`http://localhost:5000/dontes/${id}`)
    if (result.data.success) {
    dispatch(deleteDonationOrder(id));
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
   //===============================================================
   const handleupdatedate= async (id) => {
    try {
      const result = await axios.put(`http://localhost:5000/dontes/${id}`,{deleverydate:newdate})
      if (result.data.success) {
      dispatch(updatDonationOrder({id,newdate}));
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
    getmydonation();
  }, []);
  return (
    <>
      <div>MyDonationList</div>
      {donation &&
        donation.map((donate, i) => {
          return (
            <div>
              <p>{donate.description}</p>
            {donate.amount!=='null'?<p>Amount donation:{donate.amount}</p>:""}
            {donate.address!=='null'?<div><p> your address:{donate.address}</p><p>Donation deadline: {donate.deleverydate}</p></div>:""}
            <p>Donation Section:{donate.category_id}</p>
           {donate.deleverydate!=='null'?<div><span> you can update Donation deadline</span><button onClick={()=>setidupdate(donate.id)}>update donation</button></div>:""}
            {idupdate==donate.id?<div> <input
                    type="date"
                    onChange={(e) => {
                      setnewdate(e.target.value);
                    }}
                  ></input><button onClick={()=>{handleupdatedate(donate.id);setidupdate(
                    ''
                  )}}>take update</button></div>:""}
            <button onClick={()=>{handeldeleted(donate.id)}}> remove from my list</button>
            <img src={donate.imgepathdoner}></img>
            </div>
          );
        })}
    </>
  );
};
export default MyDonationList;