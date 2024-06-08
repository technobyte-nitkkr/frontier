import React, { useEffect, useState } from "react";
import "./Lectures.css";
import "swiper/css";
import "swiper/css/pagination";

const Lecture = () => {
  const [guestList, SetGuestList] = useState([]);
  const [expanded, setExpanded] = useState(0);
  useEffect(() => {
    fetch(
      "https://us-central1-techspardha-87928.cloudfunctions.net/api2/lectures",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        SetGuestList(data.data.lectures);
      })
      .catch((err) => { });
  }, []);

  return (
    <>
      <div className="mainContentGL">
        <div className="carouselGL flex flex-row flex-nowrap overflow-x-hidden overflow-y-hidden scroll-smooth">
          {
            guestList.map((item, index) => {
              return (
                <GuestCard item={item} key={index} expanded={expanded} setExpanded={setExpanded} className={"lecture" + index} />
              )
            })
          }
        </div>
        <span id="glHelper"></span>
      </div>
    </>
  );
};

export default Lecture;

const GuestCard = ({ item }) => {
  return (
    <div className="backGround">
      <img className="image" src={item.imageUrl} />
      <div className="details">
        <h1 className="name">{item.name}</h1>
      </div>
    </div>
  )
}