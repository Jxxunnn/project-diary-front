import styled from "styled-components";

export const CalendarContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 6fr;

  height: 22rem;
  width: 25rem;
`;

export const Weekdays = styled.ol`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 0.5rem;
`;

export const Days = styled.ol`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderButton = styled.button`
  background: none;
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;

  &:hover {
    outline: 1;
    background: #ececec;
  }
`;

export const Cell = styled.li<{
  week: boolean;
  current: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ current, week }) => (!current && !week ? "lightgray" : "black")};
  &:hover {
    outline: ${({ week }) => (week ? "0" : "1")};
    background: ${({ week }) => (week ? "none" : "#ececec")};
    cursor: ${({ week }) => (week ? "default" : "pointer")};
  }
`;
export const CurrentCell = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    outline: 1;
    background: #ececec;
    cursor: pointer;
  }
  &:nth-child(7n + 1) {
    color: red;
  }
`;

export const HeaderCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
