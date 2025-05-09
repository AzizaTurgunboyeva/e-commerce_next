// src/components/Review/Review.styled.jsx
import styled from "styled-components";

export const ReviewCardWrapper = styled.div`
  width: ${({ width }) => width}px;
  max-width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #ffffff;
  position: relative;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .star {
    display: flex;
    gap: 6px;
  }

  .moreIcon {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.3);
    font-size: 20px;
    flex-shrink: 0;
  }

  .user {
    display: flex;
    align-items: center;
    gap: 4.5px;

    p {
      font-size: 20px;
      font-weight: 700;
      line-height: 22px;
      margin: 0;
    }

    svg {
      color: rgba(1, 171, 49, 1);
      width: 18px;
      height: 18px;
      flex-shrink: 0;
    }
  }

  .comments {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.6);
    margin: 0;
  }

  .date {
    font-weight: 500;
    line-height: 22px;
    color: rgba(0, 0, 0, 0.4);
    margin: 0;
  }
`;
