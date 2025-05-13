import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useProductById, useProducts, useComments } from "../../hooks";
import {
  Container,
  HRLine,
  ProductCart,
  Images,
  Thumbnails,
  ThumbnailImage,
  MainImage,
  Details,
  Divider,
  Title,
  Rating,
  Prices,
  CurrentPrice,
  OldPrice,
  Discount,
  Description,
  Colors,
  ColorOption,
  Sizes,
  SizeList,
  SizeItem,
  AddCart,
  QuantityControl,
  QuantityButton,
  AddToCartButton,
  ReviewsContainer,
  ReviewsHeader,
  ReviewOption,
  ReviewsListHeader,
  ReviewsTitle,
  ReviewActions,
  ActionButton,
  ReviewsList,
  LoadMoreButton,
  DetailsList,
  FAQItem,
  YouMightLike,
  SectionTitle,
  ProductGrid,
  FadeIn,
} from "./ProductDetail.styled";
import { getRating } from "../../utils/getRating";
import { productDetails, productFaqs, sizeList } from "./constant";
import { toast } from "react-toastify";
import ReviewCard from "../../components/Review";
import { TickIcon, FilterIcon } from "../../assets/icons";
import Card from "../../components/Card";

const colorsList = [
  { code: "#44260b", name: "Brown" },
  { code: "#023902", name: "Green" },
  { code: "#1f1f61", name: "Blue" },
];

