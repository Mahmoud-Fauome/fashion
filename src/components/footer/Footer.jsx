import React from "react";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div className="text-center py-5 pb-2 mt-5  bg-light shadow">
      <p>PRIVACY POLICY | TERMS OF SERVICE</p>
      <p>
        <MdCopyright className="me-1 mb-1" />
        2023 Market All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
