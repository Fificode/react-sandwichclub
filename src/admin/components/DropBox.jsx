import React from 'react'
import { useDropzone } from 'react-dropzone';

const DropBox = ({ onDrop }) => {
    const getColor = (props) => {
	if (props.isDragAccept) {
		return 'green-cyan';
	}
	if (props.isDragReject) {
		return 'pink-red';
	}
	if (props.isFocused) {
		return 'cyan-blue';
	}
	return 'light-gray';
};

    const {
		getRootProps,
		getInputProps,
		acceptedFiles,
		open,
		isDragAccept,
		isFocused,
		isDragReject,
	} = useDropzone({
		accept: 'image/*',
		onDrop,
		noClick: true,
		noKeyboard: true,
	});

	const lists = acceptedFiles.map((list) => (
		<li key={list.path}>
			{list.path} - {list.size} bytes
		</li>
	));
  return (
    <div>
{' '}
			<section className="flex flex-col items-center">
				<div
					className={` w-[200px] smaller:w-[250px] md:w-[500px] outline-none text-[18px] px-[5px] py-[50px] border-[1px] border-solid border-${(props) => getColor(props)}  rounded-[5px]`}
					{...getRootProps({ isDragAccept, isFocused, isDragReject })}
				>
					<input {...getInputProps()} />
					<div className="flex flex-col items-center"><p className='my-[5px] text-center'>Drag 'n' drop product image here</p>
					<button type="button" className="text-[12px] md:text-[16px] px-[10px] md:px-[8px] py-[10px] text-center bg-red text-black rounded-[5px] my-[10px]" onClick={open}>
						Click to select file
					</button></div>
				</div>
			</section>
			<aside className='flex flex-col items-center my-[10px]'>
				<h4>List</h4>
				<p>{lists}</p>
			</aside>
    </div>
  )
}

export default DropBox