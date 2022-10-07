import React, {useState, useEffect} from 'react'
import ProductTable from '../components/ProductTable'

 
const ProductList = () => {
  const [error, setError] = useState(null);
const [isLoading, setIsLoading] = useState(false);
const [allProducts, setAllProducts] = useState();
 const [query, setQuery] = useState("");
  // const [searchParam] = useState(["productname"]);
useEffect(() => {
    fetch(`https://sandwich-backend.herokuapp.com/api/v1/products`)
    .then( response => response.json())
     .then( (data) => {
   setIsLoading(true);
     setAllProducts(data.data)
    },
    
      (error) => {
    setIsLoading(true);
  setError(true);
  console.log(error);
}
    )
  
  }
  
  ,[])
  // const handleSearch = () => {
  //    return allProducts.filter((item) => {
  //               return searchParam.some((newItem) => {
  //                   return (
  //                       item[newItem]
  //                           .toString()
  //                           .toLowerCase()
  //                           .indexOf(query.toLowerCase()) > -1
  //                   );
  //               });
  // })
   
  //       }
        if (error) {
        return <div className="text-center text-[40px]">Error: {error.message}</div>;
      } else if (!isLoading) {
        return <div className="text-center text-[40px]">Loading...</div>;
      } else {
  return (
    <div className=' absolute left-[90px] smaller:left-[85px]  md:left-[100px] xl:left-[280px] mt-[20px]'>
    <div className="relative flex flex-row">
     <div className="absolute left-0 px-[5px] pt-[7px] md:py-[13px]">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
</div>

      <input type="text" name="Search product"  className='w-[220px] md:w-[300px] lg:w-[500px] rounded-[15px] px-[30px] py-[3px] md:py-[10px] border-[1px] border-solid border-gray text-[16px]' placeholder="Search for products" onChange={(e) => setQuery(e.target.value)} value={query}/>
    </div>
     <h1 className="mx-[10px] font-[600] mt-[30px] text-[25px] md:text-[40px]">List of Products</h1>
<div className="max-w-full overflow-x-auto relative sm:rounded-lg mt-[30px]">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-[10px] md:text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
{/* {handleSearch(allProducts).map((item) => ( */
         allProducts && allProducts.map( (product, index) => (
          <ProductTable   name={product.name} price={product.price} image={product.image} key={index} id={product["_id"]} />
        
         )) 
        //  ))
         }
        </tbody>
    </table>
</div>

    </div>
  )
}
}
export default ProductList