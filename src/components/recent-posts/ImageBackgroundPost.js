import React from 'react';
import PostsLayout from './PostsLayout'

const ImageBackgroundPost = (props) => {
  const {title, link, imgSrc, fontFamily, textColor, textBackgroundColor, height} = props;

  const style = {    
    height: height ? height : "240px",
    fontFamily, // "DM Sans",
    color: textColor,
    position: "relative",    
    // display: 'flex',
    // flexDirection: "column-reverse"
  }

  const textStyle = {
    // padding: "20px",
    position: "absolute",
    bottom: "0px",
    width: "100%",
  }

  return (
    <a href={link} style={{textDecoration: 'none'}}>
      <PostsLayout style={style}>
        
          <img style={{
            borderRadius: "60px",
            position: "absolute",
            left: "0px",
            top: "0px",
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }} src={imgSrc} alt="" />
          <div style={textStyle}>
            <p style={{
              margin: "20px",
              padding: "20px",
              borderRadius: '30px',
              backgroundColor: `${textBackgroundColor}`,
              backdropFilter: 'blur(10px)',
            }}>{title}</p>
          </div>
        
      </PostsLayout>
    </a>

  )
}

export default ImageBackgroundPost;