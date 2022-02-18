import React from "react";
import { FaShopify } from "react-icons/fa";
import { RiFileAddFill } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

import "./styles.scss";

export const Header: React.FC = () => {
  return (
    <header className="Container-Header">
      <div className="containerTitleShop">
        <FaShopify />
        <h3>Shoop Fy</h3>
      </div>
      <div className="navigation">
        <nav>
          <Link to="/home">
            <AiFillHome />
            Home
          </Link>
          <Link to="/">
            <CgProfile />
            Profile
          </Link>
          <Link to="/newproduct">
            <RiFileAddFill />
            <span>Add new Product</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};
