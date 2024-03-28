import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './card';

import image1 from '../assets/images/Group.png';
import images from '../assets/images/Vector@2x.png';
import sv from '../assets/fire.svg'
import play from '../assets/play.svg'
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import YouTubeIframe from 'react-youtube';


function Home() {
  const [movies, setMovies] = useState([]);
  const [move, setMove] = useState([]);

  useEffect(() => {
    fetchNowPlaying();
    fetchBeast();
  }, []);

  const fetchNowPlaying = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=a3311cd10c54967ca049ca5d14e4756d', {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDRhOTNhZWRmNDIyMWI1Y2M2NjBiZTYxMWU0N2QzOSIsInN1YiI6IjY1ZmE5NDVmNzcwNzAwMDE0OTA1ZDMxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vLeIlhWw95m5PTIfeYbBNY6w_nwtbPtuZwcretb_WN4'
        }
      });

      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchBeast = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=a3311cd10c54967ca049ca5d14e4756d', {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDRhOTNhZWRmNDIyMWI1Y2M2NjBiZTYxMWU0N2QzOSIsInN1YiI6IjY1ZmE5NDVmNzcwNzAwMDE0OTA1ZDMxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vLeIlhWw95m5PTIfeYbBNY6w_nwtbPtuZwcretb_WN4'
        }
      });
      setMove(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <>
      
      <div className='flex relative h-[42rem] items-end justify-center mx-20'>
        <div className='w-[50%] flex flex-col bottom-0 left-16 h-[26rem] border-r-[1px] border-[#060606]'>
          <div className='w-1/3 h-[1px] bg-[#333232] self-end'></div>
          <h1 className='text-white text-4xl'>FIND THE MOVIE</h1>
          <h1 className='text-6xl grad-back'>TV SHOW AND MORE</h1>
          <p className='text-white'>Loem ipsm has been the industry's standard dummy text </p>
          <p className='text-white'>ever since the 1500s, when an unknow  printer  took girls </p>
          <p className='text-white'>of type and scaramble it to make  a types  specimen book. </p>

          <div className="flex-wrap py-5 space-x-5 pt-10">
            <button className="ring-1 ring-white rounded-md w-60 h-12 font-bold text-white flex items-center justify-center">
              <img src={play} alt="" className="w-6 h-6 mr-2" />
              <span>watch Tutorial</span>
            </button>
          </div>



        </div>
        <div className='relative w-1/2 h-[42rem] flex items-center justify-center border-b-[1px] border-[#333232]'>
            <img className='w-[20rem] h-[31rem] -mb-20 -mr-20 z-10' src={image1} alt="" />
            <img src={play} alt="Play" className="absolute inset-0 m-auto w-16 cursor-pointer " style={{ zIndex: 40 }} />
          <img className='w-[20rem] h-[31rem]' src={images} alt="" />
          <span className='absolute bottom-0 right-0 -mb-1 w-2 h-2 bg-[#333232] rounded-full'></span>
        </div>

      </div>

      <div className='flex items-center px-4 py-2 text-white pt-24'>
        <img src={sv} alt="sv" className='h-4 w-4' />
        <p className='flex text-4xl'>Trending</p>
        <hr className='flex-grow border-t border-gray-700 mx-4' />
        <p className='flex'>See More</p>
      </div>
      <div className='grid grid-cols-10 gap-12 px-6 pt-12 pb-14'>
        {movies.map((movie, index) => (

          <NavLink to={`/details/${movie.id}`}>

            <Card
              key={index}
              titel={movie.original_title}
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              price={DataTransferItemList.vote_average}
              vote={movie.vote_average}
            />

          </NavLink>
        ))}
      </div>
      <div className='flex items-center px-4 text-white pt-24'>
        <p className='flex font-bold text-4xl'>YOU MAY LIKE THIS</p>
        <hr className='flex-grow border-t border-gray-700 mx-4' />
        <p className='flex'>See More</p>
      </div>
      <div className='grid grid-cols-10 gap-12 px-6 pt-12'>
        {move.map((movie, index) => (
          <Card
            key={index}
            titel={movie.original_title}
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            price={DataTransferItemList.vote_average}
            vote={movie.vote_average}
          />
        ))}
      </div>
    </>
  );
}

export default Home;