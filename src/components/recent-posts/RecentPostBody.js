import React from 'react';
import ContentLoader from "react-content-loader"
import PostBodyLayout from './PostBodyLayout'
import PostItem from './PostItem'

const RecentPostBody = ({loading, posts, showThumbnail, postTitleTextColor, postPubDateTextColor}) => {
  if(loading) {
    return (
      <div style={{
        margin: "26px 13px 0px 26px"
      }}>
          <ContentLoader 
            speed={3}
            width={300}
            height={160}
            viewBox="0 0 400 160"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="8" rx="3" ry="3" width="400" height="6" /> 
            <rect x="0" y="26" rx="3" ry="3" width="400" height="6" /> 
            <rect x="0" y="56" rx="3" ry="3" width="400" height="6" /> 
            <rect x="0" y="72" rx="3" ry="3" width="380" height="6" /> 
            <rect x="0" y="88" rx="3" ry="3" width="178" height="6" /> 
          </ContentLoader>
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