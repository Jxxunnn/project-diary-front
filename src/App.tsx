import React, { useEffect, useReducer, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "@components/Router";
import GlobalStyle from "@styles/GlobalStyle";
import GlobalFont from "@styles/GlobalFont";
import { convertType } from "@utils/convertType";
import { DiaryItemType, DiaryStorageType } from "./types/diary/diary.type";

type ActionType = {
  type: string;
  data?: DiaryItemType;
  targetId?: number;
  localData?: DiaryItemType[];
};

const reducer = (
  state: DiaryItemType[],
  action: ActionType
): DiaryItemType[] => {
  let newState: DiaryItemType[] = [];

  switch (action.type) {
    case "INIT": {
      return action?.localData?.length ? [...action.localData] : newState;
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

  localStorage.setItem("diary", JSON.stringify(newState));
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

function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(0);

  useEffect(() => {
    const localData = localStorage.getItem("diary");

    if (localData) {
      const diaryList: DiaryStorageType[] = JSON.parse(localData);

      if (diaryList.length >= 1) {
        diaryList.sort((a, b) => parseInt(b.id, 10) - parseInt(a.id, 10));

        dataId.current = parseInt(diaryList[0].id, 10) + 1;

        dispatch({ type: "INIT", localData: convertType(diaryList) });
      }
    }
  }, []);

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
