import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function CartAmountToggle({ increseAmount, decreseAmount, amount }) {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={() => decreseAmount()}>
          <FaMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => increseAmount()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
}

export default CartAmountToggle;
