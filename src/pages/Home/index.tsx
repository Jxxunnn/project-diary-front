import React from "react";
import Home from "@components/Home";
import { useTitle } from "../../hooks/useTitle";

const HomePage = () => {
  useTitle("homePage");
  return <Home />;
};

export default HomePage;
