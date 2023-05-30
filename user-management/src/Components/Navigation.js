import { useRef } from "react";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import { VscHeart } from "react-icons/vsc";
import { CgSearch, CgProfile } from "react-icons/cg";

function Navigation() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>
        <a className="logo" href="/#">
          Logo
        </a>
      </h3>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">
          Search
          <CgSearch />
        </a>
        <a href="/#">
          Wish-list <VscHeart sx={{ innerHeight: "5px" }} />
        </a>
        <a href="/user-profile">
          User Profile <CgProfile />
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navigation;
