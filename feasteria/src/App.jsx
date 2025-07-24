
import React, { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import ERecipes from './components/recipes';
import Login from './login_&_signup/login';
import Signup from './login_&_signup/Signup';
import Health from './health_componenets/health'; 
import Profile from './components/profile'; 

function App() {
  const recipesRef = useRef(null);

  const scrollToRecipes = () => {
    recipesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar onExploreClick={scrollToRecipes} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <div ref={recipesRef}>
                <ERecipes />
              </div>
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/health" element={<Health />} />
        <Route path="/profile" element={<Profile />} /> 
      </Routes>
    </>
  );
}

export default App;
