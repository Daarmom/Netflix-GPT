import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    
    if(!movies) return; 
    const mainMovie = movies[0];
    console.log(mainMovie);

    const {original_title, overview, id} = mainMovie;
    const movieDetail = JSON.stringify(overview);
    
    return (
        <div className='pt-0 md:pt-0'>
            <VideoTitle title={original_title} overview={movieDetail}/>
            <VideoBackground movieId={id}/>
            
        </div>
  )
}

export default MainContainer