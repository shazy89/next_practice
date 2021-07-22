import EventItem from "./EventItem";
const EventList = ({ items }) => {
  console.log(items);
  return (
    <ul>
      {items.map((event) => (
        <EventItem
          id={event.id}
          title={event.title}
          location={event.location}
          image={event.image}
          date={event.date}
          key={event.id}
        />
      ))}
    </ul>
  );
};

export default EventList;
