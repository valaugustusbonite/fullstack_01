import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './modules/newsfeed/screens/Home';
import { ChakraProvider } from "@chakra-ui/react";

function App() {

  return (
    <ChakraProvider>
      <div className="App">
        <Home/>
      </div>
    </ChakraProvider>
  );
}

export default App;
