import React, { useContext } from "react";
import "./styels/styel.css";
import { BsArrowRight } from "react-icons/bs";
import img from "../../img/banner/banner-1.jpg";
import img1 from "../../img/banner/banner-3.jpg";
import img2 from "../../img/banner/banner-2.jpg";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import Store from "../../Contexts/globalContext";
const Home = () => {
  let { productsData } = useContext(Store);
  const data = productsData.slice(0, 4);

  return (
    <div className="bg-white">
      <div className="imge">
        <div className="container size-sec1 d-flex justify-content-center flex-column">
          <h6 className="text-danger">SUMMER COLLECTION</h6>
          <h1>Fall-Winter</h1>
          <h1>Collections 2023</h1>
          <p>
            A Specialist Label creating luxury essentials.Ethically crafted wit
          </p>

          <p>an Unwavering commitment to exceptional quality.</p>
          <div>
            <p className="bg-danger space fw-bold p-3 text-white">
              SHOP NOW
              <BsArrowRight />
            </p>
          </div>
        </div>
      </div>

      {/* //////////////////////////////////////////////////////////////////////////////////////////////      */}

      <div>
        <div className="mt-7-sec2 container d-flex justify-content-end">
          <div className="d-flex  justify-content-center flex-column">
            <h2>Clothing</h2>
            <h2>Collections 2023</h2>
            <h6 className="space">SHOP NOW</h6>
          </div>
          <img src={img} width="30%" className=" ms-sec2" />
        </div>
        {/* //////////////////////////// */}

        <div className="mt-5 container d-flex  justify-content-start ">
          <img src={img2} width="32%" className=" mt" />
          <div className="d-flex  justify-content-center flex-column">
            <h2>Glasses Spring</h2>
            <h2>Collections 2023</h2>
            <h6 className="space">SHOP NOW</h6>
          </div>
        </div>

        {/* //////////////////////////// */}

        <div className=" mt-5 container d-flex  justify-content-end ">
          <div className="d-flex  justify-content-center flex-column">
            <h2>Shoes Spring</h2>
            <h2>Collections 2023</h2>
            <h6 className="space">SHOP NOW</h6>
          </div>
          <img src={img1} width="32%" className=" mt" />
        </div>
        <div>
          <div className="bg-sec3">
            <h2 className="text-white text-center pt-4 pb-4 mt-5">
              Free shipping, 30 day return or refund guarantee.
            </h2>
          </div>
        </div>
      </div>

      {/* /////////////////////////////////////////////////////////////////////////////////// */}
      <div className="mt-5  d-flex flex-wrap justify-content-center">
        {data.length > 0 &&
          data.map((prod) => (
            <div
              className="col-lg-3 col-sm-5  col-sm-4  d-flex flex-column align-items-center mb-5"
              key={prod.id}
            >
              <p
                className="position-absolute fs-6 mt-4 me-5 ps-3 pe-3"
                style={{
                  background: `${prod.label.background}`,
                  color: `${prod.label.color}`,
                }}
              >
                {prod.label.name}
              </p>
              <img className="w-75" src={prod.img} alt="" />
              <h5 className="wids text-center">{prod.name}</h5>
              <h6 className="width-sec3 text-center">{prod.sort}</h6>
              <h6 className="width-sec3 text-center">${prod.price}</h6>
              <div className="text-edit">
                <BsStarFill className="me-1 text-warning" />
                <BsStarFill className="me-1 text-warning" />
                <BsStarFill className="me-1 text-warning" />
                <BsStar className="text-warning" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Home;
