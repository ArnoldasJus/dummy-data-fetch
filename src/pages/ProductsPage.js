import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
  const [getProducts, setProducts] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        setProducts(data.products);
      });
  }, []);

  function goProductPage(id) {
    nav("/products/" + id);
  }

  return (
    <div className="d-flex-g-wr">
      {getProducts.map((x, i) => (
        <div
          className="product"
          id={x.id}
          key={i}
          onClick={() => goProductPage(x.id)}
        >
          <img src={x.thumbnail} alt="" />
          <h4>{x.title}</h4>
          <p>{x.price} $</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
