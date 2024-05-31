import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import EventCarousel from "../../Components/Events/Carousel/EventCarousel";
import Homecontainer from "../../Components/Homecontainer/Homecontainer";
import HomePage from "../../Components/HomePage/HomePage";
import Gallery from "../../Components/Gallery/Gallery";
import Lecture from "../../Components/Lectures/Lectures";
import Registration from "../../Components/Registration/Registration";
import Sponsors2 from "../../Components/Sponsors/Sponsors2";
import TimeLine from "../../Components/Timeline/TimeLine";
import "./Home.css";
import Contact from "../../Components/ContactUs/Contact";

const Home = (props) => {
  const { hash, key } = useLocation();
  useEffect(() => {
    if (hash) {
      switch (hash) {
        case "#sponsors":
          document
            .getElementById("sponsorElementHelper")
            ?.scrollIntoView({ behavior: "smooth" });
          break;
        case "#events":
          document
            .getElementById("eventElementHelper")
            ?.scrollIntoView({ behavior: "smooth" });
          break;
        case "#about":
          document
            .getElementById("aboutElementHelper")
            ?.scrollIntoView({ behavior: "smooth" });
          break;
        case "#lectures":
          document
            .getElementById("glHelper")
            ?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [key, hash]);
  return (
    <div className="home-div">
      <HomePage />
      <div className="notifPopupContainer">
        <TimeLine />
      </div>
      <Homecontainer
        heading={"About Technobyte"}
        element={<Registration showBtn={true} />}
      />
      <Homecontainer heading={"Gallery"} element={<Gallery />} />
      <Homecontainer heading={"Event Categories"} element={<EventCarousel />} />
      <Homecontainer heading={"Guest Lectures"} element={<Lecture />} />
      <Homecontainer heading={"Meet Our Sponsors"} element={<Sponsors2 />} />
      <Homecontainer heading={"Contact Us"} element={<Contact />} />
    </div>
  );
};

export default Home;
