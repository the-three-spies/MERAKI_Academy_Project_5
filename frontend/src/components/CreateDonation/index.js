import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { setIDCateogory } from "../../redux/reducers/doner";
import "./style.css";
const DonationOrder = () => {
  const dispatch = useDispatch();
  const [donationCategory, setdonationCategory] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  //===============================================================

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
  //===============================================================

  const handelidctaegory = (id, title) => {
    if (id === 3) {
      dispatch(setIDCateogory({ id, title }));
      navigate(`/monydonation/${id}`);
    } else {
      dispatch(setIDCateogory({ id, title }));
      navigate(`/materialdonation/${id}`);
    }
  };
  //===============================================================

  useEffect(() => {
    getallCategory();
  }, []);
  //===============================================================

  return (
    <>
      <h1>Form donation</h1>
      <div className="container-donate">
        <div className="adddonate">
          <div className="list-category">
            {donationCategory &&
              donationCategory.map((element, i) => {
                return (
                  <div key={i}>
                    <p>{element.title}</p>
                    <img src={element.imgepath}></img>
                    <button
                      onClick={() => {
                        handelidctaegory(element.id, element.title);
                      }}
                    >
                      donate AT Here
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="img_donate">
          <img src="https://res.cloudinary.com/ddjnfzv4h/image/upload/v1668025209/samples/Hand_of_generous_person_putting_heart_in_jar_phk8z1.jpg"></img>
        </div>
      </div>
    </>
  );
};

export default DonationOrder;
