import React from 'react'
import { IMG_CDN_URL } from '../utils/constants/constants.js'
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ key, movie, onMovieSelect }) => {
  const navigate = useNavigate();

  const handleMovieCardClick = () => {
    navigate(`/movie/${movie.id}`);
  };
  
  return (
    <div className='w-40 md:w-50 pr-2'>
        <img 
          alt='MovieCard' 
          src={IMG_CDN_URL+movie.poster_path} 
          onClick={handleMovieCardClick}
          className='cursor-pointer'>
        </img>
    </div>
  )
}

export default MovieCard