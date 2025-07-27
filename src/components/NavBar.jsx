import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SideBarData";

function NavBar(){
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
    <div className="nav-bar">
      {/* <Link to = '#' className='menu-bars'> */}
      <p onClick={showSidebar}><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
          </svg></p>
      {/* </Link> */}
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to='#' className="menu-bars">X</Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <>
              <li key = {index} className={item.cName}>
              <Link to = {item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
              </li>
              
            </>
            );
          })}
        </ul>
        <Link to='/login'>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#197ce5] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate m-0">Login</span>
          </button>
            </Link>
      </nav>
      
      </>
  )
}
export default NavBar