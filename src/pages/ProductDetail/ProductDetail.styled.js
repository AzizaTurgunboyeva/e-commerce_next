// ProductDetail.styled.js
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1316px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const HRLine = styled.hr`
  margin-bottom: 82px;
  border: 1px solid #00000030;
  width: 100%;
  max-width: 1316px;
`;

export const ProductCart = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  margin-bottom: 100px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const Images = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const Thumbnails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: row;
    order: 2;
  }
`;

export const ThumbnailImage = styled.img`
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

  @media (max-width: 768px) {
    width: 80px;
    height: 90px;
  }
`;

export const MainImage = styled.div`
  flex-grow: 1;

  img {
    width: 100%;
    height: 555px;
    max-width: 400px;
    border-radius: 20px;
    background-color: #f0eeed;
    object-fit: cover;

    @media (max-width: 768px) {
      height: 400px;
    }
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 700px;
`;

export const Divider = styled.hr`
  margin: 10px 0;
  border: 1px solid #00000030;
`;

export const Title = styled.h3`
  font-size: 40px;
  font-weight: 700;
  font-family: "Integral CF", sans-serif;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 32px;
  }
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
`;

export const CurrentPrice = styled.div`
  font-weight: 700;
  font-size: 32px;
`;

export const OldPrice = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: gray;
  text-decoration: line-through;
`;

export const Discount = styled.div`
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
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  font-family: "Satoshi", sans-serif;
  color: #00000099;
`;

export const Colors = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ColorOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37px;
  height: 37px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid #00000030;
  background-color: ${({ color }) => color};
`;

export const Sizes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SizeList = styled.div`
  display: flex;
  gap: 12px;
  max-width: 400px;
  flex-wrap: wrap;
`;

export const SizeItem = styled.div`
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
  font-family: "Satoshi", sans-serif;
  background-color: #f0f0f0;
  transition: all 0.2s;

  &.active {
    background-color: #000000;
    color: #ffffff;
  }
`;

export const AddCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const QuantityControl = styled.div`
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
`;

export const QuantityButton = styled.button`
  cursor: pointer;
  font-size: 30px;
  font-weight: 700;
  font-family: "Satoshi", sans-serif;
  outline: none;
  width: 70px;
  height: 100%;
  margin: 0;
  border: none;
  background-color: transparent;

  &:active {
    transform: scale(0.9);
    background-color: #00000030;
  }
`;

export const AddToCartButton = styled.button`
  min-width: 500px;
  width: 100%;
  height: 52px;
  border-radius: 62px;
  background-color: #000000;
  color: #ffffff;
  margin: 0;
  font-size: 16px;
  font-family: "Satoshi", sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

export const ReviewsContainer = styled.div`
  margin: 40px 0;
`;

export const ReviewsHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 150px;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    gap: 30px;
    justify-content: space-between;
  }
`;

export const ReviewOption = styled.h2`
  font-size: 20px;
  font-weight: 500;
  font-family: "Satoshi", sans-serif;
  margin: 0;
  cursor: pointer;
  color: #00000099;
  padding-bottom: 5px;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;

  &.active {
    color: #000000;
    border-bottom: 2px solid #000000;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ReviewsListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const ReviewsTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  font-family: "Satoshi", sans-serif;
  margin: 0;
  color: #000000;

  span {
    color: #00000099;
    font-weight: 400;
    font-size: 16px;
  }
`;

export const ReviewActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ActionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: ${({ width }) => width || "48px"};
  background-color: #f0f0f0;
  border-radius: ${({ rounded }) => (rounded ? "62px" : "50%")};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const ReviewsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const LoadMoreButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 16px;
  font-family: "Satoshi", sans-serif;
  margin-top: 30px;
`;

export const DetailsList = styled.ul`
  margin-top: 12px;
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 8px;
    font-size: 16px;
    line-height: 1.5;
    display: flex;
    align-items: center;

    .bullet {
      color: green;
      margin-right: 8px;
    }
  }
`;

export const FAQItem = styled.details`
  margin: 12px 0;

  summary {
    font-weight: 600;
    cursor: pointer;
    padding: 10px;
    background: #f7f7f7;
    border-radius: 6px;
    transition: background 0.2s;

    &:hover {
      background: #eaeaea;
    }
  }

  p {
    margin-top: 8px;
    padding-left: 12px;
    color: #555;
  }
`;

export const YouMightLike = styled.div`
  margin-bottom: 100px;
`;

export const SectionTitle = styled.h3`
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  font-family: "Integral CF", sans-serif;
  margin: 64px 0 55px;
  color: #000000;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const FadeIn = styled.div`
  animation: fadeIn 0.6s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
