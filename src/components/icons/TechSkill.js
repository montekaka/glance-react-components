import React from 'react'
import {
  Angular,
  AntDesign,
  Apache,
  AwsLambda,
  AwsS3,
  Azure,
  Bootstrap,
  Django,
  Firebase,
  Flask,
  Flutter,
  Html5,
  Jquery,
  Json,
  Kotlin,
  Mongo,
  MySql,
  Nginx,
  Python,
  Reactjs,
  Redis,
  Swift,
  Tailwindcss,
  Typescript
} from './tech-skills'

const Logo = ({skill}) => {
  switch(skill) {
    case 'angular':
      return <Angular/>
    case 'ant-design':
      return <AntDesign/>
    case 'apache':
      return <Apache/>
    case 'aws-lambda':
      return <AwsLambda/>
    case 'aws-s3':
      return <AwsS3/>
    case 'azure':
      return <Azure/>
    case 'bootstrap':
      return <Bootstrap/>
    case 'django':
      return <Django/>
    case 'firebase':
      return <Firebase/>
    case 'flask':
      return <Flask/>
    case 'flutter':
      return <Flutter/>
    case 'html5':
      return <Html5/>
    case 'jquery':
      return <Jquery/>
    case 'json':
      return <Json/>
    case 'kotlin':
      return <Kotlin/>
    case 'mongo':
      return <Mongo/>
    case 'my-sql':
      return <MySql/>
    case 'nginx':
      return <Nginx/>
    case 'python':
      return <Python/>
    case 'react-js':
      return <Reactjs/>
    case 'redis':
      return <Redis/>
    case 'swift':
      return <Swift/>
    case 'tailwindcss':
      return <Tailwindcss/>
    case 'typescript':
      return <Typescript/>            
    default:
      return null;
  }
  
}

const TechSkill = ({backgroundColor, skill}) => {
  return (
    <div style={{
      width: '32px',
      height: '32px',
      display: 'flex',
      justifyContent: 'center',
      // alignContent: 'center',
      alignItems: 'center',
      backgroundColor,
      borderRadius: '8px'
    }}>
      <Logo skill={skill}/>
    </div>
  )
}

export default TechSkill;