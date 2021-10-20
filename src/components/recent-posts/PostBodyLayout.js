import React, {useRef} from 'react';
import useDraggableScroll from 'use-draggable-scroll';

const PostBodyLayout = (props) => {
  const {horizontal} = props;
  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref);

  if(horizontal) {
    return (
      <div className="scroll-box__wrapper" style={{
        // display: 'flex', 
        paddingBottom: '26px',
        display: "flex",
        overflowY: "hidden",
        overflow: "-moz-scrollbars-none",
        // minWidth: "800px"
      }}
      ref={ref} onMouseDown={onMouseDown}
      >        
        {props.children}
      </div>
    )
  } else {
    return (
      <div style={{
        paddingBottom: '26px'
      }}>
        {props.children}
      </div>
    )
  }
}

export default PostBodyLayout;