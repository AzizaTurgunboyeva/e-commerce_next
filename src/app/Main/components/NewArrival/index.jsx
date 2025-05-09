import React from "react";
import { Grid, ProductsListWrapper } from "./NewArrial.styled";
import Card from "../../../../components/common/Card";
import { useProducts } from "../../../../hooks/useProducts";



export default function ProductsList() {
  const { data: products = [], isLoading, isError, error } = useProducts();

  if (isLoading) return <p>Loading products…</p>;
  if (isError) return <p>Error: {error.message}</p>;
 const topFour = products.slice(0, 4)
  return (
    <ProductsListWrapper>
      <Grid>
        {topFour.map((p) => {
          const discount =
            p.originalPrice && p.originalPrice > p.price
              ? Math.round((1 - p.price / p.originalPrice) * 100)
              : null;

          return (
            <Card
              key={p.id}
              width={240}
              images={p.images}
              title={p.title}
              rating={p.rating } 
              price={p.price}
              oldPrice={p.originalPrice}
              discount={discount}
            />
          );
        })}
      </Grid>
    </ProductsListWrapper>
  );
}
