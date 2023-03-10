import React from 'react';
import './App.css';
import HomePage from './layouts/HomePage/HomePage';
import Footer from './layouts/NavbarAndFooter/Footer';
import Navbar from './layouts/NavbarAndFooter/Navbar';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HomePage></HomePage>
      <Footer></Footer>
    </div>
  );
}

export default App;
