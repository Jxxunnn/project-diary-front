import React from "react";
import Edit from "@components/Edit";
import { useTitle } from "../../hooks/useTitle";

const EditPage = () => {
  useTitle("editPage");
  return <Edit />;
};

export default EditPage;
