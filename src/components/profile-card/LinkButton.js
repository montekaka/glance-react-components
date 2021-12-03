import React, {useState} from 'react';
import copy from 'copy-to-clipboard';

const LinkButton = ({link, fontFamily, color, backgroundColor}) => {
  const [copied, setCopied] = useState(false);


  const style={
    color,
    backgroundColor,
    fontFamily,
    fontSize: "18px",
    fontStyle: "SemiBold",
  }

  const handleCopy = () => {
    copy(link);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000)
  }

  return (
    <div className="header-link-button" style={style} onClick={handleCopy}>
      {copied ? "Copied":"Copy Link"}
    </div>
  )
}

export default LinkButton;