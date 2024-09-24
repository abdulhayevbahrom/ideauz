import "./Footer.css";
import { SiTelegram } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer_top">
        <div className="footer_top_item">
          <div>
            <img
              src="https://premier.uz/files/global/partners/idea_logo.png"
              alt=""
            />
          </div>
          <div className="footer_icon">
            <SiTelegram />
            <FaFacebook />
            <FaInstagram />
          </div>
        </div>
        <div className="footer_top_item">
          <h4>Xaidorlarga</h4>
          <Link to="/">Savol-javob</Link>
          <Link to="/">Saytda buyurtma berish</Link>
        </div>
        <div className="footer_top_item">
          <h4>idea.uz</h4>
          <Link to="/">Biz haqamizda</Link>
          <Link to="/">Bizning do'konlarimiz</Link>
          <Link to="/">Aloqa</Link>
        </div>
        <div className="footer_top_item">
          <h4>Ma'lomot</h4>
          <Link to="/">Maqolalar</Link>
          <Link to="/">Muddatli to'lov</Link>
          <Link to="/">Oferta</Link>
          <Link to="/">Vakansiyalar</Link>
        </div>
        <div className="footer_top_item">
          <h4>Qayta aloqa</h4>
          <button>Xabar qoldirish</button>
          <h4>71 230 77 99</h4>
          <Link to="/">
            Har kuni 9:00 dan <br />
            21:00 gacha
          </Link>
          <h4>info@gmail.com</h4>
          <Link to="/">Pochta</Link>
        </div>
      </div>
      <div className="footer_bottom"></div>
    </footer>
  );
}
export default Footer;
