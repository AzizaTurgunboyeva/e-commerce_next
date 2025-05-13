import React, { useState } from "react";
import { useProducts } from "../../../../hooks/useProducts";
import { Grid, TopSellingWrapper } from "./TopSelling.styled";
import Card from "../../../../components/Card";

export default function TopSellingSection() {
  const { data: products = [], isLoading, isError, error } = useProducts();
  const [visibleCount, setVisibleCount] = useState(4);

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, products.length));
  };

  if (isLoading) return <p>Loading products…</p>;
  if (isError)   return <p>Error: {error.message}</p>;

  const productsToShow = products.slice(0, visibleCount);

  return (
    <TopSellingWrapper>
      <div className="title">
        <p>TOP SELLING</p>
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

      {/* only show button if there are more products to load */}
      {visibleCount < products.length && (
        <div className="view-all">
          <button onClick={handleViewMore}>View All</button>
        </div>
      )}
    </TopSellingWrapper>
  );
}
