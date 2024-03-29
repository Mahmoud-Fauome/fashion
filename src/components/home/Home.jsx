import React, { useContext } from "react";
import "./styels/styel.css";
import { BsArrowRight } from "react-icons/bs";
import img from "../../img/banner/banner-1.jpg";
import img1 from "../../img/banner/banner-3.jpg";
import img2 from "../../img/banner/banner-2.jpg";

import photo1 from "../../img/product/1.jpg";
import photo2 from "../../img/product/2.jpg";
import photo3 from "../../img/product/4.jpg";
import photo4 from "../../img/product/3.jpg";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import Store from "../../Contexts/globalContext";
const Home = () => {
  let { productsData } = useContext(Store);
  const data = productsData.slice(0, 4);
  console.log(data);

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
            <h2>Shoes Spring</h2>
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
      <div className="mt-5 container-fluid d-flex">
        {data.length > 0 &&
          data.map((prod) => (
            <div
              className="d-flex flex-column align-items-center w-25"
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

      {/* 
      <div className="container-fluid justify-content-evenly d-flex mt-5 ">
        <div>
          <img src={photo1} width="70%" />
          <h5 className="wids text-center">Activ means ACTIV MEAN</h5>
          <h5 className="wids text-center">CREW-NECK SWEATSHIRT</h5>
          <h6 className="width-sec3 text-center">Sweatshirt</h6>
          <div className="text-edit">
            <BsStarFill className="text-warning text-center" />
            <BsStarFill className="text-warning text-center" />
            <BsStarFill className="text-warning text-center" />
            <BsStar className="text-warning" />
          </div>
        </div>
        <div>
          <img src={photo3} className="img-width-sec3" />
          <h5 className="text-center">naruto hoodie49</h5>
          <h6 className="text-center">$390</h6>
          <div className=" text-edit">
            <BsStarFill className="text-warning text-center" />
            <BsStarFill className="text-warning text-center" />
            <BsStarFill className="text-warning text-center" />
            <BsStar className="text-warning" />
          </div>
        </div>
        <div>
          <img src={photo2} width="130%" />
          <h5 className="text-center"> Blue Pockets Plain Slim Fit</h5>
          <h6 className="text-center">Jeans Pants</h6>
          <h6 className="text-center">$290</h6>
          <div className="text-edit">
            <BsStarFill className="ms-5 text-warning text-center" />
            <BsStarFill className="text-warning text-center" />
            <BsStarFill className="text-warning text-center" />
            <BsStar className="text-warning" />
          </div>
        </div>
        <div>
          <img src={photo4} className="img-width2-sec3" />
          <h5 className="text-center">Copper Bomb Jacket</h5>
          <h6 className="text-center">$650</h6>
          <div className="ms-4 text-edit">
            <BsStarFill className="text-warning text-center" />
            <BsStarFill className="text-warning text-center" />
            <BsStarFill className="text-warning text-center" />
            <BsStar className="text-warning" />
          </div>
        </div>
      </div> */}

      {/* {loc.state.admin==="ok"?<h1 className="text-center">Welcome admin</h1>:<h1 className="text-center">Welcome User</h1>} */}
    </div>
  );
};
export default Home;
