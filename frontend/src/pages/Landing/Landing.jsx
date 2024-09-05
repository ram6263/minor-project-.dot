import React, { useEffect } from "react";
import Button from "../../components/Button"
import BoxWithHeadingAndCotainer from "./BoxWithHeadingAndCotainer";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {useSelector} from "react-redux"
import {selectUser} from "../../store/userSlice.js"

function Landing() {
  const user = useSelector(selectUser);
  // const navigate = useNavigate();
  // useEffect(()=>{
  //   if(user){
  //     navigate("/home")
  //   }
  // }
  // )
  return !user ? (
    <> 
    <div className="w-full">
  <div className="grid grid-cols-1 text-center lg:text-left lg:grid-cols-2 gap-4 mx-[5vw]">
    {/* Left Div */}
    <div className="p-4 my-10 lg:my-20">
      <h2 className="text-3xl font-bold mb-2">
        Where Collaboration happens
      </h2>
      <p className="text-gray-700 text-lg">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
        neque molestias commodi quas maiores debitis incidunt tempora nobis
        vel eligendi earum distinctio recusandae odit voluptate totam, dolor
        officia minima et atque, impedit eaque ad perferendis! Recusandae
        quod esse impedit aliquam commodi. Repudiandae recusandae possimus
        corporis quod accusamus praesentium nemo non natus obcaecati
        provident voluptatum veritatis suscipit modi nobis optio, magnam
        maxime iusto reiciendis! Ullam necessitatibus blanditiis, sunt
        recusandae officia quidem.
      </p>
      <div className="lg:block mt-5 mx-2 mb-2 lg:m-5">
        <Link to="/signup">
          <Button title="Join Us" className="bg-green-500 text-white" />
        </Link>
        <Link to="/login">
          <Button title="Sign In" className="text-black border-2" />
        </Link>
      </div>
    </div>

    {/* Right Div */}
    <div className="px-4 py-2 lg:p-4">
      <img
        src="src/assets/Images/Collab-rafiki.png"
        alt="Sample"
        className="mx-auto h-[50vh] lg:h-[80vh] rounded "
      />
    </div>
  </div>

  <div className="px-[5vw] w-full">
    <h1 className="text-center text-2xl font-bold">
      Why should I join .DOT
    </h1>
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-4">
      {/* Left Div */}
      <BoxWithHeadingAndCotainer
        title={`ACCELERATE`}
        heading={`Explore the platform join the community learn from others project`}
      />

      {/* Right Div */}
      <div className=" lg:p-4">
        <img
          src="src/assets/Images/team-work.jpg"
          alt="Sample"
          className="mx-auto h-[50vh] lg:h-[80vh] rounded "
        />
      </div>
    </div>
  </div>

  <div className="bg-green-200">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-[5vw]">
      {/* Left Div */}
      <div className="p-2 lg:p-8">
        <img
          src="src/assets/Images/Internet Day-bro.png"
          alt="Sample"
          className="mx-auto h-[50vh] lg:h-[80vh] rounded bg-green-200"
        />
      </div>

      {/* Right Div */}
      <BoxWithHeadingAndCotainer
        title={`COMMUNITY`}
        heading={`Explore the platform join the community learn from others project`}
      />
    </div>
  </div>
</div>



    </>
  ) : <Navigate to={"/home"}/>
}

export default Landing;
