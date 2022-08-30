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
import useToken from './useToken';


function App() {
const { token, setToken } = useToken();

// const ProtectedRoute = ({token}) => {
//   if(!token) {
//     return <Login setToken={setToken} />
// }
// return <Outlet />;
//   };
if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <Router>
     <Routes>
      <Route path='/' element={<LayoutsWithNavbar />}>
    <Route path='/' exact element={<AppContainer/>} />
     </Route>
     
     
 {/* <Route element={<ProtectedRoute token={token}/> }> */}
  <Route path='/dashboard' element={<LayoutsWithDashboard/>} >
 <Route path='/dashboard' element={<Dashboard/>}/>
 <Route path='/dashboard/viewproduct' element={<Productpage/>} />
         <Route path='/dashboard/createproduct' element={<Createproduct/>} />
     <Route path='/dashboard/editproduct' element={<EditProduct/>} />
      </Route>
      {/* </Route> */}
    
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
