import React from 'react'

const Createproduct = () => {
  return (
    <div className='absolute left-[280px] my-[30px]'>
      <h1 className='text-[40px] font-[600]'>Create Product</h1>
      <div className="flex flex-col items-center">
<div className="flex flex-col my-[10px]">
  <label className="text-[21px] font-[500] py-[5px]" htmlFor='Name'>Name</label>
  <input type="text" name='Name' placeholder='Product name' className='w-[500px] outline-orange text-[18px] px-[5px] py-[5px] border-[1px] border-solid rounded-[5px]' />
</div>
<div className="flex flex-col my-[10px]">
  <label className="text-[21px] font-[500] py-[5px]" htmlFor='Price'>Price</label>
  <input type="text" name='Price' placeholder='Product price' className='w-[500px] outline-orange text-[18px] px-[5px] py-[5px] border-[1px] border-solid rounded-[5px]' />
</div>
<div className="flex flex-col my-[10px]">
   <label className="text-[21px] font-[500] py-[5px]" htmlFor='Image'>Image</label>
  <textarea type="image" src="" alt="Product image" className='w-[500px] outline-orange text-[18px] px-[5px] py-[50px] border-[1px] border-solid rounded-[5px]'> </textarea>
</div>
<div className="flex justify-center my-[15px]">
  <button className='text-[16px] px-[8px] py-[10px] text-center bg-black text-white rounded-[5px]'>Add Product</button>
</div>
      </div>
    </div>
  )
}

export default Createproduct