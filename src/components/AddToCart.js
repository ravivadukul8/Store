import React, { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CartAmountToggle from "../components/CartAmountToggle";
import { Button } from "../styles/Button";
import { useCartContext } from "../context/CartContext";
function AddToCart({ product }) {
  let { colors, stock, id } = product;
  //console.log("colors", colors);

  let { addToCart } = useCartContext();

  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increseAmount = () => {
    //.log("amount", amount, stock);
    stock > amount ? setAmount(amount + 1) : setAmount(amount);
  };

  const decreseAmount = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(amount);
  };
  return (
    <Wrapper>
      <div className="colors">
        <p>
          {colors.map((item, index) => {
            return (
              <button
                style={{ backgroundColor: item }}
                className={color === item ? "btnStyle active" : "btnStyle"}
                key={index}
                onClick={() => {
                  setColor(item);
                }}
              >
                {color === item ? <FaCheck /> : ""}
              </button>
            );
          })}
        </p>
        <CartAmountToggle
          increseAmount={increseAmount}
          decreseAmount={decreseAmount}
          amount={amount}
        />
        <NavLink
          to="/cart"
          onClick={() => {
            addToCart(id, color, amount, product, stock);
          }}
        >
          {" "}
          <Button> Add To Cart </Button>{" "}
        </NavLink>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCart;
