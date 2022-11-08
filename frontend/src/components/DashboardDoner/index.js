import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { setDonationOrder } from "../../redux/reducers/doner";
import axios from "axios";
const MyDonationList = () => {
  const dispatch = useDispatch();
  const { donation } = useSelector((state) => {
    return {
      donation: state.donation.donation,
    };
  });
const [Message, setMessage] = useState("")
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
            <button>update donation</button>
            <button> remove from my list</button>
            </div>
          );
        })}
    </>
  );
};

export default MyDonationList;
