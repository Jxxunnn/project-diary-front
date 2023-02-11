import React, { useState, useEffect } from "react";
import * as S from "./style";
import ReactDOM from "react-dom";
import Button from "../Button";

type PropsType = {
  message: string;
  isOpen: boolean;
  hide: () => void;
  handleClick: () => void;
};

export const PortalModal = ({
  isOpen,
  hide,
  message,
  handleClick,
}: PropsType) => {
  const modalRoot = document.querySelector("#modal-root") as HTMLElement;
  const [isConfirm, setIsConfirm] = useState(false);

  useEffect(() => {
    if (isConfirm) {
      handleClick();
      hide();
    }
  }, [isConfirm]);

  const confirm = () => {
    setIsConfirm(true);
  };
  const cancle = () => {
    setIsConfirm(false);
    hide();
  };

  const modal = (
    <S.Layout
      onClick={(e) => {
        if (e.target instanceof HTMLDivElement) {
          e.target.dataset.name === "layout" ? hide() : null;
        }
      }}
      data-name="layout"
    >
      <S.ModalContainer>
        <S.ModalText>{message}</S.ModalText>
        <S.ModalButtonContainer>
          <Button text="확인" variant="positive" onClick={confirm} />
          <Button text="취소" variant="default" onClick={cancle} />
        </S.ModalButtonContainer>
      </S.ModalContainer>
    </S.Layout>
  );

  const content = isOpen ? modal : null;

  return ReactDOM.createPortal(content, modalRoot);
};
