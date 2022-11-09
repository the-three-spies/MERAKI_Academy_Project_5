import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setNeedyCase,
  addNeedyCase,
  updateNeedyCase,
  deleteNeedyCase,
} from "../../redux/reducers/Needy";
import { setLogin, setUserId, setLogout } from "../../redux/reducers/auth";
// import { updateNeedyCase, deleteNeedyCase ,setNeedyId} from "../../redux/reducers/Needy";
//1.install
// npm i formik
//2. import
import { useFormik } from "formik";

//---------------- add Needy ----------------
const AddNeedy = ({ id }) => {
  //   const navigate = useNavigate();
  console.log("id", id);
  const dispatch = useDispatch();
  //useState
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [message, setMessage] = useState("");
  const [catogeyStatus,SetcatogeyStatus]=useState(true);
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

  const { CategoryId } = useSelector((state) => {
    return {
      CategoryId: state.category.categoryId,
    };
  });
  //---------------- handleNeedyCase ----------------
  const handleNeedyCase = async (e) => {
    console.log("CategoryId", CategoryId);
    console.log("asdfghjkl");
    //e.preventDefault();
    try {
      console.log("asdfghjkl");
      const result = await axios.post(
        "http://localhost:5000/needycase",
        {
          description,
          category_id: CategoryId,
          amout: 5,
          address: "4554",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (result.data.result) {
        console.log(result.data.result);
        setMessage("Your Case has been created successfully");
        dispatch(addNeedyCase(result.data.result)); //{description,category_id,amout,address}

        result.data.result.category_id==3?SetcatogeyStatus(false):SetcatogeyStatus(true)
        console.log(catogeyStatus)
        console.log("add,", reduxaddnewneddy);
      }
    } catch (error) {
      if (!error.response.data.success) {
        setMessage(error.response.data.message);
      }
    }
  };
//---------------- Delete Needy ----------------
  const handleDleteNeedy = () => {
    console.log("");
    axios
      .delete(`http://localhost:5000/needycase/${id}`)
      .then((result) => {
        console.log(result);
        dispatch(
          deleteNeedyCase({
            description,
            amount,
            address,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //--------------------------------------
  //   useEffect(() => {
  //     if (!setLogin) {
  //         navigate("/dashbord");
  //     }
  //   });
  //---------------- return ----------------
  //description~~>text  category_id~~>num  amout~~>number  address~~>text
  return (
    <>
      {/*  <form onSubmit={handleNeedyCase}> */}
      <textarea
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button onClick={handleNeedyCase}>create</button>
      {/* </form> */}
    </>
  );
};
export default AddNeedy;
