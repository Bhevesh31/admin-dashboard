import React from 'react'
import List from '../list/List'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Lists from '../../components/table/ListsTable'
import Chart from '../../components/chart/Chart'

const Single = () => {
  return (
    <div className="flex w-full ">
  <Sidebar/>
  <div className="flex-6 ">
    <Navbar/>

    {/* TOP SECTION */}
    <div className="p-5 flex gap-5">
      {/* LEFT CARD */}
      <div className="flex-1 shadow-[2px_4px_10px_1px_rgba(0,0,0,0.47)] p-5 relative ">
        <div className="absolute top-0 right-0 p-1 text-xs text-[#7451f8] bg-[#7551f818] cursor-pointer rounded-bl-md ">
          Edit
        </div>

        <div className="flex gap-5 ">
          <img
            src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt=""
            className="w-[100px] h-[100px] rounded-full object-cover "
          />

          <div className="">
            <h1 className="mb-2 text-[#555] ">Jane Doe</h1>

            <div className="mb-2 text-sm ">
              <span className="font-bold text-gray-500 mr-1 ">Email:</span>
              <span className="font-light ">janedoe@gmail.com</span>
            </div>

            <div className="mb-2 text-sm ">
              <span className="font-bold text-gray-500 mr-1 ">Phone:</span>
              <span className="font-light ">+1 2345 67 89</span>
            </div>

            <div className="mb-2 text-sm detailItem">
              <span className="font-bold text-gray-500 mr-1 ">Address:</span>
              <span className="font-light ">
                Elton St. 234 Garden Yd. NewYork
              </span>
            </div>

            <div className="mb-2 text-sm ">
              <span className="font-bold text-gray-500 mr-1 ">Country:</span>
              <span className="font-light ">USA</span>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT CHART */}
      <div className="flex-2 ">
        <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
      </div>
    </div>

    {/* BOTTOM SECTION */}
    <div className="shadow-[2px_4px_10px_1px_rgba(0,0,0,0.47)] p-5 my-2 mx-5 ">
      <h1 className="text-[16px] text-gray-300 mb-5">Last Transactions</h1>
      <Lists/>
    </div>
  </div>
</div>

  )
}

export default Single
