import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Pagenavigation from "./components/Pagenavigation";
import { useProductContext } from "./context/productcontext";
import Price from "./helpers/Price";
import { RiTruckFill } from "react-icons/ri";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import MyImage from "./components/MyImage";
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";

const API = "https://api.pujakaitem.com/api/products";

function SingleProducts() {
  const { id } = useParams();
  // console.log("id", id);

  useEffect(() => {
    singleProducts(`${API}?id=${id}`);
  }, []);

  let { singleProducts, isSingleLoading, singleProduct } = useProductContext();
  //  console.log("||||||", singleProduct);
  const { company, description, name, price, reviews, stars, stock, image } =
    singleProduct;

  if (isSingleLoading) {
    return <h1> LOADING ..... </h1>;
  }

  return (
    <Wrapper>
      <Pagenavigation title={name} />
      <div className="container">
        <div className="grid grid-two-column">
          <div className="product_images">
            {" "}
            <MyImage image={image} />
          </div>
          <div className="product-data">
            {" "}
            <h2> {name} </h2>
            <Star reviews={reviews} stars={stars} />
            <p>
              {" "}
              MRP :{" "}
              <del>
                {" "}
                <Price price={price + 25000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              {" "}
              Deal of the day :{" "}
              <del>
                {" "}
                <Price price={price} />
              </del>
            </p>
            <p> {description} </p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <RiTruckFill className="warranty-icon" />
                <p> Free Delivery </p>
              </div>
              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p> 30 Day Replacement </p>
              </div>
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p> 2 Year Warrenty </p>
              </div>
              <div className="product-warranty-data">
                <RiTruckFill className="warranty-icon" />
                <p> none </p>
              </div>
            </div>
            <p>
              {" "}
              Available :{" "}
              <span> {stock > 0 ? " IN STOCK" : " OUT OF STOCK "}</span>
            </p>
            <p>
              {" "}
              ID : <span> {id}</span>
            </p>
            <p>
              {" "}
              Brand : <span> {company} </span>
            </p>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product_images {
    display: flex;
    align-items: center;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;
      .product-warranty-data {
        text-align: center;
        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }
    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;
      span {
        font-weight: bold;
      }
    }
    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }
  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProducts;
