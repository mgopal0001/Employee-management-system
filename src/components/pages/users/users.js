import { useEffect } from "react";
import NavImage from "../../../assets/Group 46@2x.png";
import MoptroLogo from "../../../assets/moptro logo.png";
import SearchLogo from "../../../assets/search-icon.svg";
import "./style.css";
const employees = require("../../../constants/userData.json");

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
          <input type="text" placeholder="Search With Name" />
          <img src={SearchLogo} className="search-logo" />
        </div>
        <div className="employees-container">
          {employees.map((employee, index) => (
            <div
              key={employee.id}
              className="employee-card-con"
              style={{
                marginRight: index % 2 === 0 ? "20px" : "0",
                marginLeft: index % 2 !== 0 ? "20px" : "0",
              }}
            >
              <div className="emp-id-con">EMP : {employee.empId}</div>
              <br></br>
              <div className="emp-name-con">Name : {employee.name}</div>
              <br></br>
              <div className="emp-dob-con">
                DOB : <span className="orange">{employee.DOB}</span>
              </div>
              <br></br>
              <div className="emp-role-con">
                Role : <span className="green">{employee.Role}</span>
              </div>
              <br></br>
              <div className="serial-con">{employee.empId}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default User;
