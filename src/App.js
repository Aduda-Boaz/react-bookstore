import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookDisplay from './components/BookDisplay';
import Nav from './components/NavBar';
import BookCategories from './components/BookCategory';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="bookstore" element={<BookDisplay />} />
        <Route path="categories" element={<BookCategories />} />
      </Routes>
    </div>
  );
}

export default App;
