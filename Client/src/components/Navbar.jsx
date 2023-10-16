import { GiHamburgerMenu } from 'react-icons/gi';
import Dropdown from "../components/Dropdown";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleBtn = () => {
    setIsOpen(true);
  };

  return (
    <>
      <sidebarBtn role="button" onClick={toggleBtn}>
        <GiHamburgerMenu className="hamburger"/>
        <Dropdown />
      </sidebarBtn>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
