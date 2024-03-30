import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
// import Spinner from "react-bootstrap/Spinner";

const Edit = () => {
  const navi = useNavigate();
  const { editId } = useParams();
  const [check, setCheck] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [saleName, setSaleName] = useState("");
  const [saleColor, setSaleColor] = useState("");
  const [saleBackground, setSaleBackground] = useState("");

  useEffect(() => {
    axios({
      method: "get",
      url: `https://data-pfz0.onrender.com/products/${editId}`,
    }).then((res) => {
      setName(res.data.name);
      setPrice(res.data.price);
      setCategory(res.data.sort);
      setImage(res.data.image);
    });
  }, []);

  function handelForm(e) {
    e.preventDefault();

    axios({
      method: "put",
      url: `https://data-pfz0.onrender.com/products/${editId}`,
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
    setCheck(true);
    setTimeout(() => {
      navi("/admin/dashbord");
    }, 1500);
  }

  return (
    <div>
      <form
        onSubmit={handelForm}
        className="text-light d-flex align-items-center flex-column"
      >
        <div className="bg-secondary p-4 rounded-3 mt-5">
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
        </div>
        <Button variant="primary" className="mt-3 text-center" type="submit">
          Edit
        </Button>
      </form>
    </div>
  );
};
export default Edit;
