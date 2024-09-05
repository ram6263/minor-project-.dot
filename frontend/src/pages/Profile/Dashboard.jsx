import Button from "../../components/Button";

const Dashboard = () => {
    return (
      <div className="flex justify-evenly">
        <div className="container mx-auto p-4 bg-gray-50 rounded shadow w-[600px]">
      <div className="head flex justify-between">
      <div>
      <h2 className="text-lg font-bold mb-2">MY LATEST PROJECT</h2>
      </div>
      <div>
        <a href="">see all</a>
      </div>
      </div>

      <hr className="mt-5" />

      <div className="project-card">
        <p >20-02-2024</p>
        <p className="font-bold text-base">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Mollitia, saepe!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Dolore praesentium in maxime ab error deserunt id enim eaque voluptates facilis.</p>
        <div className="button m-5 flex justify-between">
          <Button title="Edit" className="bg-white border-solid border-2 border-green-600"/>
          
          <Button title="view project" className="bg-white border-solid border-2 border-green-600"/>
         
        </div>
       
      </div>
      </div>

      <div className="container mx-auto p-4 bg-gray-50 rounded shadow w-[600px]">
      <div className="head flex justify-between">
      <div>
      <h2 className="text-lg font-bold mb-2">MY LATEST PROJECT</h2>
      </div>
      <div>
        <a href="">see all</a>
      </div>
      </div>

      <hr className="mt-5" />

      <div className="project-card">
        <p >20-02-2024</p>
        <p className="font-bold text-base">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Mollitia, saepe!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Dolore praesentium in maxime ab error deserunt id enim eaque voluptates facilis.</p>
        <div className="button m-5 flex justify-between">
          <Button title="Edit" className="bg-white border-solid border-2 border-green-600"/>
          
          <Button title="view project" className="bg-white border-solid border-2 border-green-600"/>
         
        </div>
       
      </div>
      </div>
      </div>
      
    );
  };
  
  export default Dashboard;