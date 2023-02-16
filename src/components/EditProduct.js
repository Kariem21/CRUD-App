import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function EditProduct() {
  const [product, setProduct] = useState([]);
  const params = useParams();
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:9001/products/${params.productID}`)
      .then((res) => res.json())
      .then((product) => {
        setProduct(product);
      });
  }, []);

  const onSubmitted = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:9001/products/${params.productID}`, {
        title,
        price,
      })
      .then((response) => {});
    navigate("/products");
  };

  return (
    <>
      <h1>Edit Product {params.productID}</h1>
      <form onSubmit={onSubmitted}>
        <div className="mb-3">
          <label htmlFor="Title" className="form-label">
            Product Title
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
            id="Title"
            placeholder="Product Title"
            defaultValue={product.title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Price" className="form-label">
            Price
          </label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            className="form-control"
            id="Price"
            placeholder="Product Price"
            defaultValue={product.price}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Edit Product
        </button>
      </form>
    </>
  );
}
export default EditProduct;
