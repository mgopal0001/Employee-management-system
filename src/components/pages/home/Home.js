import "./style.css";
import NavImage from "../../../assets/Group 46@2x.png";
import MoptroLogo from "../../../assets/moptro logo.png";
import { PRODUCTIVITY_DAYS } from "./constants";
const Home = () => {
  return (
    <>
      <div className="home-page-container">
        <div className="nav-con">
          <img src={NavImage} />
        </div>
        <div className="motpro-logo-con">
          <img src={MoptroLogo} />
          <div className="count-con">4</div>
        </div>
        <div className="employee-dashboard-con">
          <div className="dashboard-text-con">
            Employee Productivity Dashboard
          </div>
          {PRODUCTIVITY_DAYS.map((productiovity) => (
            <div className="productivity-con">
              <div className="day-percentage-con">
                <div className="day-con">
                  Productivity on {productiovity.day}
                </div>
                
                  <div className="percentage-con">
                    {productiovity.percentage}%
                </div>
              </div>
              <div className="parent-percentage-con">
                <div className="progress-bar-con" style={{width:`${productiovity.percentage}%`}}>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
