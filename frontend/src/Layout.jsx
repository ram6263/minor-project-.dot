import React, {useEffect, useState} from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Outlet, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearUser,  setUser } from './store/userSlice.js'
import authServices from "./services/userServices.js"

function Layout() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  useEffect(()=>{
    setLoading(true);
    authServices.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(setUser(userData));
        console.log("User data : ", userData);
        navigate("/home")
      }
      
    }).finally(setLoading(false))
  }, [])

  return !loading ? (
    <>
      <Header/>  
       <main>
        <Outlet/>
       </main>
       
      <Footer/>
    </>
  ) : null
}

export default Layout
