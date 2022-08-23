import React from 'react';
import Footer from './containers/Footer';
import Navbar from './containers/Navbar';
import "swiper/css/bundle";
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import Login from './admin/Login';
import AppContainer from './containers/AppContainer';
import Productpage from './admin/Productpage';
import Createproduct from './admin/Createproduct';
import Dashboard from './admin/Dashboard';

function App() {
  return (
    <Router>
     <Routes>
      <Route path='/' element={<LayoutsWithNavbar />}>
    <Route path='/' exact element={<AppContainer/>} />
     <Route path='/login' element={<Login/>} />
     </Route>
     <Route path='/productpage' element={<Productpage/>} />
     <Route path='/createproduct' element={<Createproduct/>} />
     <Route path='/dashboard' element={<Dashboard/>} />
     </Routes>
     </Router>
  );

  function LayoutsWithNavbar(){
    return (
      <>
<Navbar />
<Outlet />
<Footer />
      </>
    )
  }
}

export default App;
