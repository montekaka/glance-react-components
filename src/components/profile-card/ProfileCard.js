import React from 'react';
import Avatar from './Avatar'
import ProfileLinks from './ProfileLinks'
import LinkButton from './LinkButton'
import './style.css'

const ProfileCard = (props) => {
  const {
    title,
    subtitle,
    avatarSrc,
    avatarSize,
    avatarBackgroundColor,
    backgroundColor,
    fontFamily,
    primaryColor,
    secondaryColor, 
    link,
    links,
    linkColor,
    linksColor
  } = props;

  return (
    
    <div style={{backgroundColor}}
      className="profile-card"
    >
      <div className="main">
        <div className="header">
          <div className="profile-card-avatar">
            <Avatar 
              avatarSrc={avatarSrc} 
              avatarSize={avatarSize}
              backgroundColor={avatarBackgroundColor}/>
          </div>
          <div className="header-meta">
            <div style={{
              color: primaryColor,
              fontFamily,
              fontSize: "24px",
              marginBottom: '10px',
              fontStyle: "SemiBold"
              }} className="title">{title}</div>
            <ProfileLinks links={links} size="20px" iconSize="16px" color={linksColor}/>
          </div>          
        </div>
        <div className="description">
          <div style={{
            color: secondaryColor,
            fontFamily,
            fontSize: "18px",
            fontStyle: "Regular"          
          }} className="subtitle">
            {subtitle}
          </div> 
          {props.children}
        </div>
      </div>
      <div>

      </div>
    </div>
    
  )
}

export default ProfileCard;