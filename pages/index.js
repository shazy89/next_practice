import Head from "next/head";

import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";
const HomePage = (props) => {
  // const [events, setEvents] = useState(props.events);

  // const { data, error } = useSWR(
  //   "https://practice-next-250c4-default-rtdb.firebaseio.com/events.json"
  // );
  // useEffect(() => {
  //   if (data) {
  //     const featuredEvents = [];

  //     for (const key in data) {
  //       featuredEvents.push({
  //         id: key,
  //         date: data[key].date,
  //         description: data[key].description,
  //         image: data[key].image,
  //         isFeatured: data[key].isFeatured,
  //         title: data[key].title,
  //         location: data[key].location
  //       });
  //     }

  //     setEvents(featuredEvents);
  //   }
  // }, [data]);
  // if (error) {
  //   return <p>Failed to load.</p>;
  // }

  // if (!data && !events) {
  //   return <p>Loading...</p>;
  // }
  // console.log(events);
  // const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <Head>
        <title>NextJS EVENTS</title>
      </Head>
      <EventList items={props.events} />
    </div>
  );
};
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return { props: { events: featuredEvents }, revalidate: 1800 };
  //  revalidate is specifying went to re-fetch the data
}

export default HomePage;
