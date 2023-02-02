import styled, { css } from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
  padding: 2rem 0;
`;

export const Container = styled.div<{ position: string }>`
  display: flex;
  width: ${({ position }) => (position === "center" ? "50%" : "25%")};
  ${({ position }) => {
    if (position === "left") {
      return css`
        justify-content: left;
      `;
    }
    if (position === "center") {
      return css`
        font-size: 2.5rem;
        justify-content: center;
      `;
    }
    if (position === "right") {
      return css`
        justify-content: end;
      `;
    }
  }}
`;
