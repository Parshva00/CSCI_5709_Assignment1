import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Signup from "./Components/Signup";
import Login from "./login";


const App = () => {

  return(
    <>
      <Navbar/>
     <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
       </Routes>
    </>
     
  );
};

export default App;
   