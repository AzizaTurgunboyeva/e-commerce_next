import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
`;

export const Breadcrumb = styled.div`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 16px;

  span {
    &:hover {
      color: #000;
      cursor: pointer;
    }
  }
`;

export const ProductLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const ThumbnailList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-right: 16px;
`;

export const ThumbnailItem = styled.div`
  width: 80px;
  height: 80px;
  border: ${(props) => (props.active ? "1px solid #000" : "1px solid #d1d5db")};
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
`;

export const MainImage = styled.div`
  flex: 1;
  max-width: 500px;
  background-color: #f3f4f6;
  border-radius: 8px;
  overflow: hidden;
`;

export const ProductInfo = styled.div`
  flex: 1;
`;

export const ProductTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const Stars = styled.div`
  display: flex;
  margin-right: 8px;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const CurrentPrice = styled.span`
  font-size: 24px;
  font-weight: 700;
  margin-right: 8px;
`;

export const OldPrice = styled.span`
  font-size: 20px;
  color: #6b7280;
  text-decoration: line-through;
  margin-right: 8px;
`;

export const DiscountBadge = styled.span`
  background-color: #ef4444;
  color: white;
  font-size: 14px;
  padding: 2px 8px;
  border-radius: 4px;
`;

export const Description = styled.p`
  color: #6b7280;
  margin-bottom: 24px;
`;

export const OptionSection = styled.div`
  margin-bottom: 24px;
`;

export const OptionTitle = styled.h3`
  font-weight: 500;
  margin-bottom: 8px;
`;

export const ColorOptions = styled.div`
  display: flex;
  gap: 8px;
`;

export const ColorButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  ${(props) =>
    props.selected &&
    `
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px #000;
  `}
`;

export const SizeOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const SizeButton = styled.button`
  padding: 8px 16px;
  border-radius: 9999px;
  border: 1px solid #d1d5db;
  background-color: ${(props) => (props.selected ? "#000" : "#fff")};
  color: ${(props) => (props.selected ? "#fff" : "#000")};
  cursor: pointer;
`;

export const QuantityContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d1d5db;
  border-radius: 4px;
`;

export const QuantityButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6;
  border: none;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const QuantityValue = styled.span`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #d1d5db;
  border-right: 1px solid #d1d5db;
`;

export const AddToCartButton = styled.button`
  flex: 1;
  background-color: #000;
  color: #fff;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const TabsContainer = styled.div`
  margin-top: 40px;
`;

export const TabsHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #d1d5db;
`;


export const TabButton = styled.button`
  padding: 16px 24px;
  border: none;
  background: none;
  cursor: pointer;
  ${(props) =>
    props.active &&
    `
    border-bottom: 2px solid #000;
    font-weight: 500;
  `}
`;

export const TabContent = styled.div`
  padding: 16px 0;
`;
