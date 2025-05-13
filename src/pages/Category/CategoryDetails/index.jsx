import React, { useEffect, useState } from "react";
import ReactRangeSliderInput from "react-range-slider-input";
import Breadcrumb from "../../../components/Breadcrumb";


const CategoryDetails = () => {
  return (
    <div className="container">
      <Breadcrumb />
      <FilterSidebar />
    </div>
  );
};

export default CategoryDetails;
