import React from 'react';
import Footer from './containers/Footer';
import Navbar from './containers/Navbar';
import "swiper/css/bundle";
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import Login from './admin/containers/Login';
import AppContainer from './containers/AppContainer';
import Productpage from './admin/containers/Productpage';
import Createproduct from './admin/containers/Createproduct';
import DashboardNav from './admin/containers/DashboardNav';
import Dashboard from './admin/containers/Dashboard';
import EditProduct from './admin/containers/EditProduct';


function App() {
  return (
    <Router>
     <Routes>
      <Route path='/' element={<LayoutsWithNavbar />}>
    <Route path='/' exact element={<AppContainer/>} />
     <Route path='/login' element={<Login/>} />
     </Route>
     <Route path='/dashboard' element={<LayoutsWithDashboard/>} >
      <Route path='/dashboard' element={<Dashboard/>} />
     <Route path='/dashboard/viewproduct' element={<Productpage/>} />
     <Route path='/dashboard/createproduct' element={<Createproduct/>} />     
     <Route path='/dashboard/editproduct' element={<EditProduct/>} />     
     </Route>
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
  function LayoutsWithDashboard(){
    return (
      <>
<DashboardNav />
<Outlet />

      </>
    )
  }

}

export default App;
