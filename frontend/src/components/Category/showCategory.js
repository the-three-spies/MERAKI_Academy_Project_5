import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import category, { setCategory,setCategoryId } from "../../redux/reducers/category";
import AddNeedy from "../CreateCase";
import NeedyByCategoy from "../DashboardNeedy/GetNeedyByCategoryId";
import "./style.css";
//---------------- AddCategory ----------------
const TheCategory = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [imgePath, setImgePath] = useState("");
  //useSelector
  const {newCategory} = useSelector((state) => {
    return {
      newCategory: state.category.category
    };
  });
  const {CategoryId} = useSelector((state) => {
    return {
        CategoryId: state.category.categoryId
    };
  });

  //---------------- setCategory ----------------
  useEffect(() => {
    axios
      .get(`http://localhost:5000/categories`)
      .then((result) => {
        console.log("result", result.data.result);
        dispatch(setCategory(result.data.result)); 
       // console.log(newCategory) 



      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const navigate = useNavigate();
  //---------------- return ----------------
  return (
    // <div className=" categoySHOW">
    //    { newCategory.map((element, i) => {
    //     return (
    //       <div>

            
    //         {/* <ul> */}
    //           {element.title}
    //          { <img className="imgaCategory " src={element.imgepath}></img>  }
    //           <button onClick={()=>{
    //              console.log(element.id)
    //         dispatch( setCategoryId(element.id))
    //        // navigate(`/NeedyCaseByCategory/${element.id}` )

    //         navigate(`/AddNeedy/${element.id}`);




    //         //navigate("/dashboardneedy" )
        
    //     }}>SHOW More</button> 
    //         {/* </ul> */}
          
          
    //       </div >
    //     );
    //   })}
    // </div>



    <div>
    <h1 className="reservationH1">Choose the department you want to enter the aid application in</h1>
    
    <div className=" DivCate container">
    
    { newCategory.length>0&&  newCategory.map((elem, i) => {
                  return (
                    <div className=" containerr "
                      value={elem._id}
    
                      // textContent={elem.specialty}
                    >
                      <div>
                     <h3> {elem.title}</h3>
                     </div>
                      <br></br>
                      <hr className="hrspicality"></hr>
                      <br></br>
                      {/* <div>
                      <p className="pw">{elem.description}</p>
                      </div> */}
                      <br></br>
                      <div>
                        
                 <img className="imgCatiegory" src={ elem.imgepath}></img>
                      </div>
                      <button onClick={()=>{
                       
                       
                        dispatch( setCategoryId(elem.id))
    //        // navigate(`/NeedyCaseByCategory/${element.id}` )

    //   
    
                      navigate(`/AddNeedy/${elem.id}`);
                      }}  className="registerbtnadd ">Add new needy order</button>
                      </div>
                  );
                })}
    
    </div>
    </div>









  );
};
export default TheCategory;
