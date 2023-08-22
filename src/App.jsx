import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './view/Home';
import ProductList from './view/ProductList';

import NavBar from './components/NavBar';
function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Routes>
        
        <Route path="/home" element={<Home />} />
        <Route path="/productlist" element={<ProductList />} />
        
      </Routes>
    </div>
  </Router>
  );
}

export default App;
