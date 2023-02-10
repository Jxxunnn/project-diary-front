import styled from "styled-components";
import { palette } from "../../../styles/pallete";

const colors = ["green", "lightGreen", "yellow", "orange", "red"] as const;

export const EmotionItem = styled.li<{ isOn: boolean; variant: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  padding: 2rem 0;
  background-color: ${({ isOn, variant }) =>
    isOn ? palette[colors[variant - 1]] : "#ececec"};
  color: "black";
  cursor: pointer;
`;

export const EmotionImage = styled.img`
  width: 50%;
  margin-bottom: 1rem;
`;

export const EmotionText = styled.span`
  font-size: 1.8rem;
`;
