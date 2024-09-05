import React from "react";

function InputWithLabelItem({
  label = "hello",

}) {
  return (
    <li className="flex items-center justify-between py-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
          value="s"
        />
        <label for="sizes-s" className="ml-3 text-sm font-medium text-gray-900">
          {label}
        </label>
      </div>
    </li>
  );
}

export default InputWithLabelItem;
