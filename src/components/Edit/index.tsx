import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../../App";
import DiaryEditor from "../Common/DiaryEditor";
import { DiaryItemType } from "../../types/diary/diary.type";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [originData, setOriginData] = useState<DiaryItemType>();

  const diaryList = useContext(DiaryStateContext);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find((it) => `${it.id}` === id);

      if (!targetDiary) navigate("/", { replace: true });
      setOriginData(targetDiary);
    }
  }, [id, diaryList]);

  return (
    <>{originData && <DiaryEditor isEdit={true} originData={originData} />}</>
  );
};

export default Edit;
