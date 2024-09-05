import React, { useEffect, useState } from 'react'
import Input from '../../components/Input'
import CheckBox from '../Home/CheckBox'
import {useDispatch, useSelector} from "react-redux"
import ViewProjects from '../../components/ViewProjects'
import { selectAllProjects, setAllProjects } from '../../store/projectSlice'
import projectServices from '../../services/projectServices'

function Home() {
  const [projects, setProjects] = useState([]);
  const getAllProjects = useSelector(selectAllProjects);
  const dispatch = useDispatch()
  // console.log("Projects : ", projects)
  
  useEffect(() => {
    if(!getAllProjects){
      projectServices.getAllProjects()
      .then((projects) => {
        if(projects){
          console.log("Fetched Projects : ", projects)
          dispatch(setAllProjects(projects))
          setProjects(projects)
        }
      })
    }
  }, [])
  return (
    <div className="my-4 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <div className="mb-4">
        <Input placeholder = {`Search.. `} />
      </div>
      
      {/* Horizontal row */}
      <hr className="w-full border-t border-gray-300 " />

      {/* Two containers */}
      <div className="flex">
        {/* Left Container */}
        <div className="w-1/3 p-4 mx-4 ">
          <h2 className="text-xl font-bold mb-2 ml-3">Filters</h2>
          <div className=" w-[200px] ml-2 min-h-10">
            <div className="pt-6">
              <CheckBox heading="Technology" item1={"Web devlopment"} item2={"App Devlopment"} item3={"Flutter"} />
            </div>
            <div className="pt-6">
              <CheckBox heading="Technology Stack " item1={"HTML"} item2={"JAVA"} item3={"REACT"} />
            </div>
            <div className="pt-6">
              <CheckBox heading="Project Type" item1={"Software"} item2={"Hardware"} item3={"Simple"} />
            </div>
            <div className="pt-6">
              <CheckBox heading="Project Type" item1={"Software"} item2={"Hardware"} item3={"Simple"} />
            </div>
            <div className="pt-6">
              <CheckBox heading="Project Type" item1={"Software"} item2={"Hardware"} item3={"Simple"} />
            </div>
          </div>
          
        </div>

        {/* Right Container */}
        
        <ViewProjects title={"Featured Projects"}/>

      </div>
    </div>
  
  )
}

export default Home