function ProductDetails() {
  const { id } = useParams();
  const { data } = useProductById(id);
  const { data: products,isLoading } = useProducts();
  const { data: reviews } = useComments();

  const limitedImages = data?.images.slice(0, 3);
  const limitedProducts = products?.slice(0, 4);

  useEffect(() => {
    if (limitedImages && limitedImages.length > 0) {
      setMainImage(limitedImages[0]);
    }
  }, [data]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(limitedImages?.[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6);

  const handleQuantity = (e) => {
    if (e.target.innerText === "+") {
      setQuantity(quantity + 1);
    } else if (e.target.innerText === "-") {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };

  const handleSelect = (colorCode) => {
    setSelectedColor(colorCode);
  };

  const handleSize = (e, size) => {
    const sizeItems = document.querySelectorAll(".size-item");
    sizeItems.forEach((item) => item.classList.remove("active"));
    e.currentTarget.classList.add("active");
    setSelectedSize(size);
  };

  const handleOption = (index) => {
    setActiveIndex(index);
  };
  const options = ["Product Details", "Rating & Reviews", "FAQs"];

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.warning("Please select size and color before adding to cart.");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const cartItem = {
      id: data.id,
      title: data.title,
      price: data.price,
      oldPrice: data.oldPrice || null,
      image: data.images?.[0],
      size: selectedSize,
      color: colorsList.find((color) => color.code === selectedColor)?.name,
      quantity,
    };

    const existingIndex = cart.findIndex(
      (item) =>
        item.id === cartItem.id &&
        item.size === cartItem.size &&
        item.color === cartItem.color
    );

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += cartItem.quantity;
    } else {
      cart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Product added to cart!");
  };

  return (
    <Container>
      <HRLine />
      <ProductCart>
        <Images>
          <Thumbnails>
            {limitedImages?.map((img, index) => (
              <ThumbnailImage
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={mainImage === img ? "active" : ""}
                onClick={() => setMainImage(img)}
              />
            ))}
          </Thumbnails>
          <MainImage>
            <img src={mainImage} alt="Main product" />
          </MainImage>
        </Images>
        <Details>
          <Title>{data?.title}</Title>
          <Rating>
            {getRating(data?.rating)}
            <span className="product-rating-value">{data?.rating}/5</span>
          </Rating>
          <Prices>
            <CurrentPrice>${data?.price}</CurrentPrice>
            {data?.oldPrice && (
              <>
                <OldPrice>${data?.oldPrice}</OldPrice>
                <Discount>
                  -
                  {Math.round(
                    ((data.oldPrice - data.price) / data.oldPrice) * 100
                  )}
                  %
                </Discount>
              </>
            )}
          </Prices>
          <Description>{data?.description}</Description>
          <Divider />
          <Colors>
            <h3>Select Colors</h3>
            <div className="colors">
              {colorsList.map((color) => (
                <ColorOption
                  key={color.code}
                  color={color.code}
                  onClick={() => handleSelect(color.code)}
                >
                  {selectedColor === color.code && (
                    <TickIcon height={16} width={20} />
                  )}
                </ColorOption>
              ))}
            </div>
          </Colors>
          <Divider />
          <Sizes>
            <h3>Choose Size</h3>
            <SizeList>
              {data?.size.map((sizeCode, index) => {
                const sizeObj = sizeList.find((s) => s.code === sizeCode);
                return (
                  <SizeItem
                    key={index}
                    onClick={(e) => handleSize(e, sizeObj?.name)}
                    className="size-item"
                  >
                    {sizeObj?.name}
                  </SizeItem>
                );
              })}
            </SizeList>
          </Sizes>
          <Divider />
          <AddCart>
            <QuantityControl>
              <QuantityButton onClick={handleQuantity}>-</QuantityButton>
              <span className="quantity-value">{quantity}</span>
              <QuantityButton onClick={handleQuantity}>+</QuantityButton>
            </QuantityControl>
            <AddToCartButton onClick={handleAddToCart}>
              Add to Cart
            </AddToCartButton>
          </AddCart>
        </Details>
      </ProductCart>

      <ReviewsContainer>
        <ReviewsHeader>
          {options.map((label, index) => (
            <ReviewOption
              key={index}
              className={activeIndex === index ? "active" : ""}
              onClick={() => handleOption(index)}
            >
              {label}
            </ReviewOption>
          ))}
        </ReviewsHeader>
        <Divider />
        {activeIndex === 1 && (
          <FadeIn>
            <ReviewsListHeader>
              <ReviewsTitle>
                All Reviews <span>(20)</span>
              </ReviewsTitle>
              <ReviewActions>
                <ActionButton>
                  <FilterIcon opacity={1} />
                </ActionButton>
                <ActionButton width="120px" rounded>
                  Latest
                </ActionButton>
                <ActionButton width="150px" rounded>
                  <button>Write a Review</button>
                </ActionButton>
              </ReviewActions>
            </ReviewsListHeader>
            <ReviewsList>
              {reviews.slice(0, visibleCount).map((review, index) => (
                <ReviewCard
                  key={index}
                  width={600}
                  rating={review.rating}
                  user={review.user}
                  verified={review.verified}
                  text={review.text}
                  datePosted={review.datePosted}
                />
              ))}
            </ReviewsList>
            {visibleCount < mockReviews.length && (
              <LoadMoreButton>
                <button onClick={handleLoadMore}>Load More Reviews</button>
              </LoadMoreButton>
            )}
          </FadeIn>
        )}

        {activeIndex === 0 && (
          <FadeIn>
            <h3>Product Details</h3>
            <DetailsList>
              {productDetails.map((item, index) => (
                <li key={index}>
                  <span className="bullet">✔</span> {item}
                </li>
              ))}
            </DetailsList>
          </FadeIn>
        )}

        {activeIndex === 2 && (
          <FadeIn>
            <h3>
              <span className="icon">❓</span> Frequently Asked Questions
            </h3>
            {productFaqs.map((faq, idx) => (
              <FAQItem key={idx}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </FAQItem>
            ))}
          </FadeIn>
        )}
      </ReviewsContainer>

      <YouMightLike>
        <SectionTitle>You might also like</SectionTitle>
        <ProductGrid>
         {products.map((p) => {
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
        
        </ProductGrid>
      </YouMightLike>
    </Container>
  );
}

export default ProductDetails;
