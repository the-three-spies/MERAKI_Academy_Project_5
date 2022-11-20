import React from "react";
import Sidebar from "./Sidebar";
import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
const Donation = () => {
  const [donationOrder, setdonationOrder] = useState([]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  //===============================================================

  const allDonationOrder = async () => {
    try {
      const result = await axios.get(`http://localhost:5000/dontes`);
      if (result.data.success) {
        setdonationOrder(result.data.result);
        setStatus(true);
                setMessage("")

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
    allDonationOrder();
  }, []);
  //===============================================================
  return (
    <>
      <div className="admin_panal">
        <div className="container_panel">
          <Sidebar />
          <div className="main_dashbored">
            <h1> Donation Order </h1>
            <div className="latest_Case">
              <table>
                <th> Doner Name</th> <th>Donation Section </th>
                <th> Case id</th> <th> Donation message</th>
                <th>Delivery Time</th> <th> Amount Donation</th>{" "}
                <th> Address</th> <th> Action</th>
                {donationOrder &&
                  donationOrder.map((element, i) => {
                    return (
                      <tr key={i}>
                        <td>{element.firstname}</td>
                        <td>{element.title}</td>
                        <td>{element.case_id}</td>
                        <td>{element.description}</td>
                        <td>{element.deleverydate}</td>
                        <td> {element.amount}$</td>
                        <td>{element.address} </td>
                        <td>{}</td>
                      </tr>
                    );
                  })}
              </table>
              {status
            ? message && <div className="SuccessMessage">{message}</div>
            : message && <div className="ErrorMessage">{message}</div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donation;
