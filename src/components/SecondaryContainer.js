import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const navigate = useNavigate();
  
  const onMovieSelect = (movieId) => {
    navigate(`/movie/${movieId}`);
  };
  return (
    <div className='bg-black w-screen h-full'>
      <div className='mt-0 md:-mt-20 relative z-20 w-full'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} onMovieSelect={onMovieSelect} />
        <MovieList title={"Popular"} movies={movies.popularMovies} onMovieSelect={onMovieSelect}/>
        <MovieList title={"Top-Rated"} movies={movies.topRatedMovies} onMovieSelect={onMovieSelect}/>
        <MovieList title={"Upcomings"} movies={movies.upcomingMovies} onMovieSelect={onMovieSelect}/>
      </div> 
    </div>
  )
}

export default SecondaryContainer