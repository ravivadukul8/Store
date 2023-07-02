import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/FilterReducer";
const FilterContext = createContext();

const AppFilterContext = ({ children }) => {
  let { products } = useProductContext();

  let initialState = {
    allProducts: [],
    filterProducts: [],
    gridView: true,
    sortValue: "Highest",
    filter: {
      text: "",
      category: "All",
      company: "All",
      color: "All",
      maxPrice: 0,
      price: 0,
      minprice: 0,
    },
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "ALL_FILTER_PRODUCTS", payload: products });
  }, [products]);

  useEffect(() => {
    // console.log("RUNNNN");
    dispatch({ type: "SET_SEARCHBAR_FILTER" });
    dispatch({ type: "SET_SORT_DETAILS" });
  }, [products, state.filter, state.sortValue]);

  const GridView = () => {
    dispatch({ type: "Grid_VIEW" });
  };

  const ListView = () => {
    dispatch({ type: "LIST_VIEW" });
  };

  const Sort = (e) => {
    //console.log("EE", e);
    dispatch({ type: "GET_SORT", payload: e });
  };

  const SearchBar = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    // console.log(name, value);
    return dispatch({ type: "SEARCHBAR_VALUE", payload: { name, value } });
  };

  const categorySearch = (event) => {
    // console.log(event);
    //return dispatch({ type: "SEARCHBAR_VALUE", payload: event });
  };

  const updateCategory = (e) => {
    // console.log(e);
    return dispatch({ type: "Filter_Category", payload: e });
  };

  const clearFilters = () => {
    // console.log("TRIGER");
    dispatch({ type: "Clear_Filters" });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        GridView,
        ListView,
        Sort,
        SearchBar,
        categorySearch,
        updateCategory,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { AppFilterContext, useFilterContext };
