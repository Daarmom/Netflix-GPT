import React from 'react'
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestions from './GPTMovieSuggestions';

const GPTSearch = () => {
  return (
    <div>
      <div className='w-screen fixed -z-10 bg-gray-700'>
        <div><GPTSearchBar/></div>
        <div><GPTMovieSuggestions/></div>
      </div>
    </div>
  )
}

export default GPTSearch;