import { FaGooglePlay } from "react-icons/fa";
import Button from "../../Button/Button";
import "./InstallApp.css";
import app1 from "/assets/app_carousal/final1.png";

const InstallApp = () => {
  return (
    <div>
      <div className="Heading">Install the Techspardh App Now!</div>

      <div className="aboutscroll1">
        <div className="wrapper">
          <img className="d-block  aboutimg" alt="" src={app1} />
        </div>
      </div>

      <div className="buttons">
        <div className="learn">
          <a href="https://play.google.com/store/apps/details?id=com.nitkkr.altius">
            <Button
              icon={<FaGooglePlay size={20} display={"inline"} />}
              btnText={"Download Now"}
            />
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default InstallApp;
