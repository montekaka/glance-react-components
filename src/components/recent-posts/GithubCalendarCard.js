import React from 'react';
import PostsLayout from './PostsLayout'
import Header from './Header';
import {GithubCalendar} from '../github-calendar'

const GithubCalendarCard = ({  
  username, 
  title, 
  iconName,
  fontFamily,
  backgroundColor,
  headerStyle,
  headerIconStyle,
  colors,
  linkColor,
  linkBackgroundColor
}) => {

  const style = {
    borderRadius: 16,
    backgroundColor, // "#1F044A"
    fontFamily, // "DM Sans",
  }

  const onClick = () => {
    window.open(`https://github.com/${username}`, "_blank");
  }

  return (
    <PostsLayout style={style}>
      <Header title={title} iconName={iconName} style={headerStyle} iconStyle={headerIconStyle}>
        <div 
          onClick={onClick}
          className="github-link-box" 
          style={{
          backgroundColor: linkBackgroundColor,
          color: linkColor,
          height: headerIconStyle.width
        }}>https://github.com/{username}</div>
      </Header>
      <div style={{
        height: '140px'
      }}>
        <GithubCalendar username={username} colors={colors}/>
      </div>
    </PostsLayout>
  )
}

export default GithubCalendarCard;