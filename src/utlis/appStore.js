import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './userSlice'
import MovieReducer from './moviesSlice'
const appStore =configureStore({
              reducer:{
               user:UserReducer,
               movies:MovieReducer
              },
})
export default appStore