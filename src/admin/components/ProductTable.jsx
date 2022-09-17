import React from 'react'

const ProductTable = ({name, price, image}) => {
  return (
    <>
<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 cursor-pointer">
                 <td className="py-4 px-3">
                   {name}
                </td>
                <td className="py-4 px-3">
                  {price}
                </td>
                <td className="py-4 px-3">
                   <img src={image} alt="" className='w-[20px] h-[20px]' />
                </td>
               
            </tr>
    </>
  )
}

export default ProductTable