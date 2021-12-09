import React from 'react';
import {storiesOf} from '@storybook/react'
import DemoContainer from '../components/recent-posts/DemoContainer'
import {MyStacks, SinglePost, TweetCard, GithubCalendarCard} from '../components/recent-posts'

const stories = storiesOf('Recent blog post test', module);

// https://www.behance.net/feeds/user?username=lspd
// const feedUrl="https://www.behance.net/feeds/user?username=lspd"
// const feedUrl="https://medium.com/feed/@mattq022"
const feedUrl = "https://dev.to/feed/jarvisscript"
const proxy = "http://localhost:4500/v1/proxy_feed_parser?uri="

stories.add('Basic', () => {
  return (
    <div>
      <DemoContainer 
        title="Dev.to Posts" 
        iconName="dev"
        feedUrl={feedUrl}
        proxy={proxy}
        numberOfItems={2}
        backgroundColor="#1F044A"
        fontFamily="DM Sans"
        headerIconStyle={{
          width: "24px",
          height: "24px",
          rectFill: "#3CD5ED",
          pathFill: "#fff"
        }}
        headerStyle={{
          color: "#FFFFFF80"
        }}
        postTitleTextColor="#FFFFFF"
        postPubDateTextColor="#FFFFFF80"
      />
    </div>
  );
})


stories.add('Thumbnail', () => {
  return (
    <div>
      <DemoContainer 
        title="Dev.to Posts" 
        iconName="dev"
        feedUrl={feedUrl}
        proxy={proxy}
        showThumbnail={true}   
        numberOfItems={6}
        backgroundColor="#1F044A"
        fontFamily="DM Sans"
        headerIconStyle={{
          width: "24px",
          height: "24px",
          rectFill: "#3CD5ED",
          pathFill: "#fff"
        }}
        headerStyle={{
          color: "#FFFFFF80"
        }}
        postTitleTextColor="#FFFFFF"
        postPubDateTextColor="#FFFFFF80"           
      />
    </div>
  );
})


stories.add('Single', () => {
  return (
    <SinglePost 
      title="Dribbble"
      iconName="dribbble"
      postTitle="WeTrade Mobile App Exploration by Happy Tri Milliarta for Odama on Dribbble"
      imgSrc="https://cdn.dribbble.com/users/4208985/screenshots/16672355/wetrade_mobile_app_exploration_4x.png"
      link="https://dribbble.com/shots/16672355-WeTrade-Mobile-App-Exploration"
      numberOfItems={2}
      backgroundColor="#1F044A"      
      fontFamily="DM Sans"
      headerIconStyle={{
        width: "24px",
        height: "24px",
        rectFill: "#3CD5ED",
        pathFill: "#fff"
      }}
      headerStyle={{
        color: "#FFFFFF80"
      }}
      postTitleTextColor="#FFFFFF"
      postPubDateTextColor="#FFFFFF80"      
    />
  )
})


stories.add('Twitter', () => {
  return (
    <TweetCard 
      title="Twitter"
      iconName="twitter"
      tweetBody="Because of duopoly’s in politics and business it’s no wonder why things are boring. Get up, attend meetings, turn off computer, sleep, repeat. Need some alternatives to the predictable norms."
      screenName="@ThePracticalDev"
      authorName="DEV Community"
      avatar="https://pbs.twimg.com/profile_images/1389789795065335809/A8H1fuQb_normal.jpg"
      likes="16"
      pubDate="2021-10-19T05:43:01+0000"
      link="https://twitter.com/ThePracticalDev/status/1450336663914389507"
      backgroundColor="#131C45"
      cardBackgroundColor="#1B275A"
      avatarBackgroundColor="#553BFF"
      fontFamily="Inter"
      headerIconStyle={{
        width: "24px",
        height: "24px",
        rectFill: "#3CD5ED",
        pathFill: "#1DA1F2"
      }}
      headerStyle={{
        color: "#6E7598"
      }}
      primaryTextColor="#FFFFFF"
      secondaryTextColor="#6E7598"      
    />
  )
})

stories.add('Github', () => {
  return (
    <GithubCalendarCard
      title="Github"
      iconName="github"
      username="montekaka"
      backgroundColor="#131C45"
      cardBackgroundColor="#1B275A"  
      linkColor="#6E7598"
      linkBackgroundColor="#182354"
      fontFamily="Inter"    
      headerIconStyle={{
        width: "24px",
        height: "24px",
        rectFill: "#FFFFFF",
        pathFill: "#FFFFFF"
      }}
      headerStyle={{
        color: "#6E7598"
      }}      
    />
  )
})


stories.add('Skills', () => {
  return (
    <MyStacks
      title="Technical Skills"
      iconName="tech-stacks"
      fontFamily="Outfit"
      backgroundColor="#131C45"      
      headerIconStyle={{
        width: "24px",
        height: "24px",
        rectFill: "#FFFFFF",
        pathFill: "#FFFFFF"
      }}
      headerStyle={{
        color: "#fff"
      }}  
      stacksBackgroundColor="#222E66"
      stacks={['python', 'my-sql', 'react-js', 'ant-design', 'firebase', 'nginx', 'mongo']}
    />
  )
})