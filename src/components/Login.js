

import Header from "./Header"
import { useState } from "react"

 

const Login =()=>{
     const [IsSignInForm,setIsSignInForm] = useState(true)

    const handleIsSignInForm = () => {
      setIsSignInForm(!IsSignInForm)
}
     return(
              <div>
               <Header/>
           
              <div className="absolute">
             <img src=  "https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_medium.jpg "alt="logo"/>
              </div>
              <form className="w-3/12 absolute bg-black  p-12 my-36  mx-auto left-0 right-0 text-white bg-opacity-80 rounded-lg" >
              <h1 className="font-bold text-white text-3xl py-4">
               {IsSignInForm? "Sign IN":"Sign Up"}
               </h1>

 

           { !IsSignInForm&&(
                  <input  className="w-full p-4 my-4  bg-gray-700 rounded-lg" type="text" placeholder=" FULL Name">
                </input>
                   )}

               <input  type="text"  placeholder="Email or mobile number" className="w-full p-4 my-4  bg-gray-700 rounded-lg "
               
               />
                <input  className="w-full p-4 my-4  bg-gray-700 rounded-lg" type="text" placeholder="Password">
                </input>



                <button className="p-4 my-4 bg-red-700 w-full rounded-lg" >{IsSignInForm? "Sign IN":"Sign Up"}
                </button>


                  <p className="py-4" onClick={handleIsSignInForm}>{IsSignInForm?"New to Netfilx? Sign Up Now":" Already registered? Sign IN Now"}</p>
              </form>
              
              </div>
     )      
}
export default Login