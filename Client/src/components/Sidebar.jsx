import React, { useCallback, useState } from "react";
import AddBtn from './AddBtn';
import SmallCalendar from './SmallCalendar';
import SearchBar from './SearchBar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

export default function Sidebar() {
  const [toggle, setToggle] = useState(false);

  const onIconClick = useCallback(() => {
    setToggle((e) => !e);
  }, []);
  
  return (
    <>
      <div className="nav">
        <div id="toggleBtn" onClick={onIconClick}>
          {toggle ? <GrClose className="close" /> : <GiHamburgerMenu className="hamburger" />}
        </div>

        <nav id="sideNav" className={toggle ? "show" : "hide"}>
          <AddBtn>
          </AddBtn>
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
    </>
  );
}