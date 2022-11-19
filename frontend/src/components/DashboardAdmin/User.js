import React from 'react'
import Sidebar from './Sidebar';
import "./style.css";
import { useState,useEffect} from 'react';
import axios from 'axios'
const User = () => {
const [user, setUser] = useState([])
//===============================================================
const infoUser = async () => {
  try {
      const result = await (axios.get(`http://localhost:5000/admin/user`
      ))
      if (result.data.success) {
          setUser(result.data.result)
      }
      else { throw Error }
  }
  catch (error) {
      {
console.log(error)
      }

  }
}
//===============================================================
useEffect(() => {
infoUser()

}, [])
//===============================================================
  return (
    <>
    <div className='admin_panal'>
      <div className='container_panel'>
        <Sidebar/>   
        <div className='latest_Case'>
            <h1> Recent updates Needy Cases</h1>
            <table>
                <tr> <th>user Name</th> <th>user lastName </th><th> Age</th> <th> city</th> <th> Email</th><th> Role</th> </tr>
                {
                    user && user.map((element, i) => {
                        return (
                            <tr key={i}><td>{element.firstname}</td> <td>{element.lastname}</td>
                                <td>{element.age}</td><td>{element.city}</td> 
                                <td> {element.email}</td> 
                                <td>{element.role} </td>
                            </tr>
                        )
                    })
                }
                
            </table>
            </div>     
      </div>
      </div>
    </>
  )
}

export default User