import React, { useEffect, useState } from "react";
import "./Search.css";
import { Link, useParams } from "react-router-dom";
import { FaChevronRight} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BsFillGridFill } from "react-icons/bs";
import { CiGrid2H } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addToHeart, removeFromHeart } from "../../context/heartSlice";
import { addToCart, removeFromCart } from "../../context/cartSlice";
import { addToCompare, removeFromCompare } from "../../context/compare";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import {
  uyUchunMaishiyTexnikaData,
  kattaMaishiyTexnikaData,
  maishiyTexnika,
  smartfonData,
} from "../../data/productsData";
import { MdBalance } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdCheckmark } from "react-icons/io";
import { CgShoppingBag } from "react-icons/cg";

function Search() {
  const dispatch = useDispatch();
  const heartData = useSelector((ombor) => ombor.heart);
  const compareData = useSelector((omborCompare) => omborCompare.compare);
  const cartData = useSelector((ombor) => ombor.cart);

  function addToFavorites(product) {
    dispatch(addToHeart(product));
  }

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
                  <p>{name}</p>                
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
            <p className="not_found" >Sizning soʻrovingiz boʻyicha hech narsa topilmadi</p>
          ) : (
            <div className="search_products">
              {data?.map((item,index) =>
             
                <div className="search_products_item" key={index}>
                  
                  <div className="product_icon_head">
                    {compareData?.some((i) => i.id === item.id) ? (
                      <MdBalance
                      className="red-compare"
                      onClick={() => dispatch(removeFromCompare(item.id))}
                        />
                        
                    ) : (
                      <MdBalance onClick={() => dispatch(addToCompare(item))} />
                    )}
                    {heartData?.some((i) => i.id === item.id) ? (
                      <FaHeart
                      className="redHeart"
                      onClick={() => dispatch(removeFromHeart(item.id))}
                      />
                    ) : (
                      <AiOutlineHeart onClick={() => addToFavorites(item)} />
                    )}
                  </div>

                    <img className="product_img"s  src={item.images[0]} alt="img" />
                    <b>{item.price} so'm</b>
                    <p className="product_price_credit">
                        {Math.floor(item.price / 6)} so'mdan
                    </p>
                    <p className="product_name">{item.name}</p>
                    <span className="product_brend">
                      brend:
                      <Link to={"/"}>{item.brend}</Link>
                    </span>
                    <div className="product_actions">
                      <button>Hozirni o'zidayoq xarid qilish</button>
                      {cartData.some((i) => i.id === item.id) ? (
                        <button
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className="product_item_orangeBtn"
                >
                  <IoMdCheckmark />
                </button>
              ) : (
                <button onClick={() => dispatch(addToCart(item))}>
                  <CgShoppingBag />
                </button>
              )}
            </div> 
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
