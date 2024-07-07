import React from 'react'
import { BG_IMG } from '../utils/constants/constants';
import MovieDetail from './MovieDetail';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import YouTubePlayer from './YoutubePlayer';

const MoviePage = () => {
  const { id } = useParams();
  const movies = useSelector((store) => store.movies);

  const movie = movies?.nowPlayingMovies?.find((movie) => movie.id.toString() === id) ||
                movies?.popularMovies?.find((movie) => movie.id.toString() === id) ||
                movies?.topRatedMovies?.find((movie) => movie.id.toString() === id) ||
                movies?.upcomingMovies?.find((movie) => movie.id.toString() === id);

  if (!movie) {
    return <div className='text-white'>Movie not found</div>;
  }
  return (
    < >
      <div className='w-screen fixed -z-10 '>
        <img className='w-screen h-screen object-cover'
          alt='BG-IMG' 
          src={BG_IMG}>
        </img>
      </div>
      <div className='fixed w-screen '>
        <div>
          {/* <YouTubePlayer/> */}
        </div>
        <div className='mt-4'>
            <MovieDetail movie={movie} />
        </div>
      </div>

    </>
  )
}

export default MoviePage;