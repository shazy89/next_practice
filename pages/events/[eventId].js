import { getEventById, getFeaturedEvents } from "../../helpers/api-utils";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
const EventDetailPage = (props) => {
  const event = props.selectedEvent;
  if (!event) {
    return (
      <>
        <ErrorAlert>
          <p>No event found!</p>;
        </ErrorAlert>
      </>
    );
  }
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};
export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = await getEventById(eventId);

  // for dynamic pages we should specify what is the event ID , should specify the event ids
  return {
    props: {
      selectedEvent: event
    },
    revalidate: 30
  };
}
export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths: paths,
    fallback: false // letting know next js that there arn't other pages
  };
}

export default EventDetailPage;
