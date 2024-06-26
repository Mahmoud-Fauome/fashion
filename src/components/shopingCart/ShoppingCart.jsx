import React, { useContext } from "react";
import Store from "../../Contexts/globalContext";
import Card from "react-bootstrap/Card";
import { AiFillDelete } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import emptyShopping from "../../img/empty-shopping.jpg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const { addToShoping, deletCart, minusNumber, addNumber } = useContext(Store);

  document.body.style.backgroundColor = "white";

  return (
    <div
      style={{ height: "70vh" }}
      className="row mediaShop container className d-flex justify-content-between my-5"
    >
      <div className="col-lg-9">
        {addToShoping.length > 0 ? (
          <div>
            {addToShoping.map((product) => (
              <Card
                key={product.id}
                className="border-0 border-bottom rounded-0 mt-5 ms-5 d-flex flex-row align-items-center"
              >
                <Card.Img variant="top" className="w-25" src={product.img} />
                <Card.Body className="d-flex  justify-content-between">
                  <Card.Title className="w-25 fs-6">{product.name}</Card.Title>

                  <h2 onClick={() => minusNumber(product)}>-</h2>
                  <h3>{product.count}</h3>
                  <h2 onClick={() => addNumber(product)}>+</h2>

                  <Card.Text className="fs-3">$ {product.price}</Card.Text>
                  <AiFillDelete
                    className="fs-3"
                    onClick={() => deletCart(product)}
                  />
                </Card.Body>
              </Card>
            ))}
          </div>
        ) : (
          <div className="d-flex flex-column align-items-center">
            <img style={{ width: "27em" }} src={emptyShopping} />
            <Link to="/products">
              <Button className=" text-center fw-bolder" variant="secondary">
                SHOP NOW
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* //////////////////////////////////////////////////////////////////// */}
      <div className="mt-5 me-2 col-lg-2 ">
        <Card className="border-0 rounded-0 align-items-center">
          <Card.Body style={{ width: "15rem" }} className="bg-light ">
            <Card.Title>Card Total</Card.Title>
            <div className="d-flex justify-content-between">
              <h3>
                $
                {addToShoping.length > 0
                  ? addToShoping
                      .map((e) => parseInt(e.price * e.count))
                      .reduce((g, h) => g + h)
                  : "0"}
              </h3>
              <MdPayment className="fs-3" />
            </div>
            <Button className=" text-center rounded-0" variant="secondary">
              Pay
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default ShoppingCart;
