import React, { useState } from "react";
import InputTaskInfo from './InputTaskInfo'
import '../../App.css'
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
            {format(currentMonth, 'yyyy')}년 
            {format(currentMonth, 'M')}월
          </span>
        </span>
      </div>
      <div className='col col-end'>
        <Icon className="leftArrow" icon="bi:arrow-left-circle-fill" onClick={prevMonth} />
        <Icon className="rightArrow" icon="bi:arrow-right-circle-fill" onClick={nextMonth} />
      </div>
    </div>
  );
};

//Days
const RenderDays = () => {
  const days = [];
  const date = ['일', '월', '화', '수', '목', '금', '토'];

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
const RenderCells = ({ currentMonth, selectedDate, onDateClick, today}) => {
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
      formattedDate = format(day, 'dd');
      const cloneDay = day;
      const isToday = isSameDay(day, today);
      const isDisabled = !isSameMonth(day, monthStart);

      days.push (
        <div
          className={`col cell ${
            isDisabled ? 'disabled'
              : isSameDay(day, selectedDate) ? 'selected'
                : format(currentMonth, 'M') !== format(day, 'M') ? 'not-valid'
                  : 'valid'
          } ${
            isToday ? 'today' : ''
          }`}
          style={{
            backgroundColor: isDisabled ? '#FFFF' : '#FFF', 
            color: isDisabled ? '#c8c8c8' : '',
          }}
          key={day}
          onClick={() => onDateClick(cloneDay)}
        >
  
          <span className={format(currentMonth, 'M') !== format(day, 'M')
            ? 'text not-valid' : '' } id="selectedDay">
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
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [events, setEvents] = useState([]);

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const onDateClick = (day) => {
    setSelectedDate(day);
    openModal();
  };

  const TodayClick = () => {
    const nowDate = new Date(); 
    setSelectedTime(nowDate.setHours(0, 0, 0, 0));
    setCurrentMonth(nowDate); 
    setSelectedDate(nowDate); 
  }

  const handleScheduleRegistration = (newEvent) => {
    setEvents([...events, newEvent]);
    closeModal();
  };

  return (
    <div className="TaskCalendarWrapper">
      <div className={`taskCalendar ${isSidebarVisible ? 'sidebarVisible' : ''}`}>
        <div className="userCalendar">My Calendar</div>
        <InputTaskInfo />
      </div>

      <div className={`mainCalendar ${isSidebarVisible ? 'sidebarVisible' : ''}`}>
        <div className="TodayBtnWrapper">
          <button className="TodayBtn" onClick={TodayClick}>Today</button>
        </div>
      </div>

      <div className={`BigCalendar ${isSidebarVisible ? 'sidebarVisible' : ''}`}>
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
          events={events}
          onEventSubmit={handleScheduleRegistration}
        />
      </div>
    </div>
  );
}