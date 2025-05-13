import React, { useEffect, useState } from "react";
import ReactRangeSliderInput from "react-range-slider-input";

import { ArrowRightIcon, FilterIcon } from "../../../../assets/icons";

import "react-range-slider-input/dist/style.css";
import ColorPicker from "./ColorPicker";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router";
import { useProducts } from "../../../../hooks/useProducts";
import { parseQueryParams } from "../../../../utils";
import { FilterSidebarWrapper } from "./FilterSidebar.styled";
import CheckSize from "./CheckSize";
import DressStyleComponent from "./FilterCategory";

const FilterSidebar = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const location = useLocation();

  const objParams = parseQueryParams(location.search);

  const { data, isLoading } = useProducts({
    category: objParams?.category,
  });

//   console.log(data, isLoading);

  const [togglers, setTogglers] = useState({
    priceToggler: false,
    colorToggler: false,
    sizeToggler: false,
    dressStyleToggler: false,
  });

  const handleToggle = (key) => {
    setTogglers({
      ...togglers,
      [key]: !togglers[key],
    });
  };

  const [priceRange, setPriceRange] = useState([0, 500]);

  useEffect(() => {
    const el = document.querySelectorAll(".range-slider__thumb");

    if (!!el[0] && !!el[1]) {
      el[0].innerHTML = `<span style="font-weight: 700;position:absolute;bottom: -20px;background-color: transparent !important;">$${priceRange[0]}</span>`;
      el[1].innerHTML = `<span style="font-weight: 700;position:absolute;bottom: -20px;background-color: transparent !important;">$${priceRange[1]}</span>`;
    }
  }, [priceRange]);

  const filterByCloths = [
    { filterKey: "T-shirt", title: "T-shirts" },
    { filterKey: "Men's-shoes", title: "Shoes" },
    { filterKey: "Socks", title: "Socks" },
    { filterKey: "Pants", title: "Jeans" },
  ];

  const handleCategoryClick = (categoryObj) => {
    navigate(`/category/${categoryId}?category=${categoryObj.filterKey}`);
  };

  return (
    <FilterSidebarWrapper>
      <div className="filter-header">
        <h3>Filters</h3>
        <FilterIcon />
      </div>
      <div className="hr-line" />
      <div>
        {filterByCloths.map((item) => (
          <div
            onClick={() => handleCategoryClick(item)}
            className="filter-item"
            key={item.title}
          >
            <span>{item.title}</span>
            <ArrowRightIcon />
          </div>
        ))}
      </div>
      <div className="hr-line" />
      <div className="accordion">
        <div
          className="accordion-header"
          onClick={() => handleToggle("priceToggler")}
        >
          <p>Price</p>
          <div
            className={`arrow ${
              togglers.priceToggler ? "arrow-top" : "arrow-bottom"
            }`}
          >
            <ArrowRightIcon />
          </div>
        </div>
        <div
          className={`accordion-body ${
            togglers.priceToggler ? "open" : "hide"
          }`}
        >
          <ReactRangeSliderInput
            className="hola"
            min={5}
            max={500}
            onInput={(range) => setPriceRange(range)}
          />
        </div>
      </div>
      <div className="hr-line" />
      <div className="accordion">
        <div
          className="accordion-header"
          onClick={() => handleToggle("colorToggler")}
        >
          <p>Colors</p>
          <div
            className={`arrow ${
              togglers.colorToggler ? "arrow-top" : "arrow-bottom"
            }`}
          >
            <ArrowRightIcon />
          </div>
        </div>
        <div
          className={`accordion-body color-accordion ${
            togglers.colorToggler ? "open" : "hide"
          }`}
        >
          <ColorPicker handleResult={(res) => console.log("result", res)} />
        </div>
      </div>

      <div className="hr-line" />
      {/* size */}
      <div className="accordion">
        <div
          className="accordion-header"
          onClick={() => handleToggle("sizeToggler")}
        >
          <p>Size</p>
          <div
            className={`arrow ${
              togglers.sizeToggler ? "arrow-top" : "arrow-bottom"
            }`}
          >
            <ArrowRightIcon />
          </div>
        </div>
        <div
          className={`accordion-body accordion-size size-accordion ${
            togglers.sizeToggler ? "open" : "hide"
          }`}
        >
          <CheckSize handleResult={(res) => console.log("result", res)} />
        </div>
      </div>

      <div className="hr-line" />
      {/* dressstyle */}
      <div className="accordion">
        <div
          className="accordion-header"
          onClick={() => handleToggle("dressStyleToggler")}
        >
          <p>Dress Style</p>
          <div
            className={`arrow ${
              togglers.dressStyleToggler ? "arrow-top" : "arrow-bottom"
            }`}
          >
            <ArrowRightIcon />
          </div>
        </div>
        <div
          className={`accordion-body dresstyle-accordion ${
            togglers.colorToggler ? "open" : "hide"
          }`}
        >
          <DressStyleComponent
            handleResult={(res) => console.log("result", res)}
          />
        </div>
      </div>
    </FilterSidebarWrapper>
  );
};

export default FilterSidebar;
