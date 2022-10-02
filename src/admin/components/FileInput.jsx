import React from 'react'
import Button from '@material-ui/core/Button';

const FileInput = ({setImage}) => {
    // console.log(setImage())
  return (
    <>
    <input accept="image/*" type="file" id="select-image" className="hidden" onChange={(e) => setImage(e.target.files[0])} />
    <label htmlFor="select-image">
    <Button variant="contained" color="primary" component="span">
      Upload Image
    </Button>
  </label>
    </>
  )
}

export default FileInput