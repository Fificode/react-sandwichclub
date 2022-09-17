import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const DashboardRightPart = () => {
  const [numberOfSubscribers, setNumberOfSubscribers] = useState();
  const [numberOfProducts, setNumberOfProducts] = useState();
  const [profile, setProfile] = useState();
  const navigateSubscribers = useNavigate();
  const navigateProducts = useNavigate();

  const handleSubcribersList = () => navigateSubscribers("/dashboard/subscribers");
  const handleProductsList = () => navigateProducts("/dashboard/viewproduct");

//Access token
const tokenString = localStorage.getItem("access_token");
let token = JSON.parse(tokenString);
token = token.access_token;

//Get profile
useEffect(() => {
    fetch("https://sandwich-backend.herokuapp.com/api/v1/profile", {
      method: 'GET',
      headers: {
        'Authorization' :  `Bearer ${token}`
      }
    })
    .then( response => response.json())
     .then(function(data){ 
      // console.log(data)
      setProfile(data.user.name)
      }
    
    )
      
  } ,[token])

//Get Number of Subcribers
useEffect(() => {
    fetch("https://sandwich-backend.herokuapp.com/api/v1/subscriber", {
      method: 'GET',
      headers: {
        'Authorization' :  `Bearer ${token}`
      }
    })
    .then( response => response.json())
     .then(function(data){ 
      // console.log(data)
      setNumberOfSubscribers(data.data.length)}
    
    )
      
  } ,[token])

 //Get Number of Products
 useEffect(() => {
    fetch("https://sandwich-backend.herokuapp.com/api/v1/products")
    .then( response => response.json())
     .then( data => setNumberOfProducts(data.data.length),
    )
       } ,[])
       
  return (
    <>
    <div className="pl-[23px] py-[20px] lg:py-[25px]">
      <h1 className="text-[17px] md:text-[22px] lg:text-[28px] font-[500]">
        Welcome back, {profile}!
      </h1>
    </div>
    <div className='flex flex-col md:flex-row justify-center'>
      <div className="w-[200px] h-[280px] md:w-[250px] md:h-[280px] my-[10px] md:my-0 bg-black rounded-[5px] xl:w-[400px] xl:h-[500px] mx-[30px] py-[50px] shadow-md flex flex-col items-center">
        <div className="">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-[50px] h-[50px] xl:w-[100px] xl:h-[100px]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>
</div>
<h2 className="text-[25px] md:text-[30px] xl:text-[50px] font-[600] text-white">{numberOfSubscribers}</h2>
<p className="text-[25px] md:text-[30px] xl:text-[50px] font-[600] text-white">Subscribers</p>
<div className="py-[20px]">
  <button onClick={handleSubcribersList} className='bg-orange rounded-[5px] px-[20px] py-[10px] text-black text-[15px] lg:text-[18px] font-[500]'>Manage List</button>
</div>
</div>
      <div className="w-[200px] h-[280px] md:w-[250px] md:h-[280px] my-[20px] md:my-0 rounded-[5px] xl:w-[400px] xl:h-[500px] mx-[30px] bg-orange py-[50px] shadow-md flex flex-col items-center">
        <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-[50px] h-[50px] xl:w-[100px] xl:h-[100px]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>
</div>
<h2 className="text-[25px] md:text-[30px] xl:text-[50px] font-[600] text-black">{numberOfProducts}</h2>
<p className="text-[25px] md:text-[30px] xl:text-[50px] font-[600] text-black">Stock Total</p>
<div className="py-[20px]">
  <button onClick={handleProductsList} className='bg-black rounded-[5px] px-[20px] py-[10px] text-white text-[15px] lg:text-[18px] font-[500]'>View Products</button>
</div>
      </div>
    </div>
    </>
  )
}

export default DashboardRightPart