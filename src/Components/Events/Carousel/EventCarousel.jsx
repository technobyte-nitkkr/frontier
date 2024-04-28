import EventCard from "../Card/EventCard";
import Event from "../EventDetail/Event";
import Button from "../../Button/Button";

import { useState, useEffect, useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "./EventCarousel.css";
import axios from "axios";

const EventCarousel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const [selectedCategory, setSelectedCategory] = useState(null);

  const selectedCategory = useRef("Astronomy");

  const closeOverlay = () => setIsOpen(false);
  const configs = {
    animate: true,
  };

  const event = useRef();

  useEffect(() => {
    axios.get("/events/categories").then((res) => {
      const categories = res.data.data.categories;
      const lectureCategory = {
        categoryName: "Guest Lectures",
        icon: "https://i.ibb.co/7NPW3mR/programming-and-coding-vector-19602452.jpg",
        imgUrl:
          "https://i.ibb.co/7NPW3mR/programming-and-coding-vector-19602452.jpg",
      };
      categories.push(lectureCategory);
      const WorskhopsCategory = {
        categoryName: "Workshops",
        icon: "https://i.ibb.co/7NPW3mR/programming-and-coding-vector-19602452.jpg",
        imgUrl:
          "https://i.ibb.co/7NPW3mR/programming-and-coding-vector-19602452.jpg",
      };
      categories.push(WorskhopsCategory);
      const SIHCategory = {
        categoryName: "Smart India Hackathon",
        icon: "https://i.ibb.co/7NPW3mR/programming-and-coding-vector-19602452.jpg",
        imgUrl:
          "https://i.ibb.co/7NPW3mR/programming-and-coding-vector-19602452.jpg",
      };
      categories.push(SIHCategory);

      setCategories(categories);
      setIsLoading(false);
    });
    setInterval(() => {
      const elem = event.current;
      var next = 0;
      for (var i of elem.children) {
        if (i.offsetLeft < elem.scrollLeft) next++;
      }
      next = (next + 1) % elem.children.length;
      const childWidth = elem.scrollWidth / elem.children.length;
      elem.scrollLeft =
        (parseInt(elem.scrollLeft / childWidth) * childWidth + childWidth) %
        elem.scrollWidth;
      if (elem.scrollLeft + elem.offsetWidth * 1.05 > elem.scrollWidth)
        elem.scrollLeft = 0;
    }, 2000);
  }, []);

  // useEffect(() => {
  //   return selectedCategory ? setIsOpen(true) : setIsOpen(false);
  // }, [selectedCategory]);

  return (
    <div>
      <div className="carouselCardContainer scroll-smooth" ref={event}>
        {isLoading ? (
          <div> Loading.... </div>
        ) : (
          categories.map((category, key) => {
            return (
              <div
                onClick={() => {
                  selectedCategory.current = category.categoryName;
                  setIsOpen(true);
                }}
                style={{ marginLeft: "25px", marginRight: "25px" }}
              >
                <EventCard
                  eventImage={category.imgUrl}
                  eventTitle={category.categoryName}
                  ref={selectedCategory}
                />
              </div>
            );
          })
        )}
      </div>
      <div
        className="buttonContainer"
        id="glHelper"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <Button btnText="View them all" />
      </div>
      {/* <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}> */}
      <Event
        show={isOpen}
        onClickOutside={closeOverlay}
        selectedCategory={selectedCategory.current}
      />
      {/* </Overlay> */}
    </div>
  );
};

export default EventCarousel;
