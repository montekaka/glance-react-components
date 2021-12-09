import React from 'react';
import {Logo} from '../icons'

const ProfileLinks = ({links, size, iconSize, color}) => {
  if(links && links.length > 0) {
    return (
      <div style={{display: 'flex', gap: "10px", flexWrap: 'wrap'}}>
        {
          links.map((link, idx) => {
            return (
              <div 
                onClick={() => {
                  window.open(link.url, "_blank")
                }}
                key={idx+1} 
                style={{
                  cursor: 'pointer',
                  backgroundColor: color,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: size,
                  height: size,
                  borderRadius: "100%"
                }}>
                  <Logo                     
                    iconName={link.id}
                    path_fill={"black"}
                    width={iconSize}
                    height={iconSize}
                  />
              </div>
            )
          })
        }
      </div>
    )
  }

  return null;
}

export default ProfileLinks;