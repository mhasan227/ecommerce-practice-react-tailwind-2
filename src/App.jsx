import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './view/Home';

function App() {
  return (
    <Router>
    <div>
    
      <Routes>
        
        <Route path="/home" element={<Home />} />
        
      </Routes>
    </div>
  </Router>
  );
}

export default App;
