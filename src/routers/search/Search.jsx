import React, { useEffect, useState } from "react";
import "./Search.css";
import { Link, useParams } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BsFillGridFill } from "react-icons/bs";
import { CiGrid2H } from "react-icons/ci";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import {
  uyUchunMaishiyTexnikaData,
  kattaMaishiyTexnikaData,
  maishiyTexnika,
  smartfonData,
} from "../../data/productsData";

function Search() {
  const { name } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchValue, setSearchValue] = useState(name);
  const [data, setData] = useState([]);
  document.title = name;

  const allProducts = [
    ...uyUchunMaishiyTexnikaData,
    ...kattaMaishiyTexnikaData,
    ...maishiyTexnika,
    ...smartfonData,
  ];

  useEffect(() => {
    const filteredProducts = allProducts.filter((product) =>
      product.name?.toLowerCase().includes(searchValue.toLowerCase())
    );
    setData(filteredProducts);
  }, [name, searchValue]);

  console.log("data", data);
  console.log("allProducts", allProducts);
  console.log("name", name);

  return (
    <div className="search">
      <div className="search_navigation">
        <Link to="/"> Bosh sahifa</Link> <FaChevronRight /> <Link>{name}</Link>
      </div>
      <h2 className="search_title">{name}</h2>
      <div className="search_container">
        <div className="search_bar">
          <div className="search_bar_top">
            <input
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={name}
              id=""
            />
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
              <input
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                placeholder="Ishlab chiqaruvchini topish"
                className="manufacturer"
                value={searchTerm}
              />
            </div>
            <div className="search_bar_bottom_item">
              <div className="filter">
                <input type="checkbox" name="" id="" />
                <label htmlFor="subscribe">Artel</label>
              </div>
              <div className="filter">
                <input type="checkbox" name="" id="" />
                <label htmlFor="subscribe">Artel</label>
              </div>
              <div className="filter">
                <input type="checkbox" name="" id="" />
                <label htmlFor="subscribe">Artel</label>
              </div>
            </div>

            <div className="search_bar_bottom_item">
              <Link>Narx</Link>
              <IoChevronDownOutline />
              {/* <IoChevronUpOutline /> */}
            </div>
            <div className="search_bar_bottom_item">
              <div className="input-container">
                <div className="input-box">
                  <label htmlFor="dan">dan</label>
                  <input type="number" id="dan" placeholder="0" />
                </div>
                <div className="input-box">
                  <label htmlFor="gacha">gacha</label>
                  <input type="number" id="gacha" placeholder="100 000" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="search_aside">
          <div className="aside_navligation">
            <div className="aside_navligation_left">
              <Link>Sana bo'yicha</Link>
              <Link>Narx bo'yicha</Link>
              <Link>Ommabopligi bo'yicha</Link>
            </div>
            <div className="aside_navligation_right">
              <Link>Ko'rinishi: </Link>
              <BsFillGridFill className="grid" />
              <CiGrid2H />
            </div>
          </div>
          {!data.length ? (
            <p>Sizning soʻrovingiz boʻyicha hech narsa topilmadi</p>
          ) : (
            <div className="search_products">
              {data?.map((product) => (
                <p key={product.id}> {product.name}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
