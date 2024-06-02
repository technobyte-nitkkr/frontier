import EventCard from "../Card/EventCard";
import Event from "../EventDetail/Event";
import Button from "../../Button/Button";
import { useState, useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "./EventCarousel.css";
// import axios from "axios";
import catg from "./../EventsCatg.json";

const EventCarousel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory,setSelected] = useState("Techspardha");
  const closeOverlay = () => setIsOpen(false);
  const event = useRef();

  useEffect(() => {
    // axios.get("/events/categories").then((res) => {
    //   const categories = res.data.data.categories;
    //   console.log(categories);
    //   setCategories(categories);
    //   setIsLoading(false);
    // });
    setCategories(catg.data);
    setIsLoading(false);
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
                key={key}
                onClick={() => {
                  setSelected(category.categoryName);
                  setIsOpen(true);
                }}
                style={{ marginLeft: "25px", marginRight: "25px", cursor: "pointer"}}
              >
                <EventCard
                  eventImage={category.imgUrl}
                  eventTitle={category.categoryName}
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
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default EventCarousel;
