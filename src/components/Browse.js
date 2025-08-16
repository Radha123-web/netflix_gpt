
import Header from "./Header"
import NowPlayingMovies from "../hooks/useNowPlayingMovies"
import PopularMovies from "../hooks/usePopularMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import GptSearch from "./GptSearchPage"
import { useSelector } from "react-redux"



const Browse =()=>{
  const ShowGptSearch = useSelector(store=>store?.gpt?.ShowGptSearch)
   NowPlayingMovies()
   PopularMovies()
     return(
              <div>
               <Header/>
               {
               ShowGptSearch?(<GptSearch/>):
               (
               <>
               <MainContainer/>
               <SecondaryContainer/>
               </>
               )

               }
             

             {/* {
               MainConatiner
               -VedioBackground
               -VedioTitle
               -SecondaryContainer
               -MovieList*n
               -cards *n
             } */}
                    
             
              </div>
     )      
}
export default Browse