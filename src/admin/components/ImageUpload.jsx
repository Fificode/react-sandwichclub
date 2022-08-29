import React from 'react'

const ImageUpload = (props) => {
    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };
  return (
    <div className='w-[200px] h-[200px] smaller:w-[250px] md:w-[500px] border-[1px] flex flex-col items-center justify-center my-[10px]'>
        <button className='bg-gray px-[8px] py-[10px] rounded-[5px] text-[16px] text-black text-center' onClick={handleClick}>
        Upload Image
      </button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        className='hidden' />
      </div>
  )
}

export default ImageUpload