import { useRouter } from "next/router";
import { getFilteredEvents } from "../../helpers/api-utils";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
const FilteredEvents = (props) => {
  const router = useRouter();
  const filteredData = router.query.slug;
  //if (!filteredData) {
  //  return <p className="center">Loading...</p>;
  //}
  //const filteredYear = filteredData[0];
  //const filteredMonth = filteredData[1];
  //
  //const numYear = +filteredYear;
  //const numMonth = +filteredMonth;
  if (props.hasError) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid Filter</p>;
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }
  //  const filteredEvents = getFilteredEvents({
  //    year: numYear,
  //    month: numMonth
  //  });
  const filteredEvents = props.event;
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          {" "}
          <p> No evnts found for the chosen filter</p>
        </ErrorAlert>

        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }
  const date = new Date(numYear, numMonth - 1);
  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};
export async function getServerSideProps({ params }) {
  const filteredData = params.slug;

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
    return {
      props: { hasError: true }
      //  notFound: true
      //redirect: {
      //  destination: '/error'
      //}
    };
  }
  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth
  });
  return {
    props: filteredEvents
  };
}
export default FilteredEvents;
