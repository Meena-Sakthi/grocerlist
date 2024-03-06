import React from "react";
import { Link } from "react-router-dom";
import products from "../data";

const Products = () => {
  return (
    <div>
      <div>
        <h1>Poducts</h1>
      </div>
      <section>
        {products.map((product) => {
          return (
            <article key={product.id}>
              <h3 className="text-red-300">{product.name}</h3>
              <Link to={`/products/${product.id}`}>More Info</Link>
            </article>
          );
        })}
      </section>
      {/* <Link to="/">Back To Home</Link> */}
    </div>
  );
};

export default Products;
