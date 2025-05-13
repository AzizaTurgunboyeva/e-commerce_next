import { useParams } from "react-router";
import { useProductById, useProducts } from "../../hooks";
import { useEffect, useState } from "react";
import {
  HRLine,
  ProductCart,
  ImagesWrapper,
  Thumbnails,
  MainImageContainer,
  Details,
  Divider,
  Title,
  Rating,
  Prices,
  Description,
  Colors,
  Sizes,
  AddCart,
} from "./ProductDetail.styled";

function ProductDetails() {
  const { id } = useParams();
  const { data } = useProductById(id);
  const { data: products } = useProducts();
  const limitedImages = data?.images.slice(0, 3);
  const limitedProducts = products?.slice(0, 4);

  useEffect(() => {
    if (limitedImages?.length) setMainImage(limitedImages[0]);
  }, [data]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(limitedImages?.[0]);

  const handleQuantity = (e) => {
    if (e.target.innerText === "+") setQuantity((q) => q + 1);
    else if (e.target.innerText === "-" && quantity > 1)
      setQuantity((q) => q - 1);
  };

  const handleSize = (e, size) => {
    document
      .querySelectorAll(".size-item")
      .forEach((i) => i.classList.remove("active"));
    e.currentTarget.classList.add("active");
    setSelectedSize(size);
  };

  return (
    <>
      <HrLine />
      <ProductCart>
        <ImagesWrapper>
          <Thumbnails>
            {limitedImages?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb ${i}`}
                className={mainImage === img ? "active" : ""}
                onClick={() => setMainImage(img)}
              />
            ))}
          </Thumbnails>
          <MainImageContainer>
            <img src={mainImage} alt="main" />
          </MainImageContainer>
        </ImagesWrapper>
        <Details>
          <Title>{data?.title}</Title>
          <Rating>
            {getRating(data?.rating)}
            <span>{data?.rating}/5</span>
          </Rating>
          <Prices>
            <div className="price">${data?.price}</div>
            {data?.oldPrice && (
              <>
                <div className="old">${data.oldPrice}</div>
                <div className="discount">
                  -
                  {Math.round(
                    ((data.oldPrice - data.price) / data.oldPrice) * 100
                  )}
                  %
                </div>
              </>
            )}
          </Prices>
          <Description>{data?.description}</Description>
          <Divider />
          <Colors>
            <h3>Select Colors</h3>
            <div className="colors-wrap">
              {colorsList.map((c) => (
                <div
                  key={c.code}
                  className="color-box"
                  onClick={() => setSelectedColor(c.code)}
                  style={{ backgroundColor: c.code }}
                >
                  {selectedColor === c.code && (
                    <TickIcon height={16} width={20} />
                  )}
                </div>
              ))}
            </div>
          </Colors>
          <Divider />
          <Sizes>
            <h3>Choose Size</h3>
            <div className="sizes-wrap">
              {data?.size.map((s, i) => {
                const obj = sizeList.find((x) => x.code === s);
                return (
                  <div
                    key={i}
                    className="size-item"
                    onClick={(e) => handleSize(e, obj?.name)}
                  >
                    {obj?.name}
                  </div>
                );
              })}
            </div>
          </Sizes>
          <Divider />
          <AddCart>
            <div className="quantity">
              <button className="quantity-btn" onClick={handleQuantity}>
                -
              </button>
              <span>{quantity}</span>
              <button className="quantity-btn" onClick={handleQuantity}>
                +
              </button>
            </div>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </AddCart>
        </Details>
      </ProductCart>

      {/* Reviews & FAQs & Details */}
      {/* ...similar styled-components usage for reviews section...*/}
    </>
  );
}

export default ProductDetails;
