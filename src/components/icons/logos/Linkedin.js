import React from 'react';

const Linkedin = ({rect_fill, path_fill, width, height}) => {
	// <!-- #12100E -->
	return (
		<svg style={{width, height, borderRadius: 8}} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
			<g>
				<path d="M8,19H5V9h3V19z M19,19h-3v-5.342c0-1.392-0.496-2.085-1.479-2.085c-0.779,0-1.273,0.388-1.521,1.165C13,14,13,19,13,19h-3   c0,0,0.04-9,0-10h2.368l0.183,2h0.062c0.615-1,1.598-1.678,2.946-1.678c1.025,0,1.854,0.285,2.487,1.001   C18.683,11.04,19,12.002,19,13.353V19z"/>
			</g>
			<g><ellipse cx="6.5" cy="6.5" rx="1.55" ry="1.5"/></g>
		</svg>
	)
}

export default Linkedin;
