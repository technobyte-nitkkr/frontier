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
  const selectedCategory = useRef("Astronomy");
  const closeOverlay = () => setIsOpen(false);
  const event = useRef();

  useEffect(() => {
    axios.get("/events/categories").then((res) => {
      const categories = res.data.data.categories;
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
      <Event
        show={isOpen}
        onClickOutside={closeOverlay}
        selectedCategory={selectedCategory.current}
      />
    </div>
  );
};

export default EventCarousel;
