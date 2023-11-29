import React, { useState } from "react";
import InputTaskInfo from './InputTaskInfo'
import '../../App.css'
import { Icon } from '@iconify/react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays, parse, getDay } from 'date-fns';


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

// Days
const RenderDays = () => {
  const days = [];
  const date = ['일', '월', '화', '수', '목', '금', '토'];

  for (let i = 0; i < 7; i++) {
    const dayClass = i === 0 ? 'sunday' : i === 6 ? 'saturday' : '';

    days.push(
      <div className={`col ${dayClass}`} key={i}>
        {date[i]}
      </div>
    );
  }

  return <div className="days ow">{days}</div>;
};

//Body
const RenderCells = ({ currentMonth, selectedDate, onDateClick, events, onEventSubmit, today }) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let day = startDate;

  while (day <= endDate) {
    const weekDays = [];

    for (let i = 0; i < 7; i++) {
      const formattedDate = format(day, 'dd');
      const cloneDay = day;
      const isToday = isSameDay(day, today);
      const isDisabled = !isSameMonth(day, monthStart);
      const isSunday = getDay(day) === 0;
      const isSaturday = getDay(day) === 6;
      const dayEvents = events.filter(event => isSameDay(parse(event.startTime), day));

      weekDays.push(
        <div
          className={`col cell ${
            isDisabled
              ? 'disabled'
              : isSameDay(day, selectedDate)
              ? 'selected'
              : format(currentMonth, 'M') !== format(day, 'M')
              ? 'not-valid'
              : 'valid'
            } ${
              isToday ? 'today' : ''
            } ${isSunday ? 'sunday' : ''} ${isSaturday ? 'saturday' : ''}`}
            style={{
              backgroundColor: isDisabled ? '#FFFF' : '#FFF',
              color: isDisabled ? '#c8c8c8' : '',
            }}
            key={day}
            onClick={() => onDateClick(cloneDay)}
          >
          {dayEvents.length > 0 && (
          <div className="event-container">
            {dayEvents.map(event => (
              <div
                key={event.taskId}
                className="event"
              >
                <div className="event-info">
                  <div className="event-name">{event.taskName}</div>
                </div>
              </div>
            ))}
          </div>
        )}

          <span 
          className={format(currentMonth, 'M') !== format(day, 'M') ? 'text not-valid' : ''} id="selectedDay">
            {formattedDate}
          </span>
        </div>
      );
      day = addDays(day, 1);
    }

    rows.push(<div className="row" key={day}>{weekDays}</div>);
  }

  return <div className="body">{rows}</div>;
};

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