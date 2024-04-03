import React, { useState, useEffect } from 'react';
import Deatils from './component/details';
import Movies from './component/fullmovie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/HomePage';
import Navigation from './component/navigation';
import Login from './component/login';
import Search from './component/search';
import Explore from './component/explore';
import Genre from './component/Genre';
import News from './component/News';
import NoPage from './component/Nopage';





function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/details/:id" element={<Deatils />} />
        <Route path="/movies/:id" element={<Movies />} />
        <Route path="login" element={<Login />} />
        <Route path="search" element={<Search />} />
        <Route path="Explore" element={< Explore/>} />
        <Route path="Genre" element={< Genre/>} />
        <Route path="News" element={< News/>} />
        <Route path="*" element={<NoPage />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;