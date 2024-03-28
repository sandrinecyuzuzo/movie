import React, { useState, useEffect } from 'react';
import Deatils from './component/details';
import Movies from './component/fullmovie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/HomePage';
import Navigation  from './component/navigation';

function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
          <Route index element={<Home />}/>
          <Route path="/details/:id" element={<Deatils/>} />
          <Route path="/movies/:id" element={<Movies/>} />
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;