import { DiaryItemType, DiaryStorageType } from "../types/diary/diary.type";

type convertTypeFunc = (diaryList: DiaryStorageType[]) => DiaryItemType[];

export const convertType: convertTypeFunc = (diaryList) =>
  diaryList.map((it) => {
    const obj = {} as DiaryItemType;

    obj.id = parseInt(it.id, 10);

    obj.date = parseInt(it.date, 10);

    obj.emotion = parseInt(it.emotion, 10);

    obj.content = it.content;

    return obj;
  });
