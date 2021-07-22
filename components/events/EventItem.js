import React from "react";
import Link from "next/link";
import classes from "../../styles/evnt-item.module.css";
import Button from "../ui/button";
const EventItem = ({ title, image, date, location, id }) => {
  const hummanReadableDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "numeric"
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
        </div>
        <div className={classes.date}>
          <time>{formattedAddress}</time>
        </div>
        <div className={classes.address}>
          <address>{formattedAddress}</address>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>Explore Event</Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
