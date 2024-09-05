
import {successMsg, errorMsg} from "../utils/toastMessage"

import getCookie from "../utils/getCookie";

const token = getCookie("accessToken");

export class ProjectServices{

  async uploadProject(data){
    try {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("overview", data.overview);
        formData.append("category", data.category);
        formData.append("previewImage", data.previewImage[0]); // Append the file
        formData.append("file", data.file[0]); // Append the file
  
        const response = await fetch(
          "http://localhost:8000/api/v1/projects/upload-project",
          { 
            method: "POST",
            headers: {
              Authorization: token,
            },
            body: formData,
          }
        );
  
        if (!response.ok) {
          errorMsg("Failed to upload project");
          return null;
        }
        const responseData = await response.json();
        const projects = responseData.data.projects;
        successMsg("Project uploaded successfully");
        return projects;
        
      } catch (error) {
        errorMsg(error.message);
        return null;
      }
      
  }

  async getAllProjects(){
      let projects;
      try {
          const response = await fetch(
            "http://localhost:8000/api/v1/projects/get-all-projects",
            {
              method: "GET",
              headers: {
                Authorization: token,
              },
            }
          );
          if(!response.ok){
            errorMsg("Error while fetching the projects");
            return;
          }
          console.log("Response : ", response)
          const responseData = await response.json();
          console.log("Responsedata : ", responseData)
          projects = responseData.data.projects;
          console.log("Projects : ", projects)
        } catch (error) {
          errorMsg(error.message);
        }
      return projects;
  }

  async getUserProjects(){
      let projects;
      try {
          const response = await fetch(
            "http://localhost:8000/api/v1/projects/get-user-projects",
            {
              method: "GET",
              headers: {
                Authorization: token,
              },
            }
          );
          if(!response.ok){
            errorMsg("Error while fetching the users projects");
            return;
          }
          const responseData = await response.json();
          console.log("response data inside user projects : ", responseData)
          projects = responseData.data.userProjects;
        } catch (error) {
          errorMsg(error.message);
        }
      return projects;
  }
}

const projectServices = new ProjectServices();

export default projectServices;