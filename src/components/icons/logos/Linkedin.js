import React from 'react';

const Linkedin = ({rect_fill, path_fill, width, height}) => {
	// <!-- #12100E -->
	return (
		<svg style={{width, height, borderRadius: 8}} viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
			<g>									
				<path d="M15.3 0H0.7C0.3 0 0 0.3 0 0.7V15.4C0 15.7 0.3 16 0.7 16H15.4C15.8 16 16.1 15.7 16.1 15.3V0.7C16 0.3 15.7 0 15.3 0ZM4.7 13.6H2.4V6H4.8V13.6H4.7ZM3.6 5C2.8 5 2.2 4.3 2.2 3.6C2.2 2.8 2.8 2.2 3.6 2.2C4.4 2.2 5 2.8 5 3.6C4.9 4.3 4.3 5 3.6 5ZM13.6 13.6H11.2V9.9C11.2 9 11.2 7.9 10 7.9C8.8 7.9 8.6 8.9 8.6 9.9V13.7H6.2V6H8.5V7C8.8 6.4 9.6 5.8 10.7 5.8C13.1 5.8 13.5 7.4 13.5 9.4V13.6H13.6Z" fill={path_fill}/>
			</g>
		</svg>
	)
}

export default Linkedin;
