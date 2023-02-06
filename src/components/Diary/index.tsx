import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./style";
import { DiaryStateContext } from "../../App";
import Button from "../Common/Button";
import Header from "../Common/Header";
import { emotionList } from "../../utils/emotion";
import { getStringDate } from "../../utils/date";
import { DiaryItemType } from "../../types/diary/diary.type";

const Diary = () => {
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const [diaryData, setDiaryData] = useState<DiaryItemType>();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find((it) => `${it.id}` === id);

      if (targetDiary) {
        setDiaryData(targetDiary);
      }
    } else {
      alert("없는 일기입니다.");
      navigate("/", { replace: true });
    }
  }, [id, diaryList]);

  if (!diaryData) return <p>로딩중입니다...</p>;

  const currentEmotionData = emotionList.find(
    (it) => it.emotion_id === diaryData.emotion
  );

  return (
    <S.Layout>
      <Header
        headText={`${getStringDate(new Date(diaryData.date))} 기록`}
        leftChild={
          <Button
            text="< 뒤로가기"
            variant="default"
            onClick={() => navigate(-1)}
          />
        }
        rightChild={
          <Button
            text="수정하기"
            variant="default"
            onClick={() => navigate(`/edit/${id}`)}
          />
        }
      />
      <S.DiarySection>
        <S.DiaryH2>오늘의 감정</S.DiaryH2>
        <S.DiaryImageContainer variant={currentEmotionData?.emotion_id}>
          <S.DiaryImage
            src={currentEmotionData?.emotion_img}
            alt={currentEmotionData?.emotion_descript}
          />
          <S.DiaryTextContainer>
            <S.DiaryText>{currentEmotionData?.emotion_descript}</S.DiaryText>
          </S.DiaryTextContainer>
        </S.DiaryImageContainer>
      </S.DiarySection>
      <S.DiarySection>
        <S.DiaryH2>오늘의 일기</S.DiaryH2>
        <S.DiaryParagraphContainer>
          <S.DiaryParagraph>{diaryData.content}</S.DiaryParagraph>
        </S.DiaryParagraphContainer>
      </S.DiarySection>
    </S.Layout>
  );
};

export default Diary;
