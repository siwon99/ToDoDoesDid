import Calendar from 'react-calendar';
import moment from 'moment';
import 'moment/locale/ko';
import 'react-calendar/dist/Calendar.css';
import React, { useState } from 'react';

export default function SmallCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <Calendar 
      onChange={onChange} value={value}  formatDay={(locale, date) => moment(date).format("D")}
    />
  )
}