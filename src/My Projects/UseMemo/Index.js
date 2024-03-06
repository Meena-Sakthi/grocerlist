import React, { useCallback } from "react";
import { useFetch } from "./useFetch";
import { useState, useMemo, useEffect } from "react";
const url = "https:/www.course-api.com/javascript-store-products";

const Index = () => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);
  const { products } = useFetch(url);
  console.log("Fetced.......", products);
  const calculateMostExpensive = (data) => {
    return data.reduce((total, item) => {
      const price = item.fields.price;
      if (price >= total) total = price;
      return total;
    });
  };
  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  const SingleProduct = ({ fields, addToCart }) => {
    useEffect(() => {
      console.log("Single Product called");
    });
    let { name, price } = fields;
    price = price / 100;
    const image = fields.image[0].url;
    // console.log(image);
    return (
      <article className="grid grid-cols-3 gap-2 ">
        <div className="w-96 h-96 mx-2 p-2">
          <div>
            <img className=" w-70" src={image} alt={name} />
            <h1>{name}</h1>
            <h1>${price}</h1>
            <button
              className="bg-green-300 p-2 m-1 rounded-lg text-white font-xl"
              onClick={addToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </article>
    );
  };
  const BigList = React.memo(({ products, addToCart }) => {
    useEffect(() => {
      console.log("Biglist called");
    });
    return (
      <section className="">
        {products &&
          products.map((product) => {
            return (
              <SingleProduct
                key={product.id}
                {...product}
                addToCart={addToCart}
              />
            );
          })}
      </section>
    );
  });
  return (
    <div className=" mt-4 text-2xl text-center text-red-500">
      <h1>My Counter</h1>
      <h1 className="text-4xl">{count}</h1>
      <button
        className="bg-blue-300 p-2 m-1 rounded-lg text-white font-xl"
        onClick={() => setCount(count + 1)}
      >
        Click to Increase
      </button>
      <h1 style={{ marginTop: "3rem" }}>Cart :{cart}</h1>
      <BigList products={products} addToCart={addToCart} />
    </div>
  );
};

export default Index;
