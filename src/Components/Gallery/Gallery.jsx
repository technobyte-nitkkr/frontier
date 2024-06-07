import React, { useEffect, useRef, useState } from "react";
import "./Gallery.css";
import GalleryComponent from "./GalleryComponent"
import "swiper/css";
import "swiper/css/pagination";
import PhotoArray from "./GalleryPhotos.json"

const Gallery = () => {
  const [GalleryArray, SetGalleryArray] = useState([]);

  useEffect(() => {
    SetGalleryArray(PhotoArray.data);
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
    }, 4000)
  }, [])

  return (
    <>
      <div className="mainContentGallery" id="ContentGallery">
        <div className="GalleryList flex overflow-x-scroll scroll-smooth  pb-12" ref={scArr}>
          {
            GalleryArray.map((element,idx) => {
              return (
                <GalleryComponent item={element} className={"galleryCard snap-center"} key={idx}/>
              )
            })}
        </div>
      </div>
    </>
  );
};

export default Gallery;