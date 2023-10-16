import React, { useEffect, useState } from "react"

const Dropdown = props => {
  const [visibility, setVisibility] = useState(false);
  const [repeat, setRepeat] = useState(null);

  useEffect(() => {
    if(props.visibility) {
      clearTimeout(repeat);
      setRepeat(null);
      setVisibility(true);
    } else {
      setRepeat(setTimeout(() => {
        setVisibility(false);
      }, 400));
    }
  }, [props.visibility]);

  return (
    <article className={`components-dropdown ${props.visibility ? 'slide-fade-in-dropdown' : 'slide-fade-out-dropdown'}`}> 
      {visibility && props.children} 
    </article>
  )
};

export default Dropdown;

