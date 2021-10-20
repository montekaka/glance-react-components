import React from 'react';

const Avatar = ({
  backgroundColor,
  avatarSrc,
  avatarSize
}) => {
  return (
    <div
      className="header-avatar" 
      style={{
        backgroundColor: backgroundColor
      }}
    >
      <img 
        src={avatarSrc} 
        loading="lazy"
        width={avatarSize}
        height={avatarSize}
        style={{
          borderRadius: '100%',
          width: avatarSize,
          height: avatarSize,
          display: 'inline-block',
          verticalAlign: 'bottom'
        }}
      />
    </div>
  )
}

export default Avatar;