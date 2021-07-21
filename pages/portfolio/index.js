import React from "react";
import Link from "next/link";
// portfolio
const index = () => {
  return (
    <div>
      <h1>The Portfolio Page</h1>
      <ul>
        <li>
          <Link href="/portfolio/erdo">Erdo</Link>
        </li>
        <li>
          <Link href="/portfolio/semra">Semra</Link>
        </li>
      </ul>
    </div>
  );
};

export default index;
