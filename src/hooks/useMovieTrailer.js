

import React, { useEffect } from "react";
import { API_OPTIONS } from "../utlis/constants";
import { useDispatch,useSelector } from "react-redux";
import { addTrailerVideo } from "../utlis/moviesSlice";


const useMovieTrailer=()=>{


               const dispatch= useDispatch();
    const trailerVedio = useSelector(store=> store?.movies?.trailerVedio)
              const getMovieVedios=async()=>{
                  const data= await fetch( 'https://api.themoviedb.org/3/movie/755898/videos?language=en-US', API_OPTIONS)   
                  const json = await data.json()
                    console.log(json.results)   
                    dispatch(addTrailerVideo(json.results[0]))   
              }
            
              useEffect(()=>{
                  getMovieVedios()          
              },[])

}

export default useMovieTrailer