import styled from "styled-components";

export const DiaryEditorSection = styled.section`
  & + & {
    margin-top: 4rem;
  }
`;

export const DiaryEditorLabel = styled.label``;

export const DiaryEditorTitle2 = styled.h2`
  margin: 2rem 0;
  font-size: 2.2rem;
  font-weight: bold;
`;

export const DiaryEditorInput = styled.input`
  border: none;
  border-radius: 0.5rem;
  background-color: #ececec;
  padding: 1rem 2rem;
  font-family: "nanum";
  font-size: 2rem;
  cursor: pointer;
`;

export const DiaryEditorInputContainer = styled.div``;
export const DiaryEditorTextContainer = styled.div``;

export const DiaryEditorButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const DiaryEditorList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 2%;
`;

export const DiaryEditorTextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  min-height: 20rem;
  border: none;
  border-radius: 0.5rem;
  margin-bottom: 4rem;
  padding: 2rem;
  background-color: #ececec;
  resize: vertical;
  font-family: "nanum";
  font-size: 2rem;
`;

export const Layout = styled.div`
  padding-bottom: 3.5rem;
`;
