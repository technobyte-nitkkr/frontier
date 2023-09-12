import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
import "./Sponsors.css";

const Sponsors2 = () => {
  const [sponsors, setSponsors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios.get("/sponsors").then((res) => {
      const sponsors = res.data.data.sponsors;
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
          {sponsors.map((sponsor, key) => {
            return (
              <div key={key}>
                <h3 className="sponsorSectionTitle">
                  {" "}
                  {sponsor?.sponsorSection}{" "}
                </h3>
                <div className="sponsorCarouselContainer">
                  {sponsor?.sponsors.map((spons) => {
                    return (
                      <div className="sponsorIcon">
                        {" "}
                        <a href={spons?.targetUrl}>
                          <img  src={spons?.imageUrl} />{" "}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

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

export default Sponsors2;
