import React, { useEffect, useRef, useState } from "react";
import "./Gallery.css";
import GalleryComponent from "./GalleryComponent"
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
const Gallery = () => {
  const [GalleryArray, SetGalleryArray] = useState([]);

  useEffect(() => {
    SetGalleryArray([
    { year: 2022, imageURL: "https://media.licdn.com/dms/image/D4D03AQFMGlbDFIASdg/profile-displayphoto-shrink_800_800/0/1686643662041?e=2147483647&v=beta&t=RAXSXU9Vr-PF8cKyJy_dqwZ6RvN8AgRGn8xnk4VZK_k" },
    { year: 2022, imageURL: "https://media.licdn.com/dms/image/D4D03AQFMGlbDFIASdg/profile-displayphoto-shrink_800_800/0/1686643662041?e=2147483647&v=beta&t=RAXSXU9Vr-PF8cKyJy_dqwZ6RvN8AgRGn8xnk4VZK_k" },
    { year: 2022, imageURL: "https://media.licdn.com/dms/image/D4D03AQFMGlbDFIASdg/profile-displayphoto-shrink_800_800/0/1686643662041?e=2147483647&v=beta&t=RAXSXU9Vr-PF8cKyJy_dqwZ6RvN8AgRGn8xnk4VZK_k" },
    { year: 2022, imageURL: "https://media.licdn.com/dms/image/D4D03AQFMGlbDFIASdg/profile-displayphoto-shrink_800_800/0/1686643662041?e=2147483647&v=beta&t=RAXSXU9Vr-PF8cKyJy_dqwZ6RvN8AgRGn8xnk4VZK_k" },
    { year: 2022, imageURL: "https://media.licdn.com/dms/image/D4D03AQFMGlbDFIASdg/profile-displayphoto-shrink_800_800/0/1686643662041?e=2147483647&v=beta&t=RAXSXU9Vr-PF8cKyJy_dqwZ6RvN8AgRGn8xnk4VZK_k" },
    { year: 2022, imageURL: "https://media.licdn.com/dms/image/D4D03AQFMGlbDFIASdg/profile-displayphoto-shrink_800_800/0/1686643662041?e=2147483647&v=beta&t=RAXSXU9Vr-PF8cKyJy_dqwZ6RvN8AgRGn8xnk4VZK_k" }
  ]);
  }, []);

  const scArr = useRef();
  useEffect(()=>{
    setInterval(()=>{
      const elem = scArr.current;
      var next = 0;
      for(var i of elem.children){
        if(i.offsetLeft < elem.scrollLeft) next++;
      }
      next = (next + 1) % elem.children.length;
      const childWidth = elem.scrollWidth  / elem.children.length;
      elem.scrollLeft = (elem.scrollLeft + childWidth) % elem.scrollWidth;
      if(elem.scrollLeft + elem.offsetWidth * 1.05 > elem.scrollWidth) elem.scrollLeft = 0;
    }, 2000)
  }, [])
  return (
    <>
      <div className="mainContentGallery">
        <div className="GalleryList flex overflow-x-scroll scroll-smooth  pb-12" ref={scArr}>
          {
            GalleryArray.map((element) => {
              return (
                <GalleryComponent item={element} className={"galleryCard snap-center"} />
              )
            })}
        </div>
      </div>
    </>
  );
};

export default Gallery;