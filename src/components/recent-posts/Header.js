import React from 'react';
import {Logo} from '../icons'

const Header = ({
  title, iconName, style, iconStyle, children
}) => {
  return (
    <div className="header" style={{
      display: 'flex', 
      padding: "26px 26px 0px 26px",
      alignItems: 'center', 
      justifyContent: 'space-between'
    }}>    
      <div style={{
        display: 'flex', 
        alignItems: 'center', 
      }}>
        {/* <div style={{width: iconStyle.width, height: iconStyle.height, marginRight: '10px'}}>
          <Logo rect_fill={iconStyle.rectFill} path_fill={iconStyle.pathFill} iconName={iconName} />
        </div> */}
        <div className="title" style={{
          fontSize: "28",
          ...style
        }}>{title}</div>
      </div>          
      {children}
    </div>
  )
}

export default Header;