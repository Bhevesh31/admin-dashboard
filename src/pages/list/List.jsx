import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DataTable from '../../components/dataTable/DataTable'

const List = () => {
  return (
    <div className="flex  w-full">
      <Sidebar/>
      <div className="flex-6">
        <Navbar/>
        <DataTable/>
      </div>
    </div>
  )
}

export default List
