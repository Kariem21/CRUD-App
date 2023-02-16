import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddProduct() {
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState("");
  let navigate = useNavigate();
  const onSubmitted = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9001/products", {
        title,
        price,
      })
      .then((response) => {});
    navigate("/products");
  };

  return (
    <>
      <h1>Add Product</h1>
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
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
}
export default AddProduct;
