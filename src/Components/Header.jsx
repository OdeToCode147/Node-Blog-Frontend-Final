import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const myFunction = () => {
    let x = document.getElementsByClassName("Navbar")[0];
    if (x.className === "Navbar") {
      x.classList.add("responsive");
    } else {
      x.classList.remove("responsive");
    }
  };

  return (
    <div className="Navbar ">
      <div className="logo">
        <p className="Vlogo">The</p>
        <h2 className="Hlogo">Siren</h2>
      </div>
      <br />
      <div className="Navigation">
        <NavLink to="/" className="title">
          Home
        </NavLink>
        <NavLink to="/Bollywood" className="title">
          Bollywood
        </NavLink>
        <NavLink to="/Technology" className="title">
          Technology
        </NavLink>
        <NavLink to="/Hollywood" className="title">
          Hollywood
        </NavLink>
        <NavLink to="/Fitness" className="title">
          Fitness
        </NavLink>
        <NavLink to="/Food" className="title">
          Food
        </NavLink>
      </div>
      {/* <span className="material-symbols-outlined icon" onClick={myFunction}>
        menu
      </span> */}
    </div>
  );
};
export default Header;
