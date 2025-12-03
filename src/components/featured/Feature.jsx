import React from 'react'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Feature = () => {
  return (
    <div className=" bg-white shadow p-4 rounded-lg">
  <div className="flex items-center justify-between text-gray-500">
    <h1 className="text-[16px] font-medium">Total Revenue</h1>
    <MoreVertIcon fontSize="small" />
  </div>

  <div className="flex flex-col items-center justify-center gap-[15px] p-5">
    
    <div className="w-[100px] h-[100px]">
      <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
    </div>

    <p className="font-medium text-gray-500">Total sales made today</p>

    <p className="text-[30px]">$420</p>

    <p className=" text-gray-500 text-center text-[12px] font-light">
      Previous transactions processing. Last payments may not be included.
    </p>

    <div className="w-full flex items-center justify-between">
      
      <div className=" text-center">
        <div className="text-[14px] text-gray-500">Target</div>
        <div className="flex items-center mt-2.5 text-[14px] text-red-500">
          <KeyboardArrowDownIcon fontSize="small" />
          <div >$12.4k</div>
        </div>
      </div>

      <div className="text-center">
        <div className="text-[14px] text-gray-500">Last Week</div>
        <div className="flex items-center mt-2.5 text-[14px] text-green-500">
          <KeyboardArrowUpOutlinedIcon fontSize="small" />
          <div >$12.4k</div>
        </div>
      </div>

      <div className="text-center">
        <div className="text-[14px] text-gray-500">Last Month</div>
        <div className="flex items-center mt-2.5 text-[14px] text-green-500">
          <KeyboardArrowUpOutlinedIcon fontSize="small" />
          <div>$12.4k</div>
        </div>
      </div>

    </div>
  </div>
</div>

  )
}

export default Feature
