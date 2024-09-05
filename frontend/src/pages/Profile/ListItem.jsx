import React from "react";
function ListItem({ title, Icon, ...props }) {
  return (
      <div className="flex justify-start mb-4">
        <div className="mr-2 mt-1 text-green-500">{Icon}</div>
        <h3 className="font-bold text-md">{title}</h3>
      </div>
  );
}

export default ListItem;
