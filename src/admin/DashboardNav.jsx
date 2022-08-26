import React from 'react'
import { Link } from 'react-router-dom';
import { navLinks } from "./utils/NavDB";
import { useRecoilState } from "recoil";
import { activeNavItemState } from "./atom/ActiveNavBarAtom";
import admin from '../assets/admin.jpeg'

const DashboardNav = () => {
  return (
    <div className="fixed top-0 left-0 w-[250px] min-h-[100vh]">
    <nav className="border-r border-gray min-h-[100vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between">
     <div className="space-y-8 w-full">
   <div className="flex flex-col pl-[20px] xl:flex-row xl:pl-[30px] xl:-pb-[20px]">
      <div className="pr-[8px]"><img src={admin} alt="Admin" className='w-[30px] h-[30px] xl:w-[50px] xl:h-[50px] rounded-[50%]' /></div>
      <div className="flex flex-col">
      <h1 className="text-[20px] font-[600] xl:flex hidden">Firdaws Lamidi</h1>
      <p className=' pt-[10px] text-[16px] font-[400] xl:pt-[5px] text-gray'>Admin</p>
      </div>
    </div>
       
{navLinks.map((link) => 
          <NavItem link={link} key={link.id} />
        )}
        <div className="flex items-center space-x-8 px-5  cursor-pointer">
            <span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg></span>
      <h1 className="text-light-black group-hover:text-black group-hover:font-[900] xl:flex hidden">
      Log out
      </h1>
    </div>
      </div>
    </nav>
    </div>
  )
}

function NavItem({ link }) {
  const [activeNav, setActiveNav] = useRecoilState(activeNavItemState);
  return (
    <Link to={link.path} onClick={() => setActiveNav(link.id)}
      key={link.id}
      className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer
       group hover:border-orange hover:border-l-4 hover:border-transparent
       ${
         activeNav === link.id && "border-orange border-l-4"
       }
  `}
       >
    
      <span> {link.icon}</span>
      <h1
        className={`text-light-black group-hover:text-black xl:flex hidden
        ${
          activeNav === link.id && "text-black"
        }
  `}
       >
        {link.title}
      </h1>
    
    </Link>
  );
  
}
export default DashboardNav