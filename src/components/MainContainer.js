import React from "react";
import { useSelector} from "react-redux";
import VedioBackground from "./VedioBackground";
import VedioTitle from "./VedioTitle";
const MainContainer = () => {
              const movies=useSelector((store)=>store.movies?.nowPlayingMovies )
            if(movies==null) return;
              const mainMovie= movies[0]
              console.log(mainMovie)
              const {original_title, overview ,id}=mainMovie
	return (

	<div>
         <VedioTitle title={original_title} overview={overview} movieId={id}/>
          <VedioBackground/>
         
              </div>
	);
};

export default MainContainer;
