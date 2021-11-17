import React from 'react';

const ProductHunt = ({rect_fill, path_fill, width, height}) => {
	// <!-- #12100E -->
	return (
		<svg style={{width, height, borderRadius: 8}} viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
			<g>													
				<path d="M3.10005 0.599976H0.800049V2.99998H3.10005C3.80005 2.99998 4.30005 2.49998 4.30005 1.79998C4.30005 1.09998 3.70005 0.599976 3.10005 0.599976Z" fill={path_fill}/>
			</g>
		</svg>
	)
}

export default ProductHunt;
