import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./Sponsors.css";
import emailjs from "emailjs-com";

const Sponsors2 = () => {
  const [sponsors, setSponsors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [btnText, setTxt] = useState("Submit");
  const [email, setEmail] = useState("");
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
                  {sponsor?.sponsors.map((spons, idx) => {
                    return (
                      <div className="sponsorIcon" key={idx}>
                        {" "}
                        <a href={spons?.targetUrl}>
                          <img src={spons?.imageUrl} className="max-w-full max-h-full" />{" "}
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
            <div className="sponsorEmailInpContainer flex flex-col md:flex-row">
              <input
                value={email}
                onChange={(e) => { setEmail(e.target.value); setTxt("Submit") }}
                type="email"
                placeholder="Email Address"
                className="my-4 h-14 placeholder:px-3 px-2 w-full mr-0 text-black"
              />
              <div className="w-full">
                <Button btnText={btnText} sty="h-[4rem] w-[90%] " onClick={async () => {
                  if (email === "") setTxt("Enter email");
                  else {
                    setTxt("Submitting...");
                    try {
                      await emailjs.send(
                        "service_fsffmpr", "template_bk1prys",
                        {
                          email: email
                        },
                        "tPp7ffxoxdcF1eUWj"
                      );
                      setTxt("Submitted!");
                    } catch (error) {
                      setTxt("Error!!.... retry?")
                      console.error("Error submitting form:", error);
                    }
                  }
                }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sponsors2;
