import React from "react";
import Modal from "../Modal/Modal";
import "./ExpandedGallery.css";

export default function ExpandedGallery({ onClickOutside, show, pictures, year }) {
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
        year={year}
      />
    </>
  );
}

const GalleryImage = (pic) => {
  return (
    <div className="imageBG">
      <img src={pic.pic} alt="" className="gallery-image" />
    </div>
  );
}

const GalleryBG = ({ pictures }) => {
  return (
    <div className="gallery-container">
      {
        pictures.map((pic) => <GalleryImage pic={pic} />)
      }
    </div>
  );
};