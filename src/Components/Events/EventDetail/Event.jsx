import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Modal from "../../Modal/Modal";
import Terminal from "../../Terminal/Terminal";
import GenericLoader from "../../Loader/GenericLoader";
import "./style.css";

export default function Event({ onClickOutside, show, selectedCategory }) {
  const [events, setEvents] = useState({});
  const [categoryWiseEvents, setCategoryWiseEvents] = useState({});
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [firstTimne, setFirstTime] = useState(true);

  const [currentCategory, setCurrentCategory] = useState(
    selectedCategory ? selectedCategory : "Astronomy"
  );

  const onCategorySelect = (category) => {
    setIsFetching(true);
    setFirstTime(false);
    if (category === "Guest Lectures") {
      fetch(
        "https://us-central1-techspardha-87928.cloudfunctions.net/api2/lectures",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
        .then((resLecture) => resLecture.json())
        .then((dataLecture) => {
          const lectures = dataLecture.data.lectures;
          let eventData = {};
  
          lectures.forEach((lecture) => {
            lecture.category = "Lectures";
            eventData[lecture.name] = lecture;
          });
  
          setEvents(eventData);
          
          setEvent(Object.keys(eventData)[0]);
          setTimeout(() => setIsFetching(false), 500);
        })
        .catch((err) => {});
    } else {
      axios
        .get("/events/description", {
          params: { eventCategory: category },
        })
        .then((res) => {
          const categoryEvents = res.data.data.events;
          let eventData = {};
  
          categoryEvents.forEach((event) => {
            eventData[event.eventName] = event;
          });
  
          setEvents(eventData);
          
          setEvent(Object.keys(eventData)[0]);
          setTimeout(() => setIsFetching(false), 500);
        });
    }
  };

  useEffect(() => {
    axios.get("/events").then((res) => {
      fetch(
        "https://us-central1-techspardha-87928.cloudfunctions.net/api2/lectures",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
        .then((resLecture) => resLecture.json())
        .then((dataLecture) => {
          const lectures = dataLecture.data.lectures;
          const eventData = res.data.data.events;
          lectures.forEach((lecture) => {
            eventData.push({
              eventCategory:"Guest Lectures",
              eventName: lecture.name,
            });
          });
          let categories = {};
          eventData.forEach((event) => {
            if (!categories[event.eventCategory])
              categories[event.eventCategory] = [event.eventName];
            else categories[event.eventCategory].push(event.eventName);
          });
          console.log(categories);
          setCategoryWiseEvents(categories);
          setCurrentCategory(Object.keys(categories)[0]);
          onCategorySelect(
            selectedCategory ? selectedCategory : currentCategory
          );
          selectedCategory = null;
          setIsLoading(false);
        })
        .catch((err) => {});
    });
  }, []);

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

  useEffect(() => {}, [event, events, eventsData]);
  useEffect(() => {
    if (event && event !== "") {
      setCurrentEvent(event);
    }
  }, [event]);

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
                    className={`event-indivi ${
                      currentEvent === e ? "event-indivi-active" : ""
                    }`}
                    onClick={() => {
                      setSwitchingCurrentEvent(true);
                      setCurrentEvent(e);
                      setTimeout(() => setSwitchingCurrentEvent(false), 1000);
                    }}
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
          {
            <Terminal
              element={
                <div style={{ fontFamily: "JetBrainsMono" }}>
                  <p>
                    {eventsData[currentEvent]?.venue
                      ? ">> venue: " + eventsData[currentEvent]?.venue
                      : ""}
                  </p>
                  <p>
                    {eventsData[currentEvent]?.date
                      ? ">> Date: " + eventsData[currentEvent]?.date
                      : ""}
                  </p>
                  <p>
                    {eventsData[currentEvent]?.desc
                      ? ">> Time: " + eventsData[currentEvent]?.time
                      : ""}
                  </p>
                  <p>
                    {eventsData[currentEvent]?.desc
                      ? ">> Facebook: " + eventsData[currentEvent]?.facebook
                      : ""}
                  </p>
                  <p>
                    {eventsData[currentEvent]?.desc
                      ? ">> Instagram: " + eventsData[currentEvent]?.insta
                      : ""}
                  </p>
                  <p>
                    {eventsData[currentEvent]?.desc
                      ? ">> Linkedin: " + eventsData[currentEvent]?.linkedin
                      : ""}
                  </p>
                  <p>
                    {eventsData[currentEvent]?.startTime
                      ? ">> Start Time: " +
                        new Date(
                          eventsData[currentEvent]?.startTime
                        ).toDateString()
                      : ""}
                  </p>
                  <p>
                    {eventsData[currentEvent]?.startTime
                      ? ">>  End Time:: " +
                        new Date(
                          eventsData[currentEvent]?.endTime
                        ).toDateString()
                      : ""}
                  </p>
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
                  <p>
                    {">>"} Rules: <br />
                    {eventsData[currentEvent]?.rules?.map((rule) => (
                      <span>
                        {" "}
                        {">>"} {rule} <br />{" "}
                      </span>
                    ))}
                  </p>
                  <p>
                    {">>"} Cordiantors: <br />
                    {eventsData[currentEvent]?.coordinators?.map((Cord) => (
                      <span>
                        {" "}
                        {">>"} {Cord.coordinator_name} :{" "}
                        <a href={`https://wa.me+91${Cord.coordinator_number}`}>
                          {Cord.coordinator_number}
                        </a>{" "}
                        <br />{" "}
                      </span>
                    ))}
                  </p>
                </div>
              }
            />
          }
        </div>
      </div>
      <div className="event-description">
        <div className="event-top event-name">
          <img src="/TS_LOGO.svg" alt="" />
        </div>
        <div className="event-details">
          {switchingCurrentEvent || isFetching ? (
            <div> ✨ Fetching event details... </div>
          ) : (
            <>
              {currentEvent && (
                <>
                  <div className="event-heading">{currentEvent}</div>
                  {eventsData[currentEvent]?.poster ? (
                    <img
                      className="placeholder-img"
                      src={eventsData[currentEvent]?.poster}
                      alt=""
                    />
                  ) : (
                    <img
                      className="!w-[300px] !h-[300px] !rounded-full"
                      src={eventsData[currentEvent]?.imageUrl}
                      alt=""
                    />
                  )}
                  <div>
                    {eventsData[currentEvent]?.description
                      ? eventsData[currentEvent]?.description
                      : eventsData[currentEvent]?.desc}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
