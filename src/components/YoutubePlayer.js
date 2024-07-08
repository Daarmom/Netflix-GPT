import { auto } from 'openai/_shims/registry.mjs';
import React, { useRef } from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoKey }) => {
  const playerRef = useRef(null);

//   var btn = document.getElementById("mute-toggle");
//     //declare unmute icon variable
//     var unmuteIcon = '<i class="fas fa-volume-up"></i>'

//     //declare mute icon variable
//     var muteIcon = '<i class="fas fa-volume-mute"></i>'

  const onReady = (event) => {
    playerRef.current = event.target;
    playerRef.current.playVideo();
    playerRef.current.mute();
  };

  const toggleMute = () => {
    if (playerRef.current.isMuted()) {
      playerRef.current.unMute();
    //   btn.innerHTML = unmuteIcon;
    } else {
      playerRef.current.mute();
    //   btn.innerHTML = muteIcon;
    }
  };

  const opts = {
    height: '700',
    width: '1205',
    playerVars: {
      autoplay: 1,
      mute: 1,
    },
  };

  return (
    <div className='w-screen aspect-video'>
      <YouTube className="w-full h-full" videoId={videoKey} opts={opts} onReady={onReady} />
      <button className='absolute bottom-4 right-4 text-white text-lg font-bold mt-0' onClick={toggleMute} id="mute-toggle">
        {/* <i class="fas fa-volume-mute"></i> */}
        Mute/Unmute
        
        </button>
    </div>
  );
};

export default YouTubePlayer;
