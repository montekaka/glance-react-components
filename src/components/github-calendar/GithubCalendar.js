import React from 'react';
import useFetchGithub from './useFetchGithub';
import ContentLoader from "react-content-loader"
import './style.css'

const GithubCalendar = ({colors, username}) => {
  const [contributions, totalContributions, loading, error] = useFetchGithub(`https://gh-calendar.rschristian.dev/user/${username}`);
  // const colors = ["#1B275A","#BBE3D5","#006d32","#26a641","#39d353"];

  const calendarStyle = {
    display: 'flex',
    gap: '2px',
    margin: "26px 26px 0px 26px"
  }

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
  } else if(contributions && contributions.length > 0 && colors && colors.length > 0) {
    return (
      <div style={calendarStyle}>
        {
          contributions.map((weekly, wi) => <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
            }}
            key={`week_${wi}`}>{
            weekly.map((daily, di) => 
              <div key={`daily_${di}`}
                style={{
                  borderRadius: '2px',
                  backgroundColor: colors[daily.intensity]
                }} 
                className="github-calendar-item"></div>
            )
          }</div>)
        }
      </div>
    )
  }

  return null;
}

export default GithubCalendar;