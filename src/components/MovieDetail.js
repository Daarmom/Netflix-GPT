import React from 'react';
import { IMG_CDN_URL } from '../utils/constants/constants';

const MovieDetail = ({ movie }) => {
  if (!movie) {
    return <div>Select a movie to see the details</div>;
  }

  return (
    <div className='bg-gray-800 text-white p-4 rounded'>
      {/* <h2 className='text-2xl font-bold'>{movie.title}</h2>
      <p className='text-sm text-gray-400'>{movie.release_date}</p>
      <p className='my-4'>{movie.description}</p> */}
      <div className='w-40 md:w-50 pr-2'>
        <img 
          alt='MovieCard' 
          src={IMG_CDN_URL+movie.poster_path}>
        </img>
      </div>
      <h1 className='text-2xl font-bold'>{movie.title}</h1>
      <p className='my-4'>{movie.overview}</p>
      <p className='text-sm text-gray-400'>Release Date: {movie.release_date}</p>
      <p className='text-sm text-gray-400'>Rating: {movie.vote_average}</p>
    </div>
  );
};

export default MovieDetail;
