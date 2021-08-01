//import { getFeaturedEvents } from "../../helpers/api-utils";
import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/api-utils";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
const AllEventsPage = ({ events }) => {
  const router = useRouter();

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
export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events
    },
    revalidate: 60
  };
}
export default AllEventsPage;
