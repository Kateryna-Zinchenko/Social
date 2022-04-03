import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const navLinkStyles = ({ isActive }) => {
      return{
          color: isActive && '#dea34b',
          fontWeight: isActive ? 'bold' : 'normal'
      }
    }
  return <nav className={s.nav}>
      <div className={s.item}>
          <NavLink style={navLinkStyles} to='/profile'>Profile</NavLink>
      </div>
      <div className={s.item}>
          <NavLink style={navLinkStyles} to='/dialogs'>Dialogs</NavLink>
      </div>
      <div className={s.item}>
          <NavLink style={navLinkStyles} to='/news'>News</NavLink>
      </div>
      <div className={s.item}>
          <NavLink style={navLinkStyles} to='/music'>Music</NavLink>
      </div>
      <div className={s.item}>
          <NavLink style={navLinkStyles} to='/settings'>Settings</NavLink>
      </div>
      <div className={s.item}>
          <NavLink style={navLinkStyles} to='/users'>Users</NavLink>
      </div>
  </nav>
}

export default Navbar;