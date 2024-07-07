import React, { useState } from 'react'

const VideoTitle = ({title, overview}) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  let shortText = overview.slice(0, 100); // Adjust the length of the preview as needed
  let moreText = overview.slice(100);
  console.log(shortText);
  console.log(moreText);
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-xl md:text-6xl font-bold'>{title}</h1>
        {/* <p className='hidden md:inline-block py-6 text-m w-2/5'>{overview}</p> */}
        <div className='hidden md:inline-block py-6 text-m w-2/5'>
          <span>{isReadMore ? shortText + '...' : overview}</span>
          <span onClick={toggleReadMore} className="read-more">
            {isReadMore ? 'Read More' : 'Read Less'}
          </span>
        </div>

        <div className='my-2 '>
            <button className='bg-white text-black p-2 md:p-3 px-2 md:px-5 text-sm md:text-xl hover:bg-opacity-50 rounded-lg'>▶ Play</button>
            <button className='hidden md:inline-block mx-2 bg-black text-white p-3 px-5 text-xl bg-opacity-50 rounded-lg'>ℹ️ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle