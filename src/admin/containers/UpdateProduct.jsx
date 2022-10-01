import React, {useState} from 'react'
import  {useParams} from 'react-router-dom' 
import FileInput from '../components/FileInput';

const UpdateProduct = ({allProducts}) => {
  const [name, setName] = useState("");
const [price, setPrice] = useState("");
const [image, setImage] = useState("");

//Get product ID
  const {productId} = useParams(); 
const thisProduct = allProducts.find(prod => prod['_id'] === productId)



//Access token
const tokenString = localStorage.getItem("access_token");
let token = JSON.parse(tokenString);
token = token.access_token;

//Update Data API
  const updateData = async(e) => {
     e.preventDefault();


const formData = new FormData();
formData.append('name', name);
formData.append('price', price);
formData.append('image', image);

try{
  const response = await fetch( `https://sandwich-backend.herokuapp.com/api/v1/edit/product/{${productId}}` , {
  method: 'PUT',
  headers: {
    'Authorization': `Bearer ${token}`,
  },
  //  body: formData
 })
const data = await response.json();
console.log(data);
  console.log("Product edited");
  
  }
  catch(error) {
  console.log(error);
}
}
  return (
    <div><div className='absolute left-[100px] md:left-[150px] xl:left-[280px] my-[30px]'>
      <h1 className='text-[28px] md:text-[40px] font-[600]'>Update Product</h1>
      <form >
      <div className="flex flex-col items-center">
<div className="flex flex-col my-[10px]">
  <label className="text-[17px] md:text-[21px] font-[500] py-[5px]" htmlFor='Name'>Name</label>
  <input type="text" name='Name' value={thisProduct.name} onChange={(e) => setName(e.target.value)} placeholder='Product name' className='w-[200px] smaller:w-[250px] md:w-[500px] outline-orange text-[18px] px-[5px] py-[5px] border-[1px] border-solid rounded-[5px]' />
</div>
<div className="flex flex-col my-[10px]">
  <label className="text-[17px] md:text-[21px] font-[500] py-[5px]" htmlFor='Price'>Price</label>
  <input type="text" name='Price' value={price} onChange={(e) => setPrice(e.target.value)}  placeholder='Product price' className='w-[200px] smaller:w-[250px] md:w-[500px] outline-orange text-[18px] px-[5px] py-[5px] border-[1px] border-solid rounded-[5px]' />
</div>
<div className="flex flex-col mt-[40px] mb-[20px] relative">
  <FileInput setImage={setImage} />
   {/* <p className="text-[17px] md:text-[21px] font-[500] -top-[13px] absolute left-[3px]">Image</p>
   <div className="mb-[10px] mt-[20px]">
    <input type="file" name="file"  onChange={(e) => setImage(e.target.files[0])}  id="file" placeholder='Select product image' className='w-[200px]  smaller:w-[250px] md:w-[500px] text-[18px] px-[5px] py-[5px] border-[1px] border-solid rounded-[5px]' />
   </div> */}
</div>
<div className="flex flex-col mt-[40px] mb-[20px] relative">
   <img src={thisProduct.image || setImage} alt={thisProduct.name} className="w-[80px] h-[80px]" />
</div>
<div className="flex justify-center my-[15px]">
  <button onClick={updateData} className='text-[12px] md:text-[16px] px-[10px] md:px-[8px] py-[10px] text-center bg-black text-white rounded-[5px]'>Update Product</button>
</div>
      </div>
      </form>
    </div></div>
  )
}

export default UpdateProduct