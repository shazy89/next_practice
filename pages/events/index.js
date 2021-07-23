import React from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
const AllEventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  const findEventsHandeler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };
  return (
    <>
      <EventsSearch onSearch={findEventsHandeler} />
      <EventList items={events} />
    </>
  );
};

export default AllEventsPage;
