import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trailerVideo: null,
    trendingThisWeek: null,
    upcomingMovies: null,
    topRatedMovies : null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addTrendingThisWeek: (state,action)=>{
      state.trendingThisWeek=action.payload;
    },
    addUpcomingMovies: (state, action)=>{
      state.upcomingMovies=action.payload;
    },
    addTopRatedMovies: (state,action)=>{
      state.topRatedMovies=action.payload;
    }
  },
});

// export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, 
//   addTrendingThisWeek, addUpcomingMovies,  addTopRatedMovies} = moviesSlice.actions;

export const {addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addTrailerVideo, addTrendingThisWeek, addUpcomingMovies}= moviesSlice.actions;
export default moviesSlice.reducer;