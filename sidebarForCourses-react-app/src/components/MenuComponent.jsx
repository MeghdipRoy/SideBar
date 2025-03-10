import { Menu } from 'antd'
import React from 'react'
import { BiSolidDashboard } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";
import { GiLaptop } from "react-icons/gi";
import { FcOnlineSupport } from "react-icons/fc";
import { AiFillGold } from "react-icons/ai";
import { IoIosInformationCircle } from "react-icons/io";
import { SiOpenaccess } from "react-icons/si";
import { PiPersonSimpleWalkThin } from "react-icons/pi";
import { PiExamBold } from "react-icons/pi";
const MenuComponent = ({darkTheme}) => {
  return (
    <Menu theme={darkTheme ?  'dark':'light'} mode='inline' className='menu-bar'>
        <Menu.Item key="home" icon={<BiSolidDashboard />}
        >
        DashBoard
         </Menu.Item>
        
         <Menu.SubMenu key="activity" icon={<FaLaptopCode />}
         title="Courses">
         
       
         <Menu.SubMenu key="CRTA" title="CRTA"  icon={<AiFillGold />}>
         <Menu.Item key="intro" icon={<IoIosInformationCircle />}
        >
        Intro
         </Menu.Item>
         <Menu.Item key="labaccess" icon={<SiOpenaccess />}
        >
        Lab Access
         </Menu.Item>
         <Menu.Item key="labwalkthrough" icon={<PiPersonSimpleWalkThin />}
        >
        Lab Walkthrough
         </Menu.Item>
         <Menu.Item key="exam" icon={<PiExamBold />}
        >
        Exam
         </Menu.Item>
         </Menu.SubMenu>
         </Menu.SubMenu>
         <Menu.Item key="courses" icon={<GiLaptop />}
        >
        All Courses
         </Menu.Item>
         <Menu.Item key="support" icon={<FcOnlineSupport />}
        >
        Support
         </Menu.Item>
    </Menu>
  )
}

export default MenuComponent