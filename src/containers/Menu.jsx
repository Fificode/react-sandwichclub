import React, { useState } from 'react'
import Sandwich from '../components/Sandwich'
import reubenette from '../assets/Reubenette.png'
import porko from '../assets/Porko.png'
import roastbeef from '../assets/roastbeef.png'
import olepastrami from '../assets/Olepastrami.png'
import turksub from '../assets/turksub.png'
import pancheesy from '../assets/pancheesy.png'




const Menu = () => {

  const [moreMenu, setMoreMenu] = useState(true);
  const viewMenu = () => {
    setMoreMenu(prevState => !prevState);
  }
  return (
    <div>
      <div id='menu' className='flex md:flex-row md:justify-between flex-col'>
        <div className="flex flex-col p-5 mt-[10px]">
          <h1 className='text-[40px] md:text-[48px] font-[600] leading-[72px] tracking-[0.0015em] text-black'>The Popular Wiches</h1>
          <p className="text-[20px] md:text-[24px] font-[500] leading-[36px] tracking-[0.0015em] text-black pl-1 pt-1">Don’t worry, they’re quite a nice lot.</p>
        </div>
        <div className='hidden md:block md:px-5 md:py-3 md:mt-[50px]'>
         {moreMenu ? <button onClick={viewMenu}  className='px-[11px] py-[8px] bg-orange rounded-[5px] text-white font-[500] leading-[29px] tracking-[0.0015em] outline-none'>View Less Menu</button> : 
         <button onClick={viewMenu} className='px-[11px] py-[8px] bg-orange rounded-[5px] text-white font-[500] leading-[29px] tracking-[0.0015em] outline-none'>View Full Menu</button>
         }
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col xl:flex-row ">
          <Sandwich image={reubenette} title="Reubenette" price="2,000" />
          <Sandwich image={porko} title="Porko Banh-Mi Deluxe" price="3,700" />
          <Sandwich image={roastbeef} title="Issa Roast Beef Deli Y'all" price="1,900" />
        </div>
      {moreMenu ? <div className='flex flex-col xl:flex-row' id='more-menu'>
          <Sandwich image={olepastrami} title="The Ole Pastrami Delight" price="2,300" />
          <Sandwich image={turksub} title="All Hail The TurkSub" price="3,000" />
          <Sandwich image={pancheesy} title="The Pan-Cheesy Hamito" price="2,400" />
        </div> : <div></div>}
      </div>
      <div className='md:hidden px-5 py-3'>
        {moreMenu ? <button onClick={viewMenu}  className='px-[11px] py-[8px] bg-orange rounded-[5px] text-white font-[500] leading-[29px] tracking-[0.0015em] outline-none my-[10px]'>View Less Menu</button> : 
         <button onClick={viewMenu} className='px-[11px] py-[8px] bg-orange rounded-[5px] text-white font-[500] leading-[29px] tracking-[0.0015em] outline-none my-[10px]'>View Full Menu</button>
         }
      </div>
    </div>
  )
}

export default Menu