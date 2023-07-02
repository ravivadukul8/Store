import React from "react";
import { NavLink } from "react-router-dom";
import Price from "../helpers/Price";

function Product(curElem) {
  const { id, name, image, price, category } = curElem;
  return (
    <NavLink to={`/singleProducts/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt="photos" />
          <figcaption className="caption"> {category} </figcaption>
        </figure>
        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{<Price price={price} />}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default Product;
