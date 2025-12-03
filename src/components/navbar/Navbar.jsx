import React from 'react'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import NavContent from './NavContent';

const Navbar = () => {
  return (
    <div id='navbar' className='h-12 border-b text-(--color-text) border-solid border-slate-600 flex items-center text-[14px] '>
      <div id="wrapper" className='w-full flex items-center p-5 justify-between'>
        <div id="search" className='flex items-center border-[0.5px] border-solid border-gray-300 p-1' >
          <input className='border-0 outline-none bg-transparent placeholder:text-[12px]' type="text" placeholder='Search...' />
          <SearchOutlinedIcon />
        </div>
        <div id="items" className='flex items-center'>
          <div id='item' className='flex items-center mr-5'>
            <span className='text-[20px]'><LanguageOutlinedIcon/></span>
            English
          </div>

          <div id="item" className='bg-green-300 flex items-center mr-5'>
              <span className=' text-[20px]' ><DarkModeOutlinedIcon/></span>
          </div>
          <div id="item" className='flex items-center mr-5'>
              <span className='text-[20px]' ><FullscreenExitOutlinedIcon/></span>
          </div>
          <div id="item" className='flex items-center mr-5 relative'>
            <span className='text-[20px]' ><NotificationsNoneOutlinedIcon/></span>
            <div className='h-4 w-4 bg-red-600 rounded-full text-white flex items-center justify-center text-[10px] font-bold absolute -top-0.5 -right-0.5'>1</div>
          </div>
          <div id="item" className='flex items-center mr-5 relative'>
            <span className='text-[20px]' ><ChatBubbleOutlineOutlinedIcon/></span>
            <div className='h-4 w-4 bg-red-600 rounded-full text-white flex items-center justify-center text-[10px] font-bold absolute -top-0.5 -right-0.5'>2</div>
          </div>
          <div id="item" className='flex items-center mr-5'>
            <span className='text-[20px]' ><ListOutlinedIcon/></span>
          </div>

          <div>
            <img src="https://images.unsplash.com/photo-1762770640764-bfb05d380670?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D" alt=""  className='h-7 w-7 rounded-full'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
