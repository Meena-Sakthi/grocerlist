import React from "react";
import { Link, useParams } from "react-router-dom";
// import Products from "../Pages/Products";
import products from "../data";

const SingleProduct = () => {
  // console.log(useParams());
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, name } = product;
  return (
    <div>
      <img src={image} alt={name} className="w-96 h-96" />
      <h1>{name}</h1>
      <h2>{productId}</h2>
      <Link to="/products">Back to Products</Link>
    </div>
  );
};

export default SingleProduct;
