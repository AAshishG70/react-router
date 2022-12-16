import React from "react";
import { VscAccount } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa";
import { Button } from "../component/styles/Button.styled";

const icons = () => {
  return (
    <>
      <VscAccount color="orange" size="100px" />
      <br />
      <button>
        <FaPlus />
        Add
      </button>
      <br />
      <Button color="white">Styled Button</Button>
    </>
  );
};

export default icons;
