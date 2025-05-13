import React from "react";
import { FilterCategoryWrapper } from "./Filter.styled";
import { useCategories } from "../../../../../hooks/useCategories";
import { FilterIcon } from "../../../../../assets/icons";

const DressStyleComponent = () => {
  const { data: categories = [], isLoading, isError, error } = useCategories();

  return (
    <FilterCategoryWrapper>
      <div
        className=""  >
        <p></p>
        <FilterIcon />
      </div>
    </FilterCategoryWrapper>
  );
};

export default DressStyleComponent;
