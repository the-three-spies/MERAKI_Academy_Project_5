import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addDonationOrder } from "../../redux/reducers/doner";
import axios from "axios";
import { useState, useEffect } from "react";
const Material = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [needCase, setneedCase] = useState([]);
  const [case_id, setcase_id] = useState(null);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const [description, setdescription] = useState("");
  const [deleveryDate, setdeleveryDate] = useState(null);
  const [address, setaddress] = useState(null);
  const [image, setImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [url, setUrl] = useState("");
  const { token } = useSelector((state) => {
    return {
      token: state.auth.token,
    };
  });
  const { cateagory } = useSelector((state) => {
    return {
      cateagory: state.donation.cateagory,
    };
  });
  //===============================================================

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const uploadImage = () => {
    // const base64 = await convertBase64(file);
    // console.log(base64);
    // setImage(base64);
    // console.log(image);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "y6jygqdj");
    data.append("cloud_name", "dqsg0zf1r");
    fetch("https://api.cloudinary.com/v1_1/dqsg0zf1r/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        // setUrl(data.url)
        handelDonate(data.url);
        console.log(data.url);
      })
      .catch((err) => console.log(err));
  };

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

  const handelDonate = async (url) => {
    let information = {
      amount: null,
      description,
      address,
      deleveryDate,
      imgePathDoner: url,
      category_id: cateagory.id,
      case_id,
    };
    try {
      const result = await axios.post(
        `http://localhost:5000/dontes`,
        information,

        {
          headers: { authorization: "Bearer " + token },
        }
      );
      if (result.data.success) {
        setStatus(true);
        setMessage("thank you form our heart , the process of donation done");
        dispatch(addDonationOrder(result.data.result));
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
  //===============================================================

  useEffect(() => {
    getallNeedCase(cateagory.id);
  }, []);

  //===============================================================

  return (
    <>
    
      <h1>Material Form Donation</h1>
      <h2>{cateagory.title}</h2>

      {needCase &&
        needCase.map((need, i) => {
          return (
            <div>
              <p>case :{need.description}</p>
              <img src=""></img>
              <button
                onClick={() => {
                  setcase_id(need.id);
                }}
              >
                choose Case
              </button>
            </div>
          );
        })}
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
          onChange={(e) => setImage(e.target.files[0])}
        ></input>
        <input
          type="text"
          placeholder="input your address"
          onChange={(e) => {
            setaddress(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="input you message about your donation"
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        />
      </div>
      <img src={url}></img>
      <button onClick={uploadImage}> Donate Now</button>
      {status
        ? message && <div className="SuccessMessage">{message}</div>
        : message && <div className="ErrorMessage">{message}</div>}
      
      <div><img src="https://res.cloudinary.com/dqsg0zf1r/image/upload/v1668205254/project5/Give-back_fg14vc.png"></img></div>
    </>
  );
};

export default Material;
