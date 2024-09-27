import React, { useState } from "react";
import "./Login.css";
import { TfiClose } from "react-icons/tfi";
import InputMask from "react-input-mask";
import { Link } from "react-router-dom";

function Login() {
  const [phone, setPhone] = useState("");

  const handleChange = (e) => {
    setPhone(e.target.value);
  };
  return (
    <div className="login">
      <div className="modal">
        <TfiClose className="x-icon" />
        <h4>Kirish</h4>
        <form>
          <InputMask
            mask="+998 (99) 999-99-99"
            value={phone}
            onChange={handleChange}
            className="phone-input"
            placeholder="+998 (__) ___-__-__"
          >
            {(inputProps) => <input {...inputProps} type="tel" />}
          </InputMask>
          <input type="password" />
          <input
            type="submit"
            value="Kirish"
            onSubmit={(e) => e.preventDefault}
          />
        </form>
        <div className="recovery-password">
          <Link to={"/recovery-password"}>Parolni unutdingizmi?</Link>
          <h4>
            Akkauntingiz yo'qmi?{" "}
            <Link to={"/registration"}>Ro'yxatdan o'tish</Link>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Login;
