import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useNavigate, useLocation } from "react-router-dom";
import { Navigation } from 'react-minimal-side-navigation';
import Navbar from './Navbar.jsx';
import AddBtn from './AddBtn.jsx';
import SmallCalendar from './SmallCalendar.jsx';

import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';

export default function Sidebar() {
  const history = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleBtn = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div id="sidebar" className={isOpen ? 'open' : ''}>
        <GiHamburgerMenu alt="close" onClick={toggleBtn} onKeyDown={toggleBtn}/>

      <div onClick={() => setIsOpen(false)} className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
          setIsOpen ? "block" : "hidden"}`}
      />
      <div
        className = {
          `fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 
          bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${ isOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
        }`}>    
      </div>

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

    </div>
      <Navbar />
      <AddBtn />
      <SmallCalendar />
    </>
  );
}