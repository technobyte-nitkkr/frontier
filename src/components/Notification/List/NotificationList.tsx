"use client";
import React, { useState, useEffect } from "react";
import NotificationItem from "../Item/NotificationItem";
import Button from "../../Button/Button";
import apiClient from "@/utils/axios";

interface NotificationListProps {
  setIsOpen: (isOpen: boolean) => void;
}

const NotificationList = ({setIsOpen}: NotificationListProps) => {

  const [notifs, setNotifs] = useState<any[]>([]);
  const [expandedObj, setExpandedObj] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    apiClient.get("/notification")
      .then((res: any) => {
        const notifications = (res?.data?.data?.notifications || []).filter((n: any) => {
          const title = n?.notification?.title?.toLowerCase() || "";
          return title !== "badfasdf" && title !== "b" && title !== "test";
        });
        if (notifications.length === 0) {
          setIsLoading(false);
          return;
        }
        setNotifs(notifications);
        let obj: Record<string, any> = {};

        for (
          let i = 0, j = notifications.length - 1;
          i < Math.min(4, notifications.length);
          i++, j--
        ) {
          const notif = notifications[j];
          if (notif?.notification) {
            obj[notif.notification.title] = {
              ...notif.notification,
            };
          }
        }

        setExpandedObj(obj);
        setIsLoading(false);
      })
      .catch((err: any) => {
        console.error("Failed to fetch notifications:", err);
        setIsLoading(false);
      });
  }, []);

  // Hide the entire component if there are no notifications and not loading
  if (!isLoading && Object.keys(expandedObj).length === 0) {
    return null;
  }

  return (
      <div className="flex flex-col gap-4">
        <h2 className="text-white text-2xl font-bold mb-2"> Upcoming Events: </h2>
        {isLoading ? (
          <NotificationItem title={"✨ Fetching Notifications"} content={""} />
        ) : (
          <>
            {" "}
            {Object.keys(expandedObj).map((notif, key) => (
              <div
                onClick={() => {
                  setIsOpen(true);
                }}
                key={key}
                className="cursor-pointer"
              >
                <NotificationItem
                  title={notif}
                  content={expandedObj[notif]?.description}
                  key={key}
                />
              </div>
            ))}
          </>
        )}

        <div
          className="mt-4"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <Button btnText="View them all" />
        </div>
      </div>
  );
};

export default NotificationList;
