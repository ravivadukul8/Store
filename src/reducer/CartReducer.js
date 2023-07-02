const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product, stock } = action.payload;

    let cartProduct;
    let existingProduct = state.cart.find(
      (curItem) => curItem.id === id + color
    );
    // console.log("existingProduct", existingProduct);
    if (existingProduct) {
      //   console.log("INNNNNNNNNNNNNNNNEXIIIIIII");
      let updatedCart = state.cart.map((curElem) => {
        if (curElem.id === id + color) {
          if (curElem.max <= curElem.amount + amount) {
            return {
              ...curElem,
              amount: curElem.max,
            };
          } else {
            return {
              ...curElem,
              amount: curElem.amount + amount,
            };
          }
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedCart,
      };
    } else {
      cartProduct = {
        id: id + color,
        amount,
        color,
        name: product.name,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "Set_Decrese") {
    let updatedAmount = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decValue = curElem.amount - 1;

        if (curElem.amount <= 1) {
          decValue = 1;
        }
        return {
          ...curElem,
          amount: decValue,
        };
      } else {
        return curElem;
      }
    });

    return {
      ...state,
      cart: updatedAmount,
    };
  }

  if (action.type === "Set_Increment") {
    let updatedAmount = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incValue = curElem.amount + 1;

        if (curElem.amount >= curElem.max) {
          incValue = curElem.max;
        }
        return {
          ...curElem,
          amount: incValue,
        };
      } else {
        return curElem;
      }
    });

    return {
      ...state,
      cart: updatedAmount,
    };
  }

  if (action.type === "REMOVE_ITEMS") {
    let updatedCart = state.cart.filter((curItem) => {
      return curItem.id !== action.payload;
    });

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "Clear_Cart") {
    return {
      ...state,
      cart: [],
    };
  }

  //   if (action.type === "Total_qua") {
  //     console.log("TOOOOOOTAL", state);

  //     const totalItem = state.cart.reduce(
  //       (partialSum, a) => partialSum + a.amount,
  //       0
  //     );
  //     console.log(totalItem);
  //     // let totalItem = state.cart.map((curElem) =>{
  //     //     return curElem.amount
  //     // })
  //     // totalItem +
  //     return {
  //       ...state,
  //       total_item: totalItem,
  //     };
  //   }

  //   if (action.type === "Total_Order") {
  //     const totalPrice = state.cart.reduce((partialSum, a) => {
  //       partialSum = partialSum + a.price * a.amount;
  //       return partialSum;
  //     }, 0);
  //     console.log("totalPrice", totalPrice);
  //     return {
  //       ...state,
  //       total_amount: totalPrice,
  //     };
  //   }

  if (action.type === "Total_Order_qut") {
    let { total_item, total_amount } = state.cart.reduce(
      (accum, curElem) => {
        accum.total_item = +curElem.amount;
        accum.total_amount = +curElem.price * curElem.amount;
        return accum;
      },
      {
        total_item: 0,
        total_amount: 0,
      }
    );

    // console.log("total_item", total_item);
    // console.log("total_amount", total_amount);

    return {
      ...state,
      total_item,
      total_amount,
    };
  }
};

export default CartReducer;
