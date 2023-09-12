import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Modal from "../Modal/Modal";
import Terminal from "../Terminal/Terminal";
import "./ExpandedGallery.css";

export default function ExpandedGallery({ onClickOutside, show, pictures }) {
  const [events, setEvents] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentNotif, setCurrentNotif] = useState(null);

  useEffect(() => {
    axios.get("/notification").then((res) => {
      const notifications = res.data.data.notifications;
      let expandedObj = {};
      notifications.forEach((notif) => {
        expandedObj[notif.notification.title] = {
          ...notif.notification,
        };
      });
      setEvents(expandedObj);
      setCurrentNotif({
        title: Object.keys(expandedObj)[0],
        ...expandedObj[Object.keys(expandedObj)[0]],
      });
    });
    setIsLoading(false);
  }, []);

  console.log(pictures);

  return (
    <>
      <Modal
        element={
          <GalleryBG
            pictures={pictures}
          />
        }
        show={show}
        isMenuOpen={false}
        onClickOutside={onClickOutside}
      />
    </>
  );
}

const GalleryImage = (pic) => {
  return (
    <div className="imageBG">
      <img src={pic.pic} alt="" className="gallery-image"/>
    </div>
  );
}

const GalleryBG = ({ pictures }) => {
  return (
    <div className="gallery-container">
      {
        pictures.map((pic) => <GalleryImage pic={pic}/>)
      }
    </div>
  );
};