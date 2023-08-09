import { useState, useEffect, useRef } from "react";
import "./TeamDetails.css";
import "./TeamDetails.scss";
import axios from "axios";
import BouncingDotsLoader from "../Loader/Loader";

export default function TeamDetails() {
  const [data, setData] = useState();
  const [people, setPeople] = useState();
  const [current, setCurrent] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const Ref = useRef();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "https://us-central1-techspardha-87928.cloudfunctions.net/api2/contacts"
        );
        setData(await res.data.data.contacts.reverse());
        setPeople(res.data.data.contacts[0].people);
        setCurrent(res.data.data.contacts[0].section);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const changePeople = async (e) => {
    try {
      setCurrent(e.target.id);
      for (var i = 0; i < data.length; i++) {
        if (data[i].section === e.target.id) {
          setIsLoading(true);
          setPeople(data[i].people);
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="team-details">
      <div className="team-links">
        {data
          ? data.map((x) => {
              return (
                <button
                  id={x.section}
                  onClick={(e) => {
                    changePeople(e);
                  }}
                  className="teams"
                  style={{ color: current == x.section ? "#4890ff" : "white" }}
                >
                  {x.section}
                </button>
              );
            })
          : ""}
      </div>
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
