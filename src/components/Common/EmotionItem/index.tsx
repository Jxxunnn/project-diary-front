import React, { memo } from "react";
import * as S from "./style";

type PropsType = {
  id: number;
  img: string;
  descript: string;
  onClick: (emotionId: number) => void;
  isSelected: boolean;
};

const EmotionItem = ({ id, img, descript, onClick, isSelected }: PropsType) => (
  <S.EmotionItem
    isOn={isSelected}
    variant={id}
    onClick={() => {
      onClick(id);
    }}
  >
    <S.EmotionImage src={img} alt={descript} />
    <S.EmotionText>{descript}</S.EmotionText>
  </S.EmotionItem>
);

const MemoizedEmotionItem = memo<typeof EmotionItem>(EmotionItem);

export default MemoizedEmotionItem;
