import React from "react";
import { useState } from "react";
// import { useParams } from 'react-router'
// import { useProductById,  } from '../../hooks/useProducts'

const ProductDetail = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0].id);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("details");
  const [mainImage, setMainImage] = useState(product.images[0]);

  const handleQuantityChange = (amount) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <Container>
      <Breadcrumb>
        <span>Home</span> &gt; <span>Shop</span> &gt;{" "}
        <span>{product.category}</span> &gt; <span>{product.subcategory}</span>
      </Breadcrumb>

      <ProductLayout>
        <ThumbnailContainer>
          <ThumbnailList>
            {product.images.map((image, index) => (
              <ThumbnailItem
                key={index}
                active={mainImage === image}
                onClick={() => handleThumbnailClick(image)}
              >
                <img
                  src={image}
                  alt={`Product view ${index + 1}`}
                  width={80}
                  height={80}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </ThumbnailItem>
            ))}
          </ThumbnailList>
          <MainImage>
            <img
              src={mainImage}
              alt={product.name}
              width={500}
              height={600}
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
            />
          </MainImage>
        </ThumbnailContainer>

        <ProductInfo>
          <ProductTitle>{product.name}</ProductTitle>

          <RatingContainer>
            <Stars>
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  style={{ color: i < product.rating ? "#f59e0b" : "#d1d5db" }}
                >
                  ★
                </span>
              ))}
            </Stars>
            <span>{product.rating.toFixed(1)}/5</span>
          </RatingContainer>

          <PriceContainer>
            <CurrentPrice>${product.price}</CurrentPrice>
            {product.oldPrice && (
              <>
                <OldPrice>${product.oldPrice}</OldPrice>
                <DiscountBadge>
                  -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                </DiscountBadge>
              </>
            )}
          </PriceContainer>

          <Description>{product.description}</Description>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <OptionSection>
              <OptionTitle>Select Colors</OptionTitle>
              <ColorOptions>
                {product.colors.map((color) => (
                  <ColorButton
                    key={color.id}
                    style={{ backgroundColor: color.hex }}
                    selected={selectedColor === color.id}
                    onClick={() => setSelectedColor(color.id)}
                    aria-label={`Select ${color.name} color`}
                  >
                    {selectedColor === color.id && (
                      <span style={{ color: "#fff", fontSize: "12px" }}>✓</span>
                    )}
                  </ColorButton>
                ))}
              </ColorOptions>
            </OptionSection>

            <OptionSection>
              <OptionTitle>Choose Size</OptionTitle>
              <SizeOptions>
                {product.sizes.map((size) => (
                  <SizeButton
                    key={size}
                    selected={selectedSize === size}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </SizeButton>
                ))}
              </SizeOptions>
            </OptionSection>

            <QuantityContainer>
              <QuantityControl>
                <QuantityButton
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  −
                </QuantityButton>
                <QuantityValue>{quantity}</QuantityValue>
                <QuantityButton onClick={() => handleQuantityChange(1)}>
                  +
                </QuantityButton>
              </QuantityControl>
              <AddToCartButton>Add to Cart</AddToCartButton>
            </QuantityContainer>
          </div>
        </ProductInfo>
      </ProductLayout>

      <TabsContainer>
        <TabsHeader>
          <TabButton
            active={activeTab === "details"}
            onClick={() => setActiveTab("details")}
          >
            Product Details
          </TabButton>
          <TabButton
            active={activeTab === "reviews"}
            onClick={() => setActiveTab("reviews")}
          >
            Rating & Reviews
          </TabButton>
          <TabButton
            active={activeTab === "faqs"}
            onClick={() => setActiveTab("faqs")}
          >
            FAQs
          </TabButton>
        </TabsHeader>
        <TabContent>
          {activeTab === "details" && (
            <div>
              <p>{product.details || "Product details content goes here..."}</p>
            </div>
          )}
          {activeTab === "reviews" && (
            <div>
              <p>{product.reviews || "Reviews content goes here..."}</p>
            </div>
          )}
          {activeTab === "faqs" && (
            <div>
              <p>{product.faqs || "FAQs content goes here..."}</p>
            </div>
          )}
        </TabContent>
      </TabsContainer>
    </Container>
  );
};

export default ProductDetail;

