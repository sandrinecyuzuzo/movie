import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from 'react-youtube';


function Deatils() {
    const [details, setDetails] = useState([]);
    const [movieKey, setMoviekey] = useState([])

    const { id } = useParams();

    console.log("")

    useEffect(() => {

        const ifuserisloggedin = ()=>{
            const userdata = localStorage.getItem("userdata")
            if(userdata == null) {
                window.location.href="/login"
        }
        }

        ifuserisloggedin()

        
        const moviesData = async () => {
            const respone = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=a3311cd10c54967ca049ca5d14e4756d`)
            console.log("", respone.data.results[0])
            setMoviekey(respone.data.results[0])
        }
        moviesData()
    }, [id]);



    return (

        <div className='w-42 h-82  text-white'>
            <YouTube videoId={`${movieKey.key}`} />

            <p >{details.title}</p>
            <p>{details.budget}</p>
            <p>{details.vote_average}</p>
            <p>{details.vote_count}</p>
        </div>

    );
}

export default Deatils;