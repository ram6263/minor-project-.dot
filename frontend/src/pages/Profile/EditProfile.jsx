import React from 'react'
import {useForm} from "react-hook-form"
import {useSelector} from "react-redux"
import { selectUser } from '../../store/userSlice'
import Input from '../../components/Input'
import Button from '../../components/Button'

function EditProfile() {
  const user = useSelector(selectUser)
  const { register, handleSubmit } = useForm();
  const editProfile = async (data) => {

  }
  return (
    <div className='flex flex-col justify-center'>
      <form onSubmit={handleSubmit(editProfile)}>
    <Input 
      label = "Full name" 
      value = {user['fullname']}
      placeholder = "Enter fullname" 
      {...register("fullname", {
        required: true,
      })}
    />
    <Input 
      label = "Usename" 
      value = {user['username']} 
      readOnly
      {...register("username", {
        required: true,
      })}
    />
    <Input 
      label = "Bio" 
      placeholder = "Enter bio" 
      {...register("bio", {
        required: true,
      })}
    />
    <Input 
      label = "Email" 
      value = {user['email']}
      readOnly
      placeholder = "Enter email"
      {...register("email", {
        required: true,
      })}
    />
    
    
    <Button type='submit' title={"Edit Profile"} className='bg-green-500 text-white'/>
    </form> 
    </div>
  )
}

export default EditProfile
