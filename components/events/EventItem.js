import React from "react";
import Link from "next/link";
const EventItem = ({ title, image, date, location, id }) => {
  const hummanReadableDate = new Date(date).toLocaleDateString("en-Us", {
    day: "numeric",
    month: "lomg",
    year: "numeric"
  });
  return (
    <li>
      <img src="" alt="" />
      <div>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <time>DATE</time>
        </div>
        <div>
          <address>ADDRESS</address>
        </div>
        <div></div>
      </div>
    </li>
  );
};

export default EventItem;
