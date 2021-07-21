import React from "react";
import Link from "next/link";
const HomePage = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
