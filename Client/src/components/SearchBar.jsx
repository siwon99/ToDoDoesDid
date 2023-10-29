import React, { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [task, setTask] = useState([]);

  const getValue = (e) => {
    setSearch(e.target.value.toLowerCase());
  } 

  // const serached = task.filter((item) =>
  //   item.name.toLowerCase().includes(search)
  // )

  return (
    <>
      <input className="search" placeholder="일정 검색" onChange={getValue} />
    </>
  )
}