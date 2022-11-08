import { configureStore } from "@reduxjs/toolkit";

// import Reducer from "./";HIND
import  authSlice  from "./reducers/auth";





// import Reducer from "./";ASEEL
import needySlice from './reducers/Needy';
import categorySlice from './reducers/category';






// import Reducer from "./"; WALAA







export default configureStore({
    reducer: {
        auth:authSlice,
//   2HIND
//   3 HIND
//   4  HIND



needy : needySlice,
category:categorySlice
//   3 ASSEL
//   4 ASSEL



//   1 WALAA
//   2 WALAA
//   3 WALAA
//   4 WALAA


    
 
}
});
