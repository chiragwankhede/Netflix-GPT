import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../utils/constants'
import { useSelector } from 'react-redux'

const GptSearch = () => {

  return (
    <>
        <div className="fixed -z-20">
              <img className='h-screen w-screen object-cover' src={BG_URL} alt="logo"/>
        </div>
        <div className=''>        
          <GptSearchBar />
          <GptMovieSuggestion />
        </div>
      
    </>
    
  )
}

export default GptSearch