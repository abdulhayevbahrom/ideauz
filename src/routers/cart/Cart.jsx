import React from "react";
import "./Cart.css"
import { Link } from "react-router-dom";
import { smartfonData } from "../../data/productsData"
import { FaChevronRight } from "react-icons/fa6";
// import { FaAngleRight } from "react-icons/fa";1
import Products from '../../components/products/Products';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartData = useSelector((ombor) => ombor.Cart);

  return (
    <div className="cart">
      {!cartData?.length ? (
        <div className="empty_block">
           <div className="cart_header">
             <Link to="/">Bosh sahifa</Link>
             <FaChevronRight />
            <p>Savatcha</p>
           </div>
         <div className="empty_block_item">
          <img src="https://idea.uz/_next/image?url=%2Fimg%2Fothers%2Fbasket-empty.png&w=1920&q=75" alt="" />
          <h2>Savatchada hozircha hech narsa yoʻq</h2>
          <p>siz xaridni asosiy sahifadan boshlashingiz yoki qidiruvdan foydalanishingiz mumkin</p>
          <button onClick={() => navigate("/")}>Bosh sahifaga o'tish</button>
          </div>
        </div>
      ) : (
        <div>
          <div className="cart_header">
            <Link to="/">Bosh sahifa</Link>
            <FaChevronRight />
            <p>Savatcha</p>
          </div>
          <div className="cart_body">
            <section>
              <div className="section_right">
                <div className="section_right_img">
                  {cartData?.map((item, index) => (
                    <div key={index}> <img src={item.images[0]} alt={''} />
                    </div>
                  ))}

                  <div className="section_right_text"></div>
                </div>
              </div>
              <div className="section_left">
                <h1>aa</h1>
              </div>
            </section>

            <aside>
              <h1>log</h1>
            </aside>
          </div>
        </div>

      )}
      <Products title={"Smartfonlar"} data={smartfonData} />
    </div>

  );
}


export default Cart;
