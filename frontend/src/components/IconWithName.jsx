import React from 'react';

const IconWithName = ({ icon, name, count, className = ''}) => {
  return (
    <div className={`flex items-center my-4 mr-4`}>
      {/* Icon */}
      <div className="mr-2">
        {icon}
      </div>
      <div className="mr-1 font-semibold">
        {count}
      </div>
      {/* Name */}
      <div className='font-semibold'>
        {name}
      </div>
    </div>
  );
};

export default IconWithName;
