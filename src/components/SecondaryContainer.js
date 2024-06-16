import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);
  return (
    <div className='bg-black'>
      <div className='relative -mt-20 z-20'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top-Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcomings"} movies={movies.upcomingMovies} />
        {/* <MovieList title={"Horror"} movies={movies.horrorMovies} /> */}
      </div>
  
      {/* MovieList - popular
          moviecard * n
          movielist - now playing
          movielist - ttrending
          movielist - horror
      */}
    </div>
  )
}

export default SecondaryContainer