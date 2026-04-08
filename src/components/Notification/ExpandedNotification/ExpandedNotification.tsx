import apiClient from "@/utils/axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Modal from "../../Modal/Modal";
import Terminal from "../../Terminal/Terminal";

interface ExpandedNotificationProps {
  onClickOutside: () => void;
  show: boolean;
}

export default function ExpandedNotification({ onClickOutside, show }: ExpandedNotificationProps) {
  const [events, setEvents] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentNotif, setCurrentNotif] = useState<any>(null);

  useEffect(() => {
    apiClient.get("/notification").then((res: any) => {
      const notifications = res.data.data.notifications;
      let expandedObj: Record<string, any> = {};
      notifications.forEach((notif: any) => {
        expandedObj[notif.notification.title] = {
          ...notif.notification,
        };
      });
      setEvents(expandedObj);
      setCurrentNotif({
        title: Object.keys(expandedObj)[0],
        ...expandedObj[Object.keys(expandedObj)[0]],
      });
    });
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <div> Loading... </div>
      ) : (
        <Modal
          element={
            <ExpandedNotificationDesc
              events={Object.keys(events)}
              event={Object.keys(events)[0]}
              eventsData={events}
            />
          }
          show={show}
          isMenuOpen={false}
          onClickOutside={onClickOutside}
        />
      )}
    </>
  );
}

interface ExpandedNotificationDescProps {
  events: string[];
  event: string;
  eventsData: Record<string, any>;
}

const ExpandedNotificationDesc = ({ events, event, eventsData }: ExpandedNotificationDescProps) => {
  const [currentEvent, setCurrentEvent] = useState(event);

  useEffect(() => {}, [event, events, eventsData]);

  return (
    <div className="event-container">
      <div className="event-list">
        <div className="events">
          <div className="event-top event-names">
            <div>Notifications.md</div>
          </div>
          <div className="event-list-cont">
            {events.map((e: string, ind: number) => {
              return (
                <div
                  className={`event-indivi ${
                    currentEvent === e ? "event-indivi-active" : ""
                  }`}
                  onClick={() => setCurrentEvent(e)}
                  key={ind}
                >
                  {ind < 9 ? "0" : ""}
                  {ind + 1} <div>{e}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="event-terminal-container">
          <Terminal
            element={
              <div style={{ fontFamily: "JetBrainsMono", color: "#FFF" }}>
                <p>{">>"} ✨ Fetching your notification data... </p>
              </div>
            }
          />
        </div>
      </div>
      <div className="event-description">
        <div className="event-top event-name">
          {/* <img src="/assets/event/menu.svg" alt="" /> */}
          <img src="/logo.png" alt="" />
          {/* <img src="/assets/event/notification.svg" alt="" /> */}
        </div>
        <div className="event-details">
          <div className="event-heading">{currentEvent}</div>
          <img src={eventsData[currentEvent]?.image} alt="" />
          <div>{eventsData[currentEvent]?.body}</div>
        </div>
      </div>
    </div>
  );
};
