import { useState, useEffect } from "react";
import "./NotificationList.css";
import NotificationItem from "../Item/NotificationItem";
import Button from "../../Button/Button";
import axios from "axios";


const NotificationList = ({setIsOpen}) => {

  const [notifs, setNotifs] = useState([]);
  const [expandedObj, setExpandedObj] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("/notification").then((res) => {
      const notifications = res.data.data.notifications;
      setNotifs(notifications);
      let obj = {};

      // notifications.forEach((notif) => {});

      for (
        let i = 0, j = notifications.length - 1;
        i < Math.min(4, notifications.length);
        i++, j--
      ) {
        const notif = notifications[j];
        obj[notif.notification.title] = {
          ...notif.notification,
        };
      }

      setExpandedObj(obj);
      setIsLoading(false);
    });
  }, []);

  return (
      <div className="notificationContainer">
        <h2 className="recentNotifs"> Upcoming Events: </h2>
        {isLoading ? (
          <NotificationItem title={"✨ Fetching Notifications"} />
        ) : (
          <>
            {" "}
            {Object.keys(expandedObj).map((notif, key) => (
              <div
                onClick={() => {
                  setIsOpen(true);
                }}
                key={key}
              >
                <NotificationItem
                  title={notif}
                  content={notif.description}
                  key={key}
                />
              </div>
            ))}
          </>
        )}

        <div
          className="notificationBtnContainer"
          id="aboutElementHelper"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <Button btnText="View them all" />
        </div>
      </div>
  );
};

export default NotificationList;
