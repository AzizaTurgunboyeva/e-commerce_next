import React from "react";
import { DressStyleWrapper } from "./Styles.styled";
import { mShoes, socks, tShirt, wShoes } from "./images";

const DressStyleSection = () => {
  const cards = [
    { title: "Socks", img: socks },
    { title: "Men's Shoes", img: mShoes },
    { title: "T-shirt", img: tShirt },
    { title: "Women's Shoes", img: wShoes },
  ];

  return (
    <DressStyleWrapper id="category">
      <div className="title">
        <p>BROWSE BY DRESS STYLE</p>
      </div>

      <div className="styles-grid">
        {cards.map((item) => (
          <div key={item.title} className="card">
            <img src={item.img} alt={item.title} />
            <p className="card-title">{item.title}</p>
          </div>
        ))}
      </div>
    </DressStyleWrapper>
  );
};

export default DressStyleSection;
