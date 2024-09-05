import React from 'react'
import InputWithLabelItem from './InputWithLabelItem';
import {useSelector} from "react-redux"
import {selectUser} from "../../store/userSlice.js"
import ViewProjects from "../../components/ViewProjects.jsx"
import ProjectPreviewCard from '../../components/ProjectPreviewCard.jsx';
import Input from '../../components/Input.jsx';

function Contact() {
  const user = useSelector(selectUser);
  const projects = user.projects;
  return (
    <section className="w-full">
  <div className="mx-10 py-10">
    <div className="md:flex md:flex-row md:items-start mb-5">
      <div>
        <h1 className="text-xl font-bold">Products</h1>
      </div>
      <div className="mx-auto">
        <Input placeholder = {`Search.. `} />
      </div>
      {/* <div className="mt-6 flex items-center  pt-2 md:mt-0 md:space-x-4  md:pt-0">
        <button
          type="button"
          className="hidden items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:inline-flex"
        >
          Sort{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="ml-2 h-4 w-4"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <button
          type="button"
          className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
        >
          Category{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="ml-2 h-4 w-4"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <button
          type="button"
          className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
        >
          Color{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="ml-2 h-4 w-4"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <button
          type="button"
          className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden"
        >
          Size{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="ml-2 h-4 w-4"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div> */}
    </div>
    <div className="lg:grid lg:grid-cols-12 lg:gap-6">
      <div className="hidden space-y-6 divide-y lg:col-span-2 lg:block">
        
        <div className="pt-6">
          <h3 className="text-lg font-semibold text-gray-900">Category</h3>
          <ul className="mt-2">
            <InputWithLabelItem label='Hardware' />
            <InputWithLabelItem label='Software'/>
          </ul>
        </div>
        <div className="pt-6">
          <h3 className="text-lg font-semibold text-gray-900">Technology</h3>
          <ul className="mt-2">
            <InputWithLabelItem label='Website'/>
            <InputWithLabelItem label='App'/>
            
          </ul>
        </div>
      </div>
      <div className="min-h-[400px] w-full rounded-lg border-2 border-dashed lg:col-span-10 lg:h-full flex flex-wrap">
        {projects.map((project) => (<ProjectPreviewCard project={project}/>))}
      </div>
    </div>
  </div>
</section>

  );
}

export default Contact
