import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui fixed menu">
      {/* Left side - Brand */}
      <Link to="/" className="item">
      <h2 style={{ position: "relative", left: "0px", top: "0px",color: "#27ae60" }}>SRS Kitchen</h2>
      </Link>
      
      {/* Right side - Navigation */}
      <div className="right menu">
        <Link to="/menu" className="item">
          View Menu
        </Link>
         <Link to="/contact" className="item">
          Contact Us
        </Link>
        <div className="item">
          <button className="ui green button">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
