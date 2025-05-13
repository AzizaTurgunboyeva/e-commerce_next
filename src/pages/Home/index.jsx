import React from "react";


import { useCategories, useProducts } from "../../hooks";
import { ByDressSection, MainSection, NewArrivalsSection, TopSellingSection } from "./components";

const HomePage = () => {
  // const {data, isLoading} = useCategories();
  const { data, isLoading } = useProducts();

  return (
    <div>
      <MainSection />
      <NewArrivalsSection />
      <TopSellingSection/>
      <ByDressSection />
    </div>
  );
};

export default HomePage;
