import React from 'react';
import './style.css'

// https://flaviocopes.com/react-pass-props-to-children/
const PostsLayout = (props) => {  
  return (
    <div {...props}>
      {props.children}
    </div>
  )
}

export default PostsLayout;