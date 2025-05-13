import React from "react";
import { useProducts } from "../../../hooks/useProducts";
import { CategoryCardsContainer } from "./CategoryDetails.styled";
import Card from "../../../components/common/Card";
import FilterSidebar from "./FilterSidebar";

const CategoryDetails = () => {
  const { data: products = [], isLoading, isError, error } = useProducts();

  if (isLoading) return <p>Loading products…</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const tShirts = products.filter(
    (c) => c.category?.toLowerCase() === "t-shirt"
  );
  // console.log(tShirts);

  return (
    <CategoryCardsContainer>
     <FilterSidebar/>
      <div className="title">
        <p>T-Shirts</p>
      </div>
      <div className="grid">
        {tShirts.map((p) => {
          const discount =
            p.originalPrice && p.oldPrice > p.price
              ? Math.round((1 - p.price / p.originalPrice) * 100)
              : null;
          return <Card p={p} />;
        })}
      </div>
    </CategoryCardsContainer>
  );
};

//

export default CategoryDetails;
