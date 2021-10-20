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
  // return (
  //   <div style={{
  //     borderRadius: "10px",
  //     height: "200px",
  //     marginBottom: '10px',
  //     backgroundSize: 'cover',
  //     backgroundImage: `url("https://miro.medium.com/max/8576/0*bvDyVRu5cHuExcWw")`
  //   }}></div>
  // )
}

export default PostArtwork;