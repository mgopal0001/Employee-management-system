import NavImage from "../../../assets/Group 46@2x.png";
import MoptroLogo from "../../../assets/moptro logo.png";
import SearchLogo from "../../../assets/search-icon.svg";
import "./style.css";

const User = () => {
  return (
    <>
      <div className="user-page-container">
        <div className="nav-con">
          <img src={NavImage} />
        </div>
        <div className="motpro-logo-con">
          <img src={MoptroLogo} />
          <div className="count-con">4</div>
        </div>

        <div className="search-bar-con">
            <input type="text" placeholder="Search With Name"/>
            <img src={SearchLogo} className="search-logo"/>
        </div>
        <div className="employee-card-con">
            <div className="emp-id-con">EMP : 1</div>
            <div className="emp-name-con">Name : Arjun</div>
            <div className="emp-dob-con">DOB : <span className="orange">16-11-2000</span></div>
            <div className="emp-role-con">Role : <span className="green">Software Engineer</span></div>
            <div className="serial-con">1</div>
        </div>
      </div>
    </>
  );
};
export default User;
