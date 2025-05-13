import styled from "styled-components";

export const CartPageContainer = styled.div`
  padding: 0 20px;
`;

export const HrLine = styled.div`
  margin-bottom: 40px;
  border: 1px solid #00000030;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 40px;
  font-family: "Poppins", sans-serif;
  margin-bottom: 24px;
`;

export const CartWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const CartItems = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 12px;
  align-items: center;
`;

export const InfoImage = styled.div`
  display: flex;
  gap: 16px;
`;

export const ProductImage = styled.img`
  width: 124px;
  height: 124px;
  object-fit: cover;
  border-radius: 9px;
  background-color: #f0eeed;
`;

export const Info = styled.div`
  flex: 1;

  h4 {
    font-size: 20px;
    font-weight: 600;
    margin: 0;
  }

  span {
    font-weight: 700;
    color: black;
  }

  p {
    font-size: 14px;
    color: #555;
    margin: 4px 0;
  }

  strong {
    display: block;
    margin-top: 6px;
    font-weight: 700;
    font-size: 24px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 50px;
`;

export const TrashButton = styled.button`
  text-align: end;
  color: red;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const QuantityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4px;
  border-radius: 62px;
  width: 120px;
  height: 44px;
  font-size: 20px;
  border: 1px solid #00000030;
  background-color: #f0f0f0;

  button {
    cursor: pointer;
    font-size: 30px;
    font-weight: 700;
    font-family: "Satoshi", sans-serif;
    outline: none;
    width: 50px;
    height: 100%;
    border: none;
    background-color: transparent;

    &:active {
      transform: scale(0.9);
      background-color: #00000030;
    }
  }

  span {
    display: inline-block;
  }
`;

export const Summary = styled.div`
  flex: 1;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 20px;
  min-width: 500px;
`;

export const SummaryTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const SummaryLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  color: #00000060;
  font-size: 20px;
  font-weight: 400;
  font-family: "Satoshi", sans-serif;
`;

export const PriceText = styled.span`
  color: black;
  font-weight: 700;
`;

export const TotalLine = styled(SummaryLine)`
  color: black;
`;

export const HrLineBetween = styled.div`
  width: 100%;
  margin: 10px 0;
  border: 1px solid #00000030;
`;

export const PromoSection = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const PromoInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const PromoInput = styled.input`
  width: 100%;
  min-width: 326px;
  height: 48px;
  padding: 0 12px 0 38px;
  border-radius: 62px;
  border: 1px solid #ddd;
  font-size: 16px;
  background-color: #f0f0f0;
`;

export const PromoButton = styled.button`
  background: black;
  color: white;
  padding: 10px 18px;
  min-width: 119px;
  height: 48px;
  border-radius: 62px;
  border: none;
  cursor: pointer;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  height: 60px;
  margin-top: 20px;
  padding: 14px;
  background: black;
  color: white;
  border-radius: 62px;
  font-size: 16px;
  cursor: pointer;
  border: none;
`;
