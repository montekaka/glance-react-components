import React from 'react';

const Hashnode = ({rect_fill, path_fill, width, height}) => {
	// <!-- #12100E -->
	return (
		<svg style={{width, height, borderRadius: 8}} viewBox="0 0 337 337" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
			<g>
          <rect x="113" y="113" width="111" height="111" rx="55.5" fill={rect_fill}/>
          <path fillRule="evenodd" clipRule="evenodd" d="M23.155 112.598c-30.873 30.874-30.873 80.93 0 111.804l89.443 89.443c30.874 30.873 80.93 30.873 111.804 0l89.443-89.443c30.873-30.874 30.873-80.93 0-111.804l-89.443-89.443c-30.874-30.873-80.93-30.873-111.804 0l-89.443 89.443zm184.476 95.033c21.612-21.611 21.612-56.651 0-78.262-21.611-21.612-56.651-21.612-78.262 0-21.612 21.611-21.612 56.651 0 78.262 21.611 21.612 56.651 21.612 78.262 0z" fill={path_fill}/>          
			</g>
		</svg>
	)
}

export default Hashnode;
