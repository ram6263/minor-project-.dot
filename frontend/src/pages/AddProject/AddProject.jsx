import React from "react";
import RTE from "./RTE";
import Input from "../../components/Input";
// import ImageUpload from "./ImageUpload";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import getCookie from "../../utils/getCookie";
import Select from "../../components/Select"
import { useDispatch } from "react-redux";
import {setUserProjects} from "../../store/projectSlice.js"
import projectServices from "../../services/projectServices";
function AddProject() {
  const token = getCookie("accessToken");
  const dispatch = useDispatch();
  const {register, handleSubmit, watch, setValue, control, 
    getValues} = useForm({
    defaultValues : {
      title : "",
      description : "",
      overview : "",
      category : "",
    }
  });

  const uploadProject = (data) => {
    projectServices.uploadProject(data)
    .then((projects)=>{
      dispatch(setUserProjects(projects));
    })
  };

  return (
    <>
      <div className="flex flex-col flex-wrap justify-center items-center">
        <div className=" my-10 ">
          <h1 className="font-bold text-2xl text-center mb-10">Add Project</h1>
        </div>

        <form onSubmit={handleSubmit(uploadProject)}>
          <div className="block sm:flex">
            {/* Left Container */}
            <div className="w-full sm:w-1/2 mx-4  px-4">
              <Input
                label="Title"
                placeholder="Enter title"
                {...register("title", {
                  required: true,
                })}
              />
              <Input
                label="Description"
                placeholder="Enter Description"
                {...register("description", {
                  required: true,
                })}
              />
              <Input
                label="Preview Image"
                type="file"
                accept="Image/*"
                {...register("previewImage", {
                  required: true,
                })}
              />
              <Input
                label="File"
                type="file"
                accept=".txt, .pdf"
                {...register("file", {
                  required: true,
                })}
              />
            </div>

            {/* Right Container */}
            <div className="w-full sm:w-1/2 mx-4 px-4">
            <Select
                    options={["hardware", "software"]}
                    label="Category"
                    className="mb-4"
                    {...register("category", { required: true })}
                />
              <RTE 
              label="Overview " 
              name="overview" 
              control={control} 
              defaultValue={getValues("content")} 
              />
              
            </div>
          </div>

          <div className="w-full flex justify-center m-4">
          <Button className=" text-center bg-green-500 text-white" type="submit" title={"Upload Project"} />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddProject;

// {/* Two containers */}
