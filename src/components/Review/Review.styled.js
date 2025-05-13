// src/components/Review/Review.styled.js
import styled from "styled-components";

export const ReviewCardWrapper = styled.div`
  /* fill the slide’s height */
  height: 100%;

  /* layout your card content vertically */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* your existing padding & visuals */
  padding: 24px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  .header {
    display: flex;

    gap: 4px;
    margin-bottom: 10px;
    /* justify-content: space-between; */
    /* align-items: center; */
  }

  .user {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
  }

  .comments {
    margin: 16px 0;
    flex-grow: 1; /* allow text area to grow if needed */
  }

  .date {
    font-size: 14px;
    color: #666;
    text-align: right;
  }
`;
