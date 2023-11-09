import React, { useState } from "react";
import '../App.css'
import { Icon } from '@iconify/react';
import { format, addMonths, subMonths } from 'date-fns';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { isSameMonth, isSameDay, addDays, parse } from 'date-fns';

//Header
const RenderHeader = ({currentMonth, prevMonth, nextMonth}) => {
  return (
    <div className='header row'>
      <div className='col col-start'>
        <span className='text'>
          <span className='textMonth'>
            {format(currentMonth, 'M')}월
          </span>
          {format(currentMonth, 'yyyy')}
        </span>
      </div>
      <div className='col col-end'>
        <Icon icon="bi:arrow-left-circle-fill" onClick={prevMonth} />
        <Icon icon="bi:arrow-right-circle-fill" onClick={nextMonth} />
      </div>
    </div>
  );
};

//Days
const RenderDays = () => {
  const days = [];
  const date = ['Sun', 'Mon', 'Thu', 'Wed', 'Thrs', 'Fri', 'Sat'];

  for(let i = 0; i < 7; i++) {
    days.push(
      <div className="col" key={i}>
        {date[i]}
      </div>
    );
  }

  return <div className="days ow">{days}</div>;
}

//Body
const RenderCells = ({ currentMonth, selectedDate, onDateClick}) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';

  while ( day <= endDate) {
    for(let i = 0; i < 7; i++) {
      formattedDate = format(day, 'd');
      const cloneDay = day;
      days.push (
        <div className={`col cell ${
          !isSameMonth(day, monthStart) ? 'disabled'
          : isSameDay(day, selectedDate) ? 'selected'
          : format(currentMonth, 'M') !== format(day, 'M') ? 'not-valid'
          : 'valid'
          }`}
          key={day}
          onClick={() => onDateClick(parse(cloneDay))}
        >
  
          <span className={format(currentMonth, 'M') !== format(day, 'M')
            ? 'text not-valid' : '' }>
              {formattedDate}
          </span>
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className="row" key={day}>{days}</div>
    );
    days = [];
  }
  return <div className="body">{rows}</div>
}

//달력 함수
export default function TaskCalendar({ isSidebarVisible }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
      setCurrentMonth(addMonths(currentMonth, 1));
  };

  const onDateClick = (day) => {
    setSelectedDate(day);
  };

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
        <div className="TodayBtnWrapper">
          <button className="TodayBtn">Today</button>
        </div>
      </div>

      <div className="BigCalendar">
        <RenderHeader
          currentMonth={currentMonth}
          prevMonth={prevMonth}
          nextMonth={nextMonth}
        />
        <RenderDays />
        <RenderCells
          currentMonth={currentMonth}
          selectedDate={selectedDate}
          onDateClick={onDateClick}
        />
      </div>
    </>
  );
}