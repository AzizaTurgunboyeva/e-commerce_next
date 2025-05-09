// src/components/Card/Card.styled.jsx
import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 295px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);

  .img-list {
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    border-radius: 8px;
    background: #f5f5f5;
    position: relative;

    .btns-rel {
      position: absolute;
      top: 8px;
      right: 8px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      background: rgba(255, 255, 255, 0.8);
      border-radius: 4px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
    }
  }

  .card-title {
    width: 100%;
    margin-top: 12px;
    text-align: left;

    .p-name {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 4px;
    }
  }

  .c-rate {
    display: flex;
    align-items: center;
    gap: 4px;

    .rating-text {
      font-size: 0.875rem;
      color: #555555;
      margin-left: 4px;
    }
  }

  .prices {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 8px;

    .p-price {
      font-size: 24px;
      font-weight: 700;
    }

    .p-oldPr {
      font-size: 16px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.4);
      text-decoration: line-through;
    }

    .p-discount {
      margin-left: auto;
      font-size: 14px;
      font-weight: 500;
      padding: 4px 8px;
      border-radius: 12px;
      background-color: rgba(255, 51, 51, 0.1);
      color: #ff3333;
    }
  }
`;
