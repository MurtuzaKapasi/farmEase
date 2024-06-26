import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Import your home component
import Products from './pages/Products'; // Import your products component
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import About from './pages/About';
import ProductDetails from './pages/Productdetails';
import ProductRegistrationPage from './pages/ProductRegistrationPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/products' element={<Products />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/products/:id' element={<ProductDetails/>} />
        <Route path='/product_add' element={<ProductRegistrationPage/>} />

        
        {/* Add more Route components for other pages as needed */}
      </Routes>
    </Router>
  );
}

export default App;
