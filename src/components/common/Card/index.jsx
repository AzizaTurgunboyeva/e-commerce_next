// src/components/Card/Card.jsx
import React from "react";
import { CardWrapper } from "./Card.styled";
import { useProducts } from "../../../hooks/useProducts";
import StarRate from "../components/startRate";

const Card = () => {
  const {data, isLoading, isError, error } = useProducts();

  if (isLoading) return <CardWrapper>Loading…</CardWrapper>;
  if (isError) return <CardWrapper>Error: {error?.message}</CardWrapper>;

  return (
    <>
      {data.map((product) => (
        <CardWrapper key={product.id} width={width}>
          <div className="img-list">
            <img src={product.images[0]} alt={product.title} />
            <div className="btns-rel">
              <button>1</button>
              <button>2</button>
            </div>
          </div>
          <div className="card-title">
            <p className="p-name">{product.title}</p>
            <div className="c-rate">
              <StarRate rating={product.rating} />
              <p>{product.rating}/10</p>
            </div>
            <div className="prices">
              <div className="p-price">${product.price.toFixed(2)}</div>
              <div className="p-oldPr">${product.price.toFixed(2)}</div>
              <div className="p-discount">-20%</div>
            </div>
          </div>
        </CardWrapper>
      ))}
    </>
  );
};

export default Card;
