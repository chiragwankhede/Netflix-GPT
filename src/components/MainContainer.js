import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from "./VideoTitle"

export const MainContainer = () => {
    //We will need now playing movies 
    const movies= useSelector((store)=>store?.movies?.nowPlayingMovies)

    //Now we will need only one movie to display VideoBackground and VideoTitle
    // const mainMovie=movies[0];
    //Initially movies are null, so it will break

    if(!movies) return //early return when movies is null
    const mainMovie=movies[0];
    console.log(mainMovie);

    const {original_title, overview, id}=mainMovie;

  return (
    <div className='pt-[35%] bg-black md:pt-0'>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer;