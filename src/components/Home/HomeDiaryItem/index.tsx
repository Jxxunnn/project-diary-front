import React, { memo } from "react";
import { useNavigate } from "react-router";
import * as S from "./style";
import Button from "../../Common/Button";
import happyEmotionImage from "@assets/images/emotion5.png";
import goodEmotionImage from "@assets/images/emotion4.png";
import sosoEmotionImage from "@assets/images/emotion3.png";
import badEmotionImage from "@assets/images/emotion2.png";
import angryEmotionImage from "@assets/images/emotion1.png";
import { DiaryItemType } from "../../../types/diary/diary.type";

const HomeDiaryItem = ({ id, emotion, content, date }: DiaryItemType) => {
  const emotionList = [
    angryEmotionImage,
    badEmotionImage,
    sosoEmotionImage,
    goodEmotionImage,
    happyEmotionImage,
  ];

  const stringDate = new Date(date).toLocaleDateString();

  const navigate = useNavigate();
  const goToDetailPage = () => {
    navigate(`/diary/${id}`);
  };
  const goToEditPage = () => {
    navigate(`/edit/${id}`);
  };

  const colors = ["green", "lightGreen", "yellow", "orange", "red"] as const;

  return (
    <S.DiaryItem>
      <S.ImageContainer color={colors[emotion - 1]} onClick={goToDetailPage}>
        <S.EmotionTimage
          src={emotionList[emotion - 1]}
          alt={`${colors[emotion - 1]} emotional state`}
        />
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

const MemoizedHomeDiaryItem = memo<typeof HomeDiaryItem>(HomeDiaryItem);

export default MemoizedHomeDiaryItem;
