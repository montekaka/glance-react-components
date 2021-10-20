import React from 'react';
import {Logo} from '../icons'

const Header = ({
  title, iconName, style, iconStyle
}) => {
  return (
    <div className="header" style={{
      display: 'flex', 
      alignItems: 'center', 
      padding: "26px 26px 0px 26px",
    }}>
      <div style={{width: iconStyle.width, height: iconStyle.height, marginRight: '10px'}}>
        {/* <Logo rect_fill="#3CD5ED" path_fill="#fff" /> */}
        <Logo rect_fill={iconStyle.rectFill} path_fill={iconStyle.pathFill} iconName={iconName} />
      </div>
      <div className="title" style={{
        fontWeight: '700', 
        fontSize: "18px",
        lineHeight: "23.44px",
        // color: "#FFFFFF80",
        ...style
      }}>{title}</div>
    </div>
  )
}

export default Header;