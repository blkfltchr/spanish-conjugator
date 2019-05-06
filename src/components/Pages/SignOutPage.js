import React, { useEffect } from "react";
import Dreamer from "../../assets/dreamer.svg";
import { Svg, Words } from "./PagesStyled";

const SignOutPage = () => {
  return (
    <Words>
      <Svg src={Dreamer} alt="goodbye" />
      <h2>hasta luego</h2>
    </Words>
  );
};

export default SignOutPage;
