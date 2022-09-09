import React , {useState} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false);
const handleClick = () => setNav(!nav);

  return (
    <div className='w-screen h-[60px] z-10 fixed top-0 bg-white  '>
        <div className="w-full h-full flex justify-between items-center">
<div className='mx-2 my-[28px] p-[5px] md:p-[10px]'>
<img src={logo} alt="Logo" className='w-[94px] h-[30px] ml-2 md:w-[154px] md:h-[42.82px]'/>
</div>
<ul className='flex large:hidden'>
    <li><Link to="/">Home</Link></li>
<li>About Us</li>
<li><Link to="/menu">Menu</Link></li>
<li><Link to="/catering-services">Catering Services</Link></li>
<li><Link to="/contact">Contact</Link></li>
<li className='pl-5 pr-[30px]'>Location </li>
</ul>

<div className="lg:hidden" onClick={handleClick}>
    {!nav ? <MenuIcon className='w-10 text-orange m-2' /> : <XIcon className='w-10 text-orange m-2'/>}
</div>
</div>

<ul className={!nav ? 'hidden' : 'absolute w-full h-[auto] px-[10px]  bg-white animate-scale_up_tr md:h-[auto]'}>
<li className='w-full'><Link to="/">Home</Link></li>
<li className='w-full'>About Us</li>
<li className='w-full'><Link to="/menu">Menu</Link></li>
<li className='w-full'><Link to="/catering-services">Catering Services</Link></li>
<li className='w-full'><Link to="/contact">Contact</Link></li>
<li className='w-full'>Locations</li>
</ul>
    </div> 
  )
}

export default Navbar