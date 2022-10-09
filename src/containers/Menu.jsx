import React, { useState, useEffect} from 'react'
import Sandwich from '../components/Sandwich'



const Menu = () => {

  const [moreMenu, setMoreMenu] = useState(false);
  const viewMenu = () => {
    setMoreMenu(prevState => !prevState);
  }
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch(`https://sandwich-backend.herokuapp.com/api/v1/products`)
    .then( response => response.json())
     .then( (data) => {
   setAllProducts(data.data)
    },
    
      (error) => {
  console.log(error);
}
    )
  
  }
  
  ,[])
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
          {allProducts.map((product, index) => (<Sandwich  name={product.name} price={product.price} image={product.image} key={index}/>)).slice(0,3)}
        </div>
      {moreMenu ? <div className='flex flex-col xl:flex-row' id='more-menu'>
          {allProducts.map((product, index) => (<Sandwich  name={product.name} price={product.price} image={product.image} key={index}/>)).slice(3)}
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