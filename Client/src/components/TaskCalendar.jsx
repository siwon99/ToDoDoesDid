import React, { useState } from "react";
import '../App.css'

export default function TaskCalendar({ isSidebarVisible }) {
  const [makeTeamBtn, setMakeTeamBtn] = useState(false);

  const TeamBtn = () => {
    setMakeTeamBtn(false);
  };

  return (
    <>
      <div className={`taskCalendar ${isSidebarVisible ? 'sidebarVisible' : ''}`}>
        <div className="userCalendar">user's Calendar</div>
        <button className="TeamBtn" onClick={TeamBtn}>팀만들기</button>
      </div>
      <div className={`mainCalendar ${isSidebarVisible ? 'sidebarVisible' : ''}`}>
        <button className="TodayBtn">Today</button>
        여기는 taskcalendar
      </div>
    </>
  );
}