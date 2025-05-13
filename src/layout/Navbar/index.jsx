import React from 'react'
import SignUpAd from './components'
import { FiChevronDown } from "react-icons/fi";
import { MobileWrapper, NavbarWrapper } from './Navbar.styled'
import {logo,search,profile,korzinka }from "./image/index"
const Navbar = () => {
  return (
    <>
      <SignUpAd />
      <NavbarWrapper>
        <img src={logo} alt="logo" className="logo" />
        <nav className="sections">
          <ul>
            <li className="first">
              <a href="#on-sale">Shop</a>
              <FiChevronDown size={24} />
            </li>
            <li>
              <a href="#new-arrivals">On Sale</a>
            </li>
            <li>
              <a href="#new-arrivals">New Arrivals</a>
            </li>
            <li>
              <a href="#brands">Brands</a>
            </li>
          </ul>
        </nav>
        <div className="input">
          <input type="text" placeholder="Search for products..." />
          <img src={search} alt="search" />
        </div>
        <div className="icons">
          <img src={korzinka} alt="korzinka" />
          <img src={profile} alt="profile" />
        </div>
      </NavbarWrapper>
      <MobileWrapper>
        
      </MobileWrapper>
    </>
  );
}

export default Navbar