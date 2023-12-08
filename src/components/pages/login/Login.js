import "./style.css";
import Logo from "../../../assets/Group 3@2x.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const users = require("../../../constants/userData.json");

const INITIAL_STATE_OF_USER = {
  email: "",
  password: "",
};

const Login = () => {
  const [user, setUser] = useState(INITIAL_STATE_OF_USER);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleLogin = () => {
    const found = users
      .map((u) => u.email === user.email && u.password === user.password)
      .reduce((acc, flag) => acc || flag, false);

    if (found) {
      navigate("/home");
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);

  return (
    <>
      <div className="login-container">
        <div className="logo-con">
          <img src={Logo} />
        </div>
        <div className="slang-con">#We are Electric</div>
        <div className="email-con">
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="E-mail"
          />
        </div>
        <div className="password-con">
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="login-button-con">
          <button onClick={handleLogin} className="login-btn">
            Login
          </button>
        </div>
        <div className="forgot-password-con">Forgot Password?</div>
      </div>
    </>
  );
};

export default Login;
