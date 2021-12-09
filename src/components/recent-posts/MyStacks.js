import React from 'react';
import PostsLayout from './PostsLayout'
import Header from './Header';
import {TechSkill} from './../icons'

const MyStacks = ({  
  title, 
  iconName,
  fontFamily,
  backgroundColor,
  headerStyle,
  headerIconStyle,
  stacksBackgroundColor,
  stacks
}) => {

  const style = {
    borderRadius: "60px",
    backgroundColor, // "#1F044A"
    fontFamily, // "DM Sans",
    padding: "20px",
    minHeight: "240px"
  }

  const skillStyle = {
    display: 'flex',
    padding: "26px 26px 0px 26px",
    gap: '10px',
    flexWrap: 'wrap'
  }

  return (
    <PostsLayout style={style}>
      <Header title={title} iconName={iconName} style={headerStyle} iconStyle={headerIconStyle}/>
      <div style={skillStyle}>
        {
          stacks.map((skill, idx) => {
            return <TechSkill key={`${idx+1}`} skill={skill} backgroundColor={stacksBackgroundColor}/>
          })
        }
      </div>
    </PostsLayout>
  )
}

export default MyStacks;