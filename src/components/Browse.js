import React from 'react'
import Header from './Header'
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {/* 
      - MainContainer
        - videoBackground
        - videoTitle
      - SecondaryContainer
        - movieList * N
          - cards * N */
      }
    </div>
  )
}

export default Browse