import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token:localStorage.getItem("token")||null,
    userId:localStorage.getItem("userId")||null,
    isLoggedIn:localStorage.getItem("token")?true:false
  },
  reducers: {
    setLogin: (state, action) => {
        state.token = action.payload;
        state.isLoggedIn = true;
        localStorage.setItem("token",action.payload);
      },
      setUserId: (state, action) => {
        console.log(action.payload)
        state.userId = action.payload;
        localStorage.setItem("userId", action.payload);
      },
      setLogout: (state, action) => {
        state.isLoggedIn = false;
  
        state.token = null;
        state.userId = null;
  
        localStorage.clear();
      },
  },
});

// action creator functions are generated for each case reducer function
// action creator is a function that creates an action which is an object that has 2 keys type and payload, the type is used to identify what the reducer is supposed to do, and the payload is the information that the reducer will use to complete the process.
export const {setLogin,setUserId,setLogout} =
  authSlice.actions;

export default authSlice.reducer;