import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setNeedyCase,
  addNeedyCase,
  updateNeedyCase,
  deleteNeedyCase,
} from "../../redux/reducers/Needy";
//---------------- The Needy ----------------
const NeedyByUserId = () => {
  const dispatch = useDispatch();
  const [description, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
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
  useEffect(() => {
    axios
      .get("http://localhost:5000/needycase/myCase", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        console.log("set result", result.data.cases);
        dispatch(setNeedyCase(result.data.cases));
        console.log("get", reduxaddnewneddy);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const navigate = useNavigate();
  //---------------- return ----------------
  return (
    <div>
      <button
        onClick={() => {
          navigate("add");
        }}
      >
        add needy case
      </button>
      {reduxaddnewneddy.map((element, i) => {
        return (
          <div>
            <p>{element.description}</p>
            <p>{element.amount}</p>
            <p>{element.address}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NeedyByUserId;
