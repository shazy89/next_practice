import React from "react";
import Link from "next/link";
import { formatDate } from "../functions/index";
const EventItem = ({ title, image, date, location, id }) => {
  //const hummanReadableDate = new Date(date).toLocaleDateString("en-Us", {
  //  day: "numeric",
  //  month: "lomg",
  //  year: "numeric"
  //});
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li>
      <img src={"/" + image} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <time>{formatDate(date)}</time>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
        <div>
          <Link href={exploreLink}></Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
