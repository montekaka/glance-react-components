import React from 'react';
import PostsLayout from './PostsLayout'
import Header from './Header';
import SinglePostItem from './SinglePostItem';

const SinglePost = ({  
  postTitle,
  postDescription,
  pubDate, 
  link, 
  imgSrc,
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
      <SinglePostItem
        title={postTitle}
        description={postDescription}
        imgSrc={imgSrc}
        link={link}
        postTitleTextColor={postTitleTextColor}
        postPubDateTextColor={postPubDateTextColor}
      />
    </PostsLayout>
  )
}

export default SinglePost;