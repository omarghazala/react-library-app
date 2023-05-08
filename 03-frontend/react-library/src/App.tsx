import React from 'react';
import './App.css';
import HomePage from './layouts/HomePage/HomePage';
import Footer from './layouts/NavbarAndFooter/Footer';
import Navbar from './layouts/NavbarAndFooter/Navbar';
import SearchBooksPage from './layouts/SearchBooksPage/SearchBooksPage';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* <HomePage></HomePage> */}
      <SearchBooksPage></SearchBooksPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
