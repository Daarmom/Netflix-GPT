import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId}) => {
    
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    
    useMovieTrailer(movieId);
  return (
    <div className=" w-screen">
        <iframe 
        className='w-screen aspect-video' 
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        >
        </iframe>
    </div>
  )
}

export default VideoBackground

// {
//   "id": 1022789,
//   "results": [
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Meet the Cast of Inside Out 2",
//       "key": "uyzQw8-8k9U",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Behind the Scenes",
//       "official": true,
//       "published_at": "2024-06-07T00:37:41.000Z",
//       "id": "6662b013eba41395c5528e84"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Remember How You Felt...",
//       "key": "uskbXdnbcvg",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-06-06T19:00:27.000Z",
//       "id": "6662ab539057653a013ca04d"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Summer Kick Off",
//       "key": "0W6mhdueFec",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-06-05T18:00:00.000Z",
//       "id": "6662a0a53120d5f720089e1d"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Final Trailer",
//       "key": "L4DrolmDxmw",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2024-06-04T16:00:17.000Z",
//       "id": "665f511e176dc873953843e5"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Hop On",
//       "key": "uwnlgp64shw",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-06-04T14:49:48.000Z",
//       "id": "665ffb8d5e9156e94f76ccfa"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Moments",
//       "key": "nm35CQL3yms",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-05-31T18:23:15.000Z",
//       "id": "665d81f49fa5ffa9046fc01f"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Riley and Her Mom",
//       "key": "tnLtvSxNU1o",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-05-30T21:00:38.000Z",
//       "id": "665d81e6fb05337b51907020"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Bad Memories",
//       "key": "2GMtiofogKI",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-05-30T19:00:37.000Z",
//       "id": "665d81ce16d2fa696edd7fdc"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Meet envy",
//       "key": "sqJ1Tz91TNA",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-05-30T16:00:50.000Z",
//       "id": "665d819cfaf5d53a3923255e"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "That Feeling When",
//       "key": "Zpcr6u-eu50",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-05-29T23:00:24.000Z",
//       "id": "6657fe3c46f30f137474d9c2"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Joy & Anxiety",
//       "key": "R9H1df_tlwQ",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2024-05-29T23:00:22.000Z",
//       "id": "6657fe175e86abc4252d1df4"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Meet Anxiety",
//       "key": "C27fmGCmPa4",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-05-29T19:00:11.000Z",
//       "id": "6657fdfd97b7c5247574d896"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Booth To Screen",
//       "key": "MvKzg3rrP30",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Behind the Scenes",
//       "official": true,
//       "published_at": "2024-05-22T17:29:03.000Z",
//       "id": "664e43c27390b745b042952e"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Tickets on Sale!",
//       "key": "nDL4nbvT9T0",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-05-14T16:00:42.000Z",
//       "id": "664445d0609d6aec31c53813"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Where Can I Put My Stuff",
//       "key": "E4rC-9NR7dk",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2024-05-14T13:00:23.000Z",
//       "id": "664445dfad08a305073d2cb6"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Trailer",
//       "key": "LEjhY15eCx0",
//       "site": "YouTube",
//       "size": 2160,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2024-03-07T17:00:10.000Z",
//       "id": "65e9f3347c6de3016308522d"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Team",
//       "key": "aYRnM4nyuKs",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-02-08T17:00:02.000Z",
//       "id": "65c50910db4ed60183d301c5"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Teaser Trailer",
//       "key": "VWavstJydZU",
//       "site": "YouTube",
//       "size": 2160,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2023-11-09T13:59:01.000Z",
//       "id": "654ce86241a561336b7a5a0d"
//     }
//   ]
// }