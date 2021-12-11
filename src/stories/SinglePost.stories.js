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
      imgSrc="https://cdn.dribbble.com/users/78637/screenshots/16412749/media/b0f27d90ee6ab8fc5b770a15818748e7.png?compress=1&resize=1600x1200"
    />
  )
})