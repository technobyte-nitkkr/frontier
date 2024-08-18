import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
import "./Sponsors.css";

const Sponsors = () => {
  const [sponsors, setSponsors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios.get("/foodsponsors").then((res) => {
      const sponsors = res.data.data.foodSponsors;
      setSponsors(sponsors);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <div> Loading.... </div>
      ) : (
        <div id="sponsorElementHelper" className="sponsorsElementContainer">
            <div className="sponsorCarouselContainer">
              {sponsors.slice(0,4).map((spons,idx) => {
                return (
                  <div className="sponsorIcon" key={idx}>
                    {" "}
                    <a href={spons?.targetUrl}>
                      <img className="sponsorIcon" src={spons?.imageUrl} />{" "}
                    </a>
                  </div>
                );
              })}
            </div>

            <Button btnText="View them all" />
    
          <div className="onboardingEmailContainer">
            <p className="onboardingEmail">
              {" "}
              Would you would like to be a part of technobyte? <br />
              Kindly share your email below and our team would reach out to you.{" "}
            </p>
            <div className="sponsorEmailInpContainer">
              <InputBox />
              <Button btnText={"Submit"} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sponsors;
