import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './view/Home';
import ProductList from './view/ProductList';
import Cart from './view/Cart';
import AdminDashboard from './view/AdminDashboard';
import AdminRoutes from './AdminRoutes'
import NavBar from './components/NavBar';
import AdminProductList from './view/AdminProductList';
function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/productlist" element={<AdminProductList />} />

      </Routes>
    </div>
  </Router>
  );
}

export default App;
