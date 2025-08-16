import { BG_URL } from "../utlis/constants";
import GptSearchMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage =()=>{
              return(<div>
                <div className="absolute -z-10 ">
             <img src= {BG_URL}alt="logo"/>
              </div>
           <GptSearchBar/>
           <GptSearchMovieSuggestion/>
              </div>)
}
export default GptSearchPage;