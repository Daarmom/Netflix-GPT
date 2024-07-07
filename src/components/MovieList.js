import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies, onMovieSelect}) => {

  // const [selectedMovie, setSelectedMovie] = useState(null);

  // const handleMovieSelect = (movie) => {
  //   setSelectedMovie(movie);
  // };
  return (
    <div className='my-8'>
      <h2 className='text-lg md:text-2xl py-2 text-white font-bold mb-4'>{title}</h2>
      <div className='flex overflow-x-scroll'>
        <div className='flex'>
          {movies && movies.map(movie => {
            return (<MovieCard key={movie.id} movie={movie} onMovieSelect={onMovieSelect} />)
          })}
        </div>
      </div>
      {/* {selectedMovie && 
      <div>
        <MoviePage movie={selectedMovie}/>
      </div>} */}
    </div>
  )
}

export default MovieList