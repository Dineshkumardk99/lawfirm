import React from "react";
import Styles from "./NavBar.module.css";
import Vector from "../../assets/Vector.jpg";

const NavBar = () => {
  return (
    <nav className={Styles.NavbarWrapper}>
      <div >
        <img src={Vector} alt="companysymbol" />
      </div>
      <div className={Styles.nav_text}>
        <p>Home</p>
        <p>Attorneys</p>
        <p>Practice Areas</p>
        <p>About Us</p>
      </div>
      <button className={Styles.Navbarbtn}> Contact Now </button>
    </nav>
  );
};

export default NavBar;
