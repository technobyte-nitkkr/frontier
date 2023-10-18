import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Glimpses from "../../Components/About/Glimpses/Glimpses";
import InstallApp from "../../Components/About/InstallApp/InstallApp";
import Homecontainer from "../../Components/Homecontainer/Homecontainer";
import Registration from "../../Components/Registration/Registration";
import Registration1 from "../../Components/Registration1/Registration1";
import "./About.css";

const About = () => {
  // const routeLoc = useLocation();
  // useEffect(() => {
  //   // document.getElementById("homePageTop")?.scrollBy(0, screenY); // scrollIntoView({ behavior: "smooth" });

  //   window.scrollBy({
  //     top: 100,
  //     behavior: "smooth",
  //   });
  // }, [routeLoc]);

  return (
    <div className="aboutPageContainer">
      <span id="aboutElementHelper1"></span>
      <Homecontainer heading={"About Technobyte"} element={<Registration1 />} />
      {/* <Homecontainer
        heading={"Install the technobyte app"}
        element={<InstallApp />}
      /> */}
      <Homecontainer
        heading={"Some glimpses from the past..."}
        element={<Glimpses />}
      />
      <Homecontainer
        heading={"Checkout technobyte'18 aftermovie"}
        element={
          <div>
            <div className="video-responsive">
              {/* <iframe
                width="360"
                height="115"
                src="https://www.youtube.com/embed/NyHq7Pp1PuY"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe> */}
              <iframe
                width="360"
                height="115"
                src="https://www.youtube.com/embed/NyHq7Pp1PuY?si=kC9ITqQ2aoBOfD8H"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default About;
