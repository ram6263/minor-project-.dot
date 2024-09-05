import React from 'react';

function ContainerWithButton({
  
}) {
  return (<>

<div className="border-2 w-full lg:w-[30vw] border-black p-4 my-10 flex flex-col bg-white rounded-md">
  <p className="text-gray-700">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, necessitatibus nam fugiat explicabo illo eum fuga, hic repellat autem vero libero cupiditate consectetur. Eius deleniti veritatis maiores facere, explicabo repudiandae fugiat temporibus perspiciatis, optio, laudantium ipsa unde! Vero, mollitia atque, commodi enim iusto impedit eveniet eius laboriosam repudiandae reiciendis sequi!
  </p>

  <div className="flex justify-center mt-5">
    <button className="bg-green-500 text-white border px-4 py-2 rounded">
      See Projects
    </button>
  </div>
</div>

    </>
  );
}

export default ContainerWithButton;
