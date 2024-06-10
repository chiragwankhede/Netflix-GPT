import React, { useRef } from 'react'
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
  const dispatch=useDispatch()
  const langKey=useSelector((store)=> store.config.lang);
  const searchText=useRef(null);

  //Search movie in TMDB API according to the results given by gptQuery or gptResults
  const searchMovieTMDB=async (movie)=>{
    const data= await fetch('https://api.themoviedb.org/3/search/movie?query='+
    movie+
    '&include_adult=false&language=en-US&page=1',
    API_OPTIONS);
    const json=await data.json();
    console.log(json.results);
    return json.results;
  }

  const handleGptSearchClick=async()=>{
    console.log(searchText);

    const gptQuery="Act as a Movie Recommendation System & suggest some movies for the query" 
    + searchText.current.value + ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Results: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya" ;


    //Make an API call to GPT API & get the Movie results, this is available on node website
    const gptResults= await openai.chat.completions.create({
      messages:[{role:'user', content:gptQuery}],
      model:'gpt-3.5-turbo'
    })

    console.log(gptResults.choices?.[0]?.message?.content);

    //"Hera Pheri, Angoor, Chupke Chupke, Padosan, Amar Akbar Anthony"
    const gptMovies=gptResults.choices?.[0]?.message?.content.split(",") //Converted to array
    //["Hera Pheri, Angoor, Chupke Chupke, Padosan, Amar Akbar Anthony"]

    //For each movie I will search in TMDB API
    const promiseArray= gptMovies.map((movie)=>searchMovieTMDB(movie));// This will return a array of promise for every movie as searchMovieTMDB is async function
    //[Promise,Promise,Promise,Promise,Promise]

    const tmdbResults=await Promise.all(promiseArray) // Promise.all waits for every promise to resolve. After all promises are resolved then it returns a result
    console.log(tmdbResults);

    //Now push the data of tmdbResults in pur redux store
    dispatch(addGptMovieResult({movieNames:gptMovies, movieResults:tmdbResults}));

  }

  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center '>
        <form 
        className='w-full md:w-1/2 bg-black grid grid-cols-12'
        onSubmit={(e)=>e.preventDefault()}>
            <input type='text' 
            ref={searchText}
            className='p-4 m-4 col-span-9' 
            placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'
            onClick={handleGptSearchClick}>
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar;