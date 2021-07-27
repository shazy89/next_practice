import EventItem from "./EventItem";
import classes from "../../styles/event-list.module.css";

const EventList = ({ items }) => {
  if (!items) {
    return <h4>Loading ...</h4>;
  }
  return (
    <ul className={classes.list}>
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
