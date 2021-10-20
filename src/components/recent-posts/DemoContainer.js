import React from 'react';
import {useFetchFeed} from './hooks'
import RecentPosts from './RecentPosts';

const DemoContainer = ({
  title,
  iconName,
  feedUrl,  
  proxy,
  numberOfItems,
  showThumbnail,
  backgroundColor,
  fontFamily,
  headerStyle,
  headerIconStyle,
  postTitleTextColor,
  postPubDateTextColor 
}) => {
  const [items, loading, errorMessage] = useFetchFeed(feedUrl, proxy, numberOfItems);

  return (
    <RecentPosts 
      title={title} 
      iconName={iconName} 
      posts={items} 
      showThumbnail={showThumbnail}
      backgroundColor={backgroundColor}
      fontFamily={fontFamily}
      headerStyle={headerStyle}
      headerIconStyle={headerIconStyle}
      postTitleTextColor={postTitleTextColor}
      postPubDateTextColor={postPubDateTextColor}
    />
  )
}

export default DemoContainer;