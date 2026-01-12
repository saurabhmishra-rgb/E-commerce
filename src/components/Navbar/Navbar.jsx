import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

// Importing from src/assets (processed by Vite)
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.png";
import basketIcon from "../../assets/basket_icon.png";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = React.useState("home");

  return (
    <div className="navbar">
      {/* Logo from src/assets */}
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>

      {/* Navbar Menu */}
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <Link
          to="/services"
          onClick={() => setMenu("services")}
          className={menu === "services" ? "active" : ""}
        >
          services
        </Link>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact-us
        </a>
      </ul>

      {/* Right Section */}
      <div className="navbar-right">
        {/* Search icon (src/assets) */}
        <img style={{ cursor: "pointer" }} src={searchIcon} alt="search" />

        <div className="navbar-search-icon">
          {/* Basket icon (src/assets) */}
          <Link to="/cart">
            <img src={basketIcon} alt="basket" />
          </Link>
          <div className="dot"></div>
        </div>

        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
     

      {/* Example static image from public/images */}
      <div className="navbar-banner">
        <img
          src="/e-commerce_website/images/banner.jpg"
          alt=""
          className="banner"
        />
      </div>
    </div>
  );
};

export default Navbar;
