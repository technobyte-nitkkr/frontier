"use client";
import React from "react";
import Modal from "../Modal/Modal";
import "./ExpandedGallery.css";

interface ExpandedGalleryProps {
  onClickOutside: () => void;
  show: boolean;
  pictures: string[];
  year: number;
}

export default function ExpandedGallery({ onClickOutside, show, pictures, year }: ExpandedGalleryProps) {
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

interface GalleryImageProps {
  pic: string;
  setExpandedIndex: (pic: string) => void;
  setExpandedView: (view: boolean) => void;
}

const GalleryImage = ({ pic, setExpandedIndex, setExpandedView }: GalleryImageProps) => {
  return (
    <div className="imageBG">
      <img src={pic} alt="" className="gallery-image" onClick={() => { setExpandedView(true); setExpandedIndex(pic) }} />
    </div>
  );
}

interface GalleryBGProps {
  pictures: string[];
  setExpandedIndex: (pic: string) => void;
  setExpandedView: (view: boolean) => void;
}

const GalleryBG = ({ pictures, setExpandedIndex, setExpandedView }: GalleryBGProps) => {
  return (
    <div className="gallery-container">
      {
        pictures.map((pic,idx) => <GalleryImage pic={pic} setExpandedIndex={setExpandedIndex} setExpandedView={setExpandedView} key={idx}/>)
      }
    </div>
  );
};