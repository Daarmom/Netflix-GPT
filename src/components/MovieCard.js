import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({key, posterPath}) => {
  return (
    <div className='w-48 pr-2'>
        <img alt='MovieCard' src={IMG_CDN_URL+posterPath}></img>
    </div>
  )
}

export default MovieCard