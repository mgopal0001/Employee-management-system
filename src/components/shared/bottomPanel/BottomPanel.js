import "./style.css";
import HomeIcon from "../../../assets/home.svg";
import UserIcon from "../../../assets/user-alt-svgrepo-com.svg"

const BottomPanel = () => {
  return (
    <>
      <div className="bottom-panel-con">
        <div className="home-btn-con">
            <img src={HomeIcon} className="home-image"/>
        </div>
        <div className="users-btn-con">
            <img src={UserIcon} className="user-image"/>
        </div>
      </div>
    </>
  );
};
export default BottomPanel;
