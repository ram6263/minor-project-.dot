import React from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";

function ImageUpload() {
  return (
    <div className='h-[40vh] w-[20vw] border-2 flex flex-col justify-center mb-4'>
      <div className='flex justify-center'>
        <IoCloudUploadOutline size={50} color="#4CAF50" className='text-center'/>
        
      </div>
      <h1 className='text-xl font-medium text-center'>Select a project picture</h1>
      <div className='flex justify-center mt-4'>
      <input type="file" accept='image/*' className='ml-12' />
      
      {/* <Button title="Select" className="border-2 w-20"/> */}
      </div>
    </div>
  )
}

export default ImageUpload
