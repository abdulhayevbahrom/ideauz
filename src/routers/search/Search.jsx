import React from "react";
import "./Search.css";
import { Link, useParams } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

function Search() {
  const { name } = useParams();
  document.title = name;
  return (
    <div className="search">
      <div className="search_navigation">
        <Link to="/"> Bosh sahifa</Link> <FaChevronRight /> <Link>{name}</Link>
      </div>
      <h1 className="search_title">{name}</h1>
      <div className="search_container">
        <div className="search_bar">
          <div className="search_bar_top">
            <input type="text" id="" />
            <button>
              <FiSearch />
            </button>
          </div>
          <div className="search_bar_bottom">
            <div className="search_bar_bottom_item">
              <Link>Ishlab chiqaruvchi</Link>
              {/* <IoChevronDownOutline /> */}
              <IoChevronUpOutline />
            </div>
            <div className="search_bar_bottom_item">
              <button>
                <FiSearch />
              </button>
              <input type="text" placeholder="Ishlab chiqaruvchini topish" />
            </div>
            <div className="search_bar_bottom_item">
              <div className="filter">
                <input type="checkbox" name="" id="" />
                <label for="subscribe">Artel</label>
              </div>
              <div className="filter">
                <input type="checkbox" name="" id="" />
                <label for="subscribe">Artel</label>
              </div>
              <div className="filter">
                <input type="checkbox" name="" id="" />
                <label for="subscribe">Artel</label>
              </div>
            </div>

            <div className="search_bar_bottom_item">
              <Link>Narx</Link>
              <IoChevronDownOutline />
              {/* <IoChevronUpOutline /> */}
            </div>
            <div className="search_bar_bottom_item">
              <input type="number" name="" id="" />
              <input type="number" name="" id="" />
            </div>
          </div>
        </div>
        <div className="search_aside">
          <div className="search_aside_navligation"></div>
        </div>
      </div>
    </div>
  );
}

export default Search;
