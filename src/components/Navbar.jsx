import React from "react";
import s from'./Navbar.module.css';




const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}><a>Profile</a></div>
      <div className={s.item}><a>Massages</a></div>
      <div className={s.item}><a>News</a></div>
      <div className={s.item}><a>Musuc</a></div>
      <div className={s.item}><a>Setting</a></div>
    </nav>
  )
}
export default Navbar;