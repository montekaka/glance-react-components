import React from 'react';
import {format} from 'date-fns'
import PostArtwork  from './PostArtwork'

const PostItem = ({
  imgSrc,
  title,
  pubDate,
  link,
  styleClassName,
  titleTextColor,
  pubDateTextColor
}) => {

  const openLink = () => {
    if(link) {
      window.open(link, "_blank")
    }
  }

  return (
    <div className={styleClassName}        
      style={{        
        // marginTop: "24px",
        minWidth: "300px",
        // fontFamily: "DM Sans",
        margin: "26px 13px 0px 26px"
    }}>
      <PostArtwork imgSrc={imgSrc}/>
      <div onClick={openLink}
        style={{cursor: 'pointer',}}
      >
        <div className="title" style={{
          // fontFamily: "DM Sans", 
          fontWeight: '700', 
          fontSize: "16px",
          lineHeight: "20.8px",
          color: titleTextColor, // "#FFFFFF",
        }}>{title}</div>
        <div className="pub-date" style={{
          marginTop: '14px',
          // fontFamily: "DM Sans", 
          fontWeight: '500', 
          fontSize: "13px",
          lineHeight: "16.93px",
          color: pubDateTextColor // "#FFFFFF80",
        }}>
          {format(new Date(pubDate), 'MMM. d, yyyy')}
        </div>
      </div>
    </div>
  )
}

export default PostItem;