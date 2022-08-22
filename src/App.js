import React from 'react';
import Footer from './containers/Footer';
import Navbar from './containers/Navbar';
import "swiper/css/bundle";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './admin/Login';
import AppContainer from './containers/AppContainer';
import Productpage from './admin/Productpage';
import Createproduct from './admin/Createproduct';

function App() {
  return (
    <Router>
     <Navbar />
     <Routes>
    <Route path='/' exact element={<AppContainer/>} />
     <Route path='/login' element={<Login/>} />
     <Route path='/productpage' element={<Productpage/>} />
     <Route path='/createproduct' element={<Createproduct/>} />
     </Routes>
     <Footer />
    </Router>
  );
}

export default App;
