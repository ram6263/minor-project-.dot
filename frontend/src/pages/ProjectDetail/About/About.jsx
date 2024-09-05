import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrProject } from "../../../store/projectSlice";

function About() {
  const project = useSelector(selectCurrProject);
  const title = project.title;
  const description = project.description;
  
  return (
    <div className="container ">
      {/* <ProjectDetail></ProjectDetail> */}
      <hr className=" ml-[300px] mr-[300px] align-middle" />
      <div className="flex justify-center">
        <div className="md:col-span-1 p-3 w-[20%] ">
          <h1 className="font-bold">About</h1>
          <ul className="m-5">
            <Link>
              <li className="mt-3">Discription</li>
              <li className="mt-3">Benifit</li>
              <li className="mt-3">Needs</li>
            </Link>
          </ul>
          <h1 className="font-bold mt-5">Files</h1>
          <ul className="m-5">
            <Link>
              <li className="mt-3">video</li>
              <li className="mt-3">Images</li>
              <li className="mt-3">Document</li>
            </Link>
          </ul>
        </div>

        <div className="md:col-span-1 p-3 w-[35%] ml-5">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About</h2>
            <hr />
            <div className="grid grid-cols-1 gap-8">
              <div className="col-span-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Title</h3>
                <h3 className="font-medium text-gray-700">
                  {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. */}
                  {title}
                </h3>
              </div>
              <div className="col-span-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Discription
                </h3>
                <p className="text-gray-700">
                  Sed sodales odio a sem eleifend, et ultrices lorem molestie.
                  Nam condimentum erat eu libero bibendum, eget aliquet ante
                  laoreet. Vivamus ut bibendum leo. Mauris scelerisque leo sit
                  amet turpis feugiat, id molestie purus fermentum.
                </p>
              </div>
              <div className="col-span-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Needs</h3>
                <p className="text-gray-700">
                  Sed sodales odio a sem eleifend, et ultrices lorem molestie.
                  Nam condimentum erat eu libero bibendum, eget aliquet ante
                  laoreet. Vivamus ut bibendum leo. Mauris scelerisque leo sit
                  amet turpis feugiat, id molestie purus fermentum.
                </p>
              </div>
              <div className="col-span-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Benifit
                </h3>
                <p className="text-gray-700">
                  {/* Sed sodales odio a sem eleifend, et ultrices lorem molestie.
                  Nam condimentum erat eu libero bibendum, eget aliquet ante
                  laoreet. Vivamus ut bibendum leo. Mauris scelerisque leo sit
                  amet turpis feugiat, id molestie purus fermentum. */}
                  {description}
                </p>
              </div>
              <div className="col-span-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Image</h3>
                <div className="flex flex-wrap">
                  <img
                    className="w-[200px]"
                    src="src/assets/Images/Collab-rafiki.png"
                    alt="image"
                  />
                  <img
                    className="w-[200px]"
                    src="src/assets/Images/Collab-rafiki.png"
                    alt="image"
                  />
                  <img
                    className="w-[200px]"
                    src="src/assets/Images/Collab-rafiki.png"
                    alt="image"
                  />
                  <img
                    className="w-[200px]"
                    src="src/assets/Images/Collab-rafiki.png"
                    alt="image"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Video</h3>
                <video width="750" height="500" controls>
                  <source
                    src="src/assets/video/video_20221210_152848.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="col-span-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Document
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
