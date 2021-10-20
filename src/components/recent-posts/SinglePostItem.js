import React from 'react';
import PostArtwork from './PostArtwork';

const SinglePostItem = ({
  title, 
  description, 
  imgSrc, 
  link,
  postTitleTextColor,
  postPubDateTextColor
}) => {

  const handleClick = () => {
    if(link) {
      window.open(link, '_blank');
    }
  }

  const style = link ? {
    cursor: 'pointer'
  } : null;

  return (
    <div style={{...style, margin: "26px 26px 0px 26px", paddingBottom: '26px'}} onClick={handleClick}>
      <PostArtwork imgSrc={imgSrc}/>
      <div>
        <div style={{color: postTitleTextColor}}>{title}</div>
        <div style={{color: postPubDateTextColor}}>{description}</div>
      </div>
    </div>
  )
}

export default SinglePostItem;