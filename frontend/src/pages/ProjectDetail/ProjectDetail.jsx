import React, { useState } from "react";
import About from "./About/About";
import Comment from './Comment/Comment'
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrProject } from "../../store/projectSlice";

function ProjectDetail() {
  const [page, setPage] = useState(0)
  
  const renderPage = [
    {
      loadPage : <About/>,
      path : 'about',
    },
    {
      loadPage : <Comment/>,
      path : 'comment',
    },
    
    
  ]
  return (
<>
  <div className="pt-8 ">
    <div className="mx-10 flex items-center justify-around ">
      <button className={page == 0 ? "text-green-500 font-bold" : "font-bold"} onClick={()=> setPage(0)}>About</button>
      <button className={page == 1 ? "text-green-500 font-bold" : "font-bold"} onClick={() => setPage(1)}>Comment</button>
 
    </div>
  </div>
  <hr className="pt-5" />
  {renderPage[page].loadPage}
</>
  );
}
export default ProjectDetail;








{/* <ol className="flex items-center justify-between w-[50%]  overflow-hidden font-semibold ">
  <Link to="/about">
    
    </Link> */}
      {/* <Link to='/comment'>
    <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
      <a className="capitalize text-lg hover:border-b-2 border-green-600" href="#">
        Comment
      </a>
    </li>
    </Link> */}

      {/* <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
      <a className="capitalize text-lg hover:border-b-2 border-green-600" href="#">
      Updates
      </a>
    </li>
    <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
      <a className="capitalize text-lg hover:border-b-2 border-green-600" href="#">
      Team
      </a>
    </li> */}
      {/* </ol> */}