import React, { useState } from "react";
import { SizeWrapper } from "./Size.styled";
import { useProducts } from "../../../../../hooks/useProducts";

const CheckSize = ({ handleResult }) => {
  const [selectedSizes, setSelectedSizes] = useState([]);
  const { data: products = [], isLoading, isError, error } = useProducts();

  if (isLoading) return <p>Loading products…</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const handleSizeClick = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes((prev) => prev.filter((c) => c !== size));
      handleResult(selectedSizes.filter((c) => c !== size));
    } else {
      setSelectedSizes((prev) => [...prev, size]);
      handleResult([...selectedSizes, size]);
    }
  };

  const availableSizes = products
    .map((product) => product.size)
    .flat()
    .filter((value, index, self) => self.indexOf(value) === index);
// console.log(availableSizes);

  return (
    <SizeWrapper>
      {availableSizes.map((size) => {
        return (
          <div
            key={size}
            onClick={() => handleSizeClick(size)}
            className="size-item"
            style={{
              backgroundColor: selectedSizes.includes(size)
                ? "black"
                : "#e0e0e0",
              color: selectedSizes.includes(size) ? "white" : "black",
              padding: "10px 20px",
              margin: "1.5px",
             
              borderRadius: "62px",
              cursor: "pointer",
              gap:"8px",
              display: "inline-block",
              textAlign: "center",
            }}
          >
            {size}
          </div>
        );
      })}
    </SizeWrapper>
  );
};

export default CheckSize;
