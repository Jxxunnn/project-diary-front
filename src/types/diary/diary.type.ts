export type DiaryItemType = {
  id: number;
  date: number;
  content: string;
  emotion: number;
};

export type DiaryStateType = { cart: DiaryItemType[] };
