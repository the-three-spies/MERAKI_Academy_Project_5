import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState, useEffect } from "react";
import axios from "axios";
import { compose } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { addDonationOrder } from "../../redux/reducers/doner";

const DonationOrder = () => {
  const dispatch = useDispatch();
  const [donationCategory, setdonationCategory] = useState([]);
  const [Message, setMessage] = useState("");
  const [idcategory, setidcategory] = useState("");
  const [needCase, setneedCase] = useState([]);
  const [case_id, setcase_id] = useState("");
  const [deleveryDate, setdeleveryDate] = useState(null);
  const [imgePathDoner, setimgePathDoner] = useState(null);
  const [amount, setamount] = useState(null);
  const [address, setaddress] = useState(null);
  const {token} = useSelector((state) => {
    return {
      token: state.auth.token,
    };
  });
  const getallCategory = async () => {
    try {
      const result = await axios.get(`http://localhost:5000/categories`);
      if (result.data.success) {
        setdonationCategory(result.data.result);
      } else {
        throw Error;
      }
    } catch (error) {
      if (!error.response.data.success) {
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while Get Data, please try again");
    }
  };
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
  const handelDonate = async () => {
    
    let information = {
      amount,
      address,
      case_id,
      deleveryDate,
      imgePathDoner,
      category_id: idcategory,
    };
    try {
      const result = await axios.post(
        `http://localhost:5000/dontes`,
      {amount,
        address,
        case_id,
        deleveryDate,
        imgePathDoner,
        category_id: idcategory},
        {
          headers: { authorization: "Bearer " + token },
        }
      );
  

      if (result.data.success) {

        setMessage(result.data.message);
        dispatch(addDonationOrder(result.data.result))
      } else {
        throw Error;
      }
    } catch (error) {
      if (error.response && error.response.data) {
        return setMessage(
          "Error happened while sending your order,plz try again"
        );
      }
    }
  };
  useEffect(() => {
    getallCategory();
    if (idcategory) {
      getallNeedCase(idcategory);
    }
  }, [idcategory]);

  return (
    <>
      <h1>form donation</h1>

      <select
        onChange={(e) => {
          setidcategory(e.target.value);
        }}
      >
        <option value={""}>select section that you donate at</option>
        {donationCategory &&
          donationCategory.map((category, i) => {
            return <option value={category.id}>{category.title}</option>;
          })}
      </select>
      {needCase &&
        needCase.map((need, i) => {
          return (
            <div>
              <p>case :{need.description}</p>
              {need.amount ? <p>{need.amount}</p> : ""}
              <button
                onClick={() => {
                  setcase_id(need.id);
                }}
              >
                choose Case
              </button>
              {need.category_id == "3" ? (
                <div>
                  <input
                    placeholder="input money that you wanted"
                    onChange={(e) => {
                      setamount(e.target.value);
                    }}
                  ></input>
                </div>
              ) : (
                <div>
                  <label for="date">choose date as you like:</label>
                  <input
                    type="date"
                    onChange={(e) => {
                      setdeleveryDate(e.target.value);
                    }}
                  ></input>
                  <label for="data">choose img to what you donte:</label>
                  <input
                    type="file"
                    onChange={(e) => {
                      setimgePathDoner(e.target.value);
                    }}
                  ></input>
                  <input
                    type="text"
                    placeholder="input your address"
                    onChange={(e) => {
                      setaddress(e.target.value);
                    }}
                  ></input>
                </div>
              )}
            </div>
          );
        })}
      {idcategory && (
        <button  onClick={handelDonate}>
          {" "}
          Donte
        </button>
      )}
    </>
  );
};

export default DonationOrder;
