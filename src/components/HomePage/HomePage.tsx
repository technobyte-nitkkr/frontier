"use client";
import NotificationList from "../Notification/List/NotificationList";
import "./HomePage.css";
import ExpandedNotification from "../Notification/ExpandedNotification/ExpandedNotification";
import { useState } from "react";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeOverlay = () => setIsOpen(false);
  return (
    <>
      <div 
        style={{ marginTop: '154px' }} 
        className="main-container px-6 sm:px-12 md:px-16 lg:px-24"
      >
        <div className="homeContainer">
          <div className="homeRightContainer">
            <div className="homeLeftContainer">
              <div className="titleContainer">
                <h1 className="technobyte"> TECHNOBYTE </h1>
                <h3 className="NITKKR"> NIT KURUKSHETRA </h3>
                <NotificationList setIsOpen={setIsOpen}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <ExpandedNotification show={isOpen} onClickOutside={closeOverlay} />
      )}
    </>
  );
};

export default HomePage;
