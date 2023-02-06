import React from "react";
import New from "../../components/New";
import { useTitle } from "../../hooks/useTitle";

const NewPage = () => {
  useTitle("newPage");
  return <New />;
};

export default NewPage;
