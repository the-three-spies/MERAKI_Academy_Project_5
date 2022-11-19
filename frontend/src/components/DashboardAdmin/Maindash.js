import React from 'react'
import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa';
import { BiTask } from 'react-icons/bi';
import { BsGraphUp } from 'react-icons/bs';
import axios from 'axios'
const Maindashboard = () => {
    const iconlist = [ {icon: <FaUser/>,title:"Count Of User",class:"primary_a"},
 {icon:<BiTask />,title:"Count Of Donation Order",class:"warning_a"},
      {icon:<BsGraphUp />,title:"Count Of Needy Casese",class:"success_a"}
    ]
    const [counter, setCounter] = useState([])
    const [needyCase, setneedyCase] = useState([])
    const [message, setMessage] = useState("");
    const lastOrderForNeedy = async () => {
        try {
            const result = await (axios.get(`http://localhost:5000/admin/lastcase`
            ))

            if (result.data.success) {
                setneedyCase(result.data.result)


            }
            else { throw Error }
        }
        catch (error) {
            {

                setMessage(error.response.data.message)
            }

        }
    }
    //===============================================================
    const countinfo = async () => {
        try {
            const result = await (axios.get(`http://localhost:5000/admin/counter`
            ))
            if (result.data.success) {
                setCounter(Object.values(result.data.result))
                const newCounter=(Object.values(result.data.result)).map((e,i)=>
                {
                    return ({...e,iconName:iconlist[i].icon,title:iconlist[i].title,class:iconlist[i].class})

                })
                setCounter(newCounter)
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
        countinfo();
        lastOrderForNeedy()


    }, [])
    //===============================================================

    return (
        <>
        <div className='main_dashbored'>
            <h1>Admin Dashboard</h1>
           <div className='date'><input type="date"></input></div> 
            <div className="insight">
               
                {counter && counter.map((Element, i) => {
                        return (
                            <diV key={i} className="card_info_data">
                             <span className={Element.class}>{Element.iconName}</span>
                            
                             <div className='left'>
                             <h3>{Element.title} </h3> 
                              <h1>{Element.count}</h1>
                           
                             </div>
                           
                             <div className='text_muted'> Last 24 hours</div>
                            </diV>
                        )
                    })
                }
                 </div>
            
            <div className='latest_Case'>
            <h1> Recent updates Needy Cases</h1>
            <table>
                <tr></tr> <th>user Name</th> <th>Help Order </th><th> Name of Section </th> <th> Status of Order</th> <th> Amount Needed</th><th> Amount Donation</th> <th> Address</th> 
                {
                    needyCase && needyCase.map((element, i) => {
                        return (
                            <tr><td>{element.firstname}</td> <td>{element.description}</td>
                                <td>{element.title}</td><td>{element.statusdonation}</td> <td> {element.amount=='null'?'--':element.amount}</td>
                                <td> {element.donation_amount}</td> 
                                <td>{element.address} </td>
                            </tr>
                        )
                    })
                }
                
            </table>
            </div>
            </div>
        </> 
    )
}

export default Maindashboard