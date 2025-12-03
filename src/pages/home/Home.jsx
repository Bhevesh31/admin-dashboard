import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Feature from '../../components/featured/Feature'
import Chart from '../../components/chart/Chart'
import ListsTable from '../../components/table/ListsTable'

const Home = () => {
  return (
    <div id='home' className='flex bg-(--color-bg)'>
      <Sidebar/>
      <div id='homeContainer' className=' flex-6'>
        <Navbar/>
        <div id="widgets" className='flex p-5 gap-5'>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div id="charts" className='flex px-5 py-1.5 gap-5'>
          <Feature/>
          <Chart title={"Last 6 months (revenue)"} aspect={2/1}/>
        </div>
        <div id="listContainer" className='shadow-md p-5 m-5'>
          <div id="listTitle" className='font-semibold text-gray-600 mb-4'>Latest transactions</div>
          <ListsTable/>
        </div>
      </div>
    </div>
  )
}

export default Home
