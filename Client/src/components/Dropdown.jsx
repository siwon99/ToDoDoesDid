import React from "react"

const Dropdown = props => {
  const [visibility, setVisibility] = React.useState(false);
  const [repeat, setRepeat] = React.useState(null);

  React.useEffect(() => {
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

