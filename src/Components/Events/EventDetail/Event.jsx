// import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Modal from "../../Modal/Modal";
import Terminal from "../../Terminal/Terminal";
import GenericLoader from "../../Loader/GenericLoader";
import "./style.css";
import catgWiseEvent from "../Events.json";
import EventCtg from "../data.json";

export default function Event({ onClickOutside, show, selectedCategory }) {
  const [events, setEvents] = useState({});
  const [categoryWiseEvents, setCategoryWiseEvents] = useState({});
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [firstTimne, setFirstTime] = useState(true);

  const onCategorySelect = (category) => {
    setIsFetching(true);
    setFirstTime(false);
    // axios
    //   .get("/events/description", {
    //     params: { eventCategory: category },
    //   })
    //   .then((res) => {
    //     const categoryEvents = res.data.data.events;
    //     let eventData = {};

    //     categoryEvents.forEach((event) => {
    //       eventData[event.eventName] = event;
    //     });

    setEvents(catgWiseEvent[category]);
    setEvent(Object.keys(catgWiseEvent[category])[0]);
    setTimeout(() => setIsFetching(false), 500);
    // });
  };

  useEffect(() => {
    // axios.get("/events").then((res) => {
    //   const eventData = res.data.data.events;
    //   console.log(eventData);
    //   let categories = {};

    //   eventData.forEach((event) => {
    //     if (!categories[event.eventCategory])
    //       categories[event.eventCategory] = [event.eventName];
    //     else categories[event.eventCategory].push(event.eventName);
    //   });
    //   console.log(categories);
    setCategoryWiseEvents(EventCtg.data);
    onCategorySelect(selectedCategory);
    // selectedCategory = null;
    // console.log(categoryWiseEvents);
    setIsLoading(false);
    // });
  }, []);
  useEffect(() => {
    if (selectedCategory) {
      onCategorySelect(selectedCategory);
    }
  }, [selectedCategory]);

  return (
    <>
      {isLoading ? (
        <GenericLoader />
      ) : (
        <Modal
          element={
            <EventDesc
              events={Object.keys(events)}
              event={event}
              isFetching={isFetching}
              eventsData={events}
            />
          }
          menuItems={Object.keys(categoryWiseEvents)}
          onMenuClick={onCategorySelect}
          show={show}
          isMenuOpen={firstTimne}
          onClickOutside={onClickOutside}
        />
      )}
    </>
  );
}

const EventDesc = ({ events, event, eventsData, isFetching }) => {
  const [currentEvent, setCurrentEvent] = useState(event);
  const [switchingCurrentEvent, setSwitchingCurrentEvent] = useState(false);

  useEffect(() => { setCurrentEvent(event) }, [event]);

  return (
    <div className="event-container">
      <div className="event-list">
        <div className="events">
          <div className="event-top event-names">
            <div>Event-List.md</div>
          </div>
          {isFetching ? (
            <div> ✨ Fetching event list... </div>
          ) : (
            <div className="event-list-cont">
              {events.map((e, ind) => {
                return (
                  <div
                    className={`event-indivi ${currentEvent === e ? "event-indivi-active" : ""
                      }`}
                    onClick={() => {
                      // console.log(e);
                      setSwitchingCurrentEvent(true);
                      setCurrentEvent(e);
                      setTimeout(() => setSwitchingCurrentEvent(false), 1000);
                    }}
                    key={ind}
                  >
                    {ind < 9 ? "0" : ""}
                    {ind + 1} <div>{e}</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="event-terminal-container">
          <Terminal
            element={
              <div style={{ fontFamily: "JetBrainsMono" }}>
                {eventsData[currentEvent]?.venue &&
                  <p>
                    {">>"} venue: {eventsData[currentEvent]?.venue}{" "}
                  </p>
                }
                {eventsData[currentEvent]?.startTime &&
                  <p>
                    {">>"} Start Time:{" "}
                    {new Date(eventsData[currentEvent]?.startTime).toDateString()}{" "}
                  </p>
                }
                {eventsData[currentEvent]?.endTime &&
                  <p>
                    {">>"} End Time:{" "}
                    {new Date(eventsData[currentEvent]?.endTime).toDateString()}{" "}
                  </p>
                }
                {eventsData[currentEvent]?.document &&
                  <p>
                    {/* <span
                    onClick={() => {
                      axios
                        .put(
                          "/user/event",
                          {
                            eventCategory:
                              eventsData[currentEvent]?.eventCategory,
                            eventName: currentEvent,
                          },
                          {
                            headers: {
                              Authorization: localStorage.getItem("ts20token"),
                            },
                          }
                        )
                        .then((res) =>
                          alert(res.data?.message || res.data?.status)
                        )
                        .catch((err) => alert(err));
                    }}
                  > */}
                    <a href={eventsData[currentEvent]?.document}>
                      {">>"}{" "}
                      <u style={{ cursor: "pointer" }}> Registration link </u>
                    </a>
                    {/* </span> */}
                  </p>
                }
                {eventsData[currentEvent]?.rules &&
                  <p>
                    {">>"} Rules: <br />
                    {eventsData[currentEvent]?.rules?.map((rule, idx) => (
                      <span key={idx}>
                        {" "}
                        {">>"} {rule} <br />{" "}
                      </span>
                    ))}
                  </p>
                }
                {eventsData[currentEvent]?.coordinators &&
                  <p>
                    {">>"} Cordiantors:  <br />
                    {eventsData[currentEvent]?.coordinators?.map((Cord, idx) => (
                      <span key={idx}>
                        {" "}
                        {">>"} {Cord.coordinator_name} : <a href={`https://wa.me+91${Cord.coordinator_number}`}>{Cord.coordinator_number}</a> <br />{" "}
                      </span>
                    ))}
                  </p>
                }
              </div>
            }

          />
        </div>
      </div>
      <div className="event-description">
        <div className="event-top event-name">
          <img src="/logo.png" alt="" />
        </div>
        <div className="event-details">
          {switchingCurrentEvent || isFetching ? (
            <div> ✨ Fetching event details... </div>
          ) : (
            <>
              {" "}
              <div className="event-heading">{currentEvent}</div>
              <img className="placeholder-img" src={eventsData[currentEvent]?.poster} alt="" />
              <div>{eventsData[currentEvent]?.description}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
