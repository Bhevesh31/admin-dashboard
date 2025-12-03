import React from 'react'

const SidebarContent = ({name, logo}) => {
  return (
    <>
        <li className='flex items center p-1 cursor-pointer hover:bg-[#ece8ff]'>
                    <span className='text-4 text-[#7451f8]'>{logo}</span>
                    <span className='text-3 font-semibold text-[#888] ml-2'>{name}</span>
        </li>
    </>
  )
}

export default SidebarContent
