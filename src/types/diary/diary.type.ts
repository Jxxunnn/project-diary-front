export type DiaryItemType = {
  id: number;
  date: number;
  content: string;
  emotion: number;
};

export type DiaryStateType = { cart: DiaryItemType[] };

export type DiaryStorageType = {
  id: string;
  date: string;
  content: string;
  emotion: string;
};
