
import { signOut } from "firebase/auth";
import {auth} from '../utlis/firebase'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { addUser ,removeUser} from "../utlis/userSlice";
import { logo, SUPPORTED_LANGUAGES } from "../utlis/constants";
import { toogleGptSearchView } from "../utlis/gptSlice";
import { changeLanguage } from "../utlis/configSlice";
const Header =()=>{
  const  user =useSelector((store)=>store.user)
  const showGptSearch=useSelector((store)=>store.gpt.ShowGptSearch)
     const navigate=useNavigate()
     const dispatch=useDispatch()
   
     const handleSignOut=()=>{       
    signOut(auth)
    .then(() => {
     navigate('/')
  // Sign-out successful.
     }).catch((error) => {
  // An error happened.
       navigate('/errorpage')
     });

     }

     
useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
  if (user) {
 
    const {uid,displayName,email,photoURL} = user
     dispatch(addUser({uid:uid,
       email:email,
       displayName:displayName,
       photoURL:photoURL,
      }))
  
      navigate("/browse")
  } else {
    // User is signed out
   dispatch(removeUser());
     navigate('/')
  }
});
// unsubscribe when component unmounts
return()=> unsubscribe();
 },[])

 const handleGptSearchClick=()=>{
  dispatch(toogleGptSearchView())
 }


 const handleLanguageChange=(e)=>{
  dispatch(changeLanguage(e.target.value))
 }







     return(
             <div className="flex justify-between items-center absolute w-screen px-8 py-3 bg-gradient-to-b from-black z-10">
  {/* Netflix Logo */}
  <img
    className="h-12 object-contain cursor-pointer"
    src={logo}
    alt="Netflix Logo"
  />

  {/* User Section */}
  {user && (
    <div className="flex items-center gap-4">
      {showGptSearch && (
      <select className="p-2 bg-gray-900 text-white m-2 " onChange={handleLanguageChange}>
     {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}> {lang.name}</option>)}
      </select>
  )}
      <button onClick={handleGptSearchClick} className="text-white font-semibold bg-purple-700 rounded-lg px-4 mx-4 py-2  hover:bg-purple-900 transition-all duration-300">
        
          {showGptSearch?"Homepage":"GPT Search"}
        </button>
      <img
        className="h-10 w-10 object-cover  border-2 border-red-600 shadow-md"
        alt="user icon"
        src={user?.photoURL}
      />
      <button
        onClick={handleSignOut}
        className="text-white font-semibold px-4 py-2 rounded-lg mx-4 bg-red-600 hover:bg-red-700 transition-all duration-300"
      >
        Sign Out
      </button>
    </div>
  )}
</div>



     ) 
     
     
}
export default Header


// rafce