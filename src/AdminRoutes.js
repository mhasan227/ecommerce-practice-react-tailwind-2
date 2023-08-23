import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './view/Home';
import AdminDashboard from './view/AdminDashboard';
import Cart from './view/Cart';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import AdminHome from './view/AdminProductList';
function App() {
  return (
    
    <div>
      <SideBar/>
      <Routes>
        
        {/* <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} /> */}
        <Route path="/admin2" exact element={<AdminHome />} />

      </Routes>
    </div>
  
  );
}

export default App;
