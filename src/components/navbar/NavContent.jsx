import React from 'react'

const NavContent = ({logo}) => {
  return (
    <div id="item" className='flex items-center mr-5'>
        <span className='text-[20px]' >{logo}</span>
    </div>
  )
}

export default NavContent
