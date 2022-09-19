import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { navLinks } from "../utils/NavDB";
import {useLocation} from 'react-router-dom';


const DashboardNav = ({setToken}) => {
const [profileImage, setProfileImage] = useState();
 const location = useLocation();
     const {pathname} = location;
 const [activeNav, setActiveNav] = useState(pathname);
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
      setProfileImage(data.user.profilePic)
      }
    
    )
      
  } ,[token])

//Log Out

const logOut = () => {
  setToken(null);
localStorage.removeItem("access_token");

}
  return (
    <div className="fixed top-0 left-0 w-[250px] min-h-[100vh]">
    <nav className="border-r border-gray min-h-[100vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between">
     <div className="space-y-8 w-full">
   <div className="flex flex-col pl-[20px] xl:flex-row xl:pl-[30px] xl:-pb-[20px]">
      <div className="pr-[8px]"><img src={profileImage} alt="Admin" className='w-[35px] h-[35px] xl:w-[50px] xl:h-[50px] rounded-[50%]' /></div>
    </div>
       
{navLinks.map((link) => 
          <NavItem link={link} key={link.id} activeNav={activeNav} setActiveNav={setActiveNav}/>
        )}
        <div className="flex items-center space-x-8 px-5  cursor-pointer">
            <span> <svg  onClick={logOut} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg></span>
      <button onClick={logOut} className="text-light-black group-hover:text-black group-hover:font-[900] xl:flex hidden">
      Log out
      </button>
    </div>
      </div>
    </nav>
    </div>
  )
}

function NavItem({ link, activeNav, setActiveNav }) {
 
  return (
    <Link to={link.path} onClick={() => setActiveNav(link.path)}
      key={link.id}
      className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer
       group hover:border-orange hover:border-l-4 hover:border-transparent
       ${
         activeNav === link.path && "border-orange border-l-4"
       }
  `}
       >
    
      <span> {link.icon}</span>
      <h1
        className={`text-light-black group-hover:text-black xl:flex hidden
        ${
          activeNav === link.path && "text-black"
        }
  `}
       >
        {link.title}
      </h1>
    
    </Link>
  );
  
}
export default DashboardNav