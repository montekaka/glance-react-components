import React from 'react';
import Medium from './logos/Medium';
import Hashnode from './logos/Hashnode';
import Dev from './logos/Dev';
import Behance from './logos/Behance'
import Twitter from './logos/Twitter'
import Github from './logos/Github'
import Dribbble from './logos/Dribbble'
import TechStacks from './logos/TechStacks'
import Facebook from './logos/Facebook'
import Linkedin from './logos/Linkedin'
import ProductHunt from './logos/ProductHunt'
import Youtube from './logos/Youtube'
import Website from './logos/Website'

const Logo = ({iconName, rect_fill, path_fill, width, height}) => { 
  switch(iconName) {
    case 'medium': 
      return <Medium rect_fill={rect_fill} path_fill={path_fill} width={width} height={height}/>
    case 'hashnode': 
      return <Hashnode rect_fill={rect_fill} path_fill={path_fill} width={width} height={height}/>      
    case 'dev': 
      return <Dev rect_fill={rect_fill} path_fill={path_fill} width={width} height={height}/>            
    case 'behance': 
      return <Behance rect_fill={rect_fill} path_fill={path_fill} width={width} height={height}/>                  
    case 'twitter': 
      return <Twitter rect_fill={rect_fill} path_fill={path_fill} width={width} height={height}/>                        
    case 'github': 
      return <Github rect_fill={rect_fill} path_fill={path_fill} width={width} height={height}/>                              
    case 'dribbble': 
      return <Dribbble rect_fill={rect_fill} path_fill={path_fill} width={width} height={height}/>
    case 'tech-stacks':
      return <TechStacks rect_fill={rect_fill} path_fill={path_fill} width={width} height={height}/>
    case 'facebook':
      return <Facebook rect_fill={rect_fill} path_fill={path_fill} width={width} height={height}/>      
    case 'linkedin':
      return <Linkedin rect_fill={rect_fill} path_fill={path_fill} width={width} height={height}/>
    case 'product-hunt':
      return <ProductHunt rect_fill={rect_fill} path_fill={path_fill} width={width} height={height}/>
    case 'youtube':
      return <Youtube rect_fill={rect_fill} path_fill={path_fill} width={width} height={height}/>
    case 'website':
      return <Website rect_fill={rect_fill} path_fill={path_fill} width={width} height={height}/>      
    default:
      // default should be glance icon or loading...
      return <Website rect_fill={rect_fill} path_fill={path_fill} width={width} height={height}/>
  }
}

export default Logo;