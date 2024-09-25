import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import "./Cart.css";
=======
import { smartfonData } from "../../data/productsData";
import { FaChevronRight, FaMinus, FaPlus } from "react-icons/fa6";
import Products from "../../components/products/Products";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoHeart } from "react-icons/go";
import { MdBalance } from "react-icons/md";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../context/cartSlice";
import { NumberFormat } from "../../hook/numberFormat";
>>>>>>> bf1ce73f347466f4ae69102295a00bfcbc4df353

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartData = useSelector((ombor) => ombor.cart);
  let totalPrice = cartData.reduce((a, b) => a + b.price * b.quantity, 0);

  return (
    <div className="cart">
<<<<<<< HEAD
      <div className="cart_header">
        <Link to={"/"} /> Bo'sh sahifa
      </div>
=======
      {!cartData?.length ? (
        <div className="empty_block">
          <div className="cart_header">
            <Link to="/">Bosh sahifa</Link>
            <FaChevronRight />
            <p>Savatcha</p>
          </div>
          <div className="empty_block_item">
            <img
              src="https://idea.uz/_next/image?url=%2Fimg%2Fothers%2Fbasket-empty.png&w=1920&q=75"
              alt=""
            />
            <h2>Savatchada hozircha hech narsa yoʻq</h2>
            <p>
              siz xaridni asosiy sahifadan boshlashingiz yoki qidiruvdan
              foydalanishingiz mumkin
            </p>
            <button onClick={() => navigate("/")}>Bosh sahifaga o'tish</button>
          </div>
        </div>
      ) : (
        <div className="cart_wrapper">
          <div className="cart_header">
            <Link to="/">Bosh sahifa</Link>
            <FaChevronRight />
            <p>Savatcha</p>
          </div>
          <div className="cart_body">
            <section>
              {cartData?.map((item, index) => (
                <div className="cart_item" key={index}>
                  <div className="cart_item_left">
                    <img src={item.images[0]} alt={""} />
                    <div className="cart_item_info">
                      <h3>{NumberFormat(item.price)} so'm</h3>
                      <p>{item.name}</p>
                      <span>Mahsulot kodi: 4477</span>
                    </div>
                  </div>
                  <div className="cart_item_actions">
                    <RiDeleteBin6Line
                      onClick={() => dispatch(removeFromCart(item.id))}
                    />
                    <GoHeart />
                    <MdBalance />
                    <div className="cart_item_count">
                      <button
                        onClick={() => dispatch(decrementQuantity(item.id))}
                      >
                        <FaMinus />
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        onClick={() => dispatch(incrementQuantity(item.id))}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            <aside>
              <h3>Sizning savatchangiz</h3>
              {cartData.map((item, index) => (
                <div className="totalInfoItem">
                  <p>
                    {item.name} ({item.quantity})
                  </p>
                  <div>
                    <span>Narx</span>
                    <span>{NumberFormat(item.price * item.quantity)} soʻm</span>
                  </div>
                </div>
              ))}
              <div className="totalInfo">
                <p>Sizning to'lovingiz:</p>
                <span>
                  {NumberFormat(totalPrice)} x 1 = {NumberFormat(totalPrice)}
                </span>
              </div>
            </aside>
          </div>
        </div>
      )}
      <Products title={"Smartfonlar"} data={smartfonData} />
>>>>>>> bf1ce73f347466f4ae69102295a00bfcbc4df353
    </div>
  );
}

export default Cart;
