import { useEffect, useState } from "react";
import useSWR from "swr";

import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";
const HomePage = (props) => {
  const [events, setSales] = useState(props.events);

  const { data, error } = useSWR(
    "https://practice-next-250c4-default-rtdb.firebaseio.com/events.json"
  );
  console.log(data);
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;
