import React , {useState} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline';
import { navLinks } from "../utils/NavbarDB";
import logo from '../assets/logo.png'

const Navbar = () => {
    const [activeNav, setActiveNav] = useState(0);
    const [nav, setNav] = useState(false);
const handleClick = () => setNav(!nav);

  return (
    <div className='w-screen h-[60px] z-10 fixed top-0 bg-white  '>
        <div className="w-full h-full flex justify-between items-center">
<div className='mx-2 my-[28px] p-[5px] md:p-[10px]'>
<img src={logo} alt="Logo" className='w-[94px] h-[30px] ml-2 md:w-[154px] md:h-[42.82px]'/>
</div>
<ul className='flex large:hidden'>
{navLinks.map((val) => 
        <li onClick={() => setActiveNav(val.id)} key={val.id} className={`
       ${
        activeNav === val.id &&  "active"
       }
  `}> <a href={val.path}>
            {val.title}
          </a></li>
        )}</ul>
<div className="lg:hidden" onClick={handleClick}>
    {!nav ? <MenuIcon className='w-10 text-orange m-2' /> : <XIcon className='w-10 text-orange m-2'/>}
</div>
</div>

<ul className={!nav ? 'hidden' : 'absolute w-full h-[auto] px-[10px]  bg-white animate-scale_up_tr md:h-[auto]'}>
  {navLinks.map((val) => 
          <li key={val.id} onClick={() => setActiveNav(val.id)}  className={`w-full
       ${
        activeNav === val.id &&  "active"
       }
  `}><a href={val.path}>
            {val.title}
            </a>
          </li>
        )}
</ul>
    </div> 
  )
}


export default Navbar