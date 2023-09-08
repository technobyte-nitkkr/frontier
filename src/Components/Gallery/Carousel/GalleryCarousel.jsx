import GalleryCard from "../Card/GalleryCard";
import GalleryDetail from "../Detail/GalleryDetail";
import Button from "../../Button/Button";

import { useState, useEffect, useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "./GalleryCarousel.css";
import axios from "axios";

const GalleryCarousel = () => {
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
                <GalleryCard
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
      <GalleryDetail
        show={isOpen}
        onClickOutside={closeOverlay}
        selectedCategory={selectedCategory.current}
      />
      {/* </Overlay> */}
    </div>
  );
};

export default GalleryCarousel;
