import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [getProduct, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch("https://dummyjson.com/products/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, []);

  return (
    <div className="d-flex-g-wr">
      <div className="single-product m20">
        <img src={getProduct.thumbnail} alt="" />
        <h4>{getProduct.title}</h4>
        <p>{getProduct.price} $</p>
      </div>
    </div>
  );
};

export default ProductPage;
