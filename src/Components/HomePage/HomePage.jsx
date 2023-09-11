import NotificationList from "../Notification/List/NotificationList";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homeContainer">
      <div className="homeRightContainer">
        <div className="homeLeftContainer">
          <div className="titleContainer">
            <h1 className="technobyte"> TECHNOBYTE </h1>
            <h3 className="NITKKR"> NIT KURUKSHETRA </h3>
            <NotificationList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
