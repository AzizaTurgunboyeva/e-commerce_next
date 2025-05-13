import React from "react";
import { BrandName, BrandsContainer } from "./BrandsAd.styled";

function BrandsAd() {
  const brands = [
    { name: "VERSACE", fontFamily: '"Times New Roman", sans-serif' },
    { name: "ZARA", fontFamily: "Bodoni, serif" },
    { name: "GUCCI", fontFamily: "Rosarivo, serif" },
    {
      name: "PRADA",
      fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
    },
    { name: "Calvin Klein", fontFamily: "Lucida Sans, sans-serif" },
  ];

  return (
    <BrandsContainer>
      {brands.map((brand) => (
        <BrandName key={brand.name} fontFamily={brand.fontFamily}>
          {brand.name}
        </BrandName>
      ))}
    </BrandsContainer>
  );
}

export default BrandsAd;
