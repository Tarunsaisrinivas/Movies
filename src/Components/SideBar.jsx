import React from "react";
import { Link } from "react-router-dom";
import "../Scss/Sidebar.scss";
import logo from "../assets/movies-tv.png";
import { CgProfile, CgSearch, CgHome } from "react-icons/cg";
import { HiHome } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { TbCategory, TbCategoryFilled } from "react-icons/tb";
const SideBar = () => {
  return (
    <div className="left">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" width={50} />
          </Link>
        </div>
        <div className="icons-set">
          <div className="icons">
            <Link to="/Login">
              <CgProfile className="icon" />
              <FaUser className="hover-icon" />
            </Link>
            <h3>
              <Link to="/Login">Account</Link>
            </h3>
          </div>
          <div className="icons">
            <CgSearch className="icon" />
            <FaSearch className="hover-icon" />
            <h3>Search</h3>
          </div>
          <div className="icons">
            <Link to="/">
              <CgHome className="icon" />
              <HiHome className="hover-icon" />
            </Link>
            <h3>
              {" "}
              <Link to="/">Home</Link>
            </h3>
          </div>
          <div className="icons">
            <TbCategory className="icon" />
            <TbCategoryFilled className="hover-icon" />

            <h3>Category</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
