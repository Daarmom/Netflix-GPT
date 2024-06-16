import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-m w-2/5'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black p-4 px-10 text-xl hover:bg-opacity-50 rounded-lg'>▶ Play</button>
            <button className='mx-2 bg-black text-white p-4 px-10 text-xl bg-opacity-50 rounded-lg'>ℹ️ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle