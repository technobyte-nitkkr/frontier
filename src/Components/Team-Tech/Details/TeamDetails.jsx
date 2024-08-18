import { useState, useEffect, useRef } from "react";
import "./TeamDetails.css";
import "./TeamDetails.scss";
import BouncingDotsLoader from "../Loader/Loader";
import team from "./team.json";
import team2 from "./team2.json";

export default function TeamDetails() {
  const [people, setPeople] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [current, setCurrent] = useState("25");
  const Ref = useRef();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      current == "24" ? setPeople(team) : setPeople(team2);
      setIsLoading(false);
    };
    getData();
  }, [current]);
  return (
    <div className="team-details">
      <div className="team-links">
        <button
          id={"25"}
          onClick={() => {
            setCurrent("25");
          }}
          className="teams"
          style={{ color: current == "25" ? "#4890ff" : "white" }}
        >
          Batch'25
        </button>
        <button
          id={"24"}
          onClick={() => {
            setCurrent("24");
          }}
          className="teams"
          style={{ color: current == "24" ? "#4890ff" : "white" }}
        >
          Batch'24
        </button>
      </div>
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
