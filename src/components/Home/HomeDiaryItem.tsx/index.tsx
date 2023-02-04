import React from "react";
import { useNavigate } from "react-router";
import * as S from "./style";
import Button from "../../Common/Button";
import { DiaryItemType } from "../../../types/diary/diary.type";
import happyEmotionImage from "../../../assets/images/emotion5.png";
import goodEmotionImage from "../../../assets/images/emotion4.png";
import sosoEmotionImage from "../../../assets/images/emotion3.png";
import badEmotionImage from "../../../assets/images/emotion2.png";
import angryEmotionImage from "../../../assets/images/emotion1.png";

const HomeDiaryItem = ({ id, emotion, content, date }: DiaryItemType) => {
  const emotionList = [
    angryEmotionImage,
    badEmotionImage,
    sosoEmotionImage,
    goodEmotionImage,
    happyEmotionImage,
  ];
  const colors = ["green", "lightGreen", "yellow", "orange", "red"] as const;

  const stringDate = new Date(date).toLocaleDateString();

  const navigate = useNavigate();
  const goToDetailPage = () => {
    navigate(`/diary/${id}`);
  };
  const goToEditPage = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <S.DiaryItem>
      <S.ImageContainer color={colors[emotion - 1]} onClick={goToDetailPage}>
        <S.EmotionTimage src={emotionList[emotion - 1]} />
      </S.ImageContainer>
      <S.InformationContainer onClick={goToDetailPage}>
        <S.DiaryDate>{stringDate}</S.DiaryDate>
        <S.DiaryContent>{content.slice(0, 25)}</S.DiaryContent>
      </S.InformationContainer>
      <S.ButtonContainer>
        <Button text="수정하기" variant="default" onClick={goToEditPage} />
      </S.ButtonContainer>
    </S.DiaryItem>
  );
};

export default HomeDiaryItem;
