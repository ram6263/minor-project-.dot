import React from 'react'
import ContainerWithButton from './ContainerWithButton'
function BoxWithHeadingAndCotainer({
  title,
  heading
}) {
  return (
    <div className="w-full lg:w-1/2 p-4 my-20">
            <h3 className="text-center lg:text-left text-blue-400 font-bold">{title}</h3>
            <h2 className="text-3xl font-bold my-2">
              {heading}
            </h2>
            <ContainerWithButton/>
          </div>
  )
}

export default BoxWithHeadingAndCotainer
