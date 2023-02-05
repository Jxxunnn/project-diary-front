import React, { useReducer, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import GlobalFont from "./styles/GlobalFont";
import Router from "./components/Router";

import { DiaryItemType } from "./types/diary/diary.type";

type ActionType = {
  type: string;
  data?: DiaryItemType;
  targetId?: number;
};

const reducer = (
  state: DiaryItemType[],
  action: ActionType
): DiaryItemType[] => {
  let newState: DiaryItemType[] = [];

  switch (action.type) {
    case "INIT": {
      return newState;
    }
    case "CREATE": {
      if (!action.data) {
        throw new Error("action.payload missing in CREATE action");
      }
      const newItem = {
        ...action.data,
      };

      newState = [newItem, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data?.id ? { ...action.data } : it
      );
      break;
    }
    default:
      throw new Error("Unidentified reducer action type");
  }
  return newState;
};

export const DiaryStateContext = React.createContext<DiaryItemType[]>([]);

type DiaryDispatchContextType = {
  onCreate: (date: number | string, content: string, emotion: number) => void;
  onEdit: (
    targetId: number,
    date: string | number,
    content: string,
    emotion: number
  ) => void;
  onRemove: (targetId: number) => void;
};

export const DiaryDispatchContext =
  React.createContext<DiaryDispatchContextType>({} as DiaryDispatchContextType);

// 더미 데이터

const dummyData = [
  { id: 1, emotion: 1, content: "오늘의 일기 1번", date: 1675408914782 },
  { id: 2, emotion: 2, content: "오늘의 일기 2번", date: 1675408914784 },
  { id: 3, emotion: 3, content: "오늘의 일기 3번", date: 1675408914786 },
  { id: 4, emotion: 4, content: "오늘의 일기 4번", date: 1675408914788 },
  { id: 5, emotion: 5, content: "오늘의 일기 5번", date: 1675408914789 },
];

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);
  const dataId = useRef(0);

  // CREATE
  const onCreate = (
    date: number | string,
    content: string,
    emotion: number
  ) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };
  // REMOVE
  const onRemove = (targetId: number) => {
    dispatch({ type: "REMOVE", targetId });
  };
  // EDIT
  const onEdit = (
    targetId: number,
    date: number | string,
    content: string,
    emotion: number
  ) => {
    dispatch({
      type: "EDIT",
      data: { id: targetId, date: new Date(date).getTime(), content, emotion },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          <GlobalStyle />
          <GlobalFont />
          <Router />
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
