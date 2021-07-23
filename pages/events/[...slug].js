import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";

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
  const FilteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  });
  if (!FilteredEvents || FilteredEvents.length === 0) {
    return <p>No filtered events</p>;
  }
  return (
    <div>
      <h1>Filtered events. Please adjust your values!</h1>
    </div>
  );
};

export default FilteredEvents;
