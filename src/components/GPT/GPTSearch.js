import React from 'react'
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestions from './GPTMovieSuggestions';
import { BG_IMG } from '../../utils/constants/constants';

const GPTSearch = () => {
  return (
    < >
      <div className='w-screen fixed -z-10 '>
        <img className='w-screen h-screen object-cover'
          alt='BG-IMG' 
          src={BG_IMG}></img>
      </div>
      <div className='fixed w-screen '>
        <div><GPTSearchBar/></div>
        <div><GPTMovieSuggestions/></div>
      </div>
    </>
  )
}

export default GPTSearch;