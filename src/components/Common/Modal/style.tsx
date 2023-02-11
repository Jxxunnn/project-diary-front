import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 500;
  height: 500;
  padding: 3rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;
export const ModalText = styled.p`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  gap: 2em;
`;

export const Layout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;
