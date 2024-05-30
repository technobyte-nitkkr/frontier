import { useState, useEffect, useRef } from "react";
import "./TeamDetails.css";
import "./TeamDetails.scss";
import axios from "axios";
import BouncingDotsLoader from "../Loader/Loader";
import team from "./team.json";

export default function TeamDetails() {
  const [people, setPeople] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const Ref = useRef();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setPeople(team);
      setIsLoading(false);
    };
    getData();
  }, []);
  return (
    <div className="team-details">
      <div ref={Ref} className="team-card-container">
        {!isLoading && people ? (
          people.map((x) => {
            return (
              <div class="nft" style={{ padding: "5px", margin: "20px" }}>
                <div class="team-card-main">
                  <img class="tokenImage placeholder-img" src={x.imageUrl} alt="post-holder" />
                  <h2 className="person-name">{x.name}</h2>
                  <hr />
                  <p class="person-post">{x.post}</p>
                </div>
              </div>
            );
          })
        ) : (
          <BouncingDotsLoader />
        )}
      </div>
    </div>
  );
}
