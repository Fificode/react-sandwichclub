import React , {useState, useEffect} from 'react'
import ProductTable from '../components/ProductTable'

const ProductList = () => {
     const [allProducts, setAllProducts] = useState();


 useEffect(() => {
    fetch("https://sandwich-backend.herokuapp.com/api/v1/products")
    .then( response => response.json())
     .then( data => setAllProducts(data.data),
    
    )
      
  }
  
  ,[])
  return (
    <div className='absolute left-[90px] smaller:left-[85px]  md:left-[100px] xl:left-[280px] mt-[20px]'>
    <div className="">
      {/* Search icon */}
      <input type="text" name="Search product" className='w-[220px] md:w-[300px] lg:w-[500px] rounded-[10px] px-[5px] py-[6px] md:py-[10px] border-[1px] border-solid' placeholder="Search for products"/>
    </div>
     <h1 className="mx-[10px] font-[600] mt-[30px] text-[25px] md:text-[40px]">List of Products</h1>
<div class="overflow-x-auto relative sm:rounded-lg mt-[30px]">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-[10px] md:text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-3">
                   Product Name
                </th>
                <th scope="col" className="py-3 px-3">
                    Product Price
                </th>
                <th scope="col" className="py-3 px-3">
                   Product Image
                </th>
            </tr>
        </thead>
        <tbody>
         {allProducts && allProducts.map( (product) => (<ProductTable name={product.name} price={product.price} image={product.image} key={product.id} />)) }
        </tbody>
    </table>
</div>

    </div>
  )
}

export default ProductList