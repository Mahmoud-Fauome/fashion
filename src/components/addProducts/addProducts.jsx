import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const AddProducts = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [saleName, setSaleName] = useState("");
  const [saleColor, setSaleColor] = useState("");
  const [saleBackground, setSaleBackground] = useState("");
  const [checkbutton, setCheckbutton] = useState(false);
  const navigate = useNavigate();

  const handelForm = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "https://data-pfz0.onrender.com/products",
      data: {
        name,
        price,
        image,
        label: {
          name: saleName,
          color: saleColor,
          background: saleBackground,
        },
        sort: category,
      },
    });
    setCheckbutton(true);
    setTimeout(() => {
      navigate("/admin/dashbord");
    }, 1000);
  };

  document.body.style.backgroundColor = "rgb(102 102 102)";

  return (
    <div className="mt-2 d-flex align-items-center flex-column">
      <h1 className="text-white">Add New-products</h1>
      <Form onSubmit={handelForm}>
        <div className="bg-white p-4 rounded-3 mt-3">
          <div className="d-flex">
            <div className="d-flex flex-column me-3">
              <label className="mb-2">Product Name</label>
              <input
                className="mb-3 form-control pe-5"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="d-flex flex-column me-3">
              <label className="mb-2">Product Price</label>
              <input
                className="mb-3 form-control pe-5"
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="d-flex flex-column ">
              <label className="mb-2">Product Category</label>
              <input
                className="mb-3 form-control pe-5"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
          </div>
          <label className="mb-2">Product Image</label>
          <input
            className=" form-control pe-5"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <p className="text-warning">
            Image Shall Be Like : https://image.png
          </p>
          <label className="mb-2">Sale Name</label>
          <input
            className="mb-3 form-control pe-5"
            placeholder="Sale Name"
            type="text"
            value={saleName}
            onChange={(e) => setSaleName(e.target.value)}
          />
          <label className="mb-2">Sale Color</label>
          <input
            className="mb-3 form-control pe-5"
            placeholder="Sale Color"
            type="text"
            value={saleColor}
            onChange={(e) => setSaleColor(e.target.value)}
          />
          <label className="mb-2">Sale Background</label>
          <input
            className="mb-3 form-control pe-5"
            placeholder="Sale Background"
            type="text"
            value={saleBackground}
            onChange={(e) => setSaleBackground(e.target.value)}
          />

          <Button variant="primary" type="submit">
            {checkbutton ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default AddProducts;

{
  /* <Spinner animation="border" role="status">
<span className="visually-hidden">Loading...</span>
</Spinner> */
}

{
  /* <Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Product Name</Form.Label>
<Form.Control value={prodName} onChange={(e)=> setProdName(e.target.value)} 
type="text" placeholder="Product Name" />
<Form.Text className="text-muted">
</Form.Text>
</Form.Group>

<Form.Group className="mb-3">
<Form.Label>Products Price</Form.Label>
<Form.Control value={prodPrice} onChange={(e)=> setProdPrice(e.target.value)} 
type="number" placeholder="Products Price" />
</Form.Group>

<Form.Group className="mb-3">
<Form.Label>Products Item</Form.Label>
<Form.Control value={prodItem} onChange={(e)=> setProdItem(e.target.value)} 
 type="number" placeholder="Products Item" />
</Form.Group>

<Form.Group className="mb-3">
<Form.Label>Products Image</Form.Label>
<Form.Control value={prodImage} onChange={(e)=> setProdImage(e.target.value)} 
 type="text" placeholder="Products Image" />
</Form.Group> */
}

// const[prodName,setProdName]=useState("")
// const[prodPrice,setProdPrice]=useState(0)
// const[prodItem,setProdItem]=useState(0)
// const[prodImage,setProdImage]=useState("")
