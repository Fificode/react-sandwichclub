import React from 'react';
import Footer from './containers/Footer';
import Navbar from './containers/Navbar';
import "swiper/css/bundle";
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import Login from './admin/containers/Login';
import AppContainer from './containers/AppContainer';
import ProductList from './admin/containers/ProductList';
import Createproduct from './admin/containers/Createproduct';
import DashboardNav from './admin/containers/DashboardNav';
import Dashboard from './admin/containers/Dashboard';
import useToken from './useToken';
import SubscribersList from './admin/containers/SubscribersList';


function App() {
const {token, setToken} = useToken();

const ProtectedRoute = ({token}) => 
{
  if(!token) {
 
    return <Login setToken={setToken} />
  
} 
 
return <Outlet />;
 
  };
 

  return (
    <Router>
     <Routes>
      <Route path='/' element={<LayoutsWithNavbar />}>
    <Route path='' exact element={<AppContainer/>} />
    <Route path='/login'  element={<Login setToken={setToken}/>} />
     </Route>
     
     
 <Route element={<ProtectedRoute token={token}/> }>
  <Route path='/dashboard' element={<LayoutsWithDashboard/>} >
 <Route path='/dashboard' element={<Dashboard/>}/>
  <Route path='/dashboard/createproduct' element={<Createproduct/>} />
     <Route path='/dashboard/viewproduct' element={<ProductList/>} />
      <Route path='/dashboard/subscribers' element={<SubscribersList />} />
      </Route>
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
<DashboardNav setToken={setToken} />
<Outlet />

      </>
    )
  }

}

export default App;
