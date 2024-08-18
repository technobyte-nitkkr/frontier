import { lazy, Suspense } from "react";
import Homecontainer from "../../Components/Homecontainer/Homecontainer";
import Registration1 from "../../Components/Registration1/Registration1";
import "./About.css";

const Glimpses = lazy(() => import("../../Components/About/Glimpses/Glimpses"));


const About = () => {
  return (
    <div className="aboutPageContainer">
      <span id="aboutElementHelper1"></span>
      <Homecontainer heading={"About Technobyte"} element={<Registration1 />} />
      <Homecontainer
        heading={"Some glimpses from the past..."}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Glimpses />   </Suspense>
        }
      />
      <Homecontainer
        heading={"Checkout technobyte's Youtube channel"}
        element={
          <div>
            <div className="video-responsive" style={{
              maxWidth: "100%"
            }}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/AnuM0qunBRE?si=m0h8XwOr9WxaSARO" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
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
