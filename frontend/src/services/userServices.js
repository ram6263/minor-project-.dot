
import getCookie from '../utils/getCookie'
import setCookie from '../utils/setCookie';
import { successMsg, errorMsg } from '../utils/toastMessage';


export class AuthServices{
  async getCurrentUser(){
    try {
        const token = getCookie("accessToken");
        // console.log("Token : ", token)
        
        const response = await fetch("http://localhost:8000/api/v1/users/current-user", {
          method: "GET",
          headers : {
            "Authorization": token
          }
        })
        
        if(!response.ok){
          return null;
        }
        console.log("Response : ", response);
        const responseJson = await response.json();
        const responseData = responseJson.data;
        // console.log("Reponse data : ", responseData)
        const user = responseData.user;
        // console.log("User : ", user);
        return user;
      } catch (error) {
        // errorMsg(error.message)
        console.log("Error while fetching the current user : ", error);
        return null;
      }
     
  }

  async loginUser(data){
    let user;
    try {
      const response = await fetch(
        "http://localhost:8000/api/v1/users/login", 
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
      console.log("Response : ", response)
      if (!response.ok) {
        errorMsg("Failed to login!")
        return null;
      }
      
      const responseData = await response.json();
      setCookie("accessToken", responseData.data.accessToken)
      user = responseData.data.user;
      console.log(user);
      successMsg("Logged in successfully")
      return user;
    } catch (error) {
      errorMsg(error.message)
      return null;
    }
  }

  async registerUser(data){
    let user;
    try {
      
      const response = await fetch(
        "http://localhost:8000/api/v1/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      console.log("Response : ", response);
      console.log("got something !!");
      if (!response.ok) {
        console.log("failed to register");
        errorMsg("Failed to register");
        return null;
      }

      const responseData = await response.json();
      console.log(responseData)
      user = responseData.data.user;
      console.log("User : ", userData);
      successMsg("User registered successfully");
      // return user;

    } catch (error) {
      errorMsg(error.message);
      // return null;
    }
    return user;
  }
  async logoutUser(){
    try {
      const response = await fetch( 
        "http://localhost:8000/api/v1/users/logout",
        {
          method : "POST",
        }
      )
      setCookie("accessToken", null);
    } catch (error) {
      errorMsg(error.message);
      return false;
    }
    return true;
  }
}

const authServices = new AuthServices();
export default authServices;