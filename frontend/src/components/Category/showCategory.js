import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import category, { setCategory,setCategoryId } from "../../redux/reducers/category";
import AddNeedy from "../CreateCase";
import NeedyByCategoy from "../DashboardNeedy/GetNeedyByCategoryId";
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
    <div>
       { newCategory.map((element, i) => {
        return (
          <div>
            <ul>
              <li>{element.title}</li>
              <li>{element.imgePath}</li>
              <button onClick={()=>{
                 console.log(element.id)
            dispatch( setCategoryId(element.id))
            navigate(`/NeedyCaseByCategory/${element.id}` )

            navigate(`/AddNeedy/${element.id}`);




            //navigate("/dashboardneedy" )
        
        }}>SHOW More</button> 
            </ul>
          
          
          </div >
        );
      })}
    </div>
  );
};
export default TheCategory;
