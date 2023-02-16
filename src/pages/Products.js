import { useEffect, useState } from "react";
import "./product.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
function Products() {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = () => {
    fetch("http://localhost:9001/products")
      .then((res) => res.json())
      .then((product) => {
        setProducts(product);
      });
  };
  const Delete = (product) => {
    Swal.fire({
      title: `Are You Syre To Delete ${product.title}`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`http://localhost:9001/products/${product.id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            getAllData();
          });
      }
    });
  };

  return (
    <>
      <h1>Products Page</h1>
      <Link className="btn btn-primary margin" to="addProduct">
        Add New Product
      </Link>

      <table className="table table-striped table-hover table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {product?.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <Link
                    className="btn btn-danger btn-sm margin"
                    onClick={() => {
                      Delete(product);
                    }}
                  >
                    Delete
                  </Link>
                  <Link
                    className="btn btn-info btn-sm margin"
                    to={`/products/${product.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-primary btn-sm margin"
                    to={`/products/editProduct/${product.id}`}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default Products;
