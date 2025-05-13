import React, { useEffect, useState } from "react";
import ReactRangeSliderInput from "react-range-slider-input";
import { FilterIcon } from "../../../../assets/icons";
import ArrowRightIcon from "../../../../assets/icons/src/ArrowRight.icon";
import ColorPicker from "./ColorPicker";
import { sizeList } from "../../../ProductDetails/constants";
import {
  Category,
  FilterSidebarWrapper,
  FilterHeader,
  HrLineFilter,
  FilterItem,
  AccordionSection,
  AccordionHeader,
  AccordionBody,
  Arrow,
  ColorAccordionBody,
  SizeAccordionBody,
  DressStyleAccordionBody,
  SizeItem,
  ApplyButton,
  CategoryHeader,
} from "./FilterSidebar.styles";

const FilterSidebar = () => {
  const [togglers, setTogglers] = useState({
    priceToggler: false,
    colorToggler: false,
    sizeToggler: false,
    dressStyleToggler: false,
  });
  const [selectedSize, setSelectedSize] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 500]);

  useEffect(() => {
    const thumbs = document.querySelectorAll(".range-slider__thumb");
    thumbs.forEach((thumb, index) => {
      const value = priceRange[index];
      const positionStyle = index === 1 ? "right:5px;" : "";
      thumb.innerHTML = `<span style=\"font-weight:700; position:absolute; bottom:-20px; ${positionStyle} background-color:transparent\">$${value}</span>`;
    });
  }, [priceRange]);

  const filterByClothes = [
    { filterKey: "T-shirts", title: "T-shirts" },
    { filterKey: "Shorts", title: "Shorts" },
    { filterKey: "Shirts", title: "Shirts" },
    { filterKey: "Hoodie", title: "Hoodie" },
    { filterKey: "Jeans", title: "Jeans" },
  ];

  const filterByDressStyle = [
    { filterKey: "Casual", title: "Casual" },
    { filterKey: "Formal", title: "Formal" },
    { filterKey: "Party", title: "Party" },
    { filterKey: "Gym", title: "Gym" },
  ];

  const handleToggler = (key) => {
    setTogglers((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Category>
      <FilterSidebarWrapper>
        <FilterHeader>
          <h3>Filters</h3>
          <FilterIcon />
        </FilterHeader>
        <HrLineFilter />

        {filterByClothes.map((item) => (
          <FilterItem key={item.filterKey}>
            <span>{item.title}</span>
            <ArrowRightIcon />
          </FilterItem>
        ))}

        <HrLineFilter />

        <AccordionSection>
          <AccordionHeader onClick={() => handleTogglers("priceToggler")}>
            <p>Price</p>
            <Arrow open={togglers.priceToggler}>
              <ArrowRightIcon />
            </Arrow>
          </AccordionHeader>
          <AccordionBody open={togglers.priceToggler} maxHeight="70px">
            <ReactRangeSliderInput
              className="custom-range"
              min={0}
              max={500}
              onInput={setPriceRange}
            />
          </AccordionBody>
        </AccordionSection>

        {/* Color Section */}
        <HrLineFilter />
        <AccordionSection>
          <AccordionHeader onClick={() => handleTogglers("colorToggler")}>
            <p>Color</p>
            <Arrow open={togglers.colorToggler}>
              <ArrowRightIcon />
            </Arrow>
          </AccordionHeader>
          <ColorAccordionBody open={togglers.colorToggler}>
            <ColorPicker handleResult={(res) => console.log(res)} />
          </ColorAccordionBody>
        </AccordionSection>

        {/* Size Section */}
        <HrLineFilter />
        <AccordionSection>
          <AccordionHeader onClick={() => handleTogglers("sizeToggler")}>
            <p>Size</p>
            <Arrow open={togglers.sizeToggler}>
              <ArrowRightIcon />
            </Arrow>
          </AccordionHeader>
          <SizeAccordionBody open={togglers.sizeToggler}>
            {sizeList.map((size) => (
              <SizeItem
                key={size.name}
                active={selectedSize === size.name}
                onClick={() => setSelectedSize(size.name)}
              >
                {size.name}
              </SizeItem>
            ))}
          </SizeAccordionBody>
        </AccordionSection>

        {/* Dress Style Section */}
        <HrLineFilter />
        <AccordionSection>
          <AccordionHeader onClick={() => handleTogglers("dressStyleToggler")}>
            <p>Dress Style</p>
            <Arrow open={togglers.dressStyleToggler}>
              <ArrowRightIcon />
            </Arrow>
          </AccordionHeader>
          <DressStyleAccordionBody open={togglers.dressStyleToggler}>
            {filterByDressStyle.map((item) => (
              <FilterItem key={item.filterKey}>
                <span>{item.title}</span>
                <ArrowRightIcon />
              </FilterItem>
            ))}
          </DressStyleAccordionBody>
        </AccordionSection>

        <ApplyButton>Apply Filter</ApplyButton>
      </FilterSidebarWrapper>

      <CategoryHeader>
        <h3>Casual</h3>
        <p>Showing 1-10 products of 100 Products</p>
      </CategoryHeader>
    </Category>
  );
};

export default FilterSidebar;
