import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './userSlice'
import MovieReducer from './moviesSlice'
import gptReducer from './gptSlice'
import configureReducer from './configSlice'
const appStore =configureStore({
              reducer:{
               user:UserReducer,
               movies:MovieReducer,
               gpt: gptReducer,
               config:configureReducer,
              },
})
export default appStore