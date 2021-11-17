import React from 'react';
import {storiesOf} from '@storybook/react'
import {ProfileCard} from '../components/profile-card'

const stories = storiesOf('Recent profile test', module);

stories.add('Basic', () => {
  return (
    <ProfileCard
      avatarSrc="https://res.cloudinary.com/practicaldev/image/fetch/s--gp5P5SDr--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/720899/6b13c674-ecae-48f5-8d68-0dc91d890616.jpeg"
      avatarSize="100"
      avatarBackgroundColor="#553BFF"
      title="Jack Wilson"
      subtitle="Product Designer, previously at Apple, Adobe, Dropbox"
      backgroundColor="#242731"
      primaryColor="#FFFFFF"
      secondaryColor="#817E96"
      linkColor="#C360FF"
      linksColor="#FC9A78"
      fontFamily="Poppins"
      link="https://youtube.com/"
      links={[{
          id: 'twitter',
          name: 'Twitter',
          url: "http://..."
        },
        {
          id: 'medium',
          name: 'Medium',
          url: "http://..."
        },
        {
          id: 'website',
          name: 'Github',
          url: "http://..."
        }
      ]}
    />
  )
})