import React from 'react';
import PostsLayout from './PostsLayout'
import Header from './Header';
import RecentPostBody from './RecentPostBody'

const RecentPosts = ({
  title,
  iconName,
  posts,
  showThumbnail,
  fontFamily,
  backgroundColor,
  headerStyle,
  headerIconStyle,
  postTitleTextColor,
  postPubDateTextColor,
  loading
}) => {

  // const [items, loading, errorMessage] = useFetchFeed(feedUrl, proxy, numberOfItems);
  const style = {
    borderRadius: 16,
    backgroundColor, // "#1F044A"
    fontFamily, // "DM Sans" 
  }

  return (
    <PostsLayout style={style}>
      <Header title={title} iconName={iconName} style={headerStyle} iconStyle={headerIconStyle}/>      
      <RecentPostBody 
        loading={loading}
        posts={posts} 
        showThumbnail={showThumbnail}
        postTitleTextColor={postTitleTextColor}
        postPubDateTextColor={postPubDateTextColor}
      />        
    </PostsLayout>
  )
}

export default RecentPosts;