import React from 'react';
import './style.css'

const PostsLayout = (props) => {
  const {style} = props;
  
  return (
    <div style={style}>
      {props.children}
    </div>
  )
}

export default PostsLayout;