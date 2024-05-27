import React, { useEffect, useRef, useState } from "react";
import "./Lectures.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const curosal = useRef()

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

const Lecture = () => {
  const [guestList, SetGuestList] = useState([]);
  const scrollref = useRef(null);
  const size = useWindowSize();
  var lectures = [];
  const [expanded, setExpanded] = useState(0);
  const curosal = useRef();
  useEffect(() => {
    fetch(
      "https://us-central1-techspardha-87928.cloudfunctions.net/api2/lectures",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        lectures = data.data.lectures;
        SetGuestList(data.data.lectures);
        console.log(data);
      })
      .catch((err) => { });

    setInterval(() => { // scrolls the carousel, may remove later
      const elem = curosal.current;
      var next = 0;
      for (var i of elem.children) {
        if (i.offsetLeft < elem.scrollLeft) {
          next++;
        }
      }
      next = (next + 1) % elem.children.length;
      const childWidth = elem.scrollWidth / elem.children.length;
      elem.scrollLeft = (parseInt(elem.scrollLeft / childWidth) * childWidth + childWidth) % elem.scrollWidth;
      if (elem.scrollLeft + elem.offsetWidth * 1.05 > elem.scrollWidth) {
        elem.scrollLeft = 0;
      }
    }, 2000)
  }, []);

  return (
    <>
      <div className="mainContentGL">
        <div className="carouselGL flex flex-row flex-nowrap overflow-x-hidden overflow-y-hidden scroll-smooth" ref={curosal}>
          {
            guestList.map((item, index) => {
              return (
                <GuestCard item={item} index={index} expanded={expanded} setExpanded={setExpanded} className={"lecture" + index} />
              )
            })
          }
        </div>
        <span id="glHelper"></span>
      </div>
    </>
  );
};

export default Lecture;

const GuestCard = ({ index, item, className }) => {
  useEffect(() => { console.log(item) }, [])
  return (
    <div className="backGround">
      <img className="image" src={item.imageUrl} />
      <div className="details">
        <h1 className="name">{item.name}</h1>
      </div>
    </div>
  )
}

// const GuestCard = ({index, item, className})=>{
//   return(
//   <div key={index} className={"profile-card p-4 m-4 flex flex-col "+className}>
//     <div className="profile-header pb-4">
//       <img src={item.imageUrl} className="mr-4"/>
//       <div className="flex flex-col items-start">
//         <h1 className="text-xl font-normal text-left">{item.name}</h1>
//         <h2 className="text-md text-gray-400">{item.date}</h2>
//       </div>
//     </div>
//     <div class="profile-bio overflow-y-scroll bg-[#1C1C1C] p-2 mb-6 h-full">
//           {item.desc}
//     </div>
//     <ul class="profile-social-links flex justify-evenly mb-4">
//       <li>
//         <a href={item?.insta}>
//           <FaInstagram className="faSocial" />
//         </a>
//       </li>
//       <li>
//         <a href={item?.linkedin}>
//           <FaLinkedin className="faSocial" />
//         </a>
//       </li>
//       <li>
//         <a href={item?.facebook}>
//           <FaFacebook className="faSocial" />
//         </a>
//       </li>
//     </ul>
//   </div>)
// }
