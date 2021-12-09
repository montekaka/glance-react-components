import React from 'react';
import PostsLayout from './PostsLayout'
import HeaderIcon from './HeaderIcon';
import Avatar from './Avatar'

const TweetCard = ({
  backgroundColor, 
  cardBackgroundColor,
  fontFamily,
  title,
  iconName,
  headerStyle,
  headerIconStyle,
  link,
  tweetBody,
  screenName,
  authorName,
  avatar,
  avatarBackgroundColor,
  likes,
  pubDate,
  primaryTextColor,
  secondaryTextColor
}) => {

  const style = {
    borderRadius: "60px",
    padding: '60px',
    backgroundColor, // "#1F044A"
    fontFamily, // "DM Sans",    
    cursor: 'pointer',
    display: 'flex'
  }

  const linkClick = () => {
    window.open(link, "_blank")
  }

  return (
    <PostsLayout style={style} onClick={linkClick}>      
      <div 
      style={{     
        display: 'flex'
      }}>
        <div className="tweet-avatar" style={{marginRight: '12px'}}>
          <Avatar
            backgroundColor={avatarBackgroundColor}
            avatarSize={40}
            avatarSrc={avatar}
          />
        </div>
        <div className="message-body" style={{fontFamily}}>
          <div style={{
            display: 'flex',
          }}>
            <div style={{color: primaryTextColor, fontFamily, fontStyle: 'medium', fontSize: "13px", marginRight: '10px'}}>{authorName}</div>
            <div style={{color: secondaryTextColor, fontStyle: 'medium', fontSize: "11px"}}>{screenName}</div>
          </div>
          <p style={{color: secondaryTextColor, fontStyle: 'medium', fontSize: "13px"}}>
            {tweetBody}
          </p>
        </div>
      </div>
      <HeaderIcon title={title} iconName={iconName} style={headerStyle} iconStyle={headerIconStyle}/>      
    </PostsLayout>
  )
}

export default TweetCard;