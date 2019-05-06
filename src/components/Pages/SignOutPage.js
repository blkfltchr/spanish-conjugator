import React, { useEffect } from "react";
import Dreamer from "../../assets/dreamer.svg";
import { Svg, Words, MyLink } from "./PagesStyled";

const SignOutPage = () => {
  return (
    <Words>
      <Svg src={Dreamer} alt="goodbye" />
      <h2>hasta luego</h2>
      <MyLink to="/login">Log Back In</MyLink>
    </Words>
  );
};

export default SignOutPage;
