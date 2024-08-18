import React from "react";
import Modal from "../Modal/Modal";
import "./ExpandedGallery.css";

export default function ExpandedGallery({ onClickOutside, show, pictures, year }) {
  const [expandedView, setExpandedView] = React.useState(false);
  const [expandedIndex, setExpandedIndex] = React.useState(pictures[0]);
  return (
    <>
      <Modal
        element={
          <GalleryBG
            pictures={pictures}
            setExpandedIndex={setExpandedIndex}
            setExpandedView={setExpandedView}
          />
        }
        show={show}
        isMenuOpen={false}
        onClickOutside={onClickOutside}
        year={year}
      />
      <Modal
        element={
          <div className="expanded-div" onClick={() => { setExpandedView(false) }}>
            <img src={expandedIndex} alt="" className="gallery-image-expanded" />
          </div>
        }
        show={expandedView}
        isMenuOpen={false}
        onClickOutside={() => setExpandedView(false)}
        year={year}
      />
    </>
  );
}

const GalleryImage = ({ pic, setExpandedIndex, setExpandedView }) => {
  return (
    <div className="imageBG">
      <img src={pic} alt="" className="gallery-image" onClick={() => { setExpandedView(true); setExpandedIndex(pic) }} />
    </div>
  );
}

const GalleryBG = ({ pictures, setExpandedIndex, setExpandedView }) => {
  return (
    <div className="gallery-container">
      {
        pictures.map((pic,idx) => <GalleryImage pic={pic} setExpandedIndex={setExpandedIndex} setExpandedView={setExpandedView} key={idx}/>)
      }
    </div>
  );
};