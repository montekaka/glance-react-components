import React from 'react';
import PostsLayout from './PostsLayout'
import Header from './Header';
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
    borderRadius: 16,
    backgroundColor, // "#1F044A"
    fontFamily, // "DM Sans",
    cursor: 'pointer',
  }

  const linkClick = () => {
    window.open(link, "_blank")
  }

  return (
    <PostsLayout style={style} onClick={linkClick}>
      <Header title={title} iconName={iconName} style={headerStyle} iconStyle={headerIconStyle}/>      
      <div 
      style={{
        margin: "30px",
        minHeight: "100px",
        borderRadius: "12px",
        padding: "16px",
        backgroundColor: cardBackgroundColor,        
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
            <div style={{color: primaryTextColor, fontFamily, fontStyle: 'medium', fontSize: "13", marginRight: '10px'}}>{authorName}</div>
            <div style={{color: secondaryTextColor, fontStyle: 'medium', fontSize: "11"}}>{screenName}</div>
          </div>
          <p style={{color: secondaryTextColor, fontStyle: 'medium', fontSize: "13"}}>
            {tweetBody}
          </p>
        </div>
      </div>
      <br/>
    </PostsLayout>
  )
}

export default TweetCard;