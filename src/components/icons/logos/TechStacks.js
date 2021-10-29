import React from 'react';

const TechStacks = ({rect_fill, path_fill, width, height}) => {
  return (
    <svg style={{width, height, borderRadius: 8}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_126:1933)">
      <path d="M2 7L12 1L22 7L12 13L2 7Z" stroke="#818AB6" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
      <path d="M22 12L12 18L2 12" stroke="#818AB6" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
      <path d="M22 17L12 23L2 17" stroke="#818AB6" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
      </g>
      <defs>
      <filter id="filter0_d_126:1933" x="-3.9436" y="-0.166199" width="31.8872" height="32.3324" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_126:1933"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_126:1933" result="shape"/>
      </filter>
      </defs>
    </svg>
  )
}

export default TechStacks;