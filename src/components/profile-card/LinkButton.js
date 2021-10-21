import React from 'react';

const LinkButton = ({link, fontFamily, color, backgroundColor}) => {
  
  const style={
    color,
    backgroundColor,
    fontFamily,
    fontSize: "18px",
    fontStyle: "SemiBold",
  }

  return (
    <div className="header-link-button" style={style}>
      Copy Link
    </div>
  )
}

export default LinkButton;