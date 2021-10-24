import React from 'react';
import useFetchGithub from './useFetchGithub';
import './style.css'

const GithubCalendar = ({}) => {
  const [contributions, totalContributions, loading, error] = useFetchGithub("https://gh-calendar.rschristian.dev/user/montekaka");
  const colors = ["#1B275A","#BBE3D5","#006d32","#26a641","#39d353"];

  const calendarStyle = {
    display: 'flex',
    gap: '2px',
    margin: "26px 26px 0px 26px"
  }

  if(contributions.length > 0) {
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