import styled, { css } from "styled-components";

export const Button = styled.button<{ variant: string }>`
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  background: #ececec;
  color: black;
  font-size: 1.8rem;
  font-family: "nanum";
  cursor: pointer;
  white-space: nowrap;

  ${({ variant }) => {
    if (variant === "positive")
      return css`
        width: 100%;
        background-color: #64c964;
        color: white;
      `;

    if (variant === "negative")
      return css`
        background-color: #fd565f;
        color: white;
      `;
  }}
`;

export const DateConatiner = styled.div`
  font-size: 2.5rem;
`;

export const TimeContainer = styled.div`
  font-size: 5rem;
`;
