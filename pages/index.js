import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";
const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <ul></ul>
    </div>
  );
};

export default HomePage;
