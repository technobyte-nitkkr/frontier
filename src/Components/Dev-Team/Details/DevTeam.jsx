import { useState, useEffect, useRef } from "react";
import "./TeamDetails.css";
import "./TeamDetails.scss";
import BouncingDotsLoader from "../Loader/Loader";
import team from "./team.json";

export default function DevTeam() {
  const [people, setPeople] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const Ref = useRef();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setPeople(team);
      setIsLoading(false);
    };
    getData();
  }, []);
  return (
    <div className="team-details">
      <div ref={Ref} className="team-card-container scroll-smooth">
        {!isLoading && people ? (
          people.map((x, idx) => {
            return (
              <div className="nft" style={{ padding: "5px", margin: "20px" }} key={idx}>
                <div className="team-card-main">
                  <img className="tokenImage placeholder-img" src={x.imageUrl} alt="team" />
                  <h2 className="person-name">{x.name}</h2>
                  <hr />
                  <p className="person-post">{x.post}</p>
                </div>
              </div>
            );
          })

        ) : (
          <BouncingDotsLoader />
        )}
      </div>
    </div >
  );
}
