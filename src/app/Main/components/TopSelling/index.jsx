import React from "react";
import Card from "../../../../components/common/Card";
import { useProducts } from "../../../../hooks/useProducts";
import { Grid, TopSellingWrapper } from "./TopSelling.styled";
import { Link } from "react-router";



export default function TopSellingSection() {
  const { data: products = [], isLoading, isError, error } = useProducts();

  if (isLoading) return <p>Loading products…</p>;
  if (isError) return <p>Error: {error.message}</p>;
 const topFour = products.slice(0, 4)
  return (
    <TopSellingWrapper>
      <div className="title">
        <p>TOP SELLING</p>
      </div>
    
        {" "}
        <Grid>
          {topFour.map((p) => {
            const discount =
              p.oldPrice && p.oldPrice > p.price
                ? Math.round((1 - p.price / p.oldPrice) * 100)
                : null;

            return (
              <Card
              
                // key={p.id}
                // width={240}
                // images={p.images}
                // title={p.title}
                // rating={p.rating}
                // price={p.price}
                // oldPrice={p.oldPrice}
                // discount={discount}
                p={p}
              />
              
            );
          })}
        </Grid>
      
      <div className="view-all">
        <button>View All</button>
      </div>
    </TopSellingWrapper>
  );
}
