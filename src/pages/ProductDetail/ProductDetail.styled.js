import styled from "styled-components";

// Styled Components
export const HRLine = styled.div`
  margin-bottom: 82px;
  border: 1px solid #00000030;
  width: 100%;
`;

export const ProductCart = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  margin-bottom: 100px;
`;

export const ImagesWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

 export const Thumbnails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  img {
    width: 150px;
    height: 175px;
    border-radius: 10px;
    background-color: #f0eeed;
    cursor: pointer;
    object-fit: cover;
    border: 2px solid transparent;
    transition: border 0.2s;

    &.active {
      border: 2px solid #333;
    }
  }
`;

 export const MainImageContainer = styled.div`
  flex-grow: 1;

  img {
    width: 100%;
    height: 555px;
    max-width: 400px;
    border-radius: 20px;
    background-color: #f0eeed;
    object-fit: cover;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 700px;
`;

export const Divider = styled.div`
  margin: 10px 0;
  border: 1px solid #00000030;
`;

export const Title = styled.h3`
  font-size: 40px;
  font-weight: 700;
  font-family: Integral CF;
  margin: 0;
`;

export const Rating = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 20px;
`;

 export const Prices = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  .price {
    font-weight: 700;
    font-size: 32px;
  }
  .old {
    font-size: 32px;
    font-weight: 700;
    color: gray;
    text-decoration: line-through;
  }
  .discount {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    height: 34px;
    width: 72px;
    color: #ff3333;
    font-weight: 500;
    background-color: #ffe5e5;
    border-radius: 62px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  font-family: Satoshi;
  color: #00000099;
`;

export const Colors = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    color: #00000099;
  }
  .colors-wrap {
    display: flex;
    gap: 16px;
  }
  .color-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 37px;
    height: 37px;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid #00000030;
  }
`;

export const Sizes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    color: #00000099;
  }
  .sizes-wrap {
    display: flex;
    gap: 12px;
    max-width: 400px;

    .size-item {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 90px;
      height: 46px;
      border-radius: 62px;
      cursor: pointer;
      border: 1px solid #00000030;
      font-size: 16px;
      font-weight: 400;
      color: #00000099;
      padding: 0 4px;
      background-color: #f0f0f0;

      &.active {
        background-color: #000;
        color: #fff;
      }
    }
  }
`;

export const AddCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .quantity {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4px;
    border-radius: 62px;
    width: 170px;
    height: 52px;
    font-size: 20px;
    border: 1px solid #00000030;
    background-color: #f0f0f0;

    .quantity-btn {
      cursor: pointer;
      font-size: 30px;
      font-weight: 700;
      font-family: Satoshi;
      outline: none;
      width: 70px;
      height: 100%;
      border: none;
      background: transparent;

      &:active {
        transform: scale(0.9);
        background-color: #00000030;
      }
    }
  }

  .add-to-cart-btn {
    flex-grow: 1;
    margin-left: 20px;
    height: 52px;
    border-radius: 62px;
    background-color: #000;
    color: #fff;
    font-size: 16px;
    font-family: Satoshi;
    font-weight: 500;
    cursor: pointer;
  }
`;
