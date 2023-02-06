import React, {
  useState,
  useRef,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { useNavigate } from "react-router";
import * as S from "./style";
import { DiaryDispatchContext } from "../../../App";
import Header from "../Header";
import Button from "../Button";
import EmotionItem from "../EmotionItem.tsx";
import { getStringDate } from "../../../utils/date";
import { emotionList } from "../../../utils/emotion";
import { DiaryItemType } from "../../../types/diary/diary.type";

type PropsType = {
  isEdit?: boolean;
  originData?: DiaryItemType;
};

const DiaryEditor = ({ isEdit, originData }: PropsType) => {
  const navigate = useNavigate();
  const [emotion, setEmotion] = useState(3);
  const [content, setContent] = useState("");
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const [date, setDate] = useState(getStringDate(new Date()));

  const { onCreate, onEdit, onRemove } = useContext(DiaryDispatchContext);

  const handleClickEmote = useCallback((emotionId: number) => {
    setEmotion(emotionId);
  }, []);

  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current?.focus();
      return;
    }
    if (
      window.confirm(
        isEdit ? "일기를 수정하시겠습니까?" : "새로운 일기를 작성하시겠습니까?"
      )
    ) {
      if (originData) {
        onEdit(originData.id, date, content, emotion);
      } else {
        onCreate(date, content, emotion);
      }
    }
    navigate("/", { replace: true });
  };

  const handleRemove = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      if (originData) {
        onRemove(originData.id);
        navigate("/", { replace: true });
      }
    }
  };

  useEffect(() => {
    if (isEdit && originData) {
      setDate(getStringDate(new Date(originData.date)));
      setEmotion(originData.emotion);
      setContent(originData.content);
    }
  }, [isEdit, originData]);

  return (
    <S.Layout>
      <Header
        headText={isEdit ? "일기 수정하기" : "새로운 일기 쓰기"}
        leftChild={
          <Button
            variant="default"
            text="< 뒤로가기"
            onClick={() => navigate(-1)}
          />
        }
        rightChild={
          isEdit && (
            <Button variant="negative" text="삭제하기" onClick={handleRemove} />
          )
        }
      />
      <S.DiaryEditorSection>
        <S.DiaryEditorTitle2>오늘은 언제인가요?</S.DiaryEditorTitle2>
        <S.DiaryEditorInputContainer>
          <S.DiaryEditorInput
            value={date}
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </S.DiaryEditorInputContainer>
      </S.DiaryEditorSection>
      <S.DiaryEditorSection>
        <S.DiaryEditorTitle2>오늘의 감정</S.DiaryEditorTitle2>
        <S.DiaryEditorList>
          {emotionList.map((it) => (
            <EmotionItem
              key={it.emotion_id}
              id={it.emotion_id}
              descript={it.emotion_descript}
              img={it.emotion_img}
              onClick={handleClickEmote}
              isSelected={it.emotion_id === emotion}
            />
          ))}
        </S.DiaryEditorList>
      </S.DiaryEditorSection>
      <S.DiaryEditorSection>
        <S.DiaryEditorTitle2>오늘의 일기</S.DiaryEditorTitle2>
        <S.DiaryEditorTextContainer>
          <S.DiaryEditorTextArea
            placeholder="오늘은 어떤 하루였나요?"
            ref={contentRef}
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></S.DiaryEditorTextArea>
        </S.DiaryEditorTextContainer>
        <S.DiaryEditorTextContainer>
          <S.DiaryEditorButtonContainer>
            <Button
              text="취소하기"
              variant="default"
              onClick={() => navigate(-1)}
            />
            <Button text="작성완료" variant="positive" onClick={handleSubmit} />
          </S.DiaryEditorButtonContainer>
        </S.DiaryEditorTextContainer>
      </S.DiaryEditorSection>
    </S.Layout>
  );
};

export default DiaryEditor;
