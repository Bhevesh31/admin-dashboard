import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SidebarContent from './SidebarContent';
import { Link } from "react-router-dom";
import { Sick } from '@mui/icons-material';



const Sidebar = () => {
  return (
    <div className='flex-1 border-r border-solid border-slate-500 h-screen bg-(--color-bg) '>
      <div id='top' className='h-12 flex justify-center items-center'>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className='text-[20px] font-bold text-[#6439ff]'>lamaadmin</span>
        </Link>
        
      </div>
      <hr className='border-t border-solid border-slate-300'/>
      <div id='center' className='pl-2'>
        <ul id='sidebarList'>
          <p className='text-[10px] font-bold text-[#999] mt-2 mb-1'>MAIN</p>
          <SidebarContent name = {"Dashboard"} logo = {<DashboardIcon/>}/>      


          <p className='text-[10px] font-bold text-[#999] mt-2 mb-1'>LISTS</p>
           <Link to="/users" style={{ textDecoration: "none" }}>
              <SidebarContent name = {"Users"} logo = {<PersonOutlineIcon/>}/>
            </Link>

          <Link to="/products" style={{ textDecoration: "none" }}>
            <SidebarContent name = {"Product"} logo = {<LocalShippingIcon/>}/>
          </Link>
          
          <SidebarContent name = {"Orders"} logo={<CreditCardIcon/>}/>
          <SidebarContent name ={"Delivery"} logo={<StoreIcon/>} />
          
          <p  className='text-[10px] font-bold text-[#999] mt-2 mb-1'>USEFUL</p>

          <SidebarContent name = {"Stats"} logo={<InsertChartIcon/>} />
          <SidebarContent name = {"Notifications"} logo={<NotificationsNoneIcon/>} />
          
          <p  className='text-[10px] font-bold text-[#999] mt-2 mb-1'>SERVICE</p>

          <SidebarContent name={"System Health"} logo={<SettingsSystemDaydreamOutlinedIcon/>} />
          <SidebarContent name={"Logs"} logo={<PsychologyOutlinedIcon/>} />
          <SidebarContent name={"Settings"} logo={<SettingsApplicationsIcon/>}/>

          <p  className='text-[10px] font-bold text-[#999] mt-2 mb-1'>USER</p>

          <SidebarContent name={"Profile"} logo={<AccountCircleOutlinedIcon/>} />
          <SidebarContent name={"Logout"} logo={<ExitToAppIcon/>} />

        </ul>
      </div>

      <div id='bottom'>color options</div>
    </div>
  )
}

export default Sidebar
