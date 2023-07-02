import React, { useState } from "react";
import Price from "../helpers/Price";
import { RiDeleteBin7Fill } from "react-icons/ri";
import CartAmountToggle from "./CartAmountToggle";
import { useCartContext } from "../context/CartContext";
function CartItems({ id, image, amount, color, name, price, max }) {
  let { removeItem, increseAmount, decreseAmount } = useCartContext();
  //   const [samount, setAmount] = useState(1);

  //   const increseAmount = () => {
  //     console.log("amount", samount, max);
  //     max > samount ? setAmount(samount + 1) : setAmount(samount);
  //   };

  //   const decreseAmount = () => {
  //     samount > 1 ? setAmount(amount - 1) : setAmount(samount);
  //   };

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p> {name} </p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>

      <div className="cart-hide">
        <p>
          <Price price={price}></Price>
        </p>
      </div>

      <div className="cart-hide">
        <CartAmountToggle
          increseAmount={() => {
            increseAmount(id);
          }}
          decreseAmount={() => {
            decreseAmount(id);
          }}
          amount={amount}
        />
      </div>

      <div className="cart-hide">
        <p>
          <Price price={price * amount}></Price>
        </p>
      </div>

      <div className="cart-hide">
        <p>
          <RiDeleteBin7Fill
            onClick={() => {
              removeItem(id);
            }}
          />
        </p>
      </div>
    </div>
  );
}

export default CartItems;
