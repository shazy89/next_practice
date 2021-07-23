import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
const FilteredEvents = () => {
  const router = useRouter();
  const filteredData = router.query.slug;
  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }
  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear < 2021 ||
    numYear > 2030 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid Filter</p>;
  }
  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  });
  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No filtered events</p>;
  }
  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
};

export default FilteredEvents;
