import React from "react";
import { useRouter } from "next/router";
const PortfolioIndexPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);
  return (
    <div>
      <h1>The Portfolio Page</h1>
    </div>
  );
};

export default PortfolioIndexPage;
