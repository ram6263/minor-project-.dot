import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function AuthLayout({children, authentication = true}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true) 
    const authStatus = useSelector(state => state.user.status)

    useEffect(() => {
        if(authentication && (authStatus !== authentication)){
            navigate("/login")
        }else if(!authentication && authStatus !== authentication){
            navigate("/home")
        }
    },[authStatus, navigate, authentication])
  return <>{children}</>
}

export default AuthLayout
