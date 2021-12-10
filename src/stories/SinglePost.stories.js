import React from 'react';
import {storiesOf} from '@storybook/react'
import {ImageBackgroundPost} from '../components/recent-posts'

const stories = storiesOf('Single post test', module);

stories.add('Basic', () => {
  return (
    <ImageBackgroundPost
      textColor="#000"
      textBackgroundColor="#ffffff60"
      title="Invoiceku Landing Page Mobile Responsive"
      link="https://www.apple.com"
      imgSrc="https://cdn.dribbble.com/users/3860505/screenshots/16531652/media/8f420812877e556f8eb2fdc26c77056d.png?compress=1&resize=1600x1200"      
    />
  )
})