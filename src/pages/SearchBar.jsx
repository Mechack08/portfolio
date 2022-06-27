import React from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <div className="serchbar">
        <input type="text" name="serchbar" placeholder="Find an article here" />
        <FiSearch className="icon" />
      </div>
      <div className="selection">
        <select name="categories">
          <option value="">All Categories</option>
          <option value="web design">Web Design</option>
          <option value="web frontend">Web Coding Frontend</option>
          <option value="web backend">Web Coding Backend</option>
        </select>
        <MdOutlineKeyboardArrowDown className="icon" />
      </div>
    </div>
  );
};

export default SearchBar;
