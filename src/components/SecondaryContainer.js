import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies);
  return (
    movies.nowPlayingMovies &&(
    <div className=' bg-black'>
      <div className='mt-0 md:-mt-35 pl-4 md:pl-12 relative z-20'>
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending This Week"} movies={movies.trendingThisWeek} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />

      </div>
      
      {/*
        MovieList - Popular
          -MovieCard*n
        MovieList - Now Playing
        MovieList - Trending
        MovieList - Horror
      
      */}
    </div>
    )
  )
}

export default SecondaryContainer