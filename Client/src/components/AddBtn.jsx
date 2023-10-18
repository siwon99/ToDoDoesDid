import Dropdown from "./Dropdown";
import React, {useState} from "react";

export default function AddBtn() {
  const [view, setView] = useState(false); 

  return (
    <>
      <ul className="addBtn" onClick={() => {setView(!view)}}> 
      	추가하기{" "}
      	{view ? '▲' : '▼'} 
      	{view && <Dropdown />} 
      </ul>
    </>
  )
}