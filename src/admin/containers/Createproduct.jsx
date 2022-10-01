import React, {useState, useRef, useEffect} from 'react';
import FileInput from '../components/FileInput';
import Box from '@material-ui/core/Box';

const Createproduct = () => {

const [name, setName] = useState("");
const [price, setPrice] = useState("");
const [image, setImage] = useState(null);

const formRef = useRef();


  const url ="https://sandwich-backend.herokuapp.com/api/v1/create/product";

const addProduct = async (e) => {
  e.preventDefault();
//Access token
const tokenString = localStorage.getItem("access_token");
let token = JSON.parse(tokenString);
token = token.access_token;

const formData = new FormData();
formData.append('name', name);
formData.append('price', price);
formData.append('image', image);
try{
  const response = await fetch( url, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
  
    },
 
  body: formData
  
})
//  console.log(token);
const data = await response.json();
console.log(data);
  console.log("New product added");
  alert("New product added!");
 } 

catch(error) {
  console.log(error);
}

formRef.current.reset();
}
//  console.log(setImage)

  return (
    <div className='absolute left-[100px] md:left-[150px] xl:left-[280px] my-[30px]'>
      <h1 className='text-[28px] md:text-[40px] font-[600]'>Create Product</h1>
      <form ref={formRef}>
      <div className="flex flex-col items-center">
<div className="flex flex-col my-[10px]">
  <label className="text-[17px] md:text-[21px] font-[500] py-[5px]" htmlFor='Name'>Name</label>
  <input type="text" name='Name' onChange={(e) => setName(e.target.value)} placeholder='Product name' className='w-[200px] smaller:w-[250px] md:w-[500px] outline-orange text-[18px] px-[5px] py-[5px] border-[1px] border-solid rounded-[5px]' />
</div>
<div className="flex flex-col my-[10px]">
  <label className="text-[17px] md:text-[21px] font-[500] py-[5px]" htmlFor='Price'>Price</label>
  <input type="text" name='Price' onChange={(e) => setPrice(e.target.value)} placeholder='Product price' className='w-[200px] smaller:w-[250px] md:w-[500px] outline-orange text-[18px] px-[5px] py-[5px] border-[1px] border-solid rounded-[5px]' />
</div>
<div className="flex flex-col mt-[40px] mb-[20px] relative">
  <FileInput setImage={setImage}/>
  { setImage && (
  <Box mt={2} textAlign="center">
    <div>Image Preview:</div>
   <div className="flex justify-center"> <img src={setImage}  className="w-[50px] h-[50px]" /></div>
  </Box>
)}

   {/* <p className="text-[17px] md:text-[21px] font-[500] -top-[13px] absolute left-[3px]">Image</p>
   <div className="mb-[10px] mt-[20px]">
    <input type="file" name="file" onChange={(e) => setImage(e.target.files[0])} id="file" placeholder='Select product image' className='w-[200px]  smaller:w-[250px] md:w-[500px] text-[18px] px-[5px] py-[5px] border-[1px] border-solid rounded-[5px]' />
   </div> */}
</div>
<div className="flex justify-center my-[15px]">
  <button onClick={addProduct} className='text-[12px] md:text-[16px] px-[10px] md:px-[8px] py-[10px] text-center bg-black text-white rounded-[5px]'>Add Product</button>
</div>
      </div>
      </form>
    </div>
  )
}

export default Createproduct