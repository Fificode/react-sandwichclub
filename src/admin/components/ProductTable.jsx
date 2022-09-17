import React from 'react'
import { Link } from 'react-router-dom'




const ProductTable = ({name, price, image, key}) => {

  return (
    <>
   
<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 cursor-pointer">
                 <td className="py-4 px-3 ">
                   {name}
                </td>
                <td className="py-4 px-3">
                  {price}
                </td>
                <td className="py-4 px-3">
                   <img src={image} alt="" className='w-[20px] h-[20px] mx-[auto]' />
                </td>
                <td className="py-4 px-3">
                  <Link to={`/dashboard/viewproduct/${key}`}>  
                  <button className="hover:text-orange">View product</button> 
                  </Link>
                </td>
               
            </tr>
           
    </>
  )
}

export default ProductTable