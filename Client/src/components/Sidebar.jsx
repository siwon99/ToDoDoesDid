import React, { useCallback, useState } from "react";
import AddBtn from './AddBtn';
import SmallCalendar from './SmallCalendar';
import SearchBar from './SearchBar';
import TaskCalendar from './TaskCalendar/TaskCalendar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

export default function Sidebar() {
  const [toggle, setToggle] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisibility(!isSidebarVisible);
  };

  const onIconClick = useCallback(() => {
    setToggle((e) => !e);
  }, []);
  
  return (
    <>
      <div className="nav">
        <div>
          {toggle ? <GrClose className="close" onClick={onIconClick}/> : <GiHamburgerMenu className="hamburger" onClick={onIconClick}/>}
        </div>

        <nav id="sideNav" className={toggle ? "show" : "hide"}>
          <AddBtn />
          <SmallCalendar />
          <ul className="schedule">
            <li>
              <span>중요한 일정</span>
            </li>
            <li>
              <span>프로젝트</span>
            </li>
          </ul>
        </nav>

      <SearchBar />
      </div>
      <TaskCalendar isSidebarVisible={toggle} />
    </>
  );
}