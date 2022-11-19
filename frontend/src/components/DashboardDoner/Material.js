import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {deletethingOrder, setDonationThing,updatDonationThingOrder,
} from "../../redux/reducers/doner";
import axios from "axios";

//===============================================================
const MaterialDonation = () => {
  const dispatch = useDispatch();
  const {dontionthings } = useSelector((state) => {
    return {
      dontionthings: state.donation.dontionthings,
    };
  });
  const { token } = useSelector((state) => {
    return {
      token: state.auth.token,
    };
  });
  const [Message, setMessage] = useState("");
  const [newdate, setnewdate] = useState("");
  const [idupdate, setidupdate] = useState("");
  //===============================================================
    const getmyMatieraldonation = async () => {
    try {
      const result = await axios.get(
        "http://localhost:5000/dontes/myDonition/material",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (result.data.success) {
        dispatch(setDonationThing(result.data.cases));
        setMessage("");
      } else throw Error;
    } catch (error) {
      if (error.response && error.response.data) {
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while Get Data, please try again");
    }
  };

  //===============================================================
  const handleupdatedate = async (id) => {
    try {
      const result = await axios.put(`http://localhost:5000/dontes/${id}`, {
        deleveryDate: newdate
      });
      if (result.data.success) 
  {
dispatch(updatDonationThingOrder({id,newdate}))
        setMessage("");
      } else throw Error;
    } catch (error) {
      if (error.response && error.response.data) {
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while Get Data, please try again");
    }
  };
  //===============================================================
  const handeldeleted = async (id) => {
    try {
      const result = await axios.delete(`http://localhost:5000/dontes/${id}`);
      if (result.data.success) {
      dispatch(deletethingOrder(id))
        setMessage("");
      } else throw Error;
    } catch (error) {
      if (error.response && error.response.data) {
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while Get Data, please try again");
    }
  };
  //===============================================================

  useEffect(() => {
    getmyMatieraldonation();
  }, []);
  //===============================================================

  return (
    <>
      <div>Donation material</div>

      {dontionthings &&
        dontionthings.map((donate, i) => {
          return (
            <div key={i}>
              <p>Donation Category:{donate.title}</p>
              <p className="decshowcatigory">
                {" "}
                Description: {donate.description}
              </p>
              <img src={donate.imgepathdoner}></img>
              <p>Dilevery time:{donate.deleverydate}</p>
              <p> you can update Donation deadline </p>
              <button onClick={() => setidupdate(donate.id)}>
                update donation
              </button>
              {idupdate == donate.id ? (
                <div>
                  <input
                    type="date"
                    onChange={(e) => {
                      setnewdate((e.target.value));
                    }}
                  ></input>
                  <button
                    onClick={() => {
                      handleupdatedate(donate.id);
                      setidupdate("");
                    }}
                  >
                    take update
                  </button>
                </div>
              ) : (
                ""
              )}
              <button
                onClick={() => {
                  handeldeleted(donate.id);
                }}
              >
                {" "}
                Remove from my list
              </button>
            </div>
          );
        })}
    </>
  );
};

export default MaterialDonation;
