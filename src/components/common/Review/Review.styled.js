import styled from "styled-components";

export const ReviewCardWrapper = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width}px;
  position: relative;

  .header {
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    .moreIcon {
      margin-left: auto;
      font-size: 18px;
      cursor: pointer;
      color: #999;
      /* transition: color 0.2s ease; */
    }
    .moreIcon:hover {
      color: #555;
    }
  }

  .user {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 12px;

    p {
      margin: 0;
      margin-right: 8px;
    }
    svg {
      color: #28a745; /* green check */
      font-size: 16px;
    }
  }

  .comments {
    flex: 1;
    font-size: 14px;
    line-height: 1.4;
    color: #555;
    margin: 0 0 16px;
  }

  .date {
    font-size: 12px;
    color: #999;
    margin: 0;
    text-align: right;
  }

  @media (max-width: 400px) {
    /* when width ≤ 400, you could de-emphasize border, etc */
    border-color: transparent;
  }
`;
