import React from 'react'
import { WiDaySunny } from "react-icons/wi";
import { MdOutlineNightlightRound } from "react-icons/md";
import { Button } from 'antd';
const ToggleTheme = ({darkTheme,toggleTheme}) => {
  return (
    <div className='toggle-theme-btn'>
        <Button onClick={toggleTheme}>
       {darkTheme ?  <MdOutlineNightlightRound /> : <WiDaySunny />}
        </Button>
        </div>
  )
}

export default ToggleTheme