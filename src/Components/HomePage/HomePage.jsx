import NotificationList from "../Notification/List/NotificationList";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homeContainer">
      <div className="homeLeftContainer">
        <div className="titleContainer">
          <h1 className="techspardha"> TECHNOBYTE </h1>
          <h3 className="festTheme"> NIT KURUKSHETRA </h3>
          {/* <div className="presentedBy">
            <div>Presented By:</div>
            <div>
              <span className="presenterLogo">
                {" "}
                <img className="presenter" src="/assets/do.svg" />{" "}
              </span>
              <span className="presenterLogo">
                {" "}
                <img className="presenter" src="/assets/appwrite.svg" />{" "}
              </span>
              <span className="presenterLogo">
                {" "}
                <img className="presenter" src="/assets/docker.svg" />{" "}
              </span>
            </div>
          </div> */}
          <NotificationList />
        </div>
      </div>
      <div className="homeRightContainer">
        <div className="elementContainer">
          <img src="/assets/element.png" className="elementSVG" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
