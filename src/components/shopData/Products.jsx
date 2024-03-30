import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import Store from "../../Contexts/globalContext";
import "./products.css";
const Products = () => {
  let { productsData, addToCart } = useContext(Store);

  document.body.style.backgroundColor = "white";

  return (
    <div className=" bg-white mt-5 container d-flex flex-wrap justify-content-evenly">
      {productsData.map((product) => (
        <Card
          className="text-center mx-4 mb-5 transition border-0"
          key={product.id}
          style={{ width: "13rem" }}
        >
          <p
            className="header "
            style={{
              background: `${product.label.background}`,
              color: `${product.label.color}`,
            }}
          >
            {product.label.name}
          </p>

          <Card.Img
            style={{ height: "13rem" }}
            variant="top"
            src={product.img}
          />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <button
              className="btnHover border-0 rounded-2 fs-5 fw-bolder text-success"
              onClick={() => addToCart(product)}
            >
              +Shoping Cart
            </button>
            <div className=" text-center">
              <BsStarFill className="text-warning text-center" />
              <BsStarFill className="text-warning text-center" />
              <BsStarFill className="text-warning text-center" />
              <BsStar className="text-warning" />
            </div>
            <Card.Text>$ {product.price}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
export default Products;
