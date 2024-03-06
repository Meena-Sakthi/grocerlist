// import { useState, useEffect, useCallback } from "react";

// export const useFetch = (url) => {
//   const [loading, setLoading] = useState(true);
//   const [products, setProducts] = useState([]);

//   const getProducts = useCallback(async () => {
//     const response = await fetch(url);
//     const products = await response.json();
//     setProducts(products);
//     setLoading(false);
//   }, [url]);

//   useEffect(() => {
//     getProducts();
//   }, [url, getProducts]);
//   return { loading, products };
// };
///////////////////////////////////////
// import { useState, useEffect, useCallback } from "react";

// export const useFetch = (url) => {
//   const [loading, setLoading] = useState(true);
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);

//   const getProducts = useCallback(async () => {
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const products = await response.json();
//       console.log(products);
//       setProducts(products);
//       setLoading(false);
//     } catch (error) {
//       setError(error);
//       setLoading(false);
//     }
//   }, [url]);

//   useEffect(() => {
//     let isMounted = true;
//     if (isMounted) {
//       getProducts();
//     }
//     return () => {
//       isMounted = false;
//     };
//   }, [url, getProducts]);

//   return { loading, products, error };
// };
//////////////////////////
import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const products = await response.json();
        console.log(products);
        setProducts(products);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { loading, products, error };
};
////////////////////////////////////////
// import { useState, useEffect } from "react";

// export const useFetch = (url) => {
//   const [loading, setLoading] = useState(true);
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//         setProducts(data); // Assuming the response is an array
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { loading, products, error };
// };
