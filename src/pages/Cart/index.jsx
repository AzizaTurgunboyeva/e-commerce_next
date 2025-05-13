import React, { useEffect, useState } from "react";
import {
  CartPageContainer,
  HrLine,
  Title,
  CartWrapper,
  CartItems,
  CartItem,
  InfoImage,
  ProductImage,
  Info,
  Actions,
  TrashButton,
  QuantityWrapper,
  Summary,
  SummaryTitle,
  SummaryLine,
  PriceText,
  TotalLine,
  HrLineBetween,
  PromoSection,
  PromoInputWrapper,
  PromoInput,
  PromoButton,
  CheckoutButton,
} from "./Cart.styled";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const initializedCart = storedCart.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setCartItems(initializedCart);
  }, []);

  const updateQuantity = (index, delta) => {
    const newCart = [...cartItems];
    newCart[index].quantity = Math.max(1, newCart[index].quantity + delta);
    setCartItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeItem = (index) => {
    const newCart = cartItems.filter((_, i) => i !== index);
    setCartItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalDiscount = cartItems.reduce(
    (sum, item) =>
      sum + ((item.oldPrice || item.price) - item.price) * item.quantity,
    0
  );
  const totalDiscountPercentage =
    subtotal > 0 ? (totalDiscount / subtotal) * 100 : 0;
  const deliveryFee = 15;
  const total = subtotal - totalDiscount + deliveryFee;

  return (
    <CartPageContainer>
      <HrLine />
      <Title>YOUR CART</Title>
      <CartWrapper>
        <CartItems>
          {cartItems.map((item, index) => (
            <CartItem key={index}>
              <InfoImage>
                <ProductImage src={item.image} alt={item.title} />
                <Info>
                  <h4>{item.title}</h4>
                  <p>
                    <span>Size:</span> {item.size}
                  </p>
                  <p>
                    <span>Color:</span> {item.color}
                  </p>
                  <strong>${item.price.toFixed(2)}</strong>
                </Info>
              </InfoImage>
              <Actions>
                <TrashButton onClick={() => removeItem(index)}>
                  <DeleteIcon />
                </TrashButton>
                <QuantityWrapper>
                  <button onClick={() => updateQuantity(index, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(index, 1)}>+</button>
                </QuantityWrapper>
              </Actions>
            </CartItem>
          ))}
        </CartItems>
        <Summary>
          <SummaryTitle>Order Summary</SummaryTitle>
          <SummaryLine>
            <span>Subtotal</span>
            <PriceText>${subtotal.toFixed(2)}</PriceText>
          </SummaryLine>
          <SummaryLine>
            <span>Discount (-{totalDiscountPercentage.toFixed(2)}%)</span>
            <PriceText>- ${totalDiscount.toFixed(2)}</PriceText>
          </SummaryLine>
          <SummaryLine>
            <span>Delivery Fee</span>
            <PriceText>${deliveryFee.toFixed(2)}</PriceText>
          </SummaryLine>
          <HrLineBetween />
          <TotalLine>
            <span>Total</span>
            <PriceText>${total.toFixed(2)}</PriceText>
          </TotalLine>
          <PromoSection>
            <PromoInputWrapper>
              <PromoIcon />
              <PromoInput placeholder="Add promo code" />
            </PromoInputWrapper>
            <PromoButton>Apply</PromoButton>
          </PromoSection>
          <CheckoutButton>Go to Checkout →</CheckoutButton>
        </Summary>
      </CartWrapper>
    </CartPageContainer>
  );
}

export default CartPage;
