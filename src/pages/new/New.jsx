import React from 'react'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';


const New = ({inputs, title}) => {
   const [file, setFile] = useState("");
  return (
    <div className="w-full flex">
  <Sidebar/>
  <div className="flex-6">
    <Navbar/>
    <div className="shadow-md p-3 m-5 flex">
      <h1 className="text-gray-300 text-[20px]">{title}</h1>
    </div>
    <div className="shadow-md p-3 m-5 flex">
      <div className="flex-1 text-center">
        <img className="w-[100px] h-[100px] rounded-full object-cover mx-auto"
          src={
            file
              ? URL.createObjectURL(file)
              : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
          }
          alt=""
        />
      </div>
      <div className="flex-2">
        <form className="flex flex-wrap gap-8 justify-around">
          <div className="w-[40%]">
            <label className="flex items-center gap-2" htmlFor="file">
              Image: <DriveFolderUploadOutlinedIcon className="cursor-pointer" />
            </label>
            <input className="w-full p-1 border-b border-gray-400 outline-none"
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
          </div>

          {inputs.map((input) => (
            <div className="w-[40%]" key={input.id}>
              <label className="flex items-center gap-2">{input.label}</label>
              <input className="w-full p-1 border-b border-gray-400 outline-none" type={input.type} placeholder={input.placeholder} />
            </div>
          ))}
          <button className="w-[150px] p-3 bg-teal-600 text-white font-bold cursor-pointer mt-3"
          >Send</button>
        </form>
      </div>
    </div>
  </div>
</div>


  )
}

export default New
