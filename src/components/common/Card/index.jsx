// src/components/Card/Card.jsx
import React from "react";
import { CardWrapper } from "./Card.styled";
import StarRate from "../components/startRate";

export default function Card({
  width,
  images,
  title,
  rating,
  price,
  oldPrice,
  discount,
  actions = [],
}) {
  return (
    <CardWrapper width={width}>
      <div className="img-list">
        {images[0] && <img src={images[0]} alt={title} />}
      </div>

      <div className="card-title">
        <p className="p-name">{title}</p>

        <div className="c-rate">
          <StarRate rating={rating} />
          <p>{rating.toFixed(1)}/5</p>
        </div>

        <div className="prices">
          <div className="p-price">${price.toFixed(0)}</div>
          {oldPrice != null && (
            <div className="p-oldPr">${oldPrice.toFixed(0)}</div>
          )}
          {discount != null && <div className="p-discount">-{discount}%</div>}
        </div>
      </div>
    </CardWrapper>
  );
}
