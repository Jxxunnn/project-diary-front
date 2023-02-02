import React, { ReactNode } from "react";
import * as S from "./style";

type PropsType = {
  headText: string;
  leftChild: ReactNode;
  rightChild: ReactNode;
};

const Header = ({ headText, leftChild, rightChild }: PropsType) => (
  <S.Header>
    <S.Container position="left">{leftChild}</S.Container>
    <S.Container position="center">{headText}</S.Container>
    <S.Container position="right">{rightChild}</S.Container>
  </S.Header>
);

export default Header;
