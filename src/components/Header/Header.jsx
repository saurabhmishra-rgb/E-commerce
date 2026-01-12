import React from "react";
import "./Header.css";
import headerImg from "../../assets/header_img.png";  


const Header = () => {
  return (
    <div
    
      className="header"
      style={{
        backgroundImage: `url(${headerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
     
      <div className="header-content">
        <h2>Order your favourite food here</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          cupiditate?
        </p>
        <button>View Menu</button>
        
      </div>
    </div>
  );
};

export default Header;
