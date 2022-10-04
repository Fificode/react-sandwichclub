import React, {useState} from 'react'
import  {useParams,  useNavigate} from 'react-router-dom' 
import Button from '@material-ui/core/Button';


const UpdateProduct = ({allProducts}) => {
 const navigate = useNavigate();

//Get product ID
  const {productId} = useParams(); 
const thisProduct = allProducts.find(prod => prod['_id'] === productId);

const [error, setError] = useState(null);
const [isLoading, setIsLoading] = useState(false);
 const [name, setName] = useState(thisProduct.name);
const [price, setPrice] = useState(thisProduct.price);
const [image, setImage] = useState(thisProduct.image);

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
  const response = await fetch( `https://sandwich-backend.herokuapp.com/api/v1/edit/product/${productId}` , {
  method: 'PUT',
  headers: {
    'Authorization': `Bearer ${token}`,
  },
   body: formData
 })
const data = await response.json();
setIsLoading(true);
console.log(data);
  console.log("Product edited");
  navigate(`/dashboard/viewproduct/${productId}`);
  }
  catch(error) {
    setIsLoading(true);
  setError(true);
  console.log(error);
}
}
 if (error) {
        return <div className="text-center text-[40px]">Error: {error.message}</div>;
      } else if (!isLoading) {
        return <div className="text-center text-[40px]">Loading...</div>;
      } else
{
  return (
    <div><div className='absolute left-[100px] md:left-[150px] xl:left-[280px] my-[30px]'>
      <h1 className='text-[28px] md:text-[40px] font-[600]'>Update Product</h1>
      <form >
      <div className="flex flex-col items-center">
<div className="flex flex-col my-[10px]">
  <label className="text-[17px] md:text-[21px] font-[500] py-[5px]" htmlFor='Name'>Name</label>
  <input type="text" name='Name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Product name' className='w-[200px] smaller:w-[250px] md:w-[500px] outline-orange text-[18px] px-[5px] py-[5px] border-[1px] border-solid rounded-[5px]' />
</div>
<div className="flex flex-col my-[10px]">
  <label className="text-[17px] md:text-[21px] font-[500] py-[5px]" htmlFor='Price'>Price</label>
  <input type="text" name='Price' value={price} onChange={(e) => setPrice(e.target.value)}  placeholder='Product price' className='w-[200px] smaller:w-[250px] md:w-[500px] outline-orange text-[18px] px-[5px] py-[5px] border-[1px] border-solid rounded-[5px]' />
</div>
<div className="flex flex-col mt-[40px] mb-[20px] relative">
   <input accept="image/*" type="file" id="select-image" className="hidden" onChange={(e) => setImage(e.target.files[0])} />
    <label htmlFor="select-image">
    <Button variant="contained" color="primary" component="span">
      Upload Image
    </Button>
  </label>

</div>
<div className="flex flex-col mt-[40px] mb-[20px] relative">
   <img src={image} alt={image.name} className="w-[80px] h-[80px]" />
</div>
<div className="flex justify-center my-[15px]">
  <button onClick={updateData} className='text-[12px] md:text-[16px] px-[10px] md:px-[8px] py-[10px] text-center bg-black text-white rounded-[5px]'>Update Product</button>
</div>
      </div>
      </form>
    </div></div>
  )
}
}

export default UpdateProduct