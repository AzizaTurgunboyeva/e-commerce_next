import React from "react";
import { CardWrapper } from "./Card.styled";
import StarRate from "../components/startRate";
import { Link } from "react-router";

export default function Card(props) {
  const { images = [], id, title, rating, price, oldPrice, discount } = props;

  return (
    <CardWrapper>
      <div className="img-list">
        <Link key={id} to={`/productDetail/${id}`}>
          {images.length > 0 ? (
            <img src={images[0]} alt={title} />
          ) : (
            <div>No Image</div>
          )}
        </Link>
      </div>

      <div className="card-title">
        <p className="p-name">{title}</p>

        <div className="c-rate">
          <StarRate rating={rating} />
          <p>{rating.toFixed(1)}/10</p>
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
