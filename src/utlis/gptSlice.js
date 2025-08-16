import { createSlice } from "@reduxjs/toolkit"


const gptSlice = createSlice({
            name:'gpt'  ,
            initialState:{
              ShowGptSearch:false,
            },
            reducers:{
              toogleGptSearchView:(state)=>{
                 state.ShowGptSearch= !state.ShowGptSearch;           
              }
            }
})

export const{toogleGptSearchView}= gptSlice.actions
export default gptSlice.reducer;