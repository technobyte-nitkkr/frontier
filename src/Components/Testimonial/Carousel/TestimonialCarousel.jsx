import TestimonialCard from "../Card/TestimonialCard";
import "./TestimonialCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import reviews from "../Testimonial.json";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useEffect, useRef } from "react";
const TestimonialCarousel = () => {
  const review = useRef();
  useEffect(()=>{
    setInterval(()=>{
      const elem = review.current;
      var next = 0;
      for(var i of elem.children){
        if(i.offsetLeft < elem.scrollLeft) next++;
      }
      next = (next + 1) % elem.children.length;
      const childWidth = elem.scrollWidth  / elem.children.length;
      elem.scrollLeft = (parseInt(elem.scrollLeft / childWidth) * childWidth + childWidth) % elem.scrollWidth;
      if(elem.scrollLeft + elem.offsetWidth * 1.05 > elem.scrollWidth) elem.scrollLeft = 0;
    }, 2000)
  }, [])
  return (
    <div>
      <div className="carouselCardContainer scroll-smooth" ref={review}>

        {reviews.data.map((item, index) => (
        
            <TestimonialCard name={item.name} profileImg={"/assets/avatars/avatar.svg"} review={item.review} course={item.course} branch={item.branch}/>
          
          ))}
        
      </div>
    </div>
  );
};

export default TestimonialCarousel;

{/* <SwiperSlide><TestimonialCard name={"Aman Sani"} profileImg={"/assets/avatars/avatar.svg"} postition={"UX/UI Designer"}/></SwiperSlide>
<SwiperSlide><TestimonialCard name={"Aman Sani"} profileImg={"/assets/avatars/avatar.svg"} postition={"UX/UI Designer"}/></SwiperSlide>
<SwiperSlide><TestimonialCard name={"Aman Sani"} profileImg={"/assets/avatars/avatar.svg"} postition={"UX/UI Designer"}/></SwiperSlide>
<SwiperSlide><TestimonialCard name={"Aman Sani"} profileImg={"/assets/avatars/avatar.svg"} postition={"UX/UI Designer"}/></SwiperSlide> */}
/* <div class="cardBox">
  <div class="testimonial">
    <div class="pic">
      <img src={item.imageUrl} />
    </div>
    <h3 class="title">{item.name}</h3>
    <span class="post">
      <p>
        {item.course} ( {item.branch} ), {item.year} 
      </p>
    </span>
    <p class="description">{item.review}</p>
  </div>
</div> */