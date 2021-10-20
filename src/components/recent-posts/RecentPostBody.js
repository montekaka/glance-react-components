import React from 'react';
import PostBodyLayout from './PostBodyLayout'
import PostItem from './PostItem'

const RecentPostBody = ({posts, showThumbnail, postTitleTextColor, postPubDateTextColor}) => {
  if(posts) {
    return (
      <PostBodyLayout horizontal={showThumbnail}>
      {
        posts.map((item, idx) => <PostItem 
          key={`${idx}+1`} 
          title={item.title} 
          link={item.link}
          pubDate={item.pubDate} 
          titleTextColor={postTitleTextColor}
          pubDateTextColor={postPubDateTextColor}
          imgSrc={showThumbnail ? item.imgSrc : null}
          styleClassName={showThumbnail ? "post-style-thumbnail" : null}
        />)
      }
      </PostBodyLayout>
    )
  }
  
  return null;
}

export default RecentPostBody;