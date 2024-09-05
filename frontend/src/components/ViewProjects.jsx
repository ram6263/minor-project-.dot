import React from "react";
import ProjectPreviewCard from "./ProjectPreviewCard";
import { useSelector } from "react-redux";
import { selectAllProjects, selectUserProjects } from "../store/projectSlice";
function ViewProjects({ title}) {
  let projects = [];
  if(title === "Featured Projects"){
    projects = useSelector(selectAllProjects)
  }else{
    projects = useSelector(selectUserProjects);
  }
  console.log("Projects inside the viewProject : ", projects)
  return (
    <div className="p-4 border-2 border-gray border-t-0 ">
      <h2 className="text-xl font-bold ml-4 mb-2">{title}</h2>
      <div className="flex flex-wrap">
        {projects?.map((project) => (<ProjectPreviewCard key={project._id} project={project} />))}
      </div>
    </div>
  );
}

export default ViewProjects;
