import React from 'react';

const PostArtwork = ({imgSrc}) => {
  if(imgSrc) {
    return (
      <div style={{
        borderRadius: "10px",
        height: "200px",
        marginBottom: '10px',
        backgroundSize: 'cover',
        backgroundImage: `url(${imgSrc})`
      }}></div>
    )
  }

  return null;
}

export default PostArtwork;