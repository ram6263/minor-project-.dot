import React from 'react'
import IconWithName from './IconWithName'
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { Link } from 'react-router-dom';
import {useDispatch} from "react-redux"
import { setCurrProject } from '../store/projectSlice';

function ProjectPreviewCard({ project }) {
  const title = project.title;
  const description = project.description;
  const previewImage = project.previewImage;
  const id = project._id;
  // const likes = project.likes;
  const dispatch = useDispatch()
  
  const onClickHandler = () => {
    dispatch(setCurrProject(project));
  }
  return (
    
    <div key={id} className="w-[350px] rounded-md border m-4">
  <img
    src={previewImage}
    alt="previewImage"
    className="h-[200px] w-full rounded-md object-cover"
  />
  <div className="p-4">
    <h1 className="text-lg font-bold">{title}</h1>
    <p className="mt-3 text-sm text-gray-600">
      {description}
    </p>
    <div className='flex'>
    <IconWithName name={"Likes"} count = {367} icon={<BiLike/>} />
    <IconWithName name={"Comments"} count = {40} icon={<FaRegComment/>}/>
    </div>
    <hr />
    <h6 className='text-sm text-gray-500 font-semibold'>By princeragh1801</h6>
    <p className='text-sm text-gray-500 font-semibold'>20.03.2024</p>
    <hr />
    <Link to="/project-detail">
      <button 
        type="button"
        className="w-full mt-4 bg-black px-2.5 py-1 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black rounded-md"
        onClick={onClickHandler}
      >
        Read More
      </button>
    </Link>
  </div>
</div>

  )
}

export default ProjectPreviewCard
