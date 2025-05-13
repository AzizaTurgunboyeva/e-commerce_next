import React, { useState } from "react";
import { useProducts } from "../../../../hooks/useProducts";
import Card from "../../../../components/Card";
import { Grid, ProductsListWrapper } from "./NewArrivals.styled";

export default function NewArrivals() {
  const { data: products = [], isLoading, isError, error } = useProducts();
  const [visibleCount, setVisibleCount] = useState(4);

  const handleViewAll = () => {
    setVisibleCount((prev) => Math.min(prev + 4, products.length));
  };

  if (isLoading) return <p>Loading products…</p>;
  if (isError) return <p>Error: {error.message}</p>;

  // slice based on our count
  const productsToShow = products.slice(0, visibleCount);

  return (
    <ProductsListWrapper id="new-arrival">
      <div className="title">
        <p>NEW ARRIVALS</p>
      </div>
      <Grid>
        {productsToShow.map((p) => {
          const discount =
            p.oldPrice && p.oldPrice > p.price
              ? Math.round((1 - p.price / p.oldPrice) * 100)
              : null;

          return (
            <Card
              key={p.id}
              width={240}
              images={p.images}
              title={p.title}
              rating={p.rating}
              price={p.price}
              oldPrice={p.oldPrice}
              discount={discount}
            />
          );
        })}
      </Grid>

      {/* Only show the button if there are more products */}
      {visibleCount < products.length && (
        <div className="view-all">
          <button onClick={handleViewAll}>View All</button>
        </div>
      )}
    </ProductsListWrapper>
  );
}
