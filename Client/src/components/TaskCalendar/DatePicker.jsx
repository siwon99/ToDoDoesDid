import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from 'date-fns/esm/locale';
import '../../App.css'
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineAccessTime } from "react-icons/md";


const DateRangePicker = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleStartDateChange = (date) => {
    setStartDate(date);
    onDateChange({ startDate: date, endDate });
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    onDateChange({ startDate, endDate: date });
  };

  return (
    <div className="daterangepicker">
      <MdOutlineAccessTime className="dateTimer"/>
      <div className="pickerWrap">
        <DatePicker 
          locale={ko}
          className="startdatepicker"
          placeholderText="날짜 선택하기"
          dateFormat={"YYY.MM.dd (eee)"}
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          minDate={new Date()}
          starDate={startDate}
          endDate={endDate}
        />

        <DatePicker 
          locale={ko}
          className="enddatepicker"
          placeholderText="날짜 선택하기"
          dateFormat={"YYY.MM.dd (eee)"}
          selected={endDate}
          onChange={handleEndDateChange}
          selectsEnd
          starDate={startDate}
          endDate={endDate}
          minDate={new Date(startDate)}
        />
      </div>
    </div>
  );
};

export default DateRangePicker;