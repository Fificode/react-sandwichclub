import React, {useState, useEffect} from 'react'


const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState(null);

  useEffect(() => {
    
return () => {
      setId(localStorage.getItem('id'));
      setName(localStorage.getItem('name'));
      setPrice(localStorage.getItem('price'));
      setImage(localStorage.getItem('image'));
      // console.log(id);
    }
  }, [])
  
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
   <p className="text-[17px] md:text-[21px] font-[500] -top-[13px] absolute left-[3px]">Image</p>
   <div className="mb-[10px] mt-[20px]">
    <input type="file" name="file" value={image} onChange={(e) => setImage()}  id="file" placeholder='Select product image' className='w-[200px]  smaller:w-[250px] md:w-[500px] text-[18px] px-[5px] py-[5px] border-[1px] border-solid rounded-[5px]' />
   </div>
</div>
<p className="hidden">{id}</p>
<div className="flex justify-center my-[15px]">
  <button className='text-[12px] md:text-[16px] px-[10px] md:px-[8px] py-[10px] text-center bg-black text-white rounded-[5px]'>Update Product</button>
</div>
      </div>
      </form>
    </div></div>
  )
}

export default UpdateProduct