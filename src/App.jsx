import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate  } from 'react-router-dom';
import Home from './view/Home';
import ProductList from './view/ProductList';
import Cart from './view/Cart';
import AdminDashboard from './view/AdminDashboard';
import AdminRoutes from './AdminRoutes'
import NavBar from './components/NavBar';
import AdminProductList from './view/AdminProductList';
import AdminCustomerList from './view/AdminCustomerList';
import SignIn from './view/SignIn';
import SignUp from './view/SignUp';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(checkUserAuthentication());
  function checkUserAuthentication() {
    return localStorage.getItem('userToken') !== null;
  }

  function onSignIn(userToken) {
    localStorage.setItem('userToken', userToken);
    setIsAuthenticated(true);
  }
  return (
    <Router>
    <div>
      <NavBarConditional />
      <Routes>
          <Route path="/" element={<SignIn onSignIn={onSignIn} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/productlist" element={<AdminProductList />} />
          <Route path="/admin/customerlist" element={<AdminCustomerList />} />        
      </Routes>
    </div>
  </Router>
  );
}


function NavBarConditional() {
  const location = useLocation();

  // List of paths where you want to hide the NavBar
  const pathsToHideNavBar = ['/signup', '/'];

  if (pathsToHideNavBar.includes(location.pathname)) {
    return null;
  }

  return <NavBar />;
}
export default App;
