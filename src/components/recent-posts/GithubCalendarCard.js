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
  postTitleTextColor,
  postPubDateTextColor
}) => {

  const style = {
    borderRadius: 16,
    backgroundColor, // "#1F044A"
    fontFamily, // "DM Sans",
  }

  return (
    <PostsLayout style={style}>
      <Header title={title} iconName={iconName} style={headerStyle} iconStyle={headerIconStyle}/>
      <div style={{
        height: '140px'        
      }}>
        <GithubCalendar/>
      </div>
    </PostsLayout>
  )
}

export default GithubCalendarCard;