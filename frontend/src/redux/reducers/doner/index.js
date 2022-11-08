import { createSlice } from "@reduxjs/toolkit";
const donerSlice=createSlice({
    name:"donation",
    initialState:{
        donation:[]
    },
    reducers:{
        setDonationOrder:(state,action)=>
        {
            state.donation=action.payload
        },
        addDonationOrder:(state,action)=>
        {
            state.donation.push(action.payload)
        },
        updatDonationOrder:(state,action)=>
        {
            state.donation=state.donation.map((element,i)=>
            {
                if( element.id===action.payload.id)
                {
                    rertun ({...element,deleverydate:action.payload.deleverydate})

                }
                return element
            })

        },
        deleteDonationOrder:(state,action)=>
        {
            state.donation=state.donation.filter((element,i)=>
            {
                return(element.id!=action.payload.id)
            })
        },
        setNeedcase:(state,action)=>
        {
            state.donation=action.payload
        }
    }
})
export const {setDonationOrder,addDonationOrder,updatDonationOrder,deleteDonationOrder}=donerSlice.actions
export default donerSlice.reducer