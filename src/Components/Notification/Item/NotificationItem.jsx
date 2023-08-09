import "./NotificationItem.css";

const NotificationItem = ({ title, content }) => {
  return (
    <div className="notificationItemContainer">
      <p className="notificationItem">
        {" "}
        {">>"} {title}{" "}
      </p>
    </div>
  );
};

export default NotificationItem;
