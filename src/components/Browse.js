import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';

const Browse = () => {

  const dispatch = useDispatch();
  //API Call
  const getNowPlayingMovies = async () =>{
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?page=1', 
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results))
  }
  //call getNowPlayingMovies inside useEffect(), so that I can call it once(whenever the component is rendered)
  useEffect(()=>{
    getNowPlayingMovies();
  }, [])

  return (
    <div>
      <Header/>
      
    </div>
  )
}

export default Browse