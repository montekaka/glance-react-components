import React from 'react';
import Avatar from './Avatar'
import ProfileLinks from './ProfileLinks'
import LinkButton from './LinkButton'
import './style.css'

const ProfileCard = ({
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
}) => {
  return (
    
    <div style={{backgroundColor}}
      className="profile-card"
    >
      <div className="profile-card-avatar">
        <Avatar 
          avatarSrc={avatarSrc} 
          avatarSize={avatarSize}
          backgroundColor={avatarBackgroundColor}/>
      </div>
      <div className="profile-card-metas">
        <div style={{
          color: primaryColor,
          fontFamily,
          fontSize: 21,
          fontStyle: "SemiBold"
        }} className="title">{title}</div>
        <div style={{
          color: secondaryColor,
          fontFamily,
          fontSize: 18,
          fontStyle: "Regular"          
        }} className="subtitle">
          {subtitle}
        </div>
        <ProfileLinks links={links} size="16px" iconSize="14px" color={linksColor}/>
      </div>
      <div className="profile-card-link">
        <LinkButton backgroundColor={linkColor} color={primaryColor} fontFamily={fontFamily}/>
      </div>        
    </div>
    
  )
}

export default ProfileCard;