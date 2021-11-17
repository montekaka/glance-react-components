import React from 'react';

const Website = ({rect_fill, path_fill, width, height}) => {
	// <!-- #12100E -->
	return (
		<svg style={{width, height, borderRadius: 8}} viewBox="0 0 64 64" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
			<circle cx="32" cy="32" fill="none" r="24" stroke={path_fill} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/><line fill="none" stroke={path_fill} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="32" x2="32" y1="11" y2="52"/><line fill="none" stroke={path_fill} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="11" x2="52" y1="32" y2="32"/><line fill="none" stroke={path_fill} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="16" x2="48" y1="19" y2="19"/><line fill="none" stroke={path_fill} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="16" x2="48" y1="45" y2="45"/><path d="  M26,12.2c0,0-6.5,8.3-6.5,19.8s6.3,19.5,6.3,19.5" fill="none" stroke={path_fill} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/><path d="  M37.4,12.2c0,0,6.5,8.3,6.5,19.8s-6.3,19.5-6.3,19.5" fill="none" stroke={path_fill} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
		</svg>
	)
}

export default Website;
