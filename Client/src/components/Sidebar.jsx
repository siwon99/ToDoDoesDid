import React, { useCallback, useState } from "react";
import AddBtn from './AddBtn';
import SmallCalendar from './SmallCalendar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

export default function Sidebar() {
  const [toggle, setToggle] = useState(false);
  const onIconClick = useCallback(() => {
    setToggle((e) => !e);
  }, []);
  
  return (
    <header>
      <div className="nav">
        <div id="toggleBtn" onClick={onIconClick}>
          {toggle ? <GrClose className="close" /> : <GiHamburgerMenu className="hamburger" />}
        </div>
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

    </header>
  );
}