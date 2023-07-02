import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

const localstorageCart = () => {
  let localStorageData = localStorage.getItem("Store");
  //console.log("localStorageData", localStorageData);
  if (localStorageData === null) {
    //  console.log("FSFNSKNKSNKSKLNKSL");
    return [];
  } else {
    return JSON.parse(localStorageData);
  }
};

const initialState = {
  cart: localstorageCart(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "Total_Order_qut" });
    //dispatch({ type: "Total_qua" });
    //dispatch({ type: "Total_Order" });
    localStorage.setItem("Store", JSON.stringify(state.cart));
  }, [state.cart, state.total_item, state.total_amount]);

  const addToCart = (id, color, amount, product, stock) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, color, amount, product, stock },
    });
  };
  const removeItem = (id) => {
    // console.log("id", id);
    dispatch({ type: "REMOVE_ITEMS", payload: id });
  };

  const ClearCart = () => {
    dispatch({ type: "Clear_Cart" });
  };

  const increseAmount = (id) => {
    dispatch({ type: "Set_Increment", payload: id });
  };

  const decreseAmount = (id) => {
    dispatch({ type: "Set_Decrese", payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        ClearCart,
        increseAmount,
        decreseAmount,
      }}
    >
      {" "}
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
