import React from "react";
import {
  BigStar,
  Brands,
  HeaderWrapper,
  MainWrapper,
  SmallStar,
} from "./Home.styled";
import { models, small, big } from "./images";
import Button from "../../../../components/Button";
import { btnSizes, btnTypes } from "../../../../components/Button/constant";

const Ad = () => {
  return (
    <MainWrapper>
      <HeaderWrapper>
        <div className="left">
          <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button type={btnTypes.primary} size={btnSizes.md} px={58}>
            Shop Now
          </Button>
          <div className="numbers">
            <div className="intbr">
              <p>200+</p>
              <p>International Brands</p>
            </div>

            <div className="highQuaPro">
              <p>2,000+</p>
              <p>High-Quality Products</p>
            </div>

            <div className="happyCus">
              <p>30,000+</p>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={models} alt="models" />
          <SmallStar src={small} alt="small" />
          <BigStar src={big} alt="big" />
        </div>
      </HeaderWrapper>
      <Brands>
        <p>VERSACE</p>
        <p>ZARA</p>
        <p>GUCCI</p>
        <p>PRADA</p>
        <p>CALVIN KLEIN</p>
      </Brands>
    </MainWrapper>
  );
};

export default Ad;
