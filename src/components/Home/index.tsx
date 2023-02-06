import React, { useState, useContext, useEffect } from "react";
import { DiaryStateContext } from "../../App";
import Header from "../Common/Header";
import Button from "../Common/Button";
import DiaryList from "./HomeDiaryList";

import { DiaryItemType } from "../../types/diary/diary.type";

const Home = () => {
  const fetchedDiaryList = useContext(DiaryStateContext);
  const [diaryList, setDiaryList] = useState<DiaryItemType[]>(fetchedDiaryList);
  const [currentDate, setCurrentDate] = useState(new Date());
  const headText = `${currentDate.getFullYear()}년 ${
    currentDate.getMonth() + 1
  }월`;

  useEffect(() => {
    const firstDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getTime();
    const lastDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0,
      23,
      59,
      59
    ).getTime();

    setDiaryList(
      fetchedDiaryList.filter((it) => firstDay <= it.date && it.date <= lastDay)
    );
  }, [fetchedDiaryList, currentDate]);

  const increaseMonth = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        currentDate.getDate()
      )
    );
  };
  const decreaseMonth = () => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        currentDate.getDate()
      )
    );
  };

  return (
    <>
      <Header
        headText={headText}
        leftChild={
          <Button variant="default" text="<" onClick={decreaseMonth} />
        }
        rightChild={
          <Button variant="default" text=">" onClick={increaseMonth} />
        }
      />
      <DiaryList diaryList={diaryList} />
    </>
  );
};

export default Home;
