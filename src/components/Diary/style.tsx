import styled from "styled-components";
import { palette, colors } from "../../styles/pallete";

export const Layout = styled.div`
  padding-bottom: 3.5rem;
`;

export const DiarySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  & + & {
    margin-top: 10rem;
  }
`;

export const DiaryH2 = styled.h2`
  margin: 3rem 0;
  font-size: 2.2rem;
  font-weight: bold;
`;

export const DiaryImageContainer = styled.div<{ variant: number | undefined }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 25rem;
  height: 25rem;
  border-radius: 0.5rem;
  color: white;
  background-color: ${({ variant }) =>
    variant ? palette[colors[variant - 1]] : "#ececec"};
`;

export const DiaryText = styled.p`
  font-size: 2.5rem;
`;

export const DiaryTextContainer = styled.div``;
export const DiaryImage = styled.img``;

export const DiaryParagraphContainer = styled.p`
  width: 100%;
  background-color: #ececec;
  border-radius: 0.5rem;
  word-break: keep-all;
  overflow-wrap: break-word;
`;
export const DiaryParagraph = styled.p`
  min-height: 5rem;
  padding: 2rem;
  text-align: left;
  font-size: 2rem;
  font-family: "yeonsung";
  font-weight: 400;
  line-height: 2.5;
`;
