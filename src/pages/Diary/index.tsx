import React from "react";
import Diary from "../../components/Diary";
import { useTitle } from "../../hooks/useTitle";

const DiaryPage = () => {
  useTitle("diaryPage");
  return <Diary />;
};

export default DiaryPage;
