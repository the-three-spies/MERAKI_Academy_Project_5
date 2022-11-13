import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { ResponsivePie } from '@nivo/pie';
const CenterPart = () => {
    const [data, setdata] = useState([])
  const [message, setMessage] = useState("");
  
  //===============================================================

  const getNumNeedCase = async () => {
    try {
      const result = await axios.get(`http://localhost:5000/admin/numcase`);
      if (result.data.success) {
        setdata(result.data.result);
        console.log(result.data.result)
      } else {
        throw Error;
      }
    } catch (error) {
     
      
      setMessage("Error happened while Get Data, please try again");
    }
  };

    //===============================================================

  useEffect(() => {
   getNumNeedCase()
  
   
  }, [])
  
  
  //===============================================================
 return(
    <div>
        CenterPart
        {/* <ResponsiveBar
      data={data}
      keys={["degress"]}
      indexBy="day"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.4}
      valueScale={{ type: "linear" }}
      colors="#3182CE"
      animate={true}
      enableLabel={false}
      axisTop={null}
      axisRight={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "degrees",
        legendPosition: "middle",
        legendOffset: -40
      }}
    /> */}
  </div>
 )
}


export default CenterPart