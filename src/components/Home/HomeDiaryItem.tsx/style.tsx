import styled from "styled-components";
import { palette } from "../../../styles/pallete";

export const DiaryItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 3.5rem 0;
  border-bottom: 0.1rem solid #e2e2e2;
`;

export const InformationContainer = styled.div`
  flex-grow: 1;
  margin-left: 2rem;
  cursor: pointer;
`;

export const DiaryContent = styled.p`
  font-size: 1.8rem;
`;

export const DiaryDate = styled.time`
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 2.5rem;
`;

export const EmotionTimage = styled.img`
  width: 50%;
`;

export const ButtonContainer = styled.div`
  min-width: 7rem;
`;

export const ImageContainer = styled.div<{
  color: "red" | "orange" | "yellow" | "lightGreen" | "green";
}>`
  display: flex;
  justify-content: center;
  min-width: 12rem;
  height: 8rem;
  border-radius: 0.5rem;
  background-color: ${({ color }) => palette[color]};
  cursor: pointer;
`;
