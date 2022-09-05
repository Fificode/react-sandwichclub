import React from 'react'

const ProductList = () => {
  return (
    <div className='absolute left-[90px] smaller:left-[85px]  md:left-[100px] xl:left-[280px] mt-[20px]'>
    <div className="">
      {/* Search icon */}
      <input type="text" name="Search product" className='w-[220px] md:w-[300px] lg:w-[500px] rounded-[10px] px-[5px] py-[6px] md:py-[10px] border-[1px] border-solid' placeholder="Search for products"/>
    </div>
    
<div class="overflow-x-auto relative sm:rounded-lg mt-[30px]">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-[10px] md:text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Product Id
                </th>
                <th scope="col" class="py-3 px-6">
                   Product Name
                </th>
                <th scope="col" class="py-3 px-6">
                    Product Price
                </th>
                <th scope="col" class="py-3 px-6">
                   Product Image
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   01
                </th>
                <td class="py-4 px-6">
                    Reubenette
                </td>
                <td class="py-4 px-6">
                    N3,700
                </td>
                <td class="py-4 px-6">
                   <img src="" alt="" className='' />
                </td>
               
            </tr>
        </tbody>
    </table>
</div>

    </div>
  )
}

export default ProductList