import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import Terminal from "../Terminal/Terminal";
import "./style.css";

export default function TimeLine({ show, onClickOutside, data }) {
  return (
    <Modal
      element={<Terminal element={<TimeLineBody data={data} />} />}
      isMenuOpen={false}
      show={show}
      onClickOutside={onClickOutside}
    />
  );
}

const TimeLineBody = ({ data }) => {
  // const [userData, setUserData] = useState(null);

  const logout = () => {
    localStorage.removeItem("userdata");
    localStorage.removeItem("ts20token");
    window.location.reload();
  };

  const [isLoading, setIsLoading] = useState(true);
  const [userEvents, setUserEvents] = useState([]);
  useEffect(() => {
    axios
      .get("/user/event", {
        headers: {
          Authorization: localStorage.getItem("ts20token"),
        },
      })
      .then((res) => {
        setUserEvents(res.data.data.events);
      });
    setIsLoading(false);
  }, []);

  return (
    <div className="timeline-body">
      {isLoading ? (
        <> </>
      ) : (
        <>
          <div className="text-bright">&gt;&gt; {JSON.parse(data).name}</div>
          <div className="text-bright">
            &gt;&gt; Email: {JSON.parse(data).email}
          </div>
          <div className="text-bright">
            &gt;&gt; Role: {JSON.parse(data).role}
          </div>

          {/* <div className="text-bright">
            &gt;&gt;{" "}
            {userEvents.length === 0 ? (
              "You have not registered for any events"
            ) : (
              <>
                {" "}
                You have registered for the following events. (Click on the
                event to unregister)
                {userEvents.map((event) => {
                  return (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        axios
                          .put(
                            "/user/event/unregister",
                            {
                              eventName: event.eventName,
                              eventCategory: event.eventCategory,
                            },
                            {
                              headers: {
                                Authorization:
                                  localStorage.getItem("ts20token"),
                              },
                            }
                          )
                          .then((res) =>
                            alert(res.data?.message || res.data?.status)
                          )
                          .catch((err) => alert(err));
                      }}
                    >
                      &gt;&gt; {event?.eventName}
                    </div>
                  );
                })}
              </>
            )}
          </div> */}
          <div className="text-bright">
            &gt;&gt;{" "}
            <span style={{ cursor: "pointer" }} onClick={logout}>
              Logout
            </span>
          </div>
        </>
      )}
    </div>
  );
};
