import React, { memo } from "react";
import * as S from "./style";

type PropsType = {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  optionList: {
    value: string;
    name: string;
  }[];
};

const HomeController = ({ value, onChange, optionList = [] }: PropsType) => (
  <S.Select value={value} onChange={(e) => onChange(e.target.value)}>
    {optionList.map((it, i) => (
      <S.Option value={it.value} key={i}>
        {it.name}
      </S.Option>
    ))}
  </S.Select>
);

const MemoizedHomeController = memo<typeof HomeController>(HomeController);

export default MemoizedHomeController;
