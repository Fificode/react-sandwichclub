import React from 'react'
import { navLinks } from "./utils/NavDB";
import { useRecoilState } from "recoil";
import { activeNavItemState } from "./atom/ActiveNavBarAtom";
import admin from '../assets/admin.jpeg'

const DashboardNav = () => {
  return (
    <nav className="col-span-2 border-r border-gray min-h-[100vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between">
     <div className="space-y-8 w-full">
   <div className="pl-[30px] -pb-[10px]">
    <div className="flex flex-row  pb-[20px]">
      <div className="pr-[8px]"><img src={admin} alt="Admin" className='w-[50px] h-[50px] rounded-[50%]' /></div>
      <div className="flex flex-col">
      <h1 className="text-[20px] font-[600]">Firdaws Lamidi</h1>
      <p className='text-[16px] font-[400] text-gray'>Admin</p>
      </div>
    </div>
        <h2 className='text-[20px] font-[600]'>Dashboard</h2>
      </div>
{navLinks.map((link) => 
          <NavItem link={link} key={link.id} />
        )}
      </div>
    </nav>
  )
}

function NavItem({ link }) {
  const [activeNav, setActiveNav] = useRecoilState(activeNavItemState);
  return (
    <div
      onClick={() => setActiveNav(link.id)}
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
    </div>
  );
  
}
export default DashboardNav