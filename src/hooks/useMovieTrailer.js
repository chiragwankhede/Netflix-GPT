
import { useDispatch , useEffect } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/moviesSlice';

const useMovieTrailer = (movieId) => {
    //Fetch trailer of movie & updating the redux store
    const dispatch=useDispatch(); 

    const getMovieVideos=async ()=>{
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+
        movieId+
        "/videos?language=en-US",
        API_OPTIONS
      );
      const json= await data.json();
      const {results}=json;
      console.log(results);
  
      const filterData= results.filter((video)=>video.type==="Trailer");
      const trailer=filterData.length===0? filterData[0] :results[0];
      console.log(trailer);
      dispatch(addTrailerVideo(trailer)); //We have added addTrailerVideo reducer in moviesSlice, now dispatching this action(fetching trailer ) to this reducer
    }
  
    useEffect(()=>{
      getMovieVideos();
    });
  

}

export default useMovieTrailer