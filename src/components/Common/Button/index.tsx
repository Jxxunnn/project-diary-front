import React from "react";
import * as S from "./style";

type PropsType = {
  text: string;
  variant: "default" | "positive" | "negative";
  onClick: () => void;
};

const Button = ({ text, variant, onClick }: PropsType) => {
  const a = null;

  return (
    <S.Button type="button" variant={variant} onClick={onClick}>
      {text}
    </S.Button>
  );
};

export default Button;
