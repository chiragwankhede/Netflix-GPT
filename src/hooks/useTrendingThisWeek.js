import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingThisWeek } from "../utils/moviesSlice";

const useTrendingThisWeek = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const trendingThisWeek = useSelector((store) => store.movies.trendingMoviesThisWeek);

  const getTrendingMoviesThisWeek = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/all/week",
      API_OPTIONS
    );
    const json = await data.json();
   dispatch(addTrendingThisWeek(json.results))
  };

  useEffect(() => {
    !trendingThisWeek && getTrendingMoviesThisWeek();
  }, []);
};

export default useTrendingThisWeek;