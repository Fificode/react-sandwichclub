import React, {useState, useEffect} from 'react';
import Footer from './containers/Footer';
import Navbar from './containers/Navbar';
import "swiper/css/bundle";
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import Login from './admin/containers/Login';
import AppContainer from './containers/AppContainer';
import ProductList from './admin/containers/ProductList';
import ProductPage from './admin/containers/Productpage';
import Createproduct from './admin/containers/Createproduct';
import UpdateProduct from './admin/containers/UpdateProduct';
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
 
  //Get all products
  const [allProducts, setAllProducts] = useState();
  const [query, setQuery] = useState("");
  const [searchParam] = useState(["productname"]);

  const handleSearch = () => {
     return allProducts.filter((item) => {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(query.toLowerCase()) > -1
                    );
                });
  })
   
        }
        

 useEffect(() => {
    fetch(`https://sandwich-backend.herokuapp.com/api/v1/products`)
    .then( response => response.json())
     .then( (data) => {
   
     setAllProducts(data.data)
    },
    
    
    )
  
  }
  
  ,[])
 

  return (
    <Router>
     <Routes>
      <Route path='/' element={<LayoutsWithNavbar />}>
    <Route exact path='/' element={<AppContainer/>} />
    <Route path='/login'  element={<Login setToken={setToken}/>} />
     </Route>
     
     
 <Route element={<ProtectedRoute token={token}/> }>
  <Route path='/dashboard' element={<LayoutsWithDashboard/>} >
 <Route path='/dashboard' element={<Dashboard/>}/>
  <Route path='/dashboard/createproduct' element={<Createproduct/>} />
  <Route path='/dashboard/updateproduct/:productId' element={<UpdateProduct allProducts={allProducts}/>} />
     <Route exact path='/dashboard/viewproduct' element={<ProductList allProducts={allProducts} query={query} setQuery={setQuery} handleSearch={handleSearch}/> } />
     <Route path='/dashboard/viewproduct/:productId' element={<ProductPage allProducts={allProducts}/>} />
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
