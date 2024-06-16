import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const useMovieTrailer = (movieId) => {
    //fetch trailer video && updating the store with trailer video

    const dispatch = useDispatch();
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);
    // const [trailerId, setTrailerId] = useState(null);
    console.log(movieId);
    const getMovieVideos = async () =>{
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/'
            +movieId+
            '/videos?language=en-US', 
            API_OPTIONS)
            
        // if(!data) return;
        const json = await data.json();
        console.log(data);

        const filterTrailer = json.results.filter((video) => video.type === 'Trailer');
        const trailer = filterTrailer.length ? filterTrailer[0]: json.results[0];
        
        console.log(trailer);
        // setTrailerId(trailer.key)
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(()=>{
        getMovieVideos();
    }, []);
}

export default useMovieTrailer