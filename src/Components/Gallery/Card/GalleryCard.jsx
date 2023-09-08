import React from 'react'
import './GalleryCard.css'

function GalleryCard(props) {
  return (
    <div className="photo-gallery">
      {/* <img className="img img1" src={props.eventImage} />
      <img className="img img2" src={props.eventImage}  />
      <img className="img img3" src={props.eventImage} /> */}
      <img className="img img1" src='/assets/gallery/1.png' />
      <img className="img img2" src='/assets/gallery/1.png'  />
      <img className="img img3" src='/assets/gallery/1.png' />
      <div className="year">2023</div>
    </div>
  )
}
export default GalleryCard