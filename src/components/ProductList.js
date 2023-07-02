import React from "react";
import { useFilterContext } from "../context/FilterContext";
import GridView from "./GridView";
import ListView from "./ListView";

function ProductList() {
  let { allProducts, gridView } = useFilterContext();
  // console.log("allProducts", allProducts);
  if (gridView === true) {
    return <GridView products={allProducts} />;
  }
  if (gridView === false) {
    return <ListView products={allProducts} />;
  }
}

export default ProductList;
