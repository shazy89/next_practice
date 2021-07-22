import React from "react";
import Link from "next/link";

const EventItem = ({ title, image, date, location, id }) => {
  const hummanReadableDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "numeric"
  });
  const formattedAddress = location.replace(", ", "\n");

  return (
    <li>
      <img src={"/" + image} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <time>{formattedAddress}</time>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
        <div>
          <Link href={`/events/${id}`}>Link </Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
