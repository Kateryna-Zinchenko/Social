import React from "react";
import s from './Navbar.module.css';

// let s = {
//     'nav': 'Navbar_nav__uz3sM',
//     'item': 'Navbar_item__Z8Gxk'
// }

const Navbar = () => {
  return <nav className={s.nav}>
      <div className={s.item}>
          <a href='#'>Profile </a>
      </div>
      <div className={s.item}>
          <a href='#'>Messages</a>
      </div>
      <div className={s.item}>
          <a href='#'>News</a>
      </div>
      <div className={s.item}>
          <a href='#'>Music</a>
      </div>
      <div className={s.item}>
          <a href='#'>Settings</a>
      </div>
  </nav>
}

export default Navbar;