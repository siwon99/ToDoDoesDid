import { Link } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import Dropdown from "../components/Dropdown";

export default function Navbar() {
  return (
    <div>
      <nav className="nav" onClick={()=> setIsSidebarOpen(true)}>
        < GiHamburgerMenu className="hamburger"/>
        <Dropdown />
      </nav>
    </div>
  );
}
