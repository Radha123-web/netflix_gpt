
import Header from "./Header"
import NowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"


const Browse =()=>{
   NowPlayingMovies()
     return(
              <div>
               <Header/>
               <MainContainer/>
               <SecondaryContainer/>

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