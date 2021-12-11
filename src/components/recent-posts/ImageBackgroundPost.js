import React from 'react';
import PostsLayout from './PostsLayout'

const ImageBackgroundPost = (props) => {
  const {title, link, imgSrc, fontFamily, textColor, textBackgroundColor} = props;

  const style = {
    borderRadius: "60px",
    minHeight: "360px",
    fontFamily, // "DM Sans",
    backgroundImage: `url(${imgSrc ? imgSrc : "https://via.placeholder.com/160"})`,
    backgroundRepeat: `no-repeat`,
    backgroundPostition: `center center`,
    backgroundSize: 'cover',
    color: textColor,
    display: 'flex',
    flexDirection: "column-reverse"
  }

  const textStyle = {
    padding: "20px",
    borderRadius: '10px',
    backgroundColor: `${textBackgroundColor}`,
    backdropFilter: 'blur(10px)'
  }

  return (
    <a href={link} style={{textDecoration: 'none'}}>
      <PostsLayout style={style}>
        <div style={{padding: "20px",}}>
          <p style={textStyle}>{title}</p>
        </div>
      </PostsLayout>
    </a>

  )
}

export default ImageBackgroundPost;