import "./style.css";
import Logo from "../../../assets/Group 3@2x.png";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="logo-con">
            <img src = {Logo}/>
        </div>
        <div className="slang-con">#We are Electric</div>
        <div className="email-con">
            <input type="email" placeholder="E-mail"/>
        </div>
        <div className="password-con">
            <input type="password" placeholder="Password"/>
        </div>
        <div className="login-button-con">

            <button className="login-btn">Login</button>
        </div>
        <div className="forgot-password-con">
            Forgot Password?
        </div>
      </div>
    </>
  );
};

export default Login;
