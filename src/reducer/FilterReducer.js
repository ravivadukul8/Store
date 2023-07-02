const FilterProductsReducer = (state, action) => {
  switch (action.type) {
    case "ALL_FILTER_PRODUCTS":
      let priceArr = action.payload.map((curElem) => curElem.price);
      let maxprice = Math.max(...priceArr);
      // console.log("maxprice", maxprice);
      return {
        ...state,
        allProducts: [...action.payload],
        filterProducts: [...action.payload],
        filter: {
          ...state.filter,
          maxPrice: maxprice,
          price: maxprice,
        },
      };

    case "Grid_VIEW":
      return {
        ...state,
        gridView: true,
      };

    case "LIST_VIEW":
      //  console.log("ABC");
      return {
        ...state,
        gridView: false,
      };

    case "GET_SORT":
      let sort_value = action.payload;

      return {
        ...state,
        sortValue: sort_value,
      };

    case "SET_SORT_DETAILS":
      const { allProducts } = state;
      let newsortValue = [...allProducts];

      if (state.sortValue === "a-z") {
        newsortValue = newsortValue.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }

      if (state.sortValue === "z-a") {
        newsortValue = newsortValue.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }

      if (state.sortValue === "Highest") {
        const sortingProducts = (a, b) => {
          return a.price + b.price;
        };
        newsortValue = newsortValue.sort(sortingProducts);
        // console.log("newsortValue", newsortValue);
      }

      if (state.sortValue === "Lowest") {
        //  console.log("INNNNNNNN");
        const sortingProducts = (a, b) => {
          return a.price - b.price;
        };
        newsortValue = newsortValue.sort(sortingProducts);
        //  console.log("newsortValue", newsortValue);
      }
      // console.log(state);
      return {
        ...state,
        allProducts: newsortValue,
      };

    case "SEARCHBAR_VALUE":
      const { name, value } = action.payload;

      return {
        ...state,
        filter: {
          ...state.filter,
          [name]: value,
        },
      };

    case "SET_SEARCHBAR_FILTER":
      // console.log("KLKLKKLKKL", state);
      let { filterProducts } = state;
      let searchDataa = [...filterProducts];

      let { text, category, company, color, price } = state.filter;

      if (text) {
        searchDataa = filterProducts.filter((curItem) => {
          return curItem.name.toLowerCase().includes(text);
        });
      }

      if (category !== "All") {
        searchDataa = filterProducts.filter((curItem) => {
          return curItem.category === category;
        });
      }

      if (company !== "All") {
        searchDataa = filterProducts.filter((curItem) => {
          return curItem.company === company;
        });
      }

      if (color !== "All") {
        searchDataa = filterProducts.filter((curItem) => {
          return curItem.colors.includes(color);
        });
      }

      // if (price === 0) {
      //   searchDataa = filterProducts.filter((curItem) => {
      //     return curItem.price === price;
      //   });
      // } else {
      //   searchDataa = filterProducts.filter((curItem) => {
      //     return curItem.price <= price;
      //   });
      // }

      return {
        ...state,
        allProducts: searchDataa,
      };

    case "Clear_Filters":
      return {
        ...state,
        ...state.filter,
        filter: {
          text: "",
          category: "All",
          company: "All",
          color: "All",
          maxPrice: state.filter.maxPrice,
          price: state.filter.maxPrice,
          minprice: state.filter.maxPrice,
        },
      };

    default:
      return state;
  }
};

export default FilterProductsReducer;
