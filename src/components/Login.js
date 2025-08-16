
import Header from "./Header"
import { useState,useRef } from "react"
import  {checkValidata}from "../utlis/validate"
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from '../utlis/firebase'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utlis/userSlice";
import { BG_URL, USER_AVATAR } from "../utlis/constants";

 

  const Login =()=>{
    const dispatch=useDispatch()
   const navigate=useNavigate()
     const [IsSignInForm,setIsSignInForm] = useState(true)
     const[ errorMessage,setErrorMessage]=useState(null)
     const email =useRef(null);
     const password=useRef(null);
     const name=useRef(null);

    const handleIsSignInForm = () => {
      setIsSignInForm(!IsSignInForm)
    }

    const handleButtonClick=()=>{
//   validate form data
     console.log(email.current.value)
     console.log(password.current.value)
        const message= checkValidata(email.current.value,password.current.value)
        setErrorMessage(message);
      if(message) return;

 
     if(!IsSignInForm){
 createUserWithEmailAndPassword
 (auth, 
   email.current.value, 
   password.current.value
  )

  .then((userCredential) => {
    const user = userCredential.user;
    updateProfile(user,
       {
  displayName: name.current.value,
   photoURL: USER_AVATAR,
})
.then(() => {
  
      const {uid,displayName,email,photoURL} = auth.currentUser;
       dispatch(addUser({uid:uid, email:email,displayName:displayName,photoURL:photoURL}))
    
})


.catch((error) => {
  setErrorMessage(error.message)
});
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+ "-" +errorMessage )
  });

    //    sign up Logic
     }


     else{
    // Sign in Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
     setErrorMessage(errorCode+ "-" +errorMessage )
  });
     }
}
     return(
              <div>
               <Header/>
           
              <div className="absolute">
             <img src=  {BG_URL}alt="logo"/>
              </div>

              <form  onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute bg-black  p-12 my-36  mx-auto left-0 right-0 text-white bg-opacity-80 rounded-lg" >
              <h1 className="font-bold text-white text-3xl py-4">
               {IsSignInForm? "Sign IN":"Sign Up"}
               </h1>

 

           { !IsSignInForm&&(
                  <input  ref={name} className="w-full p-4 my-4  bg-gray-700 rounded-lg" type="text" placeholder=" FULL Name">
                </input>
                   )}

               <input ref={email}   type="text"  placeholder="Email or mobile number" className="w-full p-4 my-4  bg-gray-700 rounded-lg "
               
               />
                <input ref={password}  className="w-full p-4 my-4  bg-gray-700 rounded-lg" type="text" placeholder="Password">
                </input>


                   <p className="text-red-500 text-lg font-bold">{errorMessage}</p>
                <button className="p-4 my-4 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{IsSignInForm? "Sign IN":"Sign Up"}
                </button>


                  <p className="py-4" onClick={handleIsSignInForm}>{IsSignInForm?"New to Netfilx? Sign Up Now":" Already registered? Sign IN Now"}</p>
              </form>
              
              </div>
     )      
}
export default Login