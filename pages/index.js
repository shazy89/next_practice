import { useEffect, useState } from "react";
import useSWR from "swr";

import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";
const HomePage = (props) => {
  const [events, setEvents] = useState(props.events);

  const { data, error } = useSWR(
    "https://practice-next-250c4-default-rtdb.firebaseio.com/events.json"
  );
  useEffect(() => {
    if (data) {
      const featuredEvents = [];

      for (const key in data) {
        featuredEvents.push({
          id: key,
          date: data[key].date,
          description: data[key].description,
          image: data[key].image,
          isFeatured: data[key].isFeatured,
          title: data[key].title,
          location: data[key].location
        });
      }

      setEvents(featuredEvents);
    }
  }, [data]);
  if (error) {
    return <p>Failed to load.</p>;
  }

  if (!data && !events) {
    return <p>Loading...</p>;
  }
  console.log(events);
  // const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={events} />
    </div>
  );
};
export async function getStaticProps() {
  const response = await fetch(
    "https://practice-next-250c4-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();

  const featuredEvents = [];

  for (const key in data) {
    featuredEvents.push({
      id: key,
      date: data[key].date,
      description: data[key].description,
      image: data[key].image,
      isFeatured: data[key].isFeatured,
      title: data[key].title,
      location: data[key].location
    });
  }

  return { props: { events: featuredEvents } };
}

export default HomePage;
