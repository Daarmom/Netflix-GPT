import React from 'react'
import Header from './Header'
import GPTSearch from './GPTSearch'
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header/>
      {
        showGptSearch ?
        <GPTSearch/> :
        <div>
          <MainContainer/>
          <SecondaryContainer/>
        </div>
      }
      
      
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