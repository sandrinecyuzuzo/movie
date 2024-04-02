import React, { useState, useEffect } from 'react';
import Deatils from './component/details';
import Movies from './component/fullmovie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/HomePage';
import Navigation  from './component/navigation';
import Login from './component/login';
import Search from './component/search';


function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
          <Route index element={<Home />}/>
          <Route path="/details/:id" element={<Deatils/>} />
          <Route path="/movies/:id" element={<Movies/>} />
          <Route path="login" element={<Login/>} />
          <Route path="search" element={<Search/>} />
        
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;