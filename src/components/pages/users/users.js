import { useEffect, useState } from "react";
import NavImage from "../../../assets/Group 46@2x.png";
import MoptroLogo from "../../../assets/moptro logo.png";
import SearchLogo from "../../../assets/search-icon.svg";
import "./style.css";
import { findMatchingElements } from "../../../utils";
const employeeList = require("../../../constants/userData.json");

const User = () => {
  const [searchText, setSearchText] = useState("");
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    if (employeeList.length > 0) {
      setEmployees(employeeList);
    }
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    const currentValueInSearchBox = e.target.value;

    if (currentValueInSearchBox === "") {
      setEmployees(employeeList);
    }

    setSearchText(currentValueInSearchBox);
  };

  const handleSearchClick = () => {
    if (searchText === "") {
      return;
    }

    const updatedEmployeeList = findMatchingElements(searchText, employees);
    console.log(updatedEmployeeList);
    setEmployees(updatedEmployeeList);
  };

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
          <input
            name="search"
            value={searchText}
            onChange={handleChange}
            type="text"
            placeholder="Search With Name"
          />
            <img src={SearchLogo} className="search-logo" onClick={handleSearchClick} />
        </div>
        <div className="employees-container">
          {employees.map((employee, index) => (
              <div
                key={employee.empId}
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
