import React from 'react';
import {Logo} from '../icons'

const HeaderIcon = ({
  title, iconName, style, iconStyle, children
}) => {
  return (
    <div className="">             
        <div style={{width: iconStyle.width, height: iconStyle.height, marginRight: '10px'}}>
          <Logo rect_fill={iconStyle.rectFill} path_fill={iconStyle.pathFill} iconName={iconName} />
        </div>      
    </div>
  )
}

export default HeaderIcon;