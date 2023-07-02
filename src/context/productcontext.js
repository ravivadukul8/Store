import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productsReducer";

const Appcontext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  fetureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};
//const element = <p> RAVI </p>
const AppProvider = ({ children }) => {
  const getProducts = async (URL) => {
    try {
      dispatch({ type: "SET_LOADING" });
      let response = await axios.get(URL);
      let products = await response.data;
      dispatch({ type: "SET_PRODUCTS", payload: products });
    } catch (error) {
      dispatch({ type: "SET_ERROR" });
    }
  };

  const singleProducts = async (url) => {
    // console.log("aa", url);
    try {
      dispatch({ type: "SET_SINGLE_LOADING" });
      let response = await axios.get(url);
      let singleProduct = await response.data;
      //  console.log("singleProduct", singleProduct);
      dispatch({ type: "SET_SINGLE_PRODUCTS", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <Appcontext.Provider value={{ ...state, singleProducts }}>
      {" "}
      {children}{" "}
    </Appcontext.Provider>
  );
};

const useProductContext = () => {
  return useContext(Appcontext);
};

export { AppProvider, Appcontext, useProductContext };
