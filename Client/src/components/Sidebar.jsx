import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { Navigation } from 'react-minimal-side-navigation';
import Calendar from 'react-calendar';
import moment from 'moment';
import Dropdown from './Dropdown.jsx';
import Navbar from './Navbar.jsx';
import 'moment/locale/ko';
import 'react-calendar/dist/Calendar.css';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

export default function Sidebar({}) {
  const [value, onChange] = useState(new Date());
  const [dropdonwAdd, setdropdownAdd] = React.useState(false);

  const history = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
    {/* 최상단바 */}
    <Navbar />

    {/* 추가버튼 */}
    <button className='addBtn' onClick={e => setdropdownAdd(!dropdonwAdd)} onBlur={() => setdropdonwAdd(false)}>
        {dropdonwAdd ? '추가하기 ▲' : '추가하기 ▼'}
        <Dropdown visibility= {dropdonwAdd}>
          <ul>
            <li>프로젝트</li>
            <li>일정</li>
          </ul>
        </Dropdown>
      </button>

      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      />

      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
        }`}
      ></div>

      <Navigation className="sidebar-navigation"
        activeItemId={location.pathname}
        onSelect={({itemId}) => {
            // history.push(itemId);
          }}
          items={[
            {
              title: '내 캘린더',
              itemId: '/myCalendar',
              subNav: [
                {
                  title: 'a',
                  itemId: '/myCalendar/a',
                },
                {
                  title: 'b',
                  itemId: '/myCalendar/b',
                },
              ],
            },
            {
              title: 'Friend 캘린더',
              itemId: '/friendCalendar',
              subNav: [
                {
                  title: 'c',
                  itemId: '/friendCalendar/c',
                },
                {
                  title: 'd',
                  itemId: '/friendCalendar/d',
                },
              ],
            },
            {
              title: 'Company 캘린더',
              itemId: '/companyCalendar',
              subNav: [
                {
                  title: 'e',
                  itemId: '/companyCalendar/e',
                },
              ],
            },
            {
              title: 'Holiday 캘린더',
              itemId: '/holidayCalendar',
              subNav: [
                {
                  title: 'f',
                  itemId: '/holidayCalendar/f',
                },
              ],
            },
          ]}
        />

        <Calendar 
          onChange={onChange} value={value}  formatDay={(locale, date) => moment(date).format("D")}
        />
    </>
  );
}