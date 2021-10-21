import React from 'react';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import PostBodyLayout from './PostBodyLayout'
import PostItem from './PostItem'

const RecentPostBody = ({loading, posts, showThumbnail, postTitleTextColor, postPubDateTextColor}) => {
  if(loading) {
    return (
      <div style={{
        paddingBottom: '26px',
        margin: "26px 13px 0px 26px"
      }}>
        <ReactPlaceholder showLoadingAnimation={true} type='media' ready={false} rows={4}/>
      </div>      
    )
  } else if(posts) {
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