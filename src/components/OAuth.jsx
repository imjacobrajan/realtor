import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";

function OAuth() {
  return (
    <button className="flex items-center justify-center w-full bg-red-700 text-white py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded">
      <AiOutlineGoogle className="text-2xl mr-2" />
      continue with google
    </button>
  );
}

export default OAuth;
