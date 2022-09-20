import React  from 'react'
import Product from '../components/Product';
import { useParams } from 'react-router-dom';

const Productpage = ({allProducts}) => {

const {productId} = useParams(); 
// console.log(productId)
// console.log(allProducts);
const thisProduct = allProducts.find(prod => prod['_id'] === productId)
// console.log(thisProduct);
  return (
    <div className='flex flex-col absolute left-[70px] smaller:left-[85px]  md:left-[100px] xl:left-[280px] mt-[20px]'>
   
    <Product name={thisProduct.name} image={thisProduct.image} price={thisProduct.price}/>
    
    </div>
  )
}

export default Productpage