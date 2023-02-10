import React, { useState } from "react";
import { useNavigate } from "react-router";
import HomeController from "../HomeController";
import Button from "../../Common/Button";
import * as S from "./style";
import { DiaryItemType } from "../../../types/diary/diary.type";
import HomeDiaryItem from "../HomeDiaryItem";

type PropsType = {
  diaryList: DiaryItemType[];
};
type CompareType = (a: DiaryItemType, b: DiaryItemType) => number;

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "지난순" },
];
const filterOptionList = [
  { value: "all", name: "전부다" },
  { value: "good", name: "좋은" },
  { value: "bad", name: "안좋은" },
];

const DiaryList = ({ diaryList }: PropsType) => {
  const [sortType, setSortType] = useState("latest");
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  const getProcessdDiaryList = () => {
    const compareByDate: CompareType = (a, b) => {
      if (sortType === "latest") return b.date - a.date;
      else return a.date - b.date;
    };
    const filterCallBack = (diary: DiaryItemType) => {
      if (filter === "good") {
        return diary.emotion < 3;
      } else return diary.emotion >= 3;
    };

    const filteredList =
      filter === "all"
        ? [...diaryList]
        : [...diaryList].filter((it) => filterCallBack(it));

    return filteredList.sort(compareByDate);
  };

  return (
    <div>
      <S.ControllerContainer>
        <S.LeftContainer>
          <HomeController
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
          />
          <HomeController
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
          />
        </S.LeftContainer>
        <S.RightContainer>
          <Button
            variant="positive"
            text="새 일기 쓰기"
            onClick={() => navigate("/new")}
          />
        </S.RightContainer>
      </S.ControllerContainer>
      <S.DiaryList>
        {getProcessdDiaryList().map((diary) => (
          <HomeDiaryItem key={diary.id} {...diary} />
        ))}
      </S.DiaryList>
    </div>
  );
};

export default DiaryList;
