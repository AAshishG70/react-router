import React from "react";
import { VscAccount } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa";

const icons = () => {
  return (
    <>
      <VscAccount color="orange" size="100px" />
      <br />
      <button>
        <FaPlus />
        Add
      </button>
    </>
  );
};

export default icons;
