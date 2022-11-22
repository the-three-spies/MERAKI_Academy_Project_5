import React from 'react'
import "./needy.css";
import { useState,useEffect } from 'react'

import axios from 'axios'
const RightSide = () => {
const [updat, setUpdat] = useState([]);
const [message, setMessage] = useState("");
const [status, setStatus] = useState(false);
const Array=[{title:'add Case At NeedyCase Table'},{title:'add Donation Order At Dontion Table'},{title:'registed as new user '}]
//===============================================================
const infoUpdate = async () => {
  try {
      const result = await (axios.get(`http://localhost:5000/admin/update`
      ))
      if (result.data.success) {
        const Date=Array.map((e,i)=>
        {
            return({...e,firstName:result.data.result[i].firstname})
        })
          setStatus(true);
          setUpdat(Date)
          setMessage("")
      }
      else { throw Error }
  }
  catch (error) {
    console.log(error)
    // if (!error.response.data.success) {
    //   setStatus(false);
    //   setMessage(error.response.data.message);
    // }

  }
}
//===============================================================
useEffect(() => {
infoUpdate()
}, [])
//===============================================================
  return (
    <div className='right_side'>
        {/* <div className='top_admin'>
            <button id='menu-btn'>
<AiOutlineMenu/>
            </button>
            <div className='them-toggler_admin'>
                <button
                className='icon-light'>
                    <span><FiSun/></span>

                </button>
               <button icon-light>
                    <span><HiMoon/></span>

                </button>
            </div>
    
            <div className='profile'>
                <div className='info_admin'>
                <p> Hey,FitratInsan</p>
<h5 className='text-muted'>Admin</h5>
                </div>
<div className='profile_img'>
<img src=''></img>
</div>
            </div>

            
        </div> */}
        <div className='recent_update'>
            <h2>Recent updates</h2>
<div className='update'>
   { updat && updat.map((e,i)=>
   {
        return (
            <div key={i}>
                <div className='profile_img'>
                    <img src='https://res.cloudinary.com/dqsg0zf1r/image/upload/v1669116697/eee_swrblc.png'></img>
                    </div>
                    <div className='messages'>
                        <h5>{e.firstName}</h5>
                        <h5>{e.title}</h5>
                        <h6 className='text_muted'>2 Minutes ago
                        </h6>
                        </div>
                </div>
        )
    })
}
        </div>


    </div>
    </div>
  )
}

export default RightSide