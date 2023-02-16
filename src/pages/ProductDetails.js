import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import "./productDetails.css";
function ProductDetails() {
  let { productID } = useParams();
  const [product, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:9001/products/${productID}`)
      .then((res) => res.json())
      .then((product) => {
        setProducts(product);
      });
  });
  return (
    <>
      <div className="detail">
        <img src={product.image} className="img " alt={product.title} />
        <div className="info">
          <h3>{product.title}</h3>
          <h4>{product.price}</h4>
        </div>
      </div>
    </>
  );
}
export default ProductDetails;
